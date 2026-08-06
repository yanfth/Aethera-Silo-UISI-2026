"use client";
import React, { useState, useEffect } from "react";
import styles from "./PanitiaCarousel.module.css";

interface PanitiaPerson {
  id: string;
  name: string;
  role: string;
  badge: string;
  image: string;
}

const PANITIA_PERSONS: PanitiaPerson[] = [
  {
    id: "kp",
    name: "Nabil Qudsi Mas'ud",
    role: "Ketua Pelaksana",
    badge: "BPH",
    image: "/nabil_qudsi.jpg",
  },
  {
    id: "sek1",
    name: "M. Rosyid Ridlo",
    role: "Sekretaris 1",
    badge: "BPH",
    image: "/rosyid_ridlo.jpg",
  },
  {
    id: "sek2",
    name: "Hillyatut Taqiya",
    role: "Sekretaris 2",
    badge: "BPH",
    image: "/hillyatut_taqiya.jpg",
  },
  {
    id: "bend1",
    name: "Zahra Naila Supriyono Putri",
    role: "Bendahara 1",
    badge: "BPH",
    image: "/zahra_naila.jpg",
  },
  {
    id: "bend2",
    name: "Putri Fara Diba",
    role: "Bendahara 2",
    badge: "BPH",
    image: "/putri_fara.jpg",
  },
  {
    id: "ko-acara",
    name: "Jefranda Dinata",
    role: "Koordinator SC & Acara",
    badge: "Acara",
    image: "/jefranda_dinata.jpg",
  },
  {
    id: "wko-acara",
    name: "Khairun Niza",
    role: "Wakil Koordinator SC & Acara",
    badge: "Acara",
    image: "/khairun_niza.jpg",
  },
  {
    id: "ko-ic",
    name: "Muhammad Daniyal Wahidy",
    role: "Koordinator IC",
    badge: "IC",
    image: "/daniyal_wahidy.jpg",
  },
  {
    id: "ko-pdd",
    name: "Alfian Khusnul Fatoni",
    role: "Koordinator PDD",
    badge: "PDD",
    image: "/alfian_fatoni.jpg",
  },
  {
    id: "ko-logtrans",
    name: "Muhammad Faidza Airlangga",
    role: "Koordinator Logtrans",
    badge: "Logtrans",
    image: "/faidza_airlangga.jpg",
  },
  {
    id: "ko-medis",
    name: "Callysta Goesti Annayla S.",
    role: "Koordinator Medis",
    badge: "Medis",
    image: "/callysta_goesti.jpg",
  },
  {
    id: "ko-mk",
    name: "Muhammad Ivandy Rohman",
    role: "Koordinator MK",
    badge: "MK",
    image: "/ivandy_rohman.jpg",
  },
  {
    id: "wko-mk",
    name: "Dealova Fransisca Ferlianti",
    role: "Wakil Koordinator MK",
    badge: "MK",
    image: "/dealova_fransisca.jpg",
  },
];

export default function PanitiaCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = PANITIA_PERSONS.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.cardStack}>
        {PANITIA_PERSONS.map((person, i) => {
          let offset = i - activeIndex;

          // Circular offset calculation
          if (offset < -Math.floor(total / 2)) offset += total;
          if (offset > Math.floor(total / 2)) offset -= total;

          const isCenter = offset === 0;
          const absOffset = Math.abs(offset);

          // 3D Coverflow positioning math matching screenshot 1:1
          const xOffset = offset * 145;
          const yOffset = absOffset * 6;
          const scale = 1 - absOffset * 0.12;
          const rotateY = offset * -12;
          const zIndex = 30 - absOffset;
          const opacity = Math.max(0.35, 1 - absOffset * 0.22);
          const blur = isCenter ? 0 : absOffset === 1 ? 1.5 : 4;

          const shadow = isCenter
            ? "0 22px 45px rgba(0, 0, 0, 0.45), 0 0 30px rgba(31, 75, 93, 0.4)"
            : "0 10px 25px rgba(0, 0, 0, 0.25)";

          const border = isCenter
            ? "1px solid rgba(104, 207, 235, 0.8)"
            : "1px solid rgba(255, 255, 255, 0.15)";

          return (
            <div
              key={person.id}
              className={styles.card}
              onClick={() => setActiveIndex(i)}
              style={{
                transform: `translate(calc(-50% + ${xOffset}px), calc(-50% + ${yOffset}px)) scale(${scale}) rotateY(${rotateY}deg)`,
                zIndex: zIndex,
                opacity: opacity,
                filter: `blur(${blur}px)`,
                boxShadow: shadow,
                border: border,
                transition:
                  "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1), filter 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s ease",
                willChange: "transform, opacity, filter",
              }}
            >
              {/* Background Photo */}
              <img
                src={person.image}
                alt={person.name}
                className={styles.cardPhoto}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/nabil_qudsi.jpg";
                }}
              />

              {/* Bottom Dark Gradient */}
              <div className={styles.cardGradient} />

              {/* Footer Content Overlay */}
              <div className={styles.cardFooter}>
                <span className={styles.badgePill}>{person.badge}</span>
                <h3 className={styles.personName}>{person.name}</h3>
                <p className={styles.personRole}>{person.role}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls matching screenshot */}
      <div className={styles.controlsWrapper}>
        <div className={styles.btnGroup}>
          <button
            className={styles.navBtn}
            onClick={handlePrev}
            aria-label="Previous card"
          >
            ‹
          </button>
          <button
            className={styles.navBtn}
            onClick={handleNext}
            aria-label="Next card"
          >
            ›
          </button>
        </div>

        <div className={styles.dots}>
          {PANITIA_PERSONS.map((_, idx) => (
            <div
              key={idx}
              className={`${styles.dot} ${
                idx === activeIndex ? styles.dotActive : ""
              }`}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
