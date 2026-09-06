import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: "Username dan password wajib diisi." },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { username },
      include: { group: true },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Username atau password tidak sesuai." },
        { status: 401 }
      );
    }

    // Cek kecocokan password
    const isPasswordValid = user.password === password;

    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: "Username atau password tidak sesuai." },
        { status: 401 }
      );
    }

    // Login berhasil
    return NextResponse.json({
      success: true,
      message: "Login berhasil.",
      user: {
        id: user.id,
        username: user.username,
        nama: user.nama,
        role: user.role,
        nim: user.nim,
        fakultas: user.fakultas,
        prodi: user.prodi,
        group: user.group ? { id: user.group.id, name: user.group.name } : null,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan internal server." },
      { status: 500 }
    );
  }
}
