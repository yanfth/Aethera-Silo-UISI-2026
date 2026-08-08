'use client';

import React, { useState } from "react";
import styles from "./SambutanSection.module.css";
import { Quote, GraduationCap, UserCheck, ArrowRight, X, Sparkles } from "lucide-react";

interface SambutanItem {
  id: "dosen" | "mahasiswa";
  badge: string;
  badgeType: "dosen" | "mahasiswa";
  icon: React.ReactNode;
  name: string;
  title: string;
  image: string;
  excerpt: string;
  fullParagraphs: string[];
}

const SAMBUTAN_DATA: SambutanItem[] = [
  {
    id: "dosen",
    badge: "Panitia Dosen",
    badgeType: "dosen",
    icon: <GraduationCap size={16} />,
    name: "Dr. Ir. Ahmad Ridwan, M.T.",
    title: "Ketua Pelaksana Panitia Dosen AETHERA SILO UISI 2026",
    image: "/ketua_dosen.png",
    excerpt:
      "Selamat datang Generasi Muda Aethera di Universitas Internasional Semen Indonesia (UISI). SILO 2026 bukan sekadar tradisi penyambutan, melainkan langkah awal dalam membentuk mahasiswa berkarakter unggul, inovatif, dan berintegritas tinggi di era transformasi global.",
    fullParagraphs: [
      "Assalamu’alaikum Warahmatullahi Wabarakatuh, Selamat Pagi dan Salam Sejahtera bagi Kita Semua.",
      "Selamat datang Generasi Muda Aethera di Kampus Universitas Internasional Semen Indonesia (UISI). SILO 2026 bukan sekadar tradisi penyambutan, melainkan langkah awal perjalanan akademis dan pembentukan karakter dalam lingkungan perguruan tinggi yang adaptif, inovatif, dan berintegritas tinggi.",
      "Di UISI, kalian tidak hanya dituntut untuk unggul secara akademis, tetapi juga diajak untuk melintasi batas keilmuan, memahami tantangan industri global, serta memberikan kontribusi nyata bagi masyarakat. Seluruh sivitas akademika dan panitia dosen telah merancang kegiatan SILO 2026 ini agar menjadi wahana pengenalan kampus yang kondusif, mendidik, dan menginspirasi.",
      "Mari manfaatkan setiap momen di SILO Aethera ini dengan semangat belajar tinggi, sikap saling menghargai, dan tekad bulat untuk menjadi pemimpin masa depan yang berwawasan luas. Selamat berjuang dan mulailah perjalanan emas kalian di UISI!"
    ]
  },
  {
    id: "mahasiswa",
    badge: "Panitia Mahasiswa",
    badgeType: "mahasiswa",
    icon: <UserCheck size={16} />,
    name: "Nabil Qudsi Mas'ud",
    title: "Ketua Pelaksana Panitia Mahasiswa AETHERA SILO UISI 2026",
    image: "/nabil_qudsi.jpg",
    excerpt:
      "Halo Ksatria Aethera 2026! Selamat bergabung di keluarga besar UISI. Kami seluruh jajaran Panitia Mahasiswa siap mendampingi perjalanan awal kalian dengan penuh semangat keberanian, solidaritas, dan daya cipta tanpa batas.",
    fullParagraphs: [
      "Salam Semangat Ksatria Aethera 2026!",
      "Selamat datang di kampus pergerakan dan karya, Universitas Internasional Semen Indonesia (UISI)! Kami atas nama seluruh jajaran Panitia Mahasiswa AETHERA SILO UISI 2026 mengucapkan selamat atas keberhasilan rekan-rekan sekalian menembus gerbang perguruan tinggi ini.",
      "Mengusung nama Aethera, AETHERA SILO UISI 2026 membawa filosofi energi membara, keberanian, dan persatuan. Orientasi ini dirancang bukan untuk membebani, melainkan untuk menempa mentalitas tangguh, mempererat tali persaudaraan antar rasi kelompok, dan memperkenalkan budaya apresiatif serta kolaboratif di lingkungan kampus.",
      "Jangan pernah ragu melangkah keluar dari zona nyaman. Manfaatkan kesempatan ini untuk mengeksplorasi potensi diri, mengasah rasa kepedulian sosial, dan menyerap nilai-nilai kebersamaan. Mari kita ukir jejak karya pertama yang membanggakan bersama di AETHERA SILO UISI 2026!"
    ]
  }
];

export default function SambutanSection() {
  const [activeModalItem, setActiveModalItem] = useState<SambutanItem | null>(null);

  return (
    <section id="sambutan" className={styles.section} data-aos="fade-up">
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          Sambutan <span className={styles.titleGradient}>Ketua Pelaksana</span>
        </h2>
        <p className={styles.subtitle}>
          Pesan semangat, hangat, dan motivasi pembuka perjalanan dari Ketua Pelaksana Dosen &amp; Mahasiswa AETHERA SILO UISI 2026.
        </p>
      </div>

      {/* Grid Cards */}
      <div className={styles.grid}>
        {SAMBUTAN_DATA.map((item) => (
          <div key={item.id} className={styles.card}>
            <div
              className={`${styles.cardBackgroundGlow} ${
                item.id === "dosen" ? styles.dosenGlow : styles.mahasiswaGlow
              }`}
            />

            <div className={styles.topContent}>
              {/* Badge Row */}
              <div className={styles.badgeRow}>
                <span
                  className={`${styles.badge} ${
                    item.badgeType === "dosen" ? styles.badgeDosen : styles.badgeMahasiswa
                  }`}
                >
                  {item.icon} {item.badge}
                </span>
                <Quote size={28} className={styles.quoteIcon} />
              </div>

              {/* Quote Excerpt */}
              <p className={styles.quoteText}>&ldquo;{item.excerpt}&rdquo;</p>
            </div>

            {/* Author Footer */}
            <div>
              <div className={styles.authorBox}>
                <div
                  className={`${styles.avatarWrapper} ${
                    item.badgeType === "dosen" ? styles.avatarWrapperDosen : styles.avatarWrapperMahasiswa
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.avatarImg}
                  />
                </div>
                <div className={styles.authorInfo}>
                  <h3 className={styles.authorName}>{item.name}</h3>
                  <p className={styles.authorTitle}>{item.title}</p>
                </div>
              </div>

              <button
                className={styles.readMoreBtn}
                onClick={() => setActiveModalItem(item)}
              >
                Baca Sambutan Lengkap <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {activeModalItem && (
        <div className={styles.modalBackdrop} onClick={() => setActiveModalItem(null)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setActiveModalItem(null)}
              aria-label="Tutup sambutan"
            >
              <X size={20} />
            </button>

            <div className={styles.modalHeader}>
              <img
                src={activeModalItem.image}
                alt={activeModalItem.name}
                className={styles.modalAvatar}
              />
              <div>
                <span
                  className={`${styles.badge} ${
                    activeModalItem.badgeType === "dosen"
                      ? styles.badgeDosen
                      : styles.badgeMahasiswa
                  }`}
                  style={{ marginBottom: "0.4rem", display: "inline-flex" }}
                >
                  {activeModalItem.icon} {activeModalItem.badge}
                </span>
                <h3 className={styles.authorName} style={{ fontSize: "1.25rem" }}>
                  {activeModalItem.name}
                </h3>
                <p className={styles.authorTitle}>{activeModalItem.title}</p>
              </div>
            </div>

            <div className={styles.modalBody}>
              {activeModalItem.fullParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
