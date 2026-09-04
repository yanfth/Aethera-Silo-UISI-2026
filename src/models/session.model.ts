import { prisma } from "@/utils/prisma";
import type { Session, Prisma } from "@prisma/client";

export class SessionModel {
  /**
   * Mengambil semua sesi absensi/kegiatan yang aktif (deletedAt: null)
   */
  static async getAll() {
    return prisma.session.findMany({
      where: { deletedAt: null },
      orderBy: { startSessions: "asc" },
      include: {
        _count: {
          select: { attendances: true },
        },
      },
    });
  }

  /**
   * Mengambil sesi berdasarkan ID
   */
  static async getById(id: number) {
    return prisma.session.findFirst({
      where: { id, deletedAt: null },
      include: {
        attendances: {
          where: { deletedAt: null },
          include: { maba: true },
        },
      },
    });
  }

  /**
   * Membuat sesi kegiatan baru
   */
  static async create(data: Prisma.SessionCreateInput): Promise<Session> {
    return prisma.session.create({
      data,
    });
  }

  /**
   * Mengupdate sesi kegiatan
   */
  static async update(id: number, data: Prisma.SessionUpdateInput): Promise<Session> {
    return prisma.session.update({
      where: { id },
      data,
    });
  }

  /**
   * Soft delete sesi kegiatan
   */
  static async softDelete(id: number): Promise<Session> {
    return prisma.session.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  /**
   * Restore sesi kegiatan yang terhapus
   */
  static async restore(id: number): Promise<Session> {
    return prisma.session.update({
      where: { id },
      data: { deletedAt: null },
    });
  }

  /**
   * Menghapus permanen sesi kegiatan
   */
  static async delete(id: number): Promise<Session> {
    return prisma.session.delete({
      where: { id },
    });
  }
}
