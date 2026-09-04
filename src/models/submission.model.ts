import { prisma } from "@/utils/prisma";
import type { Submission, Prisma } from "@prisma/client";

export interface SubmissionUpsertInput {
  id?: number;
  assignmentId: number;
  mabaId: number;
  fileUrl: string;
  notes?: string | null;
  status?: "submitted" | "late" | "graded" | "resubmit" | string;
  score?: number | Prisma.Decimal | null;
  feedback?: string | null;
  reviewedBy?: number | null;
  reviewedAt?: Date | null;
}

export class SubmissionModel {
  /**
   * Mengambil semua pengumpulan tugas (filter opsional)
   */
  static async getAll(filter?: { assignmentId?: number; mabaId?: number; status?: string }) {
    return prisma.submission.findMany({
      where: {
        deletedAt: null,
        ...(filter?.assignmentId ? { assignmentId: filter.assignmentId } : {}),
        ...(filter?.mabaId ? { mabaId: filter.mabaId } : {}),
        ...(filter?.status ? { status: filter.status } : {}),
      },
      include: {
        assignment: true,
        maba: {
          select: {
            id: true,
            nama: true,
            nim: true,
            prodi: true,
            group: true,
          },
        },
        reviewer: {
          select: {
            id: true,
            nama: true,
            role: true,
          },
        },
      },
      orderBy: { submittedAt: "desc" },
    });
  }

  /**
   * Mengambil submission berdasarkan ID
   */
  static async getById(id: number) {
    return prisma.submission.findFirst({
      where: { id, deletedAt: null },
      include: {
        assignment: true,
        maba: true,
        reviewer: true,
      },
    });
  }

  /**
   * Mengambil submission berdasarkan Tugas dan Mahasiswa
   */
  static async getByAssignmentAndMaba(assignmentId: number, mabaId: number) {
    return prisma.submission.findFirst({
      where: {
        assignmentId,
        mabaId,
        deletedAt: null,
      },
      include: {
        assignment: true,
        reviewer: true,
      },
    });
  }

  /**
   * Mekanisme INSERT OR UPDATE (Upsert) untuk pengumpulan tugas (submission).
   * - Mencegah duplikasi submission mahasiswa untuk tugas yang sama (uq_maba_assignment).
   * - Jika sudah pernah submit, file/catatan diperbarui dan status kembali ke 'submitted'/'resubmit'.
   * - Jika belum pernah submit, dibuatkan data pengumpulan baru.
   */
  static async upsert(data: SubmissionUpsertInput): Promise<Submission> {
    return prisma.submission.upsert({
      where: {
        assignmentId_mabaId: {
          assignmentId: data.assignmentId,
          mabaId: data.mabaId,
        },
      },
      update: {
        fileUrl: data.fileUrl,
        notes: data.notes,
        status: data.status || "submitted",
        submittedAt: new Date(),
        score: data.score,
        feedback: data.feedback,
        reviewedBy: data.reviewedBy,
        reviewedAt: data.reviewedAt,
        deletedAt: null,
      },
      create: {
        ...(data.id ? { id: data.id } : {}),
        assignmentId: data.assignmentId,
        mabaId: data.mabaId,
        fileUrl: data.fileUrl,
        notes: data.notes,
        status: data.status || "submitted",
        score: data.score,
        feedback: data.feedback,
        reviewedBy: data.reviewedBy,
        reviewedAt: data.reviewedAt,
      },
    });
  }

  /**
   * Bulk Upsert submissions
   */
  static async upsertMany(items: SubmissionUpsertInput[]): Promise<Submission[]> {
    const results: Submission[] = [];
    for (const item of items) {
      const saved = await this.upsert(item);
      results.push(saved);
    }
    return results;
  }

  /**
   * Memberikan review/penilaian oleh mentor/admin
   */
  static async review(
    id: number,
    data: {
      score: number;
      feedback?: string;
      reviewedBy: number;
    }
  ): Promise<Submission> {
    return prisma.submission.update({
      where: { id },
      data: {
        score: data.score,
        feedback: data.feedback,
        reviewedBy: data.reviewedBy,
        reviewedAt: new Date(),
        status: "graded",
      },
    });
  }

  /**
   * Soft delete submission
   */
  static async softDelete(id: number): Promise<Submission> {
    return prisma.submission.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  /**
   * Restore submission
   */
  static async restore(id: number): Promise<Submission> {
    return prisma.submission.update({
      where: { id },
      data: { deletedAt: null },
    });
  }

  /**
   * Hard delete submission
   */
  static async delete(id: number): Promise<Submission> {
    return prisma.submission.delete({
      where: { id },
    });
  }
}
