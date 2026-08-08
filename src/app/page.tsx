import SponsorSection from "./components/SponsorSection";
import styles from "./page.module.css";
import Link from "next/link";
import GlobeSection from "./components/GlobeSection";
import CountdownSection from "./components/CountdownSection";
import LowPolyBackground from "./components/LowPolyBackground";
import PanitiaCarousel from "./components/PanitiaCarousel";
import DokumentasiGallery from "./components/DokumentasiGallery";
import GuidebookSection from "./components/GuidebookSection";
import SambutanSection from "./components/SambutanSection";
import AnggotaDivisi from "./components/AnggotaDivisi";
import MapsSection from "./components/MapsSection";
import VideoSection from "./components/VideoSection";
import Navbar from "./components/Navbar";
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
  Compass,
  ChevronDown
} from "lucide-react";

export default function Home() {
  return (
    <div className={styles.container}>
      <LowPolyBackground />

      <Navbar />

      <main className={styles.main}>
        {/* ===== HERO ===== */}
        <section className={styles.hero}>
          <div className={styles.heroContent} data-aos="fade-right">
            <span className={styles.heroTag}>
              <Sparkles style={{ display: "inline-block", verticalAlign: "middle", marginRight: "6px" }} size={14} /> AETHERA SILO UISI 2026
            </span>
            <h1 className={styles.heroTitle}>
              Selamat Datang <br />
              <span className={styles.heroTitleAccent}>Satya Ismaya 14</span>
            </h1>
            <p className={styles.heroDesc}>
              Portal Resmi Informasi dan Layanan Orientasi AETHERA SILO UISI 2026
              Universitas Internasional Semen Indonesia. Temukan jadwal,
              kelompok, dan penugasan lengkap di sini.
            </p>
            <div className={styles.heroButtons}>
              <Link href="#about" className={styles.ctaButton}>
                Jelajahi Aethera
              </Link>
              <Link href="#penugasan" className={styles.ctaButtonOutline}>
                Lihat Penugasan
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
                Tentang <span className={styles.titleGradient}>AETHERA SILO UISI 2026</span>
              </h2>
              <p className={styles.aboutText}>
                <strong>AETHERA SILO UISI 2026</strong>{" "}
                (Student Initiation and Learning Orientation) merupakan kegiatan
                pengenalan kehidupan kampus bagi mahasiswa baru Universitas
                Internasional Semen Indonesia. AETHERA SILO UISI 2026 hadir sebagai
                ruang pembinaan awal yang adaptif, inovatif, dan berkarakter.
              </p>
            </div>
            <div className={styles.aboutImage}>
              <img
                src="/portfolio_phones.png"
                alt="AETHERA SILO UISI 2026 Preview"
                style={{ width: "100%", height: "auto", borderRadius: "1.5rem" }}
              />
            </div>
          </div>
        </section>

        {/* ===== SAMBUTAN KETUA PELAKSANA ===== */}
        <SambutanSection />


        {/* ===== DOKUMENTASI TAHUN LALU ===== */}
        <section id="dokumentasi" className={styles.section} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>
            Kilasan <span className={styles.titleGradient}>SILO Tahun Lalu</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Kilas Balik Kemeriahan &amp; Momen Berkesan SILO UISI 2025
          </p>

          <DokumentasiGallery />
        </section>

        {/* ===== VIDEO DOKUMENTASI SILO ===== */}
        <VideoSection />

        {/* ===== SPONSOR & MEDIA PARTNER ===== */}
        <SponsorSection />

        {/* ===== MAPS LOKASI KAMPUS B UISI GRESIK ===== */}
        <MapsSection />

        {/* ===== CONTACT ===== */}
        <section id="contact" className={styles.section}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
            <p className={styles.aboutText}>
              <strong style={{ color: "var(--lp-text)" }}>AETHERA SILO UISI 2026</strong>{" "}
              adalah unit yang mengelola seluruh rangkaian informasi dan layanan
              Penerimaan Mahasiswa Baru di Universitas Internasional Semen
              Indonesia. Program ini diselenggarakan sebagai pengenalan kampus,
              nilai, dan komunitas bagi mahasiswa baru angkatan 2026.
            </p>
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
            Sistem Informasi & Layanan Orientasi — Portal resmi AETHERA SILO UISI 2026
            Universitas Internasional Semen Indonesia.
          </p>
          <div style={{ display: "flex", gap: "0.85rem", marginTop: "1rem", color: "rgba(255,255,255,0.7)" }}>
            <span style={{ cursor: "pointer", transition: "color 0.2s" }}><Camera size={18} /></span>
            <span style={{ cursor: "pointer", transition: "color 0.2s" }}><MessageCircle size={18} /></span>
            <span style={{ cursor: "pointer", transition: "color 0.2s" }}><Mail size={18} /></span>
          </div>
        </div>

        <div>
          <div className={styles.footerColTitle}>Menu</div>
          <div className={styles.footerLinks}>
            <Link href="#about">Tentang</Link>
            <Link href="#sambutan">Sambutan</Link>
            <Link href="#logo">Filosofi Logo</Link>
            <Link href="#dokumentasi">Dokumentasi</Link>
            <Link href="#video">Video</Link>
            <Link href="#panitia">Daftar Panitia</Link>
            <Link href="#penugasan">Penugasan</Link>
            <Link href="#kelompok">Kelompok</Link>
            <Link href="#lokasi">Lokasi Kampus</Link>
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
            Dapatkan update terbaru seputar AETHERA SILO UISI 2026.
          </p>
          <input
            type="email"
            placeholder="Email kamu..."
            className={styles.footerInput}
          />
          <button className={styles.footerButton}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              Subscribe <Send size={15} />
            </span>
          </button>
        </div>
      </footer>
    </div>
  );
}
