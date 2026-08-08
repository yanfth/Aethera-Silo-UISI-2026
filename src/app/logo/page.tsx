import React from "react";
import styles from "../page.module.css";
import Link from "next/link";
import Navbar from "../components/Navbar";
import LowPolyBackground from "../components/LowPolyBackground";
import { Hexagon, Zap, Waves, Shield, Sparkles, Camera, MessageCircle, Mail } from "lucide-react";

export const metadata = {
  title: "Filosofi Logo - AETHERA SILO UISI 2026",
  description: "Makna dan Filosofi Logo Resmi AETHERA SILO UISI 2026 Satya Ismaya 14.",
};

export default function LogoPage() {
  return (
    <div className={styles.container}>
      <LowPolyBackground />

      <Navbar />

      <main style={{ minHeight: "80vh", padding: "3rem 1.5rem" }}>
        <section id="logo" className={styles.section} style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 className={styles.sectionTitle}>
            Filosofi <span className={styles.titleGradient}>Logo Aethera</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Simbol keberanian, inovasi, dan persatuan Satya Ismaya 14 UISI 2026.
          </p>

          <div 
            style={{ 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center", 
              margin: "2.5rem 0",
              background: "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(12px)",
              padding: "3rem",
              borderRadius: "2rem",
              border: "1px solid rgba(104, 207, 235, 0.3)",
              boxShadow: "0 20px 40px rgba(31, 75, 93, 0.08)"
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Hexagon size={120} color="var(--lp-ocean-blue)" style={{ filter: "drop-shadow(0 10px 20px rgba(104, 207, 235, 0.4))" }} />
              <h3 style={{ marginTop: "1.5rem", fontSize: "1.6rem", fontWeight: 800, color: "var(--lp-ocean-blue)" }}>
                AETHERA SILO UISI 2026
              </h3>
              <p style={{ color: "var(--lp-text-muted)", fontSize: "0.95rem", marginTop: "0.5rem" }}>
                Identitas Resmi Mahasiswa Baru Satya Ismaya 14
              </p>
            </div>
          </div>

          <div className={styles.servicesGrid}>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: "rgba(31,75,93,0.1)", color: "var(--lp-ocean-blue)" }}>
                <Hexagon size={24} />
              </div>
              <h3 className={styles.cardTitle}>Heksagon Presisi</h3>
              <p className={styles.cardDesc}>
                Melambangkan struktur yang kokoh, efisiensi, dan integrasi antar
                disiplin ilmu di Universitas Internasional Semen Indonesia.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: "rgba(104,207,235,0.1)", color: "var(--lp-aqua)" }}>
                <Zap size={24} />
              </div>
              <h3 className={styles.cardTitle}>Inti Aether</h3>
              <p className={styles.cardDesc}>
                Energi tak terbatas dan semangat membara yang mendorong mahasiswa baru
                mencapai puncak prestasi akademik dan kepemimpinan.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: "rgba(31,30,25,0.1)", color: "var(--lp-charcoal)" }}>
                <Waves size={24} />
              </div>
              <h3 className={styles.cardTitle}>Gelombang Adaptif</h3>
              <p className={styles.cardDesc}>
                Fleksibilitas dan ketahanan mahasiswa baru dalam menghadapi tantangan
                dunia industri global dan era digitalisasi.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: "rgba(104,207,235,0.15)", color: "var(--lp-ocean-blue)" }}>
                <Shield size={24} />
              </div>
              <h3 className={styles.cardTitle}>Perisai Satya Ismaya</h3>
              <p className={styles.cardDesc}>
                Integritas, kejujuran, dan kebanggaan menjadi bagian dari keluarga besar ksatria UISI.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: "rgba(255,209,102,0.2)", color: "#D48806" }}>
                <Sparkles size={24} />
              </div>
              <h3 className={styles.cardTitle}>Cahaya Bintang Rasi</h3>
              <p className={styles.cardDesc}>
                Setiap kelompok rasi memancarkan potensi unik yang bersinergi membentuk kilauan Aethera.
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
            <Link href="/logo">Filosofi Logo</Link>
            <Link href="/panitia">Panitia</Link>
            <Link href="/penugasan">Penugasan</Link>
            <Link href="/kelompok">Kelompok</Link>
            <Link href="/merch">Merchandise</Link>
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
