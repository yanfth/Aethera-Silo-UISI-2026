import SponsorSection from "./components/SponsorSection";
import styles from "./page.module.css";
import Link from "next/link";
import GlobeSection from "./components/GlobeSection";
import CountdownSection from "./components/CountdownSection";
import LowPolyBackground from "./components/LowPolyBackground";
import PanitiaCarousel from "./components/PanitiaCarousel";
import DokumentasiGallery from "./components/DokumentasiGallery";
import GuidebookSection from "./components/GuidebookSection";
import MerchCarousel from "./components/MerchCarousel";
import {
  Hexagon,
  Sparkles,
  Zap,
  Waves,
  Video,
  Image as ImageIcon,
  Palette,
  FileText,
  Music,
  Megaphone,
  Shirt,
  ShoppingBag,
  Award,
  Camera,
  MessageCircle,
  Mail,
  Send,
  ArrowRight,
  Download,
  Book,
  Folder
} from "lucide-react";

export default function Home() {
  return (
    <div className={styles.container}>
      <LowPolyBackground />

      {/* ===== NAVBAR ===== */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Hexagon
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              marginRight: "6px",
            }}
            size={20}
            color="var(--lp-aqua)"
          />{" "}
          Aethera SILO UISI
        </div>
        <div className={styles.navLinks}>
          <Link href="#about" className={styles.navLink}>
            Tentang
          </Link>

          <Link href="#guidebook" className={styles.navLink}>
            Guidebook
          </Link>
          <Link href="#kebutuhan-acara" className={styles.navLink}>
            Kebutuhan Acara
          </Link>
          <Link href="#kelompok" className={styles.navLink}>
            Kelompok
          </Link>
          <Link href="#merch" className={styles.navLink}>
            Merchandise
          </Link>
        </div>
      </nav>

      <main className={styles.main}>
        {/* ===== HERO ===== */}
        <section className={styles.hero}>
          <div className={styles.heroContent} data-aos="fade-right">
            <span className={styles.heroTag}>
              <Sparkles
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginRight: "6px",
                }}
                size={14}
              />{" "}
              PKKMB UISI 2026
            </span>
            <h1 className={styles.heroTitle}>
              Selamat Datang <br />
              <span className={styles.heroTitleAccent}>Mahasiswa Baru</span>
            </h1>
            <p className={styles.heroDesc}>
              Portal Resmi Informasi dan Layanan Orientasi PKKMB Aethera
              Universitas Internasional Semen Indonesia. Temukan jadwal,
              kelompok, dan penugasan lengkap di sini.
            </p>
            <div className={styles.heroButtons}>
              <Link href="#about" className={styles.ctaButton}>
                Jelajahi Aethera
              </Link>
              <Link href="#kebutuhan-acara" className={styles.ctaButtonOutline}>
                Unduh Kebutuhan
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual} data-aos="fade-left">
            <div className={styles.heroGeoBg}></div>
            <div className={styles.heroImageContainer}>
              <img
                src="/hero_rocket.png"
                alt="Aethera Rocket Illustration"
                width={480}
                height={480}
              />
            </div>
          </div>
        </section>

        {/* ===== COUNTDOWN SECTION ===== */}
        <CountdownSection />

        {/* ===== ABOUT SILO ===== */}
        <section id="about" className={styles.section} data-aos="fade-up">
          <div className={styles.aboutGrid}>
            <div>
              <h2 className={styles.sectionTitle} style={{ textAlign: "left" }}>
                Tentang SILO UISI
              </h2>
              <p className={styles.aboutText}>
                <strong>
                  Student Initiation and Learning Orientation (SILO)
                </strong>{" "}
                merupakan kegiatan pengenalan kehidupan kampus bagi mahasiswa
                baru Universitas Internasional Semen Indonesia. Mengusung nama{" "}
                <strong>Aethera</strong>, PKKMB 2026 hadir sebagai ruang
                pembinaan awal yang adaptif, inovatif, dan berkarakter.
              </p>
            </div>
            <div className={styles.aboutImage}>
              <img
                src="/portfolio_phones.png"
                alt="SILO UISI Preview"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "1.5rem",
                }}
              />
            </div>
          </div>
        </section>

        {/* ===== LOGO PHILOSOPHY ===== */}
        <section id="logo" className={styles.section} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>Filosofi Logo Aethera</h2>
          <p className={styles.sectionSubtitle}>
            Simbol keberanian, inovasi, dan persatuan mahasiswa baru UISI 2026.
          </p>

          <div className={styles.servicesGrid}>
            <div className={styles.card}>
              <div
                className={styles.cardIcon}
                style={{
                  background: "rgba(31,75,93,0.1)",
                  color: "var(--lp-ocean-blue)",
                }}
              >
                <Hexagon size={24} />
              </div>
              <h3 className={styles.cardTitle}>Heksagon Presisi</h3>
              <p className={styles.cardDesc}>
                Melambangkan struktur yang kokoh, efisiensi, dan integrasi antar
                disiplin ilmu di UISI.
              </p>
            </div>
            <div className={styles.card}>
              <div
                className={styles.cardIcon}
                style={{
                  background: "rgba(104,207,235,0.1)",
                  color: "var(--lp-aqua)",
                }}
              >
                <Zap size={24} />
              </div>
              <h3 className={styles.cardTitle}>Inti Aether</h3>
              <p className={styles.cardDesc}>
                Energi tak terbatas dan semangat membara yang mendorong
                mahasiswa mencapai puncak prestasi.
              </p>
            </div>
            <div className={styles.card}>
              <div
                className={styles.cardIcon}
                style={{
                  background: "rgba(31,30,25,0.1)",
                  color: "var(--lp-charcoal)",
                }}
              >
                <Waves size={24} />
              </div>
              <h3 className={styles.cardTitle}>Gelombang Adaptif</h3>
              <p className={styles.cardDesc}>
                Fleksibilitas dan ketahanan mahasiswa baru dalam menghadapi
                tantangan dunia industri global.
              </p>
            </div>
          </div>
        </section>

        {/* ===== DOKUMENTASI TAHUN LALU ===== */}
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

        {/* ===== GUIDEBOOK PDF FLIPBOOK ===== */}
        <GuidebookSection />

        {/* ===== KEBUTUHAN ACARA ===== */}
        <section id="kebutuhan-acara" className={styles.section} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>Kebutuhan Acara</h2>
          <p className={styles.sectionSubtitle}>
            Unduh seluruh dokumen, template, dan atribut penting untuk persiapan 
            mengikuti rangkaian acara SILO UISI 2026.
          </p>

          <div className={styles.servicesGrid}>
            {/* Guidebook */}
            <div className={styles.card}>
              <div
                className={styles.cardIcon}
                style={{
                  background: "rgba(31,75,93,0.1)",
                  color: "var(--lp-ocean-blue)",
                }}
              >
                <Book size={24} />
              </div>
              <h3 className={styles.cardTitle}>Guidebook SILO</h3>
              <p className={styles.cardDesc}>
                Buku panduan lengkap berisi tata tertib, jadwal, dan informasi umum SILO UISI 2026.
              </p>
              <Link href="#" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
                <Download size={16} /> Unduh Guidebook
              </Link>
            </div>

            {/* Twibbon */}
            <div className={styles.card}>
              <div
                className={styles.cardIcon}
                style={{
                  background: "rgba(104,207,235,0.1)",
                  color: "var(--lp-aqua)",
                }}
              >
                <ImageIcon size={24} />
              </div>
              <h3 className={styles.cardTitle}>Twibbon Peserta</h3>
              <p className={styles.cardDesc}>
                Frame Twibbon resmi untuk diunggah di Instagram sebagai tanda keikutsertaan.
              </p>
              <Link href="#" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
                <Download size={16} /> Unduh Twibbon
              </Link>
            </div>

            {/* Frame Penugasan */}
            <div className={styles.card}>
              <div
                className={styles.cardIcon}
                style={{
                  background: "rgba(31,30,25,0.1)",
                  color: "var(--lp-charcoal)",
                }}
              >
                <Folder size={24} />
              </div>
              <h3 className={styles.cardTitle}>Frame Penugasan</h3>
              <p className={styles.cardDesc}>
                Template frame standar untuk pengumpulan tugas harian dan tugas kelompok.
              </p>
              <Link href="#" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
                <Download size={16} /> Unduh Frame
              </Link>
            </div>

            {/* Handbook */}
            <div className={styles.card}>
              <div
                className={styles.cardIcon}
                style={{
                  background: "rgba(104,207,235,0.1)",
                  color: "var(--lp-aqua)",
                }}
              >
                <FileText size={24} />
              </div>
              <h3 className={styles.cardTitle}>Handbook Materi</h3>
              <p className={styles.cardDesc}>
                Modul materi dan lembar kerja untuk sesi pemaparan selama rangkaian acara.
              </p>
              <Link href="#" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
                <Download size={16} /> Unduh Handbook
              </Link>
            </div>

            {/* ID Card */}
            <div className={styles.card}>
              <div
                className={styles.cardIcon}
                style={{
                  background: "rgba(31,75,93,0.1)",
                  color: "var(--lp-ocean-blue)",
                }}
              >
                <Award size={24} />
              </div>
              <h3 className={styles.cardTitle}>Template ID Card</h3>
              <p className={styles.cardDesc}>
                Format standar tanda pengenal (Co-Card) untuk dicetak dan digunakan saat offline.
              </p>
              <Link href="#" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
                <Download size={16} /> Unduh ID Card
              </Link>
            </div>

            {/* Virtual Background */}
            <div className={styles.card}>
              <div
                className={styles.cardIcon}
                style={{
                  background: "rgba(31,30,25,0.1)",
                  color: "var(--lp-charcoal)",
                }}
              >
                <Camera size={24} />
              </div>
              <h3 className={styles.cardTitle}>Virtual Background</h3>
              <p className={styles.cardDesc}>
                Latar belakang virtual resmi yang wajib digunakan saat sesi pertemuan online.
              </p>
              <Link href="#" target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
                <Download size={16} /> Unduh Background
              </Link>
            </div>
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
          <MerchCarousel />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "0.5rem",
            }}
          >
            <Link href="/merch" className={styles.merchButtonLink}>
              Lihat Selengkapnya &rarr;
            </Link>
          </div>
        </section>

        {/* ===== SPONSOR & MEDIA PARTNER ===== */}
        <SponsorSection />

        {/* ===== CONTACT ===== */}
        <section id="contact" className={styles.section}>
          <div
            style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}
          >
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
          <div className={styles.footerLogo}>
            <Hexagon
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: "6px",
              }}
              size={18}
              color="var(--lp-aqua)"
            />{" "}
            SILO UISI
          </div>
          <p className={styles.footerDesc}>
            Sistem Informasi & Layanan Orientasi — Portal resmi PKKMB
            Universitas Internasional Semen Indonesia.
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.85rem",
              marginTop: "1rem",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <span style={{ cursor: "pointer", transition: "color 0.2s" }}>
              <Camera size={18} />
            </span>
            <span style={{ cursor: "pointer", transition: "color 0.2s" }}>
              <MessageCircle size={18} />
            </span>
            <span style={{ cursor: "pointer", transition: "color 0.2s" }}>
              <Mail size={18} />
            </span>
          </div>
        </div>

        <div>
          <div className={styles.footerColTitle}>Menu</div>
          <div className={styles.footerLinks}>
            <Link href="#about">Tentang</Link>

            <Link href="#kebutuhan-acara">Kebutuhan Acara</Link>
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
          <button className={styles.footerButton}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              Subscribe <Send size={15} />
            </span>
          </button>
        </div>
      </footer>
    </div>
  );
}
