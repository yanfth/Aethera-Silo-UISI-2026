import { prisma } from "@/utils/prisma";
import type { User, Prisma } from "@prisma/client";

export interface UserUpsertInput {
  id?: number;
  username: string;
  nim?: string | null;
  nama: string;
  fakultas?: string | null;
  prodi?: string | null;
  password: string;
  role: "maba" | "mentor" | "panitia" | string;
  qrToken?: string | null;
  mGroupsId?: number | null;
}

export class UserModel {
  /**
   * Mengambil semua user aktif (deletedAt: null) dengan filter opsional (role / kelompok)
   */
  static async getAll(filter?: { role?: string; mGroupsId?: number }) {
    return prisma.user.findMany({
      where: {
        deletedAt: null,
        ...(filter?.role ? { role: filter.role } : {}),
        ...(filter?.mGroupsId ? { mGroupsId: filter.mGroupsId } : {}),
      },
      include: {
        group: true,
      },
      orderBy: { nama: "asc" },
    });
  }

  /**
   * Mengambil user berdasarkan ID (hanya yang aktif)
   */
  static async getById(id: number) {
    return prisma.user.findFirst({
      where: { id, deletedAt: null },
      include: {
        group: true,
        groupMentors: {
          where: { deletedAt: null },
          include: { group: true },
        },
      },
    });
  }

  /**
   * Mengambil user berdasarkan Username
   */
  static async getByUsername(username: string) {
    return prisma.user.findFirst({
      where: { username, deletedAt: null },
      include: {
        group: true,
      },
    });
  }

  /**
   * Mengambil user berdasarkan NIM
   */
  static async getByNim(nim: string) {
    return prisma.user.findFirst({
      where: { nim, deletedAt: null },
      include: {
        group: true,
      },
    });
  }

  /**
   * Mengambil user berdasarkan QR Token
   */
  static async getByQrToken(qrToken: string) {
    return prisma.user.findFirst({
      where: { qrToken, deletedAt: null },
      include: {
        group: true,
      },
    });
  }

  /**
   * Membuat user baru
   */
  static async create(data: Prisma.UserCreateInput): Promise<User> {
    return prisma.user.create({
      data,
    });
  }

  /**
   * Mengupdate data user
   */
  static async update(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  /**
   * Mekanisme INSERT OR UPDATE (Upsert) untuk User:
   * - Mencari user berdasarkan username (karena unik).
   * - Jika username sudah terdaftar, data diupdate dan deletedAt di-reset ke null.
   * - Jika username belum ada, dibuatkan data user baru.
   */
  static async upsert(data: UserUpsertInput): Promise<User> {
    return prisma.user.upsert({
      where: { username: data.username },
      update: {
        nim: data.nim,
        nama: data.nama,
        fakultas: data.fakultas,
        prodi: data.prodi,
        password: data.password,
        role: data.role,
        qrToken: data.qrToken,
        mGroupsId: data.mGroupsId,
        deletedAt: null,
      },
      create: {
        ...(data.id ? { id: data.id } : {}),
        username: data.username,
        nim: data.nim,
        nama: data.nama,
        fakultas: data.fakultas,
        prodi: data.prodi,
        password: data.password,
        role: data.role,
        qrToken: data.qrToken,
        mGroupsId: data.mGroupsId,
      },
    });
  }

  /**
   * Melakukan insert or update (upsert) untuk banyak data user sekaligus
   */
  static async upsertMany(items: UserUpsertInput[]): Promise<User[]> {
    const results: User[] = [];
    for (const item of items) {
      const saved = await this.upsert(item);
      results.push(saved);
    }
    return results;
  }

  /**
   * Soft delete user (mengisi deletedAt)
   */
  static async softDelete(id: number): Promise<User> {
    return prisma.user.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  /**
   * Restore user yang terhapus
   */
  static async restore(id: number): Promise<User> {
    return prisma.user.update({
      where: { id },
      data: { deletedAt: null },
    });
  }

  /**
   * Hard delete user
   */
  static async delete(id: number): Promise<User> {
    return prisma.user.delete({
      where: { id },
    });
  }
}
