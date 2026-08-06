"use client";
import React, { useState, useEffect, useRef } from "react";
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
    title: "Upacara Pembukaan PKKMB SILO 2025 di Lapangan",
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

export default function DokumentasiGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<DocItem | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const total = DOC_ITEMS.length;

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, total - 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Keyboard navigation when in view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) return; // Don't slide if modal open
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Calculate translate distance based on card width + gap (approx 400px on desktop)
  const cardStep = 400; // 380px card + 20px gap

  return (
    <div className={styles.container}>
      <div className={styles.carouselTrackWrapper}>
        <div
          ref={trackRef}
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${currentIndex * cardStep}px)`,
          }}
        >
          {DOC_ITEMS.map((item) => (
            <div
              key={item.id}
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
          Foto <strong>{currentIndex + 1}</strong> dari {total}
        </div>

        <div className={styles.btnGroup}>
          <button
            className={styles.navBtn}
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous documentation slide"
          >
            ‹
          </button>
          <button
            className={styles.navBtn}
            onClick={handleNext}
            disabled={currentIndex === total - 1}
            aria-label="Next documentation slide"
          >
            ›
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className={styles.modal}
          onClick={() => setSelectedImage(null)}
        >
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
