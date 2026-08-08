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
  ArrowRight
} from "lucide-react";

export default function Home() {
  return (
    <div className={styles.container}>
      <LowPolyBackground />

      {/* ===== NAVBAR ===== */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Hexagon style={{ display: "inline-block", verticalAlign: "middle", marginRight: "6px" }} size={20} color="var(--lp-aqua)" /> AETHERA SILO UISI 2026
        </div>
        <div className={styles.navLinks}>
          <Link href="#about" className={styles.navLink}>
            Tentang
          </Link>
          <Link href="#sambutan" className={styles.navLink}>
            Sambutan
          </Link>
          <Link href="#logo" className={styles.navLink}>
            Logo
          </Link>
          <Link href="#dokumentasi" className={styles.navLink}>
            Dokumentasi
          </Link>
          <Link href="#panitia" className={styles.navLink}>
            Panitia
          </Link>
          <Link href="#guidebook" className={styles.navLink}>
            Guidebook
          </Link>
          <Link href="#penugasan" className={styles.navLink}>
            Penugasan
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
                Tentang AETHERA SILO UISI 2026
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

        {/* ===== LOGO PHILOSOPHY ===== */}
        <section id="logo" className={styles.section} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>Filosofi Logo Aethera</h2>
          <p className={styles.sectionSubtitle}>
            Simbol keberanian, inovasi, dan persatuan Satya Ismaya 14 UISI 2026.
          </p>

          <div className={styles.servicesGrid}>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: "rgba(31,75,93,0.1)", color: "var(--lp-ocean-blue)" }}>
                <Hexagon size={24} />
              </div>
              <h3 className={styles.cardTitle}>Heksagon Presisi</h3>
              <p className={styles.cardDesc}>
                Melambangkan struktur yang kokoh, efisiensi, dan integrasi antar
                disiplin ilmu di UISI.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: "rgba(104,207,235,0.1)", color: "var(--lp-aqua)" }}>
                <Zap size={24} />
              </div>
              <h3 className={styles.cardTitle}>Inti Aether</h3>
              <p className={styles.cardDesc}>
                Energi tak terbatas dan semangat membara yang mendorong mahasiswa
                mencapai puncak prestasi.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: "rgba(31,30,25,0.1)", color: "var(--lp-charcoal)" }}>
                <Waves size={24} />
              </div>
              <h3 className={styles.cardTitle}>Gelombang Adaptif</h3>
              <p className={styles.cardDesc}>
                Fleksibilitas dan ketahanan mahasiswa baru dalam menghadapi tantangan
                dunia industri global.
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
            BPH &amp; Koordinator Divisi AETHERA SILO UISI 2026
          </p>

          <PanitiaCarousel />
        </section>

        {/* ===== GUIDEBOOK PDF FLIPBOOK ===== */}
        <GuidebookSection />

        {/* ===== DAFTAR PENUGASAN ===== */}
        <section id="penugasan" className={styles.section} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>Daftar Penugasan</h2>
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
          <div className={styles.viewAllBtn}>
            <Link href="#guidebook" className={styles.ctaButton}>
              Lihat Detail Ketentuan &rarr;
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
            Koleksi resmi AETHERA SILO UISI 2026 — tampil keren dari hari pertama!
          </p>
          <div className={styles.merchCarousel}>
            <div className={styles.merchCard} style={{ background: "var(--lp-ocean-blue)" }}>
              <h3 className={styles.merchCardTitle}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}><Shirt size={22} /> Kaos Aethera</span>
              </h3>
              <p className={styles.merchCardPrice}>
                Combed 30s · Hitam
              </p>
              <p style={{ marginTop: "auto", fontSize: "1.5rem", fontWeight: 800, color: "var(--lp-white)" }}>Rp 95.000</p>
            </div>
            <div className={styles.merchCard} style={{ background: "var(--lp-aqua)" }}>
              <h3 className={styles.merchCardTitle}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}><Sparkles size={22} /> Sticker Pack</span>
              </h3>
              <p className={styles.merchCardPrice}>
                8 Rasi · Vinyl Anti Air
              </p>
              <p style={{ marginTop: "auto", fontSize: "1.5rem", fontWeight: 800, color: "var(--lp-white)" }}>Rp 20.000</p>
            </div>
            <div className={styles.merchCard} style={{ background: "var(--lp-charcoal)" }}>
              <h3 className={styles.merchCardTitle}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}><ShoppingBag size={22} /> Totebag Orbit</span>
              </h3>
              <p className={styles.merchCardPrice}>
                Kanvas Tebal · Putih Tulang
              </p>
              <p style={{ marginTop: "auto", fontSize: "1.5rem", fontWeight: 800, color: "var(--lp-white)" }}>Rp 55.000</p>
            </div>
            <div className={styles.merchCard} style={{ background: "var(--lp-ocean-blue)" }}>
              <h3 className={styles.merchCardTitle}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}><Award size={22} /> Pin Enamel</span>
              </h3>
              <p className={styles.merchCardPrice}>
                Logam Premium · Aethera Logo
              </p>
              <p style={{ marginTop: "auto", fontSize: "1.5rem", fontWeight: 800 }}>Rp 15.000</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
            <Link href="/merch" className={styles.merchButtonLink}>
              Lihat Selengkapnya &rarr;
            </Link>
          </div>
        </section>

        {/* ===== SPONSOR & MEDIA PARTNER ===== */}
        <SponsorSection />

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
            <Link href="#panitia">Daftar Panitia</Link>
            <Link href="#penugasan">Penugasan</Link>
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
