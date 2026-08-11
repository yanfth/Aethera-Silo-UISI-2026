'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { Hexagon, Compass, ChevronDown, Sparkles, Users, BookOpen, Globe } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <img 
          src="/logo_aethera.png?v=3" 
          alt="AETHERA Logo" 
          style={{ 
            height: "44px", 
            width: "auto", 
            objectFit: "contain" 
          }} 
        />
        <span>AETHERA SILO UISI 2026</span>
      </Link>

      <div className={styles.navLinks}>
        <Link
          href="/"
          className={`${styles.navLink} ${isActive("/") ? styles.activeNavLink : ""}`}
        >
          Beranda
        </Link>


        {/* Dropdown Menu Jelajah */}
        <div className={styles.dropdownWrapper}>
          <button
            className={styles.navLink}
            style={{ border: "none", background: "transparent", cursor: "pointer" }}
          >
            <Compass size={16} /> Jelajah <ChevronDown size={14} />
          </button>

          <div className={styles.dropdownMenu}>
            <Link href="/logo" className={styles.dropdownItem}>
              <Sparkles size={16} style={{ color: "var(--lp-ocean-blue)" }} /> Filosofi Logo
            </Link>
            <Link href="/panitia" className={styles.dropdownItem}>
              <Users size={16} style={{ color: "var(--lp-ocean-blue)" }} /> Panitia SILO
            </Link>
            <Link href="/penugasan" className={styles.dropdownItem}>
              <BookOpen size={16} style={{ color: "var(--lp-ocean-blue)" }} /> Penugasan &amp; Guidebook
            </Link>
            <Link href="/kelompok" className={styles.dropdownItem}>
              <Globe size={16} style={{ color: "var(--lp-ocean-blue)" }} /> Cluster Kelompok
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
