"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./DokumentasiGallery.module.css";

interface DocItem {
  id: string;
  src: string;
  title: string;
  tag: string;
}

const DOC_ITEMS: DocItem[] = [
  {
    id: "doc-1",
    src: "/dokumentasi/doc_1.jpg",
    title: "Suasana Sesi Pembekalan & Materi Mahasiswa Baru",
    tag: "Kegiatan Ruangan",
  },
  {
    id: "doc-2",
    src: "/dokumentasi/doc_2.jpg",
    title: "Upacara Pembukaan SILO 2025 di Lapangan",
    tag: "Upacara Utama",
  },
  {
    id: "doc-3",
    src: "/dokumentasi/doc_3.jpg",
    title: "Sesi Diskusi & Tanya Jawab Interaktif",
    tag: "Forum Mahasiswa",
  },
  {
    id: "doc-4",
    src: "/dokumentasi/doc_4.jpg",
    title: "Kerjasama & Work Group Kelompok Mahasiswa",
    tag: "Kelompok Mentor",
  },
  {
    id: "doc-5",
    src: "/dokumentasi/doc_5.jpg",
    title: "Foto Bersama Panggung Utama BRANARA SILO 2025",
    tag: "Seremonial",
  },
  {
    id: "doc-6",
    src: "/dokumentasi/doc_6.jpg",
    title: "Communal Forum BRANARA SILO 2025",
    tag: "Materi Utama",
  },
  {
    id: "doc-7",
    src: "/dokumentasi/doc_7.jpg",
    title: "Penyerahan Souvenir & Apresiasi Pembicara",
    tag: "Apresiasi",
  },
  {
    id: "doc-8",
    src: "/dokumentasi/doc_8.jpg",
    title: "Talkshow Interaktif Panggung Utama",
    tag: "Talkshow",
  },
  {
    id: "doc-9",
    src: "/dokumentasi/doc_9.jpg",
    title: "Semangat Mahasiswa Baru SILO UISI 2025",
    tag: "Sorak & Antusiasme",
  },
  {
    id: "doc-10",
    src: "/dokumentasi/doc_10.jpg",
    title: "Penyerahan Jas Almamater Seremonial Maba",
    tag: "Simbolis Peresmian",
  },
  {
    id: "doc-11",
    src: "/dokumentasi/doc_11.jpg",
    title: "Keseruan & Antusiasme Sesi Malam Inagurasi",
    tag: "Malam Inagurasi",
  },
  {
    id: "doc-12",
    src: "/dokumentasi/doc_12.jpg",
    title: "Penampilan Seni Budaya Reog & Tari Tradisional",
    tag: "Seni Budaya",
  },
  {
    id: "doc-13",
    src: "/dokumentasi/doc_13.jpg",
    title: "Sambutan Rektor & Pimpinan Kampus UISI",
    tag: "Sambutan Rektor",
  },
  {
    id: "doc-14",
    src: "/dokumentasi/doc_14.jpg",
    title: "Euforia & Yelyel Bersama Mahasiswa Baru",
    tag: "Euforia Maba",
  },
  {
    id: "doc-15",
    src: "/dokumentasi/doc_15.jpg",
    title: "Parade Kebudayaan & Kostum Adat Panggung Utama",
    tag: "Parade Budaya",
  },
];

// Duplikasi data agar slider menyambung tanpa henti (infinite seamless loop)
const EXTENDED_ITEMS = [...DOC_ITEMS, ...DOC_ITEMS];

export default function DokumentasiGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<DocItem | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const totalOriginal = DOC_ITEMS.length;

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev <= 0 ? totalOriginal - 1 : prev - 1));
  }, [totalOriginal]);

  // Auto-play interval (2.5 detik per slide)
  useEffect(() => {
    if (isPaused || selectedImage) return;

    const timer = setInterval(() => {
      handleNext();
    }, 2800);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, selectedImage, handleNext]);

  // Reset seamless loop saat mencapai bagian duplikat
  const handleTransitionEnd = () => {
    if (currentIndex >= totalOriginal) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex % totalOriginal);
    }
  };

  // Keyboard navigation when in view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const cardStep = 400; // 380px card + 20px gap

  const displayIndex = (currentIndex % totalOriginal) + 1;

  return (
    <div className={styles.container}>
      <div
        className={styles.carouselTrackWrapper}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={styles.carouselTrack}
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${currentIndex * cardStep}px)`,
            transition: isTransitioning
              ? "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
              : "none",
          }}
        >
          {EXTENDED_ITEMS.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className={styles.slideCard}
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                className={styles.slideImage}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <span className={styles.itemTag}>{item.tag}</span>
                <h3 className={styles.itemTitle}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls Bar */}
      <div className={styles.controlsWrapper}>
        <div className={styles.progressInfo}>
          Foto <strong>{displayIndex}</strong> dari {totalOriginal}
        </div>

        <div className={styles.btnGroup}>
          <button
            className={styles.navBtn}
            onClick={handlePrev}
            aria-label="Previous documentation slide"
          >
            ‹
          </button>
          <button
            className={styles.navBtn}
            onClick={handleNext}
            aria-label="Next documentation slide"
          >
            ›
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className={styles.modal} onClick={() => setSelectedImage(null)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedImage(null)}
              aria-label="Close image modal"
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </div>
  );
}
