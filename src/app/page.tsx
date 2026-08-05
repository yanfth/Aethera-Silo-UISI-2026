import styles from "./page.module.css";
import Link from "next/link";
import GlobeSection from "./components/GlobeSection";
import CountdownSection from "./components/CountdownSection";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* ===== NAVBAR ===== */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>SILO UISI</div>
        <div className={styles.navLinks}>
          <Link href="#about" className={styles.navLink}>
            Tentang
          </Link>
          <Link href="#logo" className={styles.navLink}>
            Logo
          </Link>
          <Link href="#countdown" className={styles.navLink}>
            Countdown
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
        {/* ===== HERO (2-column like Edtech) ===== */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Aethera,
              <br />
              perjalanan menuju
              <br />
              cahaya paling murni
            </h1>
            <p className={styles.heroDesc}>
              Aethera adalah lapisan udara paling murni dalam mitologi Yunani —
              tempat cahaya paling terang berada. Begitu juga langkah pertamamu
              di UISI: awal dari versi dirimu yang paling jernih dan bercahaya.
            </p>
            <div
              style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}
            >
              <Link href="#kebutuhan" className={styles.ctaButton}>
                Unduh Twibbon
              </Link>
              <Link href="#about" className={styles.ctaButtonOutline}>
                Pelajari
              </Link>
            </div>
            <p
              style={{
                fontSize: "0.75rem",
                color: "#9CA3AF",
                marginTop: "0.25rem",
              }}
            >
              *PKKMB 18–22 Agustus 2026. Bergabung bersama 500+ mahasiswa baru.
            </p>
          </div>

          {/* Hero visual (orbit illustration) */}
          <div className={styles.heroVisual}>
            {/* Floating badge top-right */}
            <div
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "#22C55E",
                color: "#fff",
                padding: "6px 14px",
                borderRadius: "999px",
                fontSize: "0.75rem",
                fontWeight: 700,
              }}
            >
              2026
            </div>
            {/* Floating badge bottom */}
            <div
              style={{
                position: "absolute",
                bottom: "24px",
                left: "24px",
                background: "#fff",
                padding: "8px 16px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "var(--color-dark)",
              }}
            >
              ✨ PKKMB Aethera
            </div>
            <svg width="60%" height="60%" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="12" fill="var(--color-dark)" />
              <ellipse
                cx="100"
                cy="100"
                rx="80"
                ry="30"
                stroke="var(--color-dark)"
                strokeWidth="2.5"
                fill="none"
                opacity="0.3"
              />
              <ellipse
                cx="100"
                cy="100"
                rx="80"
                ry="30"
                stroke="var(--color-dark)"
                strokeWidth="2.5"
                fill="none"
                transform="rotate(60 100 100)"
                opacity="0.3"
              />
              <ellipse
                cx="100"
                cy="100"
                rx="80"
                ry="30"
                stroke="var(--color-dark)"
                strokeWidth="2.5"
                fill="none"
                transform="rotate(120 100 100)"
                opacity="0.3"
              />
              <circle cx="180" cy="100" r="7" fill="var(--color-primary)" />
              <circle cx="60" cy="58" r="5" fill="#A2D2FF" />
              <circle cx="140" cy="142" r="5" fill="#FFAFCC" />
            </svg>
          </div>

          {/* Decorative curvy elements like Edtech ref */}
          <svg
            style={{
              position: "absolute",
              top: "30px",
              right: "60px",
              opacity: 0.15,
            }}
            width="60"
            height="60"
            viewBox="0 0 60 60"
          >
            <path
              d="M30 5 L35 25 L55 30 L35 35 L30 55 L25 35 L5 30 L25 25 Z"
              fill="var(--color-primary)"
            />
          </svg>
          <svg
            style={{
              position: "absolute",
              bottom: "40px",
              left: "40px",
              opacity: 0.12,
            }}
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="3"
            />
          </svg>
        </section>

        {/* ===== COUNTDOWN ===== */}
        <CountdownSection />

        {/* ===== ABOUT SILO ===== */}
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>Tentang SILO</h2>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p
                style={{
                  fontWeight: 700,
                  color: "var(--color-dark)",
                  fontSize: "1.1rem",
                  marginBottom: "1rem",
                }}
              >
                Satu portal, seluruh perjalananmu menuju UISI.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                <strong style={{ color: "var(--color-dark)" }}>
                  SILO (Sistem Informasi &amp; Layanan Orientasi)
                </strong>{" "}
                adalah portal resmi yang menaungi seluruh rangkaian Penerimaan
                Mahasiswa Baru di UISI — mulai dari pendaftaran, pembagian
                kelompok, informasi jadwal, hingga kebutuhan teknis acara.
              </p>
              <p>
                Untuk PKKMB tahun ini, tema yang diusung adalah{" "}
                <strong style={{ color: "var(--color-dark)" }}>Aethera</strong>{" "}
                — perjalanan mahasiswa baru diibaratkan sebagai perjalanan
                menembus atmosfer, dari titik paling dasar menuju cahaya yang
                paling murni.
              </p>
            </div>
            <div className={styles.aboutImage}>
              <svg width="65%" height="65%" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="12" fill="var(--color-dark)" />
                <ellipse
                  cx="100"
                  cy="100"
                  rx="80"
                  ry="30"
                  stroke="var(--color-dark)"
                  strokeWidth="3"
                  fill="none"
                />
                <ellipse
                  cx="100"
                  cy="100"
                  rx="80"
                  ry="30"
                  stroke="var(--color-dark)"
                  strokeWidth="3"
                  fill="none"
                  transform="rotate(60 100 100)"
                />
                <ellipse
                  cx="100"
                  cy="100"
                  rx="80"
                  ry="30"
                  stroke="var(--color-dark)"
                  strokeWidth="3"
                  fill="none"
                  transform="rotate(120 100 100)"
                />
                <circle cx="180" cy="100" r="7" fill="var(--color-primary)" />
                <circle cx="20" cy="100" r="5" fill="#A2D2FF" />
              </svg>
            </div>
          </div>
        </section>

        {/* ===== MAKNA LOGO (like Top Categories) ===== */}
        <section
          id="logo"
          className={styles.section}
          style={{ backgroundColor: "#FFF9EF" }}
        >
          <h2 className={styles.sectionTitle}>Makna Logo</h2>
          <div className={styles.aboutGrid}>
            <div
              className={styles.aboutImage}
              style={{
                background: "linear-gradient(135deg, #E8D5F5 0%, #D4EAFF 100%)",
              }}
            >
              <svg width="55%" height="55%" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="10" fill="var(--color-dark)" />
                <ellipse
                  cx="60"
                  cy="60"
                  rx="50"
                  ry="20"
                  stroke="var(--color-dark)"
                  strokeWidth="3"
                  fill="none"
                />
                <ellipse
                  cx="60"
                  cy="60"
                  rx="50"
                  ry="20"
                  stroke="var(--color-dark)"
                  strokeWidth="3"
                  fill="none"
                  transform="rotate(60 60 60)"
                />
                <ellipse
                  cx="60"
                  cy="60"
                  rx="50"
                  ry="20"
                  stroke="var(--color-dark)"
                  strokeWidth="3"
                  fill="none"
                  transform="rotate(120 60 60)"
                />
              </svg>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div className={styles.logoCard}>
                <div className={styles.logoCardNumber}>01</div>
                <div className={styles.logoCardTitle}>Titik Cahaya</div>
                <div className={styles.logoCardDesc}>
                  Melambangkan mahasiswa baru — sumber semangat dan potensi baru
                  yang dibawa masuk ke ekosistem UISI.
                </div>
              </div>
              <div className={styles.logoCard}>
                <div className={styles.logoCardNumber}>02</div>
                <div className={styles.logoCardTitle}>Tiga Cincin</div>
                <div className={styles.logoCardDesc}>
                  Mewakili tiga tahap perjalanan PKKMB: Beradaptasi, Bertumbuh,
                  dan Bersinar.
                </div>
              </div>
              <div className={styles.logoCard}>
                <div className={styles.logoCardNumber}>03</div>
                <div className={styles.logoCardTitle}>Bentuk Elips</div>
                <div className={styles.logoCardDesc}>
                  Orbit yang tidak simetris melambangkan bahwa perjalanan setiap
                  mahasiswa unik dan tidak seragam.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== KEBUTUHAN ACARA (course cards style) ===== */}
        <section id="kebutuhan" className={styles.section}>
          <h2 className={styles.sectionTitle}>Kebutuhan Acara</h2>
          <p className={styles.sectionSubtitle}>
            Siapkan sebelum hari pertama. Unduh perlengkapan PKKMB.
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.card}>
              <div
                className={styles.cardIcon}
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                🖼️
              </div>
              <h3 className={styles.cardTitle}>Twibbon Aethera</h3>
              <p className={styles.cardDesc}>
                Bingkai foto resmi untuk diunggah di media sosial sebagai tanda
                kamu bagian dari Aethera.
              </p>
              <Link
                href="#"
                className={styles.ctaButton}
                style={{
                  fontSize: "0.8rem",
                  padding: "0.5rem 1.25rem",
                  marginTop: "auto",
                  alignSelf: "flex-start",
                }}
              >
                Unduh
              </Link>
            </div>
            <div className={styles.card}>
              <div
                className={styles.cardIcon}
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                📅
              </div>
              <h3 className={styles.cardTitle}>Rundown Acara</h3>
              <p className={styles.cardDesc}>
                Jadwal lengkap kegiatan PKKMB dari hari pertama hingga
                penutupan.
              </p>
              <Link
                href="#"
                className={styles.ctaButton}
                style={{
                  fontSize: "0.8rem",
                  padding: "0.5rem 1.25rem",
                  marginTop: "auto",
                  alignSelf: "flex-start",
                }}
              >
                Unduh
              </Link>
            </div>
            <div className={styles.card}>
              <div
                className={styles.cardIcon}
                style={{ backgroundColor: "var(--color-secondary)" }}
              >
                👕
              </div>
              <h3 className={styles.cardTitle}>Panduan Pakaian</h3>
              <p className={styles.cardDesc}>
                Ketentuan dress code, atribut wajib, dan tata tertib setiap
                harinya.
              </p>
              <Link
                href="#"
                className={styles.ctaButton}
                style={{
                  fontSize: "0.8rem",
                  padding: "0.5rem 1.25rem",
                  marginTop: "auto",
                  alignSelf: "flex-start",
                }}
              >
                Unduh
              </Link>
            </div>
            <div className={styles.card}>
              <div
                className={styles.cardIcon}
                style={{ backgroundColor: "var(--color-peach)" }}
              >
                🏷️
              </div>
              <h3 className={styles.cardTitle}>Template Nametag</h3>
              <p className={styles.cardDesc}>
                Templat name tag resmi lengkap dengan warna kelompok rasi
                masing-masing.
              </p>
              <Link
                href="#"
                className={styles.ctaButton}
                style={{
                  fontSize: "0.8rem",
                  padding: "0.5rem 1.25rem",
                  marginTop: "auto",
                  alignSelf: "flex-start",
                }}
              >
                Unduh
              </Link>
            </div>
          </div>
          <div className={styles.viewAllBtn}>
            <Link href="#" className={styles.ctaButton}>
              Lihat Semua →
            </Link>
          </div>
        </section>

        {/* ===== KELOMPOK (3D GLOBE) ===== */}
        <GlobeSection />

        {/* ===== MERCHANDISE (like blog cards) ===== */}
        <section
          id="merch"
          className={styles.section}
          style={{ backgroundColor: "#FFF9EF", overflow: "hidden" }}
        >
          <h2 className={styles.sectionTitle}>Merchandise</h2>
          <div className={styles.merchCarousel}>
            
            {/* CARD 1 */}
            <div className={styles.merchCard}>
              <div className={styles.merchCardImage} style={{ background: "linear-gradient(135deg, #FFE0D0, #FFD166)" }}>
                👕
              </div>
              <h3 className={styles.merchCardTitle}>Kaos Aethera</h3>
              <div className={styles.merchCardSpecs}>
                <div className={styles.merchSpecRow}>
                  <span className={styles.merchSpecLabel}>Bahan</span>
                  <span className={styles.merchSpecValue}>Combed 30s</span>
                </div>
                <div className={styles.merchSpecRow}>
                  <span className={styles.merchSpecLabel}>Warna</span>
                  <span className={styles.merchSpecValue}>Hitam</span>
                </div>
                <div className={styles.merchSpecRow}>
                  <span className={styles.merchSpecLabel}>Harga</span>
                  <span className={styles.merchSpecValue}>Rp 95.000</span>
                </div>
              </div>
              <button className={styles.merchCardButton}>Tambahkan</button>
            </div>

            {/* CARD 2 */}
            <div className={styles.merchCard}>
              <div className={styles.merchCardImage} style={{ background: "linear-gradient(135deg, #E8D5F5, #D4EAFF)" }}>
                ✨
              </div>
              <h3 className={styles.merchCardTitle}>Sticker Pack</h3>
              <div className={styles.merchCardSpecs}>
                <div className={styles.merchSpecRow}>
                  <span className={styles.merchSpecLabel}>Isi</span>
                  <span className={styles.merchSpecValue}>8 Rasi</span>
                </div>
                <div className={styles.merchSpecRow}>
                  <span className={styles.merchSpecLabel}>Bahan</span>
                  <span className={styles.merchSpecValue}>Vinyl Anti Air</span>
                </div>
                <div className={styles.merchSpecRow}>
                  <span className={styles.merchSpecLabel}>Harga</span>
                  <span className={styles.merchSpecValue}>Rp 20.000</span>
                </div>
              </div>
              <button className={styles.merchCardButton}>Tambahkan</button>
            </div>

            {/* CARD 3 */}
            <div className={styles.merchCard}>
              <div className={styles.merchCardImage} style={{ background: "linear-gradient(135deg, #D4EAFF, #D5F5E3)" }}>
                🛍️
              </div>
              <h3 className={styles.merchCardTitle}>Totebag Orbit</h3>
              <div className={styles.merchCardSpecs}>
                <div className={styles.merchSpecRow}>
                  <span className={styles.merchSpecLabel}>Bahan</span>
                  <span className={styles.merchSpecValue}>Kanvas Tebal</span>
                </div>
                <div className={styles.merchSpecRow}>
                  <span className={styles.merchSpecLabel}>Warna</span>
                  <span className={styles.merchSpecValue}>Putih Tulang</span>
                </div>
                <div className={styles.merchSpecRow}>
                  <span className={styles.merchSpecLabel}>Harga</span>
                  <span className={styles.merchSpecValue}>Rp 55.000</span>
                </div>
              </div>
              <button className={styles.merchCardButton}>Tambahkan</button>
            </div>

            {/* CARD 4 */}
            <div className={styles.merchCard}>
              <div className={styles.merchCardImage} style={{ background: "linear-gradient(135deg, #D5F5E3, #FFD166)" }}>
                🎖️
              </div>
              <h3 className={styles.merchCardTitle}>Pin Enamel</h3>
              <div className={styles.merchCardSpecs}>
                <div className={styles.merchSpecRow}>
                  <span className={styles.merchSpecLabel}>Bahan</span>
                  <span className={styles.merchSpecValue}>Logam Premium</span>
                </div>
                <div className={styles.merchSpecRow}>
                  <span className={styles.merchSpecLabel}>Desain</span>
                  <span className={styles.merchSpecValue}>Aethera Logo</span>
                </div>
                <div className={styles.merchSpecRow}>
                  <span className={styles.merchSpecLabel}>Harga</span>
                  <span className={styles.merchSpecValue}>Rp 15.000</span>
                </div>
              </div>
              <button className={styles.merchCardButton}>Tambahkan</button>
            </div>

            {/* The See More card was removed from here */}
          </div>
          
          <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
            <Link href="/merch" className={styles.merchButtonLink}>
              Lihat Selengkapnya →
            </Link>
          </div>
        </section>

        {/* ===== CONTACT NOTE ===== */}
        <section id="contact" className={styles.section}>
          <div
            style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}
          >
            <p className={styles.aboutText}>
              <strong style={{ color: "var(--color-dark)" }}>SILO UISI</strong>{" "}
              adalah unit yang mengelola seluruh rangkaian informasi dan layanan
              Penerimaan Mahasiswa Baru di Universitas Internasional Semen
              Indonesia. PKKMB{" "}
              <strong style={{ color: "var(--color-dark)" }}>Aethera</strong>{" "}
              diselenggarakan sebagai program pengenalan kampus, nilai, dan
              komunitas bagi mahasiswa baru angkatan 2026.
            </p>
          </div>
        </section>
      </main>

      {/* ===== FOOTER (Edtech multi-column) ===== */}
      <footer className={styles.footer}>
        <div>
          <div className={styles.footerLogo}>SILO UISI.</div>
          <p className={styles.footerDesc}>
            Sistem Informasi & Layanan Orientasi — Portal resmi PKKMB
            Universitas Internasional Semen Indonesia.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
            <span style={{ fontSize: "0.8rem", opacity: 0.6 }}>📷</span>
            <span style={{ fontSize: "0.8rem", opacity: 0.6 }}>💬</span>
            <span style={{ fontSize: "0.8rem", opacity: 0.6 }}>✉️</span>
          </div>
        </div>

        <div>
          <div className={styles.footerColTitle}>Menu</div>
          <div className={styles.footerLinks}>
            <Link href="#about">Tentang</Link>
            <Link href="#logo">Makna Logo</Link>
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
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)" }}>
            Dapatkan update terbaru seputar PKKMB Aethera 2026.
          </p>
          <input
            type="email"
            placeholder="Email kamu..."
            className={styles.footerInput}
          />
          <button className={styles.footerButton}>Subscribe Now</button>
        </div>
      </footer>
    </div>
  );
}
