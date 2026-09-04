import { prisma } from "@/utils/prisma";
import type { Attendance, Prisma } from "@prisma/client";

export class AttendanceModel {
  /**
   * Mencatat kehadiran / presensi baru
   */
  static async record(data: Prisma.AttendanceCreateInput): Promise<Attendance> {
    return prisma.attendance.create({
      data,
    });
  }

  /**
   * Mengambil presensi berdasarkan ID (hanya yang aktif)
   */
  static async getById(id: number) {
    return prisma.attendance.findFirst({
      where: { id, deletedAt: null },
      include: {
        maba: true,
        scanner: true,
        session: true,
        group: true,
      },
    });
  }

  /**
   * Mengambil semua presensi aktif berdasarkan Sesi
   */
  static async getBySession(sessionsId: number) {
    return prisma.attendance.findMany({
      where: { sessionsId, deletedAt: null },
      include: {
        maba: true,
        scanner: true,
        group: true,
      },
      orderBy: { scannedAt: "desc" },
    });
  }

  /**
   * Mengambil riwayat presensi aktif seorang mahasiswa (maba)
   */
  static async getByMaba(mabaId: number) {
    return prisma.attendance.findMany({
      where: { mabaId, deletedAt: null },
      include: {
        session: true,
        scanner: true,
      },
      orderBy: { scannedAt: "desc" },
    });
  }

  /**
   * Mengambil presensi aktif berdasarkan Kelompok
   */
  static async getByGroup(groupsId: number, sessionsId?: number) {
    return prisma.attendance.findMany({
      where: {
        groupsId,
        deletedAt: null,
        ...(sessionsId ? { sessionsId } : {}),
      },
      include: {
        maba: true,
        session: true,
      },
      orderBy: { scannedAt: "desc" },
    });
  }

  /**
   * Mengubah status presensi
   */
  static async updateStatus(id: number, status: string): Promise<Attendance> {
    return prisma.attendance.update({
      where: { id },
      data: { status },
    });
  }

  /**
   * Soft delete presensi (mengisi deletedAt)
   */
  static async softDelete(id: number): Promise<Attendance> {
    return prisma.attendance.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  /**
   * Restore data presensi yang terhapus
   */
  static async restore(id: number): Promise<Attendance> {
    return prisma.attendance.update({
      where: { id },
      data: { deletedAt: null },
    });
  }

  /**
   * Hard delete log presensi
   */
  static async delete(id: number): Promise<Attendance> {
    return prisma.attendance.delete({
      where: { id },
    });
  }
}
