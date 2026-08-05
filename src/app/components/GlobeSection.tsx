"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, Center } from "@react-three/drei";
import { getCoordinatesFromLatLng } from "@/utils/coordinates";
import * as THREE from "three";
import styles from "../page.module.css";

const clusters = [
  { id: "01", name: "Cluster Japan", country: "Jepang", desc: "Dikenal dengan disiplin dan teknologi tinggi. Cluster ini melambangkan inovasi dan ketelitian.", location: [35.6762, 139.6503] },
  { id: "02", name: "Cluster UK", country: "Inggris", desc: "Pusat revolusi industri dan pendidikan dunia. Melambangkan sejarah dan wawasan luas.", location: [51.5072, -0.1276] },
  { id: "03", name: "Cluster USA", country: "Amerika Serikat", desc: "Pusat bisnis dan teknologi modern. Mewakili semangat kebebasan dan eksplorasi.", location: [40.7128, -74.0060] },
  { id: "04", name: "Cluster Indonesia", country: "Indonesia", desc: "Negara kepulauan dengan keberagaman budaya. Simbol dari persatuan, kolaborasi, dan gotong royong.", location: [-6.2088, 106.8456] },
  { id: "05", name: "Cluster Brazil", country: "Brasil", desc: "Dikenal dengan hutan hujan Amazon dan semangat meriah. Melambangkan energi positif dan vitalitas.", location: [-22.9068, -43.1729] }
];

// Jari-jari absolut dalam perhitungan koordinat
const EARTH_RADIUS = 1.0; 

function EarthModel() {
  const { scene } = useGLTF("/Earth.glb");
  
  return (
    <Center>
      {/* Skala 0.97 dan Rotasi -12 derajat (-0.21 rad) diterapkan sesuai kalibrasi */}
      <primitive object={scene} scale={0.97} rotation={[0, -0.21, 0]} />
    </Center>
  );
}

function Marker({ location, isActive, label }: { location: number[], isActive: boolean, label: string }) {
  const { x, y, z } = getCoordinatesFromLatLng(location[0], location[1], EARTH_RADIUS);
  const markerPos = new THREE.Vector3(x, y, z).multiplyScalar(1.05);
  
  const { camera } = useThree();
  const [isVisible, setIsVisible] = useState(true);

  // Sembunyikan marker jika berada di balik bumi
  useFrame(() => {
    const directionToMarker = markerPos.clone().normalize();
    const directionToCamera = camera.position.clone().normalize();
    // Jika dot product positif, marker ada di sisi depan bumi yang menghadap kamera
    setIsVisible(directionToMarker.dot(directionToCamera) > 0.1);
  });

  return (
    <Html position={[markerPos.x, markerPos.y, markerPos.z]} center zIndexRange={[100, 0]} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.2s', pointerEvents: isVisible ? 'auto' : 'none' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pointerEvents: 'none' }}>
        <div style={{
          backgroundColor: isActive ? 'var(--color-primary)' : '#ffffff',
          border: isActive ? '3px solid #ffffff' : '2px solid rgba(0,0,0,0.1)',
          borderRadius: '50%',
          width: isActive ? '24px' : '16px',
          height: isActive ? '24px' : '16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          transition: 'all 0.3s ease',
        }}></div>
        {isActive && (
          <div style={{
            marginTop: '8px',
            background: '#ffffff',
            color: 'var(--color-dark)',
            padding: '4px 12px',
            fontWeight: 700,
            borderRadius: '999px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            fontSize: '0.875rem',
            whiteSpace: 'nowrap',
          }}>
            {label}
          </div>
        )}
      </div>
    </Html>
  );
}

function CameraController({ activeIdx }: { activeIdx: number }) {
  const { camera } = useThree();
  
  useFrame(() => {
    const activeCluster = clusters[activeIdx];
    const { x, y, z } = getCoordinatesFromLatLng(activeCluster.location[0], activeCluster.location[1], EARTH_RADIUS);
    
    // Jarak kamera dari titik nol adalah 3.0 kali radius agar globe tidak terpotong
    const targetPos = new THREE.Vector3(x, y, z).normalize().multiplyScalar(3.0);
    
    camera.position.lerp(targetPos, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function GlobeSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => setActiveIdx((i) => (i + 1) % clusters.length);
  const handlePrev = () => setActiveIdx((i) => (i - 1 + clusters.length) % clusters.length);

  return (
    <section id="kelompok" style={{ padding: '5rem 3rem', backgroundColor: '#FFFCF7', position: 'relative' }}>
      
      <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', textAlign: 'center', color: '#1A1A1A', fontWeight: 700, letterSpacing: '-0.02em' }}>
        Cluster Negara
      </h2>

      <div className={styles.globeGrid}>
        
        {/* Globe Container */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <div style={{ 
            width: '100%', 
            maxWidth: '420px', 
            aspectRatio: '1/1', 
            position: 'relative', 
            borderRadius: '24px', 
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)', 
            background: 'linear-gradient(135deg, #e0f2fe 0%, #dbeafe 100%)', 
            overflow: 'hidden' 
          }}>
            <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
              <ambientLight intensity={1.5} />
              <pointLight position={[10, 10, 10]} intensity={2} />
              <directionalLight position={[-5, 5, 5]} intensity={1} />
              
              <EarthModel />
              
              {clusters.map((cluster, index) => (
                <Marker 
                  key={cluster.id} 
                  location={cluster.location} 
                  isActive={index === activeIdx} 
                  label={cluster.country} 
                />
              ))}

              <OrbitControls makeDefault enableZoom={true} enablePan={false} autoRotate={false} />
              
              <CameraController activeIdx={activeIdx} />
            </Canvas>
          </div>
          
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
            <button onClick={handlePrev} style={{ fontSize: '0.875rem', fontWeight: 600, padding: '0.6rem 1.5rem', backgroundColor: '#1A1A1A', color: '#ffffff', borderRadius: '999px', border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}>
              ← Prev
            </button>
            <button onClick={handleNext} style={{ fontSize: '0.875rem', fontWeight: 600, padding: '0.6rem 1.5rem', backgroundColor: '#1A1A1A', color: '#ffffff', borderRadius: '999px', border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}>
              Next →
            </button>
          </div>
        </div>

        {/* Info Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ backgroundColor: '#ffffff', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.05)' }}>
            <div style={{ fontWeight: 700, fontSize: '0.75rem', color: '#6B7280', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              CLUSTER · {clusters[activeIdx].id}
            </div>
            <h3 style={{ fontSize: '2rem', marginBottom: '0.75rem', lineHeight: 1.2, fontWeight: 700 }}>{clusters[activeIdx].name}</h3>
            <div style={{ display: 'inline-block', backgroundColor: '#FFD166', padding: '0.4rem 1rem', borderRadius: '999px', fontWeight: 600, marginBottom: '1rem', color: '#1A1A1A', fontSize: '0.8rem' }}>
              Negara: {clusters[activeIdx].country}
            </div>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: '#6B7280' }}>
              {clusters[activeIdx].desc}
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <Link href={`/kelompok?cluster=${clusters[activeIdx].id}`} style={{ display: 'inline-block', backgroundColor: '#1A1A1A', color: '#ffffff', padding: '0.6rem 1.5rem', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', transition: 'background-color 0.2s' }}>
                Lihat Kelompok
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
