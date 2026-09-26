"use client";
import { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function AosInit() {
  useEffect(() => {
    const initAOS = async () => {
      try {
        const AOS = (await import('aos')).default;
        AOS.init({
          duration: 800,
          once: true,
          easing: 'ease-out-cubic',
        });
      } catch (err) {
        console.error("Gagal inisialisasi AOS:", err);
      }
    };

    initAOS();
  }, []);
  
  return null;
}
