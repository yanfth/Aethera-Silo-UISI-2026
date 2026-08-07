"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "../page.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>⬡ SILO UISI</div>
      
      {/* Mobile Menu Button */}
      <button 
        className={`${styles.mobileMenuBtn} ${isOpen ? styles.mobileMenuBtnOpen : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <span className={styles.menuIconWrapper}>{isOpen ? "✕" : "☰"}</span>
      </button>

      {/* Nav Links */}
      <div className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ""}`}>
        <Link href="#about" className={styles.navLink} onClick={() => setIsOpen(false)}>
          Tentang
        </Link>
        <Link href="#logo" className={styles.navLink} onClick={() => setIsOpen(false)}>
          Logo
        </Link>
        <Link href="#dokumentasi" className={styles.navLink} onClick={() => setIsOpen(false)}>
          Dokumentasi
        </Link>
        <Link href="#panitia" className={styles.navLink} onClick={() => setIsOpen(false)}>
          Panitia
        </Link>
        <Link href="#guidebook" className={styles.navLink} onClick={() => setIsOpen(false)}>
          Guidebook
        </Link>
        <Link href="#penugasan" className={styles.navLink} onClick={() => setIsOpen(false)}>
          Penugasan
        </Link>
        <Link href="#kelompok" className={styles.navLink} onClick={() => setIsOpen(false)}>
          Kelompok
        </Link>
        <Link href="#merch" className={styles.navLink} onClick={() => setIsOpen(false)}>
          Merchandise
        </Link>
      </div>
    </nav>
  );
}
