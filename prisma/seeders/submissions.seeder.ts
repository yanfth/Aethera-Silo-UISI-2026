import { PrismaClient, Prisma } from "@prisma/client";

export interface SubmissionSeedItem {
  id?: number;
  assignmentId: number; // ID tugas dari tabel m_assignments
  mabaId: number;       // ID mahasiswa (role maba) dari tabel m_users
  fileUrl: string;      // URL file / link Drive / Docs
  notes?: string | null;
  status?: "submitted" | "late" | "graded" | "resubmit" | string;
  score?: number | Prisma.Decimal | null;
  feedback?: string | null;
  reviewedBy?: number | null; // ID user (mentor/panitia penilai)
  reviewedAt?: Date | null;
  submittedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

/**
 * Data seeder untuk tabel: t_submissions (Pengumpulan Tugas & Penilaian)
 * Mendukung mekanisme insert or update (upsert).
 * Silakan tambahkan data submission pada array di bawah ini.
 *
 * Contoh:
 * {
 *   assignmentId: 1,
 *   mabaId: 10,
 *   fileUrl: "https://drive.google.com/open?id=xyz...",
 *   notes: "Tugas sudah selesai sesuai instruksi panduan.",
 *   status: "submitted",
 * }
 */
export const submissionsData: SubmissionSeedItem[] = [
  // Masukkan data submission pengumpulan tugas di sini
];

export async function seedSubmissions(prisma: PrismaClient) {
  console.log("  📤 Seeding t_submissions (Insert or Update)...");

  if (submissionsData.length === 0) {
    console.log("     ℹ️ Data t_submissions masih kosong, dilewati.");
    return;
  }

  for (const item of submissionsData) {
    // Menggunakan mekanisme UPSERT berdasarkan assignmentId + mabaId
    await prisma.submission.upsert({
      where: {
        assignmentId_mabaId: {
          assignmentId: item.assignmentId,
          mabaId: item.mabaId,
        },
      },
      update: {
        fileUrl: item.fileUrl,
        notes: item.notes,
        status: item.status || "submitted",
        score: item.score,
        feedback: item.feedback,
        reviewedBy: item.reviewedBy,
        reviewedAt: item.reviewedAt,
        deletedAt: null,
      },
      create: {
        ...(item.id ? { id: item.id } : {}),
        assignmentId: item.assignmentId,
        mabaId: item.mabaId,
        fileUrl: item.fileUrl,
        notes: item.notes,
        status: item.status || "submitted",
        score: item.score,
        feedback: item.feedback,
        reviewedBy: item.reviewedBy,
        reviewedAt: item.reviewedAt,
        submittedAt: item.submittedAt ?? new Date(),
        createdAt: item.createdAt ?? undefined,
        updatedAt: item.updatedAt ?? undefined,
        deletedAt: item.deletedAt ?? undefined,
      },
    });
  }

  console.log(`     ✅ Berhasil memproses ${submissionsData.length} data ke t_submissions (insert/update).`);
}
