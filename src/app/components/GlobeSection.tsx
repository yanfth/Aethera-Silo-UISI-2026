"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, Center } from "@react-three/drei";
import { getCoordinatesFromLatLng } from "@/utils/coordinates";
import * as THREE from "three";
import styles from "../page.module.css";

export interface ClusterData {
  id: string;
  no: number;
  name: string;
  country: string;
  continent: "Asia" | "Afrika" | "Eropa" | "Amerika" | "Oceania";
  flag: string;
  flagUrl: string;
  desc: string;
  location: [number, number];
}

export const CLUSTERS: ClusterData[] = [
  // --- ASIA ---
  {
    id: "01",
    no: 1,
    name: "NEGARA JEPANG",
    country: "Jepang",
    continent: "Asia",
    flag: "🇯🇵",
    flagUrl: "https://flagcdn.com/jp.svg",
    desc: "Negara Sakura dengan filosofi Kaizen dan teknologi canggih. Melambangkan disiplin, inovasi, dan dedikasi tinggi.",
    location: [49.9400, 148.6400],
  },
  {
    id: "02",
    no: 2,
    name: "NEGARA KOREA SELATAN",
    country: "Korea Selatan",
    continent: "Asia",
    flag: "🇰🇷",
    flagUrl: "https://flagcdn.com/kr.svg",
    desc: "Pusat gelombang budaya global dan inovasi teknologi digital. Mewakili kreativitas, kerja keras, dan jaringan global.",
    location: [42.0000, 115.0000],
  },
  {
    id: "03",
    no: 3,
    name: "NEGARA TIONGKOK",
    country: "Tiongkok",
    continent: "Asia",
    flag: "🇨🇳",
    flagUrl: "https://flagcdn.com/cn.svg",
    desc: "Negara dengan peradaban tertua dan pertumbuhan ekonomi cepat. Simbol ketahanan, strategi, dan visi masa depan.",
    location: [38.0000, 100.0000],
  },
  {
    id: "04",
    no: 4,
    name: "NEGARA INDIA",
    country: "India",
    continent: "Asia",
    flag: "🇮🇳",
    flagUrl: "https://flagcdn.com/in.svg",
    desc: "Pusat keberagaman budaya dan talenta teknologi dunia. Melambangkan adaptabilitas, kecerdasan, dan kebersamaan.",
    location: [20.0000, 75.0000],
  },

  // --- AFRIKA ---
  {
    id: "05",
    no: 5,
    name: "NEGARA MESIR",
    country: "Mesir",
    continent: "Afrika",
    flag: "🇪🇬",
    flagUrl: "https://flagcdn.com/eg.svg",
    desc: "Negara warisan Piramida dan Sungai Nil. Melambangkan fondasi pengetahuan sejarah, pondasi kuat, dan kejayaan.",
    location: [25.0000, 28.0000],
  },
  {
    id: "06",
    no: 6,
    name: "NEGARA AFRIKA SELATAN",
    country: "Afrika Selatan",
    continent: "Afrika",
    flag: "🇿🇦",
    flagUrl: "https://flagcdn.com/za.svg",
    desc: "Negara pelangi dengan semangat Ubuntu. Mewakili toleransi, persatuan dalam perbedaan, dan keberanian.",
    location: [-25.7100, 11.7600],
  },
  {
    id: "07",
    no: 7,
    name: "NEGARA KENYA",
    country: "Kenya",
    continent: "Afrika",
    flag: "🇰🇪",
    flagUrl: "https://flagcdn.com/ke.svg",
    desc: "Pusat keanekaragaman hayati dan inovasi fintech Afrika. Melambangkan kebebasan, daya tahan, dan ketangguhan.",
    location: [4.2200, 29.4900],
  },

  // --- EROPA ---
  {
    id: "08",
    no: 8,
    name: "NEGARA PRANCIS",
    country: "Prancis",
    continent: "Eropa",
    flag: "🇫🇷",
    flagUrl: "https://flagcdn.com/fr.svg",
    desc: "Pusat seni, filsafat, dan diplomasi dunia. Melambangkan kebebasan berpikir, kesetaraan, dan estetika karya tinggi.",
    location: [51.3200, 16.1900],
  },
  {
    id: "09",
    no: 9,
    name: "NEGARA BELANDA",
    country: "Belanda",
    continent: "Eropa",
    flag: "🇳🇱",
    flagUrl: "https://flagcdn.com/nl.svg",
    desc: "Pelopor sistem manajemen air dan pemikiran terbuka. Melambangkan solusi kreatif dan inovasi ramah lingkungan.",
    location: [57.9700, 33.9300],
  },
  {
    id: "10",
    no: 10,
    name: "NEGARA JERMAN",
    country: "Jerman",
    continent: "Eropa",
    flag: "🇩🇪",
    flagUrl: "https://flagcdn.com/de.svg",
    desc: "Pusat rekayasa presisi dan riset keilmuan tinggi. Melambangkan ketelitian, logika terstruktur, dan kualitas tinggi.",
    location: [59.6300, 52.7700],
  },

  // --- AMERIKA ---
  {
    id: "11",
    no: 11,
    name: "NEGARA AMERIKA SERIKAT",
    country: "Amerika Serikat",
    continent: "Amerika",
    flag: "🇺🇸",
    flagUrl: "https://flagcdn.com/us.svg",
    desc: "Pusat kewirausahaan global dan ekosistem startup. Mewakili keberanian mengambil risiko, eksplorasi, dan kepemimpinan.",
    location: [43.0100, -111.2700],
  },
  {
    id: "12",
    no: 12,
    name: "NEGARA MEKSIKO",
    country: "Meksiko",
    continent: "Amerika",
    flag: "🇲🇽",
    flagUrl: "https://flagcdn.com/mx.svg",
    desc: "Warisan budaya Maya & Aztek dengan kehangatan solidaritas. Melambangkan semangat pantang menyerah dan kekayaan tradisi.",
    location: [27.4900, -120.1300],
  },
  {
    id: "13",
    no: 13,
    name: "NEGARA KANADA",
    country: "Kanada",
    continent: "Amerika",
    flag: "🇨🇦",
    flagUrl: "https://flagcdn.com/ca.svg",
    desc: "Negara dengan bentang alam megah dan keberagaman harmonis. Melambangkan keramahan, kedamaian, dan keberlanjutan.",
    location: [46.8900, -121.2400],
  },
  {
    id: "14",
    no: 14,
    name: "NEGARA BRASIL",
    country: "Brasil",
    continent: "Amerika",
    flag: "🇧🇷",
    flagUrl: "https://flagcdn.com/br.svg",
    desc: "Rumah bagi Amazon dan semangat kebersamaan meriah. Melambangkan energi positif, vitalitas, dan daya juang tinggi.",
    location: [-14.0700, -71.3700],
  },

  // --- OCEANIA ---
  {
    id: "15",
    no: 15,
    name: "NEGARA AUSTRALIA",
    country: "Australia",
    continent: "Oceania",
    flag: "🇦🇺",
    flagUrl: "https://flagcdn.com/au.svg",
    desc: "Benua unik dengan ekosistem khas dan gaya hidup progresif. Mewakili ketahanan alami, eksplorasi bahari, dan kemandirian.",
    location: [-25.2744, 124.8100],
  },
  {
    id: "16",
    no: 16,
    name: "NEGARA PAPUA NUGINI",
    country: "Papua Nugini",
    continent: "Oceania",
    flag: "🇵🇬",
    flagUrl: "https://flagcdn.com/pg.svg",
    desc: "Negara tetangga dengan kekayaan ratusan tradisi adat luhur. Melambangkan kearifan lokal dan persaudaraan Pasifik.",
    location: [-8.5300, 133.6800],
  },
];

const EARTH_RADIUS = 1.0;

function EarthModel() {
  const { scene } = useGLTF("/Earth.glb");
  return (
    <Center>
      <primitive object={scene} scale={0.97} rotation={[0, -0.21, 0]} />
    </Center>
  );
}

function Marker({
  location,
  isActive,
  label,
  flag,
  flagUrl,
  onClick,
}: {
  location: [number, number];
  isActive: boolean;
  label: string;
  flag: string;
  flagUrl?: string;
  onClick: () => void;
}) {
  const coords = getCoordinatesFromLatLng(location[0], location[1], EARTH_RADIUS);
  const position = new THREE.Vector3(coords.x, coords.y, coords.z);

  return (
    <group position={position}>
      <mesh onClick={onClick}>
        <sphereGeometry args={[isActive ? 0.05 : 0.03, 16, 16]} />
        <meshBasicMaterial color={isActive ? "#FF3B30" : "#68cfeb"} />
      </mesh>

      <Html distanceFactor={3.5} zIndexRange={[100, 0]}>
        <div
          onClick={onClick}
          style={{
            transform: "translate(-50%, -100%)",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2px",
            transition: "all 0.3s ease",
            transformOrigin: "bottom center",
          }}
        >
          {flagUrl ? (
            <img
              src={flagUrl}
              alt={label}
              style={{
                width: isActive ? "26px" : "18px",
                height: isActive ? "26px" : "18px",
                borderRadius: "50%",
                objectFit: "cover",
                border: isActive ? "2px solid #ffffff" : "1.5px solid rgba(255,255,255,0.8)",
                boxShadow: isActive ? "0 0 12px rgba(255,59,48,0.8)" : "0 2px 6px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease",
              }}
            />
          ) : (
            <span style={{ fontSize: isActive ? "1.5rem" : "1rem" }}>{flag}</span>
          )}

          {isActive && (
            <div
              style={{
                background: "rgba(27, 40, 56, 0.9)",
                color: "#ffffff",
                padding: "2px 8px",
                borderRadius: "12px",
                fontSize: "0.65rem",
                fontWeight: 700,
                whiteSpace: "nowrap",
                border: "1px solid rgba(104, 207, 235, 0.5)",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span>{flag}</span> {label}
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}

function CameraController({ activeIdx }: { activeIdx: number }) {
  const { camera } = useThree();
  const targetPosRef = React.useRef(new THREE.Vector3(0, 0, 3.5));

  React.useEffect(() => {
    const activeCluster = CLUSTERS[activeIdx];
    const coords = getCoordinatesFromLatLng(
      activeCluster.location[0],
      activeCluster.location[1],
      3.2
    );
    targetPosRef.current.set(coords.x, coords.y, coords.z);
  }, [activeIdx]);

  useFrame(() => {
    camera.position.lerp(targetPosRef.current, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function GlobeSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeCluster = CLUSTERS[activeIdx];

  const handleNext = () => setActiveIdx((i) => (i + 1) % CLUSTERS.length);
  const handlePrev = () =>
    setActiveIdx((i) => (i - 1 + CLUSTERS.length) % CLUSTERS.length);

  return (
    <section id="kelompok" className={styles.section} data-aos="fade-up">
      <h2
        style={{
          fontSize: "2.25rem",
          marginBottom: "0.5rem",
          textAlign: "center",
          color: "#1B2838",
          fontWeight: 800,
          letterSpacing: "-0.03em",
        }}
      >
        NEGARA-NEGARA <span style={{ background: "linear-gradient(135deg, var(--lp-ocean-blue), var(--lp-aqua))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>AETHERA SILO UISI 2026</span>
      </h2>
      <p
        style={{
          textAlign: "center",
          color: "var(--lp-text-muted)",
          fontSize: "0.95rem",
          marginBottom: "2rem",
          maxWidth: "550px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        16 Negara dari 5 Benua di Seluruh Dunia
      </p>

      <div className={styles.globeGrid}>
        {/* Globe 3D Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "480px",
              aspectRatio: "1/1",
              position: "relative",
            }}
          >
            <Canvas
              camera={{ position: [0, 0, 3.5], fov: 45 }}
              style={{ background: "transparent" }}
              gl={{ alpha: true }}
            >
              <ambientLight intensity={1.6} />
              <pointLight position={[10, 10, 10]} intensity={2} />
              <directionalLight position={[-5, 5, 5]} intensity={1} />

              <EarthModel />

              {CLUSTERS.map((cluster, index) => (
                <Marker
                  key={cluster.id}
                  location={cluster.location}
                  isActive={index === activeIdx}
                  label={cluster.country}
                  flag={cluster.flag}
                  flagUrl={cluster.flagUrl}
                  onClick={() => setActiveIdx(index)}
                />
              ))}

              <OrbitControls
                makeDefault
                enableZoom={true}
                enablePan={false}
                autoRotate={false}
              />

              <CameraController activeIdx={activeIdx} />
            </Canvas>
          </div>

          <div
            style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }}
          >
            <button
              onClick={handlePrev}
              style={{
                fontSize: "0.875rem",
                fontWeight: 700,
                padding: "0.55rem 1.4rem",
                background: "var(--lp-ocean-blue)",
                color: "#ffffff",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: "0 4px 15px rgba(31,75,93,0.3)",
              }}
            >
              ‹ Negara Sebelumnya
            </button>
            <button
              onClick={handleNext}
              style={{
                fontSize: "0.875rem",
                fontWeight: 700,
                padding: "0.55rem 1.4rem",
                background: "var(--lp-ocean-blue)",
                color: "#ffffff",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: "0 4px 15px rgba(31,75,93,0.3)",
              }}
            >
              Negara Selanjutnya ›
            </button>
          </div>
        </div>

        {/* Info & Country Selection Container */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {/* Active Card Details */}
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              padding: "2rem",
              borderRadius: "20px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
              border: "1px solid rgba(255,255,255,0.4)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "0.75rem",
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  color: "var(--lp-ocean-blue)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                BENUA {activeCluster.continent.toUpperCase()}
              </span>
              <span
                style={{
                  background: "#000",
                  color: "#fff",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "6px",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                }}
              >
                #{activeCluster.id}
              </span>
            </div>

            <h3
              style={{
                fontSize: "1.85rem",
                marginBottom: "0.5rem",
                lineHeight: 1.2,
                fontWeight: 800,
                color: "var(--lp-text)",
              }}
            >
              {activeCluster.flag} {activeCluster.name}
            </h3>

            <div
              style={{
                display: "inline-block",
                background: "rgba(31,75,93,0.12)",
                padding: "0.35rem 0.9rem",
                borderRadius: "999px",
                fontWeight: 700,
                marginBottom: "1rem",
                color: "var(--lp-ocean-blue)",
                fontSize: "0.82rem",
                border: "1px solid rgba(31,75,93,0.2)",
              }}
            >
              Negara: {activeCluster.country} ({activeCluster.continent})
            </div>

            <p
              style={{
                fontSize: "0.92rem",
                lineHeight: 1.6,
                color: "var(--lp-text-muted)",
                marginBottom: "1.25rem",
              }}
            >
              {activeCluster.desc}
            </p>

            <div>
              <Link
                href={`/kelompok/detail?cluster=${activeCluster.id}`}
                style={{
                  display: "inline-block",
                  background: "var(--lp-ocean-blue)",
                  color: "#ffffff",
                  padding: "0.6rem 1.4rem",
                  borderRadius: "999px",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 0.3s",
                  boxShadow: "0 4px 15px rgba(31,75,93,0.3)",
                }}
              >
                Lihat Negara →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
