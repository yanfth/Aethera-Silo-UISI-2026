import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>Aethera.</div>
        <div className={styles.navLinks}>
          <Link href="#about" className={styles.navLink}>
            About
          </Link>
          <Link href="#services" className={styles.navLink}>
            Services
          </Link>
          <Link href="#contact" className={styles.navLink}>
            Contact
          </Link>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            We Build Digital Experiences That Pop.
          </h1>
          <p className={styles.heroDesc}>
            Aethera is a creative agency crafting bold, unapologetic, and unforgettable web experiences. We don't just follow trends, we break them.
          </p>
          <Link href="#contact" className={styles.ctaButton}>
            Let's Talk
          </Link>
        </section>

        {/* About Section */}
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>Who We Are</h2>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <p>
                We are a collective of designers, developers, and strategists who believe in the power of radical design. We strip away the unnecessary and focus on what truly matters: making a statement.
              </p>
              <br />
              <p>
                Our approach is raw, direct, and engineered to leave a lasting impact. We embrace the chaos to deliver clarity.
              </p>
            </div>
            <div className={styles.aboutImage}>
              <h2 style={{ zIndex: 1, color: "var(--color-dark)", fontSize: "4rem" }}>RAW.</h2>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className={`${styles.section} ${styles.services}`}>
          <h2 className={styles.sectionTitle}>What We Do</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>💻</div>
              <h3 className={styles.cardTitle}>Web Dev</h3>
              <p className={styles.cardDesc}>
                Lightning-fast, accessible, and radically designed websites that command attention.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🎨</div>
              <h3 className={styles.cardTitle}>Brand Identity</h3>
              <p className={styles.cardDesc}>
                Bold logos, typography, and visual systems that make your brand unmistakable.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🚀</div>
              <h3 className={styles.cardTitle}>Growth Strategy</h3>
              <p className={styles.cardDesc}>
                Data-driven tactics wrapped in unconventional execution to skyrocket your metrics.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className={styles.footer}>
        <div className={styles.footerLogo}>Aethera.</div>
        <div className={styles.footerLinks}>
          <Link href="#">Twitter</Link>
          <Link href="#">Instagram</Link>
          <Link href="#">Dribbble</Link>
        </div>
        <div>
          <p>© 2026 Aethera. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
