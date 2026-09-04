import { PrismaClient } from "@prisma/client";

export interface AssignmentSeedItem {
  id?: number;
  title: string;
  description?: string | null;
  attachmentUrl?: string | null;
  dueDate: Date;
  createdBy?: number | null; // ID user (role admin/panitia pembuat tugas)
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

/**
 * Data seeder untuk tabel: m_assignments (Daftar Tugas)
 * Mendukung mekanisme insert or update (upsert).
 * Silakan tambahkan data penugasan pada array di bawah ini.
 *
 * Contoh:
 * {
 *   title: "Tugas 1 - Membuat Twibbon dan Esai Orientasi",
 *   description: "Buat twibbon resmi dan unggah link bukti serta esai motivasi.",
 *   attachmentUrl: "https://drive.google.com/templates/twibbon-silo-2026",
 *   dueDate: new Date("2026-09-12T23:59:59Z"),
 *   createdBy: 1,
 * }
 */
export const assignmentsData: AssignmentSeedItem[] = [
  // Masukkan data tugas di sini
];

export async function seedAssignments(prisma: PrismaClient) {
  console.log("  📋 Seeding m_assignments (Insert or Update)...");

  if (assignmentsData.length === 0) {
    console.log("     ℹ️ Data m_assignments masih kosong, dilewati.");
    return;
  }

  for (const item of assignmentsData) {
    // Cek apakah tugas dengan judul ini sudah ada
    const existing = await prisma.assignment.findFirst({
      where: { title: item.title },
    });

    if (existing) {
      // UPDATE jika sudah ada
      await prisma.assignment.update({
        where: { id: existing.id },
        data: {
          description: item.description,
          attachmentUrl: item.attachmentUrl,
          dueDate: item.dueDate,
          createdBy: item.createdBy,
          deletedAt: null,
        },
      });
    } else {
      // INSERT jika belum ada
      await prisma.assignment.create({
        data: {
          ...(item.id ? { id: item.id } : {}),
          title: item.title,
          description: item.description,
          attachmentUrl: item.attachmentUrl,
          dueDate: item.dueDate,
          createdBy: item.createdBy,
          createdAt: item.createdAt ?? undefined,
          updatedAt: item.updatedAt ?? undefined,
          deletedAt: item.deletedAt ?? undefined,
        },
      });
    }
  }

  console.log(`     ✅ Berhasil memproses ${assignmentsData.length} data ke m_assignments (insert/update).`);
}
