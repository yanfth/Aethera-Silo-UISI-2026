import { PrismaClient, Prisma } from "@prisma/client";

/**
 * Data seeder untuk tabel: m_sessions
 * Silakan tambahkan data sesi absensi pada array di bawah ini.
 *
 * Contoh:
 * {
 *   name: "Sesi Hari 1 - Pembukaan",
 *   startSessions: new Date("2026-09-10T07:00:00Z"),
 *   endSessions: new Date("2026-09-10T12:00:00Z"),
 *   toleransi: 15,
 * }
 */
export const sessionsData: Prisma.SessionCreateInput[] = [
  // Masukkan data sesi kegiatan di sini, contoh:
  // {
  //   name: "Sesi Hari 1",
  //   startSessions: new Date("2026-09-10T07:00:00Z"),
  //   endSessions: new Date("2026-09-10T17:00:00Z"),
  //   toleransi: 15,
  // },
];

export async function seedSessions(prisma: PrismaClient) {
  console.log("  🕒 Seeding m_sessions...");

  if (sessionsData.length === 0) {
    console.log("     ℹ️ Data m_sessions masih kosong, dilewati.");
    return;
  }

  for (const item of sessionsData) {
    await prisma.session.create({
      data: item,
    });
  }

  console.log(`     ✅ Berhasil mengisi ${sessionsData.length} data ke m_sessions.`);
}
