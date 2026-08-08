import React from "react";
import styles from "../page.module.css";
import Link from "next/link";
import Navbar from "../components/Navbar";
import LowPolyBackground from "../components/LowPolyBackground";
import GuidebookSection from "../components/GuidebookSection";
import { 
  Hexagon, 
  Video, 
  Image as ImageIcon, 
  Palette, 
  FileText, 
  Music, 
  Megaphone,
  Camera, 
  MessageCircle, 
  Mail 
} from "lucide-react";

export const metadata = {
  title: "Guidebook & Penugasan - AETHERA SILO UISI 2026",
  description: "Buku Panduan PDF Flipbook & Daftar Penugasan Harian AETHERA SILO UISI 2026.",
};

export default function PenugasanPage() {
  return (
    <div className={styles.container}>
      <LowPolyBackground />

      <Navbar />

      <main style={{ minHeight: "80vh", padding: "2rem 0" }}>
        {/* ===== GUIDEBOOK PDF FLIPBOOK ===== */}
        <GuidebookSection />

        {/* ===== DAFTAR PENUGASAN ===== */}
        <section id="penugasan" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Daftar <span className={styles.titleGradient}>Penugasan</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Selesaikan penugasan harian dan kelompok sesuai ketentuan &amp; tenggat waktu AETHERA SILO UISI 2026.
          </p>

          <div className={styles.servicesGrid}>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: "rgba(31,75,93,0.1)", color: "var(--lp-ocean-blue)" }}>
                <Video size={24} />
              </div>
              <h3 className={styles.cardTitle}>Video Perkenalan</h3>
              <p className={styles.cardDesc}>
                Video perkenalan kelompok berdurasi minimal 5 menit berisi filosofi nama dan anggota rasi.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: "rgba(104,207,235,0.1)", color: "var(--lp-aqua)" }}>
                <ImageIcon size={24} />
              </div>
              <h3 className={styles.cardTitle}>Twibbon &amp; Video Bio</h3>
              <p className={styles.cardDesc}>
                Unggah foto Twibbon resmi &amp; video perkenalan individu dengan nada lagu daerah di Instagram.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: "rgba(31,30,25,0.1)", color: "var(--lp-charcoal)" }}>
                <Palette size={24} />
              </div>
              <h3 className={styles.cardTitle}>Persiapan Tampah Show</h3>
              <p className={styles.cardDesc}>
                Mengecat tampah kayu diameter 50cm dengan kombinasi warna Orange Crush &amp; Blue Brooch.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: "rgba(104,207,235,0.1)", color: "var(--lp-aqua)" }}>
                <FileText size={24} />
              </div>
              <h3 className={styles.cardTitle}>Resume Materi</h3>
              <p className={styles.cardDesc}>
                Merangkum materi Pra-SILO dan Core-SILO tulis tangan di kertas A5 bolak-balik dalam format PDF.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: "rgba(31,75,93,0.1)", color: "var(--lp-ocean-blue)" }}>
                <Music size={24} />
              </div>
              <h3 className={styles.cardTitle}>Hafalan Lagu Mars</h3>
              <p className={styles.cardDesc}>
                Menghafalkan dan memposting video lagu Mars UISI, Jingle Branara, Buruh Tani, &amp; Darah Juang.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: "rgba(31,30,25,0.1)", color: "var(--lp-charcoal)" }}>
                <Megaphone size={24} />
              </div>
              <h3 className={styles.cardTitle}>Kampanye Edukatif</h3>
              <p className={styles.cardDesc}>
                Membuat video kampanye edukasi isu sosial secara berkelompok sesuai arahan panitia.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className={styles.footer}>
        <div>
          <div className={styles.footerLogo}>
            <Hexagon style={{ display: "inline-block", verticalAlign: "middle", marginRight: "6px" }} size={18} color="var(--lp-aqua)" /> AETHERA SILO UISI 2026
          </div>
          <p className={styles.footerDesc}>
            Sistem Informasi &amp; Layanan Orientasi — Portal resmi AETHERA SILO UISI 2026
            Universitas Internasional Semen Indonesia.
          </p>
          <div style={{ display: "flex", gap: "0.85rem", marginTop: "1rem", color: "rgba(255,255,255,0.7)" }}>
            <span style={{ cursor: "pointer" }}><Camera size={18} /></span>
            <span style={{ cursor: "pointer" }}><MessageCircle size={18} /></span>
            <span style={{ cursor: "pointer" }}><Mail size={18} /></span>
          </div>
        </div>

        <div>
          <div className={styles.footerColTitle}>Menu</div>
          <div className={styles.footerLinks}>
            <Link href="/">Beranda</Link>
            <Link href="/about">Tentang</Link>
            <Link href="/panitia">Panitia</Link>
            <Link href="/penugasan">Penugasan</Link>
            <Link href="/galeri">Galeri</Link>
            <Link href="/kelompok">Kelompok</Link>
            <Link href="/lokasi">Lokasi</Link>
          </div>
        </div>

        <div>
          <div className={styles.footerColTitle}>Kontak</div>
          <div className={styles.footerLinks}>
            <span>Humas AETHERA SILO UISI 2026</span>
            <span>Kampus UISI Gresik</span>
            <span>Email: silo@uisi.ac.id</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
