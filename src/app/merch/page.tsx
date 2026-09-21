import React from "react";
import Link from "next/link";
import styles from "../page.module.css";
import { 
  Shirt, 
  Sparkles, 
  ShoppingBag, 
  Award, 
  Tag, 
  Coffee, 
  Hexagon, 
  Camera, 
  MessageCircle, 
  Mail, 
  ArrowLeft 
} from "lucide-react";

import Navbar from "../components/Navbar";
import { MERCH_ITEMS } from "../../data/merchData";

export default function MerchPage() {
  return (
    <div className={styles.container}>
      <Navbar />

      <main style={{ padding: "4rem 3rem", backgroundColor: "#FFFCF7", minHeight: "80vh" }}>
        

        <div style={{ textAlign: "center", marginBottom: "4rem", maxWidth: "600px", marginInline: "auto" }}>
          <span style={{ 
            display: "inline-block", 
            background: "linear-gradient(135deg, var(--color-primary), #FFB347)", 
            padding: "0.4rem 1.25rem", 
            borderRadius: "999px", 
            fontSize: "0.75rem", 
            fontWeight: 700, 
            letterSpacing: "0.05em",
            marginBottom: "1rem"
          }}>
            KATALOG RESMI
          </span>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--color-dark)", marginBottom: "1rem", lineHeight: 1.1 }}>
            Aethera Collection
          </h1>
          <p style={{ color: "var(--color-gray)", lineHeight: 1.6 }}>
            Dukung perjalanan barumu di UISI dengan merchandise resmi AETHERA SILO UISI 2026. Pilih item favoritmu sebelum kehabisan!
          </p>
        </div>

        {/* Catalog Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
          gap: "2rem",
          maxWidth: "1100px",
          marginInline: "auto"
        }}>
          {MERCH_ITEMS.map((item) => (
            <div key={item.id} style={{ 
              backgroundColor: "#ffffff", 
              borderRadius: "24px", 
              padding: "1.5rem", 
              boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
              border: "1px solid rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.2s, box-shadow 0.2s"
            }}
            >
              <div style={{ 
                width: "100%", 
                height: "220px", 
                background: item.gradient,
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "5rem",
                marginBottom: "1.5rem"
              }}>
                {item.image ? (
                  <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "1rem" }} />
                ) : (
                  <item.icon size={54} color="#1F4B5D" />
                )}
              </div>
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--color-dark)", margin: 0 }}>
                  {item.title}
                </h3>
                <span style={{ 
                  backgroundColor: "var(--color-dark)", 
                  color: "#fff", 
                  padding: "0.25rem 0.75rem", 
                  borderRadius: "999px", 
                  fontSize: "0.85rem", 
                  fontWeight: 600,
                  whiteSpace: "nowrap"
                }}>
                  {item.price}
                </span>
              </div>
              
              <p style={{ fontSize: "0.9rem", color: "var(--color-gray)", lineHeight: 1.5, marginBottom: "2rem", flexGrow: 1 }}>
                {item.desc}
              </p>
              
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdEwUkcCb-dL2PYjVbKn6E95NEmCbOHrbrX9d06GZJY572hkQ/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  width: "100%", 
                  padding: "0.85rem", 
                  backgroundColor: "#F3F4F6", 
                  color: "var(--color-dark)", 
                  border: "none", 
                  borderRadius: "12px", 
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  display: "block",
                  textAlign: "center",
                  textDecoration: "none"
                }}
              >
                Pre-order Sekarang
              </a>
            </div>
          ))}
        </div>
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
            <span style={{ cursor: "pointer" }}><Camera size={18} /></span>
            <span style={{ cursor: "pointer" }}><MessageCircle size={18} /></span>
            <span style={{ cursor: "pointer" }}><Mail size={18} /></span>
          </div>
        </div>

        <div>
          <div className={styles.footerColTitle}>Menu</div>
          <div className={styles.footerLinks}>
            <Link href="/#about">Tentang</Link>
            <Link href="/#logo">Filosofi Logo</Link>
            <Link href="/#countdown">Countdown</Link>
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
            <a href="https://www.instagram.com/silouisi2026?igsh=MThqZ2Z1YXAzcng1ZA==" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.tiktok.com/@branarasilouisi2025?_r=1&_t=ZS-98iD5zNgHEi" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="https://wa.me/6289667151265" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="mailto:pkkmb@uisi.ac.id">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
