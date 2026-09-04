import { PrismaClient } from "@prisma/client";

export interface AttendanceSeedItem {
  mabaId: number;      // ID user (role maba)
  scannedBy?: number;  // ID user (role panitia/mentor yang men-scan)
  sessionsId: number;  // ID sesi kegiatan
  groupsId?: number;   // ID kelompok
  status: "Hadir" | "Izin" | "Sakit" | "Terlambat" | string;
  scannedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

/**
 * Data seeder untuk tabel: t_attendances (data riwayat presensi)
 * Silakan tambahkan transaksi absensi pada array di bawah ini.
 *
 * Contoh:
 * {
 *   mabaId: 10,
 *   scannedBy: 1,
 *   sessionsId: 1,
 *   groupsId: 1,
 *   status: "Hadir",
 * }
 */
export const attendancesData: AttendanceSeedItem[] = [
  // Masukkan riwayat presensi di sini
];

export async function seedAttendances(prisma: PrismaClient) {
  console.log("  📝 Seeding t_attendances...");

  if (attendancesData.length === 0) {
    console.log("     ℹ️ Data t_attendances masih kosong, dilewati.");
    return;
  }

  for (const item of attendancesData) {
    await prisma.attendance.create({
      data: {
        mabaId: item.mabaId,
        scannedBy: item.scannedBy,
        sessionsId: item.sessionsId,
        groupsId: item.groupsId,
        status: item.status,
        scannedAt: item.scannedAt ?? new Date(),
        createdAt: item.createdAt ?? undefined,
        updatedAt: item.updatedAt ?? undefined,
        deletedAt: item.deletedAt ?? undefined,
      },
    });
  }

  console.log(`     ✅ Berhasil mengisi ${attendancesData.length} data ke t_attendances.`);
}
