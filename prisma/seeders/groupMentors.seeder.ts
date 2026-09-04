import { PrismaClient } from "@prisma/client";

export interface GroupMentorSeedItem {
  mGroupsId: number; // ID kelompok dari tabel m_groups
  mUsersId: number;  // ID user (mentor) dari tabel m_users
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

/**
 * Data seeder untuk tabel: groups_mentors (relasi kelompok dan mentor)
 * Silakan tambahkan relasi mentor-kelompok pada array di bawah ini.
 *
 * Contoh:
 * {
 *   mGroupsId: 1,
 *   mUsersId: 5,
 * }
 */
export const groupMentorsData: GroupMentorSeedItem[] = [
  // Masukkan relasi mentor dan kelompok di sini
];

export async function seedGroupMentors(prisma: PrismaClient) {
  console.log("  🤝 Seeding groups_mentors...");

  if (groupMentorsData.length === 0) {
    console.log("     ℹ️ Data groups_mentors masih kosong, dilewati.");
    return;
  }

  for (const item of groupMentorsData) {
    await prisma.groupMentor.create({
      data: {
        mGroupsId: item.mGroupsId,
        mUsersId: item.mUsersId,
        createdAt: item.createdAt ?? undefined,
        updatedAt: item.updatedAt ?? undefined,
        deletedAt: item.deletedAt ?? undefined,
      },
    });
  }

  console.log(`     ✅ Berhasil mengisi ${groupMentorsData.length} relasi ke groups_mentors.`);
}
