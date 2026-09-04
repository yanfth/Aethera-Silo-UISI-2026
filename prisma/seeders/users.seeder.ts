import { PrismaClient } from "@prisma/client";

export interface UserSeedItem {
  username: string;
  nim?: string;
  nama: string;
  fakultas?: string;
  prodi?: string;
  password: string;
  role: "maba" | "mentor" | "panitia" | string;
  qrToken?: string;
  mGroupsId?: number; // ID kelompok dari tabel m_groups
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

/**
 * Data seeder untuk tabel: m_users (mendukung mekanisme insert or update)
 * Silakan tambahkan data pengguna (maba, mentor, panitia) pada array di bawah ini.
 *
 * Contoh:
 * {
 *   username: "302261001",
 *   nim: "302261001",
 *   nama: "Aditia Pratama",
 *   fakultas: "FTI",
 *   prodi: "Sistem Informasi",
 *   password: "password123",
 *   role: "maba",
 *   qrToken: "QR_302261001",
 *   mGroupsId: 1,
 * }
 */
export const usersData: UserSeedItem[] = [
  // Masukkan data pengguna di sini
];

export async function seedUsers(prisma: PrismaClient) {
  console.log("  👤 Seeding m_users (Insert or Update)...");

  if (usersData.length === 0) {
    console.log("     ℹ️ Data m_users masih kosong, dilewati.");
    return;
  }

  for (const item of usersData) {
    // Menggunakan mekanisme UPSERT berdasarkan username:
    // Jika username sudah ada -> UPDATE datanya
    // Jika username belum ada -> CREATE data baru
    await prisma.user.upsert({
      where: { username: item.username },
      update: {
        nim: item.nim,
        nama: item.nama,
        fakultas: item.fakultas,
        prodi: item.prodi,
        password: item.password,
        role: item.role,
        qrToken: item.qrToken,
        mGroupsId: item.mGroupsId,
        deletedAt: null,
      },
      create: {
        username: item.username,
        nim: item.nim,
        nama: item.nama,
        fakultas: item.fakultas,
        prodi: item.prodi,
        password: item.password,
        role: item.role,
        qrToken: item.qrToken,
        mGroupsId: item.mGroupsId,
      },
    });
  }

  console.log(`     ✅ Berhasil memproses ${usersData.length} data ke m_users (insert/update).`);
}
