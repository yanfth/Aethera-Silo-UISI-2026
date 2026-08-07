import SponsorSection from "./components/SponsorSection";
import styles from "./page.module.css";
import Link from "next/link";
import GlobeSection from "./components/GlobeSection";
import CountdownSection from "./components/CountdownSection";
import LowPolyBackground from "./components/LowPolyBackground";
import PanitiaCarousel from "./components/PanitiaCarousel";
import DokumentasiGallery from "./components/DokumentasiGallery";

export default function Home() {
  return (
    <div className={styles.container}>
      <LowPolyBackground />

      {/* ===== NAVBAR ===== */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>⬡ SILO UISI</div>
        <div className={styles.navLinks}>
          <Link href="#about" className={styles.navLink}>
            About
          </Link>
          <Link href="#kelompok" className={styles.navLink}>
            Kelompok
          </Link>
          <Link href="#kebutuhan" className={styles.navLink}>
            Kebutuhan
          </Link>
          <Link href="#merch" className={styles.navLink}>
            Merchandise
          </Link>
        </div>
      </nav>

      <main>
        {/* ===== HERO ===== */}
        <section className={styles.hero}>
          <div className={styles.heroContent} data-aos="fade-right">
            <div className={styles.heroTag}>
              🔺 PKKMB 2026 · Mahasiswa Baru
            </div>
            <h1 className={styles.heroTitle}>
              Aethera,
              <br />
              <span className={styles.heroTitleAccent}>perjalanan menuju</span>
              <br />
              cahaya paling murni
            </h1>
            <p className={styles.heroDesc}>
              Aethera adalah lapisan udara paling murni dalam mitologi Yunani —
              tempat cahaya paling terang berada. Begitu juga langkah pertamamu
              di UISI: awal dari versi dirimu yang paling jernih dan bercahaya.
            </p>
            <div className={styles.heroButtons}>
              <Link href="#kebutuhan" className={styles.ctaButton}>
                Unduh Twibbon ↗
              </Link>
              <Link href="#about" className={styles.ctaButtonOutline}>
                Pelajari Lebih
              </Link>
            </div>
            <p style={{ fontSize: "0.75rem", color: "var(--lp-text-muted)", marginTop: "0.25rem" }}>
              *Pelaksanaan SILO 6 Oktober 2026 · Bergabung bersama 500+ mahasiswa baru
            </p>
          </div>

          {/* Hero visual */}
          <div className={styles.heroVisual} data-aos="fade-left" data-aos-delay="200">
            <div className={styles.heroImageContainer}>
              <div className={styles.heroGeoBg} />
              <img
                src="/hero_rocket.png"
                alt="Aethera Illustration"
              />
            </div>
          </div>
        </section>

        {/* ===== COUNTDOWN ===== */}
        <CountdownSection />

        {/* ===== TENTANG SILO ===== */}
        <section id="about" className={styles.section} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>Tentang SILO</h2>
          <p className={styles.sectionSubtitle}>
            Satu portal, seluruh perjalananmu menuju UISI.
          </p>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p style={{ fontWeight: 700, color: "var(--lp-text)", fontSize: "1.1rem", marginBottom: "1rem" }}>
                Portal resmi Penerimaan Mahasiswa Baru UISI
              </p>
              <p style={{ marginBottom: "1rem" }}>
                <strong style={{ color: "var(--lp-text)" }}>
                  SILO (Sistem Informasi &amp; Layanan Orientasi)
                </strong>{" "}
                adalah portal resmi yang menaungi seluruh rangkaian Penerimaan
                Mahasiswa Baru di UISI — mulai dari pendaftaran, pembagian
                kelompok, informasi jadwal, hingga kebutuhan teknis acara.
              </p>
              <p>
                Untuk PKKMB tahun ini, tema yang diusung adalah{" "}
                <strong style={{ color: "var(--lp-text)" }}>Aethera</strong> —
                perjalanan mahasiswa baru diibaratkan sebagai perjalanan menembus
                atmosfer, dari titik paling dasar menuju cahaya yang paling murni.
              </p>
            </div>
            <div className={styles.aboutImage}>
              {/* Low-poly atom visual */}
              <svg width="65%" height="65%" viewBox="0 0 200 200">
                {/* Geometric triangulated sphere */}
                <polygon points="100,20 140,50 130,90" fill="var(--lp-aqua)" opacity="0.15" stroke="var(--lp-aqua)" strokeWidth="0.5" />
                <polygon points="100,20 60,50 70,90" fill="var(--lp-ocean-blue)" opacity="0.1" stroke="var(--lp-ocean-blue)" strokeWidth="0.5" />
                <polygon points="100,20 140,50 60,50" fill="var(--lp-charcoal)" opacity="0.1" stroke="var(--lp-charcoal)" strokeWidth="0.5" />
                <polygon points="60,50 70,90 40,100" fill="var(--lp-aqua)" opacity="0.08" stroke="var(--lp-aqua)" strokeWidth="0.5" />
                <polygon points="140,50 130,90 160,100" fill="var(--lp-ocean-blue)" opacity="0.1" stroke="var(--lp-ocean-blue)" strokeWidth="0.5" />
                <polygon points="70,90 130,90 100,130" fill="var(--lp-charcoal)" opacity="0.12" stroke="var(--lp-charcoal)" strokeWidth="0.5" />
                <polygon points="40,100 70,90 60,140" fill="var(--lp-ocean-blue)" opacity="0.08" stroke="var(--lp-ocean-blue)" strokeWidth="0.5" />
                <polygon points="160,100 130,90 140,140" fill="var(--lp-aqua)" opacity="0.08" stroke="var(--lp-aqua)" strokeWidth="0.5" />
                <polygon points="100,130 60,140 100,180" fill="var(--lp-charcoal)" opacity="0.1" stroke="var(--lp-charcoal)" strokeWidth="0.5" />
                <polygon points="100,130 140,140 100,180" fill="var(--lp-ocean-blue)" opacity="0.1" stroke="var(--lp-ocean-blue)" strokeWidth="0.5" />
                {/* Center glow */}
                <circle cx="100" cy="100" r="8" fill="url(#centerGlow)" />
                <defs>
                  <radialGradient id="centerGlow">
                    <stop offset="0%" stopColor="var(--lp-aqua)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="var(--lp-aqua)" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>

        {/* ===== MAKNA LOGO ===== */}
        <section
          id="logo"
          className={styles.section}
          style={{ background: "var(--lp-surface)" }}
          data-aos="fade-up"
        >
          <h2 className={styles.sectionTitle}>Makna Logo</h2>
          <p className={styles.sectionSubtitle}>
            Setiap elemen memiliki filosofi yang dalam
          </p>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage} style={{ background: "rgba(104,207,235,0.1)" }}>
              <svg width="55%" height="55%" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="8" fill="var(--lp-text)" />
                <ellipse cx="60" cy="60" rx="50" ry="20" stroke="var(--lp-text)" strokeWidth="2" fill="none" opacity="0.3" />
                <ellipse cx="60" cy="60" rx="50" ry="20" stroke="var(--lp-text)" strokeWidth="2" fill="none" transform="rotate(60 60 60)" opacity="0.3" />
                <ellipse cx="60" cy="60" rx="50" ry="20" stroke="var(--lp-text)" strokeWidth="2" fill="none" transform="rotate(120 60 60)" opacity="0.3" />
                <circle cx="110" cy="60" r="5" fill="var(--lp-ocean-blue)" />
                <circle cx="35" cy="38" r="4" fill="var(--lp-aqua)" />
                <circle cx="85" cy="82" r="4" fill="var(--lp-charcoal)" />
              </svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div className={styles.logoCard}>
                <div className={styles.logoCardNumber}>Step 01</div>
                <div className={styles.logoCardTitle}>🔆 Titik Cahaya</div>
                <div className={styles.logoCardDesc}>
                  Melambangkan mahasiswa baru — sumber semangat dan potensi baru
                  yang dibawa masuk ke ekosistem UISI.
                </div>
              </div>
              <div className={styles.logoCard}>
                <div className={styles.logoCardNumber}>Step 02</div>
                <div className={styles.logoCardTitle}>🔗 Tiga Cincin</div>
                <div className={styles.logoCardDesc}>
                  Mewakili tiga tahap perjalanan PKKMB: Beradaptasi, Bertumbuh,
                  dan Bersinar.
                </div>
              </div>
              <div className={styles.logoCard}>
                <div className={styles.logoCardNumber}>Step 03</div>
                <div className={styles.logoCardTitle}>🌀 Bentuk Elips</div>
                <div className={styles.logoCardDesc}>
                  Orbit yang tidak simetris melambangkan bahwa perjalanan setiap
                  mahasiswa unik dan tidak seragam.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== DOKUMENTASI TAHUN KEMARIN ===== */}
        <section id="dokumentasi" className={styles.section} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>Kilasan Silo Tahun Lalu</h2>
          <p className={styles.sectionSubtitle}>
            Kilas Balik Kemeriahan &amp; Momen Berkesan SILO UISI 2025
          </p>

          <DokumentasiGallery />
        </section>

        {/* ===== DAFTAR PANITIA ===== */}
        <section id="panitia" className={styles.section} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>Daftar Panitia</h2>
          <p className={styles.sectionSubtitle}>
            BPH &amp; Koordinator Divisi PKKMB Aethera UISI 2026
          </p>

          <PanitiaCarousel />
        </section>

        {/* ===== KEBUTUHAN ACARA ===== */}
        <section id="kebutuhan" className={styles.section} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>Kebutuhan Acara</h2>
          <p className={styles.sectionSubtitle}>
            Siapkan sebelum hari pertama. Unduh perlengkapan PKKMB.
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: "rgba(31,75,93,0.1)", color: "var(--lp-ocean-blue)" }}>🖼️</div>
              <h3 className={styles.cardTitle}>Twibbon Aethera</h3>
              <p className={styles.cardDesc}>
                Bingkai foto resmi untuk diunggah di media sosial sebagai tanda
                kamu bagian dari Aethera.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: "rgba(104,207,235,0.1)", color: "var(--lp-aqua)" }}>📅</div>
              <h3 className={styles.cardTitle}>Rundown Acara</h3>
              <p className={styles.cardDesc}>
                Jadwal lengkap kegiatan PKKMB dari hari pertama hingga penutupan.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: "rgba(31,30,25,0.1)", color: "var(--lp-charcoal)" }}>👕</div>
              <h3 className={styles.cardTitle}>Panduan Pakaian</h3>
              <p className={styles.cardDesc}>
                Ketentuan dress code, atribut wajib, dan tata tertib setiap harinya.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: "rgba(104,207,235,0.1)", color: "var(--lp-aqua)" }}>🏷️</div>
              <h3 className={styles.cardTitle}>Template Nametag</h3>
              <p className={styles.cardDesc}>
                Templat name tag resmi lengkap dengan warna kelompok rasi masing-masing.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: "rgba(31,75,93,0.1)", color: "var(--lp-ocean-blue)" }}>🤝</div>
              <h3 className={styles.cardTitle}>Tata Tertib</h3>
              <p className={styles.cardDesc}>
                Peraturan yang harus ditaati selama rangkaian acara PKKMB berlangsung.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: "rgba(31,30,25,0.1)", color: "var(--lp-charcoal)" }}>🚀</div>
              <h3 className={styles.cardTitle}>Materi Panduan</h3>
              <p className={styles.cardDesc}>
                Buku panduan lengkap tentang pengenalan kehidupan kampus bagi mahasiswa baru.
              </p>
            </div>
          </div>
          <div className={styles.viewAllBtn}>
            <Link href="#" className={styles.ctaButton}>
              Lihat Semua Unduhan →
            </Link>
          </div>
        </section>

        {/* ===== KELOMPOK (3D GLOBE) ===== */}
        <GlobeSection />

        {/* ===== MERCHANDISE ===== */}
        <section
          id="merch"
          className={styles.section}
          style={{ overflow: "hidden" }}
          data-aos="fade-up"
        >
          <h2 className={styles.sectionTitle}>Merchandise</h2>
          <p className={styles.sectionSubtitle}>
            Koleksi resmi PKKMB Aethera 2026 — tampil keren dari hari pertama!
          </p>
          <div className={styles.merchCarousel}>
            <div className={styles.merchCard} style={{ background: "var(--lp-ocean-blue)" }}>
              <h3 className={styles.merchCardTitle}>👕 Kaos Aethera</h3>
              <p className={styles.merchCardPrice}>
                Combed 30s · Hitam
              </p>
              <p style={{ marginTop: "auto", fontSize: "1.5rem", fontWeight: 800, color: "var(--lp-white)" }}>Rp 95.000</p>
            </div>
            <div className={styles.merchCard} style={{ background: "var(--lp-aqua)" }}>
              <h3 className={styles.merchCardTitle}>✨ Sticker Pack</h3>
              <p className={styles.merchCardPrice}>
                8 Rasi · Vinyl Anti Air
              </p>
              <p style={{ marginTop: "auto", fontSize: "1.5rem", fontWeight: 800, color: "var(--lp-white)" }}>Rp 20.000</p>
            </div>
            <div className={styles.merchCard} style={{ background: "var(--lp-charcoal)" }}>
              <h3 className={styles.merchCardTitle}>🛍️ Totebag Orbit</h3>
              <p className={styles.merchCardPrice}>
                Kanvas Tebal · Putih Tulang
              </p>
              <p style={{ marginTop: "auto", fontSize: "1.5rem", fontWeight: 800, color: "var(--lp-white)" }}>Rp 55.000</p>
            </div>
            <div className={styles.merchCard} style={{ background: "var(--lp-ocean-blue)" }}>
              <h3 className={styles.merchCardTitle}>🎖️ Pin Enamel</h3>
              <p className={styles.merchCardPrice}>
                Logam Premium · Aethera Logo
              </p>
              <p style={{ marginTop: "auto", fontSize: "1.5rem", fontWeight: 800 }}>Rp 15.000</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
            <Link href="/merch" className={styles.merchButtonLink}>
              Lihat Selengkapnya →
            </Link>
          </div>
        </section>

        {/* ===== SPONSOR & MEDIA PARTNER ===== */}
        <SponsorSection />

        {/* ===== CONTACT ===== */}
        <section id="contact" className={styles.section}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
            <p className={styles.aboutText}>
              <strong style={{ color: "var(--lp-text)" }}>SILO UISI</strong>{" "}
              adalah unit yang mengelola seluruh rangkaian informasi dan layanan
              Penerimaan Mahasiswa Baru di Universitas Internasional Semen
              Indonesia. PKKMB{" "}
              <strong style={{ color: "var(--lp-text)" }}>Aethera</strong>{" "}
              diselenggarakan sebagai program pengenalan kampus, nilai, dan
              komunitas bagi mahasiswa baru angkatan 2026.
            </p>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className={styles.footer}>
        <div>
          <div className={styles.footerLogo}>⬡ SILO UISI</div>
          <p className={styles.footerDesc}>
            Sistem Informasi & Layanan Orientasi — Portal resmi PKKMB
            Universitas Internasional Semen Indonesia.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
            <span style={{ fontSize: "1rem", opacity: 0.6, cursor: "pointer", transition: "opacity 0.2s" }}>📷</span>
            <span style={{ fontSize: "1rem", opacity: 0.6, cursor: "pointer", transition: "opacity 0.2s" }}>💬</span>
            <span style={{ fontSize: "1rem", opacity: 0.6, cursor: "pointer", transition: "opacity 0.2s" }}>✉️</span>
          </div>
        </div>

        <div>
          <div className={styles.footerColTitle}>Menu</div>
          <div className={styles.footerLinks}>
            <Link href="#about">Tentang</Link>
            <Link href="#logo">Makna Logo</Link>
            <Link href="#panitia">Daftar Panitia</Link>
            <Link href="#countdown">Countdown</Link>
            <Link href="#kelompok">Kelompok</Link>
          </div>
        </div>

        <div>
          <div className={styles.footerColTitle}>Unduhan</div>
          <div className={styles.footerLinks}>
            <Link href="#">Twibbon</Link>
            <Link href="#">Rundown</Link>
            <Link href="#">Nametag</Link>
          </div>
        </div>

        <div>
          <div className={styles.footerColTitle}>Kontak</div>
          <div className={styles.footerLinks}>
            <Link href="#">Instagram</Link>
            <Link href="#">Line</Link>
            <Link href="#">WhatsApp</Link>
          </div>
        </div>

        <div className={styles.footerNewsletter}>
          <div className={styles.footerColTitle}>Info Terbaru</div>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
            Dapatkan update terbaru seputar PKKMB Aethera 2026.
          </p>
          <input
            type="email"
            placeholder="Email kamu..."
            className={styles.footerInput}
          />
          <button className={styles.footerButton}>Subscribe 🚀</button>
        </div>
      </footer>
    </div>
  );
}
