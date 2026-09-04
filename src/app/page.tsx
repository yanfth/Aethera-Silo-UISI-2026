import SponsorSection from "./components/SponsorSection";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import CountdownSection from "./components/CountdownSection";
import LowPolyBackground from "./components/LowPolyBackground";
import DokumentasiGallery from "./components/DokumentasiGallery";
import Navbar from "./components/Navbar";
import ClickSpark from "./components/ClickSpark";
import SambutanSection from "./components/SambutanSection";
import MapsSection from "./components/MapsSection";
import VideoSection from "./components/VideoSection";
import MerchCarousel from "./components/MerchCarousel";
import { 
  Sparkles, 
  Zap, 
  Waves, 
  Video, 
  Image as ImageIcon, 
  Palette, 
  FileText, 
  Book,
  Download,
  Folder,
  Music, 
  Megaphone, 
  Shirt, 
  ShoppingBag, 
  Award,
  Camera, 
  MessageCircle, 
  Mail, 
  Send
} from "lucide-react";

export default function Home() {
  return (
    <ClickSpark sparkColor="#68CFEB" sparkSize={12} sparkRadius={25} sparkCount={8} duration={400}>
      <div className={styles.container}>
      <LowPolyBackground />

      {/* ===== NAVBAR ===== */}
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
                style={{ width: "100%", height: "auto" }}
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
                src="/logo_aethera_title.png"
                alt="AETHERA SILO UISI 2026 Logo"
                style={{ width: "80%", height: "auto", objectFit: "contain", borderRadius: "1.5rem" }}
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
          <div className={styles.footerLogo} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img src="/logo_aethera.png?v=4" alt="Aethera Logo" width={26} height={26} style={{ height: "26px", width: "auto" }} />
            <span>AETHERA SILO UISI 2026</span>
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
          <div className={styles.footerColTitle}>Tautan Cepat</div>
          <div className={styles.footerLinks}>
            <Link href="#about">Tentang Kami</Link>
            <Link href="#panitia">Daftar Panitia</Link>
            <Link href="#kebutuhan-acara">Kebutuhan Acara</Link>
            <Link href="#kelompok">Kelompok</Link>
          </div>
        </div>

        <div>
          <div className={styles.footerColTitle}>Layanan &amp; Kontak</div>
          <div className={styles.footerLinks}>
            <Link href="#">Twibbon &amp; Panduan</Link>
            <Link href="#">Rundown Acara</Link>
            <Link href="#">WhatsApp Hubungi Kami</Link>
            <Link href="#">Instagram Resmi</Link>
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
    </ClickSpark>
  );
}
