"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  QrCode,
  Download,
  Maximize2,
  Minimize2,
  RotateCw,
  Sun,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Info,
  Sparkles,
  Layers,
  Award,
} from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import { MobileShell } from "@/components/ui/mobile-shell";
import { LoadingScreen } from "@/components/ui/loading-screen";

interface UserProfile {
  id: number;
  nama: string;
  nim?: string;
  username: string;
  role: string;
  fakultas?: string;
  prodi?: string;
  qr_token?: string;
  group?: { id: number; name: string } | null;
}

export default function MabaCardPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [wakeLockActive, setWakeLockActive] = useState(false);
  const [brightnessBoost, setBrightnessBoost] = useState(true);
  const qrRef = useRef<HTMLDivElement>(null);
  const wakeLockRef = useRef<any>(null);

  // 1. Ambil data profil dari /api/auth/me
  const fetchProfile = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/me");
      if (!res.ok) {
        router.replace("/login");
        return;
      }
      const data = await res.json();
      if (data.success && data.user) {
        setUser(data.user);
      } else {
        router.replace("/login");
      }
    } catch (err) {
      console.error("Gagal memuat profil maba:", err);
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  // 2. Screen Wake Lock & Kecerahan Layar Maksimal
  // Menjaga layar tetap aktif dan tidak meredup saat maba menampilkan QR Code
  useEffect(() => {
    let released = false;

    async function requestWakeLock() {
      try {
        if ("wakeLock" in navigator && !wakeLockRef.current) {
          wakeLockRef.current = await (navigator as any).wakeLock.request("screen");
          if (!released) setWakeLockActive(true);

          wakeLockRef.current.addEventListener("release", () => {
            if (!released) setWakeLockActive(false);
          });
        }
      } catch (err) {
        console.warn("Wake Lock tidak didukung atau izin ditolak:", err);
      }
    }

    requestWakeLock();

    // Re-acquire lock jika tab kembali aktif setelah switch app
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        requestWakeLock();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      released = true;
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (wakeLockRef.current) {
        wakeLockRef.current.release().catch(() => {});
        wakeLockRef.current = null;
      }
    };
  }, []);

  // 3. Fungsi Download QR Code Card sebagai PNG
  const handleDownloadCard = () => {
    if (!qrRef.current) return;
    const canvas = qrRef.current.querySelector("canvas");
    if (!canvas) return;

    // Buat canvas gabungan beresolusi tinggi dengan bingkai kartu
    const exportCanvas = document.createElement("canvas");
    exportCanvas.width = 600;
    exportCanvas.height = 960;
    const ctx = exportCanvas.getContext("2d");
    if (!ctx) return;

    // Background Gradient Card
    const grad = ctx.createLinearGradient(0, 0, 0, 960);
    grad.addColorStop(0, "#1F4B5D");
    grad.addColorStop(0.65, "#143340");
    grad.addColorStop(1, "#0D222B");
    ctx.fillStyle = grad;
    ctx.roundRect(0, 0, 600, 960, 28);
    ctx.fill();

    // Border Emas Lembut
    ctx.strokeStyle = "rgba(104, 207, 235, 0.4)";
    ctx.lineWidth = 4;
    ctx.roundRect(2, 2, 596, 956, 26);
    ctx.stroke();

    // Lanyard Cutout Slot di PNG
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.roundRect(260, 16, 80, 10, 5);
    ctx.fill();

    // Header Kartu
    ctx.fillStyle = "#68CFEB";
    ctx.font = "bold 18px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("UNIVERSITAS INTERNASIONAL SEMEN INDONESIA", 300, 56);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 18px sans-serif";
    ctx.fillText("Student Initiation Learning and Orientation (SILO) 2026", 300, 88);

    // Box QR Code Putih Bersih
    ctx.fillStyle = "#FFFFFF";
    ctx.roundRect(140, 125, 320, 320, 20);
    ctx.fill();

    // Draw QR Code dari canvas
    ctx.drawImage(canvas, 160, 145, 280, 280);

    // Label Token QR
    ctx.fillStyle = "#1F4B5D";
    ctx.font = "bold 15px monospace";
    ctx.fillText(user?.qr_token || "QR_SILO_MABA_2026", 300, 430);

    // Info Mahasiswa
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 26px sans-serif";
    ctx.fillText(user?.nama || "Mahasiswa Baru", 300, 500);

    ctx.fillStyle = "#68CFEB";
    ctx.font = "bold 19px monospace";
    ctx.fillText(`NIM: ${user?.nim || "-"}`, 300, 535);

    // Garis Pemisah
    ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(70, 565);
    ctx.lineTo(530, 565);
    ctx.stroke();

    // Info Detail Kelompok, Fakultas, Prodi
    ctx.textAlign = "left";
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    ctx.font = "14px sans-serif";
    ctx.fillText("Kelompok Binaan", 80, 605);
    ctx.fillText("Fakultas", 80, 665);
    ctx.fillText("Program Studi", 80, 725);
    ctx.fillText("Status", 80, 785);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 17px sans-serif";
    ctx.fillText(user?.group?.name || "Belum Ada Kelompok", 80, 630);
    ctx.fillText(user?.fakultas || "-", 80, 690);
    ctx.fillText(user?.prodi || "-", 80, 750);
    ctx.fillStyle = "#10B981";
    ctx.fillText("Terverifikasi • Peserta Aktif SILO UISI 2026", 80, 810);

    // Footer Stempel
    ctx.fillStyle = "rgba(104, 207, 235, 0.85)";
    ctx.font = "italic 13px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Tanda Pengenal Sah Masa Orientasi SILO UISI 2026", 300, 905);

    // Download ke file
    const link = document.createElement("a");
    link.download = `KARTU_SILO_2026_${user?.nim || "MABA"}.png`;
    link.href = exportCanvas.toDataURL("image/png");
    link.click();
  };

  // 4. Salin Token ke Clipboard
  const handleCopyToken = () => {
    if (!user?.qr_token) return;
    navigator.clipboard.writeText(user.qr_token);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (loading) {
    return <LoadingScreen message="Memuat, Mohon Tunggu" />;
  }

  return (
    <MobileShell
      title="Kartu Peserta SILO"
      role="maba"
      user={user ? { nama: user.nama, role: user.role, nim: user.nim } : undefined}
    >
      {/* ☀️ Indikator Screen Wake Lock & Kecerahan Layar Maksimal */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 14px",
          borderRadius: "16px",
          backgroundColor: brightnessBoost ? "rgba(245, 158, 11, 0.15)" : "rgba(31, 75, 93, 0.08)",
          border: `1.5px solid ${brightnessBoost ? "#D97706" : "rgba(31, 75, 93, 0.15)"}`,
          marginBottom: "16px",
          gap: "10px",
          boxShadow: brightnessBoost ? "0 4px 14px rgba(217, 119, 6, 0.2)" : "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: brightnessBoost ? "#D97706" : "rgba(31, 75, 93, 0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: brightnessBoost ? "#FFFFFF" : "#1F4B5D",
              flexShrink: 0,
            }}
          >
            <Sun size={20} />
          </div>
          <div>
            <div style={{ fontSize: "0.82rem", fontWeight: 800, color: brightnessBoost ? "#B45309" : "#1F4B5D" }}>
              {brightnessBoost ? "☀️ Mode Layar Terang Aktif (Latar Putih 100%)" : "🌙 Mode Tampilan Standar (Biru)"}
            </div>
            <div style={{ fontSize: "0.72rem", color: "rgba(31, 75, 93, 0.8)", lineHeight: 1.35 }}>
              {brightnessBoost
                ? "Layar memancarkan cahaya putih penuh & anti-redup agar kamera scanner membaca instan."
                : "Ubah ke Mode Terang untuk memaksimalkan pancaran cahaya kartu QR."}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setBrightnessBoost(!brightnessBoost)}
          style={{
            padding: "8px 12px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: brightnessBoost ? "#D97706" : "#1F4B5D",
            color: "#FFFFFF",
            fontSize: "0.75rem",
            fontWeight: 800,
            cursor: "pointer",
            flexShrink: 0,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
          }}
        >
          {brightnessBoost ? "Kembalikan" : "Nyalakan"}
        </button>
      </div>

      {/* Kartu Peserta Orientasi Interaktif (3D Flip Container - Elongated ID Card) */}
      <div
        style={{
          perspective: "1200px",
          marginBottom: "20px",
          width: "100%",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: "560px",
            height: "560px",
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* ======================================================== */}
          {/* SISI DEPAN: IDENTITAS LENGKAP & QR CODE PRESENSI          */}
          {/* ======================================================== */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              borderRadius: "26px",
              backgroundColor: brightnessBoost ? "#FFFFFF" : "transparent",
              backgroundImage: brightnessBoost
                ? "none"
                : "linear-gradient(145deg, #1F4B5D 0%, #163744 100%)",
              border: brightnessBoost
                ? "2.5px solid #0284C7"
                : "1.5px solid rgba(104, 207, 235, 0.35)",
              boxShadow: brightnessBoost
                ? "0 0 0 8px rgba(2, 132, 199, 0.15), 0 12px 36px rgba(0, 0, 0, 0.12)"
                : "0 10px 24px rgba(0, 0, 0, 0.15)",
              color: brightnessBoost ? "#0F172A" : "#FFFFFF",
              padding: "16px 16px 12px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
          >
            {/* Watermark Rasi Bintang Aethera */}
            <div
              style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: brightnessBoost
                  ? "radial-gradient(circle, rgba(2, 132, 199, 0.12) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(104, 207, 235, 0.22) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Lanyard Slot Cutout (Tali ID Card Resmi) */}
            <div
              style={{
                width: "50px",
                height: "7px",
                borderRadius: "999px",
                backgroundColor: brightnessBoost ? "rgba(0, 0, 0, 0.15)" : "rgba(0, 0, 0, 0.4)",
                border: brightnessBoost ? "1px solid rgba(2, 132, 199, 0.3)" : "1px solid rgba(104, 207, 235, 0.3)",
                margin: "0 auto 4px",
              }}
            />

            {/* Header Kartu */}
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Sparkles size={15} color={brightnessBoost ? "#0284C7" : "#68CFEB"} />
                  <span
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      color: brightnessBoost ? "#0284C7" : "#68CFEB",
                      textTransform: "uppercase",
                    }}
                  >
                    SILO UISI 2026
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "2px 8px",
                    borderRadius: "999px",
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    border: "1px solid rgba(16, 185, 129, 0.4)",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#10B981",
                      display: "inline-block",
                      boxShadow: "0 0 6px #10B981",
                    }}
                  />
                  <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "#059669" }}>
                    PESERTA AKTIF
                  </span>
                </div>
              </div>

              <div style={{ fontSize: "0.72rem", color: brightnessBoost ? "#64748B" : "rgba(255, 255, 255, 0.8)", fontWeight: 600 }}>
                Universitas Internasional Semen Indonesia
              </div>
              <div style={{ fontSize: "0.92rem", fontWeight: 800, color: brightnessBoost ? "#0F172A" : "#FFFFFF", letterSpacing: "-0.01em", lineHeight: 1.25 }}>
                Student Initiation Learning and Orientation (SILO) 2026
              </div>
            </div>

            {/* QR Code Canvas dengan High-Luminance Frame */}
            <div
              ref={qrRef}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "2px auto",
                boxShadow: brightnessBoost
                  ? "0 0 0 5px #0284C7, 0 8px 24px rgba(2, 132, 199, 0.22)"
                  : "0 4px 14px rgba(0, 0, 0, 0.2)",
                width: "190px",
                border: brightnessBoost ? "2px solid #0284C7" : "none",
                transition: "box-shadow 0.3s ease",
              }}
            >
              <QRCodeCanvas
                value={user?.qr_token || "QR-SILO-MABA-2026"}
                size={148}
                level="H"
                includeMargin={true}
              />
              <div
                style={{
                  marginTop: "6px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "3px 8px",
                  borderRadius: "6px",
                  backgroundColor: brightnessBoost ? "#F1F5F9" : "rgba(31, 75, 93, 0.08)",
                  cursor: "pointer",
                }}
                onClick={handleCopyToken}
              >
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    color: brightnessBoost ? "#0284C7" : "#1F4B5D",
                  }}
                >
                  {user?.qr_token || "QR_CODE_ACTIVE"}
                </span>
                {isCopied ? (
                  <CheckCircle2 size={12} color="#059669" />
                ) : (
                  <Copy size={12} color={brightnessBoost ? "#0284C7" : "#1F4B5D"} />
                )}
              </div>
            </div>

            {/* Detail Identitas Lengkap: Nama, NIM, Kelompok, Fakultas, Prodi */}
            <div
              style={{
                backgroundColor: brightnessBoost ? "#F8FAFC" : "rgba(255, 255, 255, 0.08)",
                borderRadius: "14px",
                padding: "10px 14px",
                border: brightnessBoost ? "1.5px solid #E2E8F0" : "1.5px solid rgba(255, 255, 255, 0.12)",
                backdropFilter: "blur(6px)",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <div>
                <div style={{ fontSize: "0.62rem", color: brightnessBoost ? "#0284C7" : "#68CFEB", fontWeight: 700, textTransform: "uppercase" }}>
                  Nama Lengkap
                </div>
                <div style={{ fontSize: "1.05rem", fontWeight: 800, color: brightnessBoost ? "#0F172A" : "#FFFFFF", lineHeight: 1.2 }}>
                  {user?.nama || "Mahasiswa Baru"}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                <div>
                  <div style={{ fontSize: "0.62rem", color: brightnessBoost ? "#64748B" : "rgba(255, 255, 255, 0.65)", fontWeight: 700 }}>
                    NIM
                  </div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 800, color: brightnessBoost ? "#0284C7" : "#68CFEB", fontFamily: "monospace" }}>
                    {user?.nim || "-"}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "0.62rem", color: brightnessBoost ? "#64748B" : "rgba(255, 255, 255, 0.65)", fontWeight: 700 }}>
                    Kelompok Binaan
                  </div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, color: brightnessBoost ? "#0F172A" : "#FFFFFF" }}>
                    {user?.group?.name || "Belum Ada Kelompok"}
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                <div>
                  <div style={{ fontSize: "0.62rem", color: brightnessBoost ? "#64748B" : "rgba(255, 255, 255, 0.65)", fontWeight: 700 }}>
                    Fakultas
                  </div>
                  <div style={{ fontSize: "0.78rem", fontWeight: 600, color: brightnessBoost ? "#334155" : "rgba(255, 255, 255, 0.95)" }}>
                    {user?.fakultas || "-"}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "0.62rem", color: brightnessBoost ? "#64748B" : "rgba(255, 255, 255, 0.65)", fontWeight: 700 }}>
                    Program Studi
                  </div>
                  <div style={{ fontSize: "0.78rem", fontWeight: 600, color: brightnessBoost ? "#334155" : "rgba(255, 255, 255, 0.95)" }}>
                    {user?.prodi || "-"}
                  </div>
                </div>
              </div>

              <div
                style={{
                  paddingTop: "4px",
                  borderTop: brightnessBoost ? "1px solid #E2E8F0" : "1px solid rgba(255, 255, 255, 0.1)",
                  fontSize: "0.65rem",
                  color: brightnessBoost ? "#0284C7" : "#68CFEB",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontWeight: 600,
                }}
              >
                <CheckCircle2 size={11} color="#10B981" />
                <span>Terverifikasi di Database Mahasiswa SILO 2026</span>
              </div>
            </div>

            {/* Hint Balik Kartu */}
            <div
              style={{
                textAlign: "center",
                fontSize: "0.7rem",
                color: brightnessBoost ? "#0284C7" : "rgba(104, 207, 235, 0.85)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                padding: "2px 0",
              }}
            >
              <RotateCw size={12} />
              <span>Ketuk tombol "Balik Kartu" untuk melihat sisi belakang</span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* SISI BELAKANG: LOGO RESMI SILO UISI 2026                 */}
          {/* ======================================================== */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              borderRadius: "26px",
              backgroundColor: brightnessBoost ? "#FFFFFF" : "transparent",
              backgroundImage: brightnessBoost
                ? "none"
                : "linear-gradient(150deg, #1A4050 0%, #102B36 50%, #0A1C24 100%)",
              border: brightnessBoost
                ? "2.5px solid #0284C7"
                : "1.5px solid rgba(104, 207, 235, 0.35)",
              boxShadow: brightnessBoost
                ? "0 0 0 8px rgba(2, 132, 199, 0.15), 0 12px 36px rgba(0, 0, 0, 0.12)"
                : "0 12px 30px rgba(0, 0, 0, 0.25)",
              color: brightnessBoost ? "#0F172A" : "#FFFFFF",
              padding: "20px 18px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              overflow: "hidden",
              textAlign: "center",
              transition: "all 0.3s ease",
            }}
          >
            {/* Watermark Rasi Bintang Aethera Ambient Glow */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                background: brightnessBoost
                  ? "radial-gradient(circle, rgba(2, 132, 199, 0.08) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(104, 207, 235, 0.18) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Lanyard Slot Cutout */}
            <div
              style={{
                width: "50px",
                height: "7px",
                borderRadius: "999px",
                backgroundColor: brightnessBoost ? "rgba(0, 0, 0, 0.15)" : "rgba(0, 0, 0, 0.4)",
                border: brightnessBoost ? "1px solid rgba(2, 132, 199, 0.3)" : "1px solid rgba(104, 207, 235, 0.3)",
                margin: "0 auto 4px",
              }}
            />

            {/* Header Sisi Belakang */}
            <div>
              <div
                style={{
                  fontSize: "0.74rem",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  color: brightnessBoost ? "#0284C7" : "#68CFEB",
                  textTransform: "uppercase",
                }}
              >
                UNIVERSITAS INTERNASIONAL SEMEN INDONESIA
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: brightnessBoost ? "#64748B" : "rgba(255, 255, 255, 0.8)",
                  marginTop: "3px",
                  fontWeight: 600,
                }}
              >
                Student Initiation Learning and Orientation (SILO) 2026
              </div>
            </div>

            {/* Konten Utama: Logo SILO Aethera */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto 0",
              }}
            >
              <div
                style={{
                  width: "140px",
                  height: "140px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  backgroundColor: brightnessBoost ? "#F0F9FF" : "rgba(255, 255, 255, 0.05)",
                  border: brightnessBoost
                    ? "2px solid rgba(2, 132, 199, 0.25)"
                    : "1.5px solid rgba(104, 207, 235, 0.3)",
                  boxShadow: brightnessBoost
                    ? "0 8px 24px rgba(2, 132, 199, 0.15)"
                    : "0 10px 30px rgba(0, 0, 0, 0.35), inset 0 0 20px rgba(104, 207, 235, 0.1)",
                  padding: "14px",
                  marginBottom: "14px",
                }}
              >
                <img
                  src="/logo_aethera.png?v=3"
                  alt="Logo Resmi AETHERA SILO UISI 2026"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    filter: brightnessBoost
                      ? "drop-shadow(0 4px 10px rgba(2, 132, 199, 0.3))"
                      : "drop-shadow(0 6px 16px rgba(104, 207, 235, 0.5))",
                  }}
                />
              </div>

              <div
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 900,
                  letterSpacing: "0.06em",
                  color: brightnessBoost ? "#0F172A" : "#FFFFFF",
                }}
              >
                AETHERA
              </div>
              <div
                style={{
                  fontSize: "0.92rem",
                  fontWeight: 800,
                  color: brightnessBoost ? "#0284C7" : "#68CFEB",
                  letterSpacing: "0.08em",
                  marginTop: "2px",
                }}
              >
                SILO UISI 2026
              </div>
              <div
                style={{
                  fontSize: "0.76rem",
                  color: brightnessBoost ? "#64748B" : "rgba(255, 255, 255, 0.75)",
                  marginTop: "3px",
                  fontWeight: 600,
                }}
              >
                Satya Ismaya 14
              </div>
            </div>

            {/* Footer Sisi Belakang */}
            <div
              style={{
                fontSize: "0.7rem",
                color: brightnessBoost ? "#94A3B8" : "rgba(255, 255, 255, 0.5)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 0",
              }}
            >
              <Sparkles size={12} color={brightnessBoost ? "#0284C7" : "#68CFEB"} />
              <span>Kartu Tanda Peserta Resmi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tombol Aksi Utama: Flip, Download, Zoom */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "14px" }}>
        <button
          type="button"
          onClick={() => setIsFlipped(!isFlipped)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "12px",
            borderRadius: "14px",
            backgroundColor: "#FFFFFF",
            border: "1.5px solid rgba(31, 75, 93, 0.15)",
            color: "#1F4B5D",
            fontWeight: 800,
            fontSize: "0.85rem",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
          }}
        >
          <RotateCw size={16} />
          <span>{isFlipped ? "Lihat Depan (QR)" : "Balik Kartu"}</span>
        </button>

        <button
          type="button"
          onClick={() => setIsZoomed(true)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "12px",
            borderRadius: "14px",
            backgroundColor: "#FFFFFF",
            border: "1.5px solid rgba(31, 75, 93, 0.15)",
            color: "#1F4B5D",
            fontWeight: 800,
            fontSize: "0.85rem",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
          }}
        >
          <Maximize2 size={16} />
          <span>Perbesar QR</span>
        </button>
      </div>

      {/* Tombol Utama: Mode Layar Putih Paling Terang (Senter QR) */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "10px", marginBottom: "12px" }}>
        <button
          type="button"
          onClick={() => setIsZoomed(true)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            padding: "15px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
            border: "none",
            color: "#FFFFFF",
            fontWeight: 900,
            fontSize: "0.92rem",
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(217, 119, 6, 0.35)",
          }}
        >
          <Sun size={20} />
          <span>☀️ Nyalakan Senter Layar Putih (Kecerahan 100%)</span>
        </button>

        <button
          type="button"
          onClick={handleDownloadCard}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "13px",
            borderRadius: "14px",
            backgroundColor: "#1F4B5D",
            border: "none",
            color: "#FFFFFF",
            fontWeight: 800,
            fontSize: "0.88rem",
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(31, 75, 93, 0.2)",
          }}
        >
          <Download size={18} />
          <span>Unduh Kartu Peserta (PNG)</span>
        </button>
      </div>

      {/* Penjelasan Transparan Kebijakan Kecerahan Hardware Ponsel */}
      <div
        style={{
          padding: "12px 14px",
          borderRadius: "14px",
          backgroundColor: "rgba(245, 158, 11, 0.09)",
          border: "1px solid rgba(245, 158, 11, 0.25)",
          display: "flex",
          gap: "10px",
          alignItems: "flex-start",
          marginBottom: "16px",
        }}
      >
        <Sun size={18} color="#D97706" style={{ flexShrink: 0, marginTop: "2px" }} />
        <div style={{ fontSize: "0.74rem", color: "#92400E", lineHeight: 1.45 }}>
          <strong>Petunjuk Kecerahan:</strong> Kebijakan keamanan browser (Chrome/Safari) tidak mengizinkan website mengubah slider kecerahan hardware di pengaturan HP Anda secara otomatis. 
          Gunakan tombol <strong>Senter Layar Putih</strong> di atas untuk memancarkan cahaya putih 100% murni, dan naikkan slider kecerahan layar HP Anda di Control Center/Status Bar jika kondisi ruangan gelap.
        </div>
      </div>

      {/* Petunjuk Presensi Singkat */}
      <div
        style={{
          padding: "14px 16px",
          borderRadius: "16px",
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(31, 75, 93, 0.08)",
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
          marginBottom: "30px",
        }}
      >
        <Info size={20} color="#1F4B5D" style={{ flexShrink: 0, marginTop: "2px" }} />
        <div style={{ fontSize: "0.78rem", lineHeight: 1.45, color: "rgba(31, 75, 93, 0.85)" }}>
          <strong style={{ color: "#1F4B5D" }}>Tips Presensi Cepat:</strong> Pastikan kecerahan layar diatur paling terang sebelum mendekatkan layar ke kamera mentor. Kartu yang diunduh juga dapat dicetak atau disimpan di galeri foto ponsel sebagai cadangan offline.
        </div>
      </div>

      {/* ======================================================== */}
      {/* MODAL ZOOM QR CODE LAYAR PENUH (MAXIMUM LUMINANCE)        */}
      {/* ======================================================== */}
      {isZoomed && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "36px 20px",
            animation: "fadeIn 200ms ease",
          }}
        >
          {/* Header Zoom */}
          <div style={{ textAlign: "center", width: "100%" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 12px", borderRadius: "999px", backgroundColor: "rgba(31, 75, 93, 0.08)", marginBottom: "8px" }}>
              <Sun size={15} color="#D97706" />
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#1F4B5D" }}>Kecerahan Maksimal Aktif</span>
            </div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1F4B5D", margin: "0 0 4px 0" }}>
              {user?.nama}
            </h3>
            <div style={{ fontSize: "0.85rem", color: "rgba(31, 75, 93, 0.7)", fontWeight: 600 }}>
              NIM: {user?.nim || "-"} • {user?.group?.name || "Kelompok Sirius"}
            </div>
          </div>

          {/* QR Code Raksasa */}
          <div
            style={{
              padding: "20px",
              borderRadius: "24px",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.12)",
              border: "3px solid #1F4B5D",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <QRCodeCanvas
              value={user?.qr_token || "QR-SILO-MABA-2026"}
              size={260}
              level="H"
              includeMargin={false}
            />
            <div
              style={{
                marginTop: "14px",
                fontSize: "0.85rem",
                fontFamily: "monospace",
                fontWeight: 800,
                color: "#1F4B5D",
                letterSpacing: "0.04em",
              }}
            >
              {user?.qr_token || "QR_CODE_ACTIVE"}
            </div>
          </div>

          {/* Tombol Tutup Zoom */}
          <div style={{ width: "100%", maxWidth: "340px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <button
              type="button"
              onClick={() => setIsZoomed(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "14px",
                borderRadius: "14px",
                backgroundColor: "#1F4B5D",
                border: "none",
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: "0.95rem",
                cursor: "pointer",
                boxShadow: "0 6px 18px rgba(31, 75, 93, 0.25)",
              }}
            >
              <Minimize2 size={18} />
              <span>Kembali ke Kartu</span>
            </button>
          </div>
        </div>
      )}
    </MobileShell>
  );
}
