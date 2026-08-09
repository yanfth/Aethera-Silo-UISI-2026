'use client';

import React, { useState, useMemo } from "react";
import styles from "./AnggotaDivisi.module.css";
import { getCloudinaryUrl } from "@/utils/cloudinary";
import {
  Users,
  Shield,
  Camera,
  Truck,
  HeartPulse,
  UserCheck,
  Coffee,
  Search,
  Sparkles,
  User,
  GraduationCap,
  Megaphone,
  ShieldAlert
} from "lucide-react";

interface Member {
  id: string;
  name: string;
  prodi: string;
  role: string;
  divisionId: string;
  divisionName: string;
  image?: string;
}

interface Division {
  id: string;
  name: string;
  shortName: string;
  icon: React.ReactNode;
  description: string;
  koordinator: string;
}

const DIVISIONS: Division[] = [
  {
    id: "bph",
    name: "Badan Pengurus Harian (BPH)",
    shortName: "BPH",
    icon: <Shield size={16} />,
    description: "Penanggung jawab utama, pengarah kebijakan, dan pengelola administrasi & keuangan AETHERA SILO UISI 2026.",
    koordinator: "Nabil Qudsi Mas’ud (Ketua Pelaksana)"
  },
  {
    id: "acara",
    name: "Divisi Steering Committee & Acara",
    shortName: "SC & Acara",
    icon: <Sparkles size={16} />,
    description: "Merancang konsep, alur rundown acara, tata panggung, dan eksekusi seluruh kegiatan AETHERA SILO UISI 2026.",
    koordinator: "Jefranda Dinata (Koordinator SC & Acara)"
  },
  {
    id: "pdd",
    name: "Divisi Publikasi, Dekorasi & Dokumentasi (PDD)",
    shortName: "PDD",
    icon: <Camera size={16} />,
    description: "Mengelola desain visual, videografi, fotografi, materi publikasi, dan estetika dekorasi.",
    koordinator: "Alfian Khusnul Fatoni"
  },
  {
    id: "logtrans",
    name: "Divisi Logistik, Transportasi & Konsumsi (Logtrans & Konsumsi)",
    shortName: "Logtrans & Konsumsi",
    icon: <Truck size={16} />,
    description: "Menyiapkan perlengkapan teknis, prasarana kegiatan, transportasi, serta pengolahan kebutuhan konsumsi panitia dan peserta.",
    koordinator: "Muhammad Faidza Airlangga"
  },
  {
    id: "medis",
    name: "Divisi Medis & K3",
    shortName: "Medis",
    icon: <HeartPulse size={16} />,
    description: "Pertolongan pertama, kesiapsiagaan posko kesehatan, dan keselamatan seluruh peserta dan panitia.",
    koordinator: "Callysta Goesti Annayla Sumarlin (Kepala Divisi Medis)"
  },
  {
    id: "mentor",
    name: "Divisi Mentor Kelompok",
    shortName: "Mentor Kelompok",
    icon: <UserCheck size={16} />,
    description: "Pendamping dan pembimbing utama setiap rasi kelompok mahasiswa baru Satya Ismaya 14.",
    koordinator: "Muhammad Ivandy Rohman (Koordinator Mentor)"
  },
  {
    id: "humas",
    name: "Divisi Humas & Sponsorship",
    shortName: "Humas & Sponsorship",
    icon: <Megaphone size={16} />,
    description: "Mengelola komunikasi publik, jaringan eksternal, publikasi media partner, dan kemitraan sponsorship AETHERA SILO UISI 2026.",
    koordinator: "Tim Humas & Sponsorship"
  },
  {
    id: "ic",
    name: "Divisi Initiator & Control (IC)",
    shortName: "IC",
    icon: <ShieldAlert size={16} />,
    description: "Divisi Initiator & Control (IC) bertugas menjaga ketertiban, kedisiplinan, serta mengarahkan alur kegiatan AETHERA SILO UISI 2026.",
    koordinator: "Tim IC"
  }
];

const MEMBERS: Member[] = [
  // BPH
  { id: "1", name: "Nabil Qudsi Mas’ud", prodi: "Ekonomi Syariah", role: "Ketua Pelaksana", divisionId: "bph", divisionName: "BPH", image: "/nabil_qudsi.webp" },
  { id: "2", name: "M. Rosyid Ridlo", prodi: "Teknik Logistik", role: "Sekretaris 1", divisionId: "bph", divisionName: "BPH", image: "/rosyid_ridlo.webp" },
  { id: "3", name: "Hillyatut Taqiya", prodi: "Ekonomi Syariah", role: "Sekretaris 2", divisionId: "bph", divisionName: "BPH", image: "/hillyatut_taqiya.webp" },
  { id: "4", name: "Zahra Naila Supriyono Putri", prodi: "Akuntansi", role: "Bendahara 1", divisionId: "bph", divisionName: "BPH", image: "/zahra_naila.webp" },
  { id: "5", name: "Putri Fara Diba", prodi: "Ekonomi Syariah", role: "Bendahara 2", divisionId: "bph", divisionName: "BPH", image: "/putri_fara.webp" },

  // SC & Acara
  { id: "6", name: "Jefranda Dinata", prodi: "Ekonomi Syariah", role: "Koordinator SC & Acara", divisionId: "acara", divisionName: "SC & Acara", image: "/jefranda_dinata.webp" },
  { id: "7", name: "Khairun Niza", prodi: "Manajemen", role: "Wakil Koordinator SC & Acara", divisionId: "acara", divisionName: "SC & Acara", image: "/khairun_niza.webp" },
  { id: "8", name: "Melly Mutiara", prodi: "Manajemen", role: "Anggota SC", divisionId: "acara", divisionName: "SC & Acara", image: "/melly_mutiara.webp" },
  { id: "9", name: "Muhaemit", prodi: "Manajemen", role: "Anggota SC", divisionId: "acara", divisionName: "SC & Acara", image: "/muhaemit.webp" },
  { id: "10", name: "Novi Risma Ameliasari", prodi: "Teknik Kimia", role: "Anggota SC", divisionId: "acara", divisionName: "SC & Acara", image: "/novi_risma.webp" },
  { id: "11", name: "Regitha Eka Purwananditha Candraningtyas", prodi: "Sistem Informasi", role: "Anggota SC", divisionId: "acara", divisionName: "SC & Acara", image: "/regitha_eka.webp" },
  { id: "12", name: "Sneha Naafi' Amrulloh", prodi: "Teknik Logistik", role: "Anggota SC", divisionId: "acara", divisionName: "SC & Acara", image: "/sneha_naafi.webp" },
  { id: "13", name: "Valentino Zaky", prodi: "Manajemen", role: "Anggota SC", divisionId: "acara", divisionName: "SC & Acara", image: "/valentino_zaky.webp" },
  { id: "14", name: "Chelsea Aurelia Manihuruk", prodi: "Akuntansi", role: "Anggota Acara", divisionId: "acara", divisionName: "SC & Acara", image: "/chelsea_aurelia.webp" },
  { id: "15", name: "Nisa Dzakiatul Fikriyah", prodi: "Akuntansi", role: "Anggota Acara", divisionId: "acara", divisionName: "SC & Acara", image: "/nisa_dzakiatul.webp" },
  { id: "16", name: "Rendy Alfiansyah", prodi: "Informatika", role: "Anggota Acara", divisionId: "acara", divisionName: "SC & Acara", image: "/rendy_alfiansyah.webp" },
  { id: "17", name: "Jevamya Chelcie Wicaksana", prodi: "Teknik Kimia", role: "Anggota Acara", divisionId: "acara", divisionName: "SC & Acara", image: "/jevamya_chelcie.webp" },
  { id: "18", name: "Muhammad Hanif Raja I", prodi: "Manajemen", role: "Anggota Acara", divisionId: "acara", divisionName: "SC & Acara", image: "/muhammad_hanif.webp" },
  { id: "19", name: "Dhea Safira Rahmawati", prodi: "Teknologi Industri Pertanian", role: "Anggota Acara", divisionId: "acara", divisionName: "SC & Acara", image: "/dhea_safira.webp" },

  // PDD
  { id: "30", name: "Alfian Khusnul Fatoni", prodi: "Informatika", role: "Koordinator PDD", divisionId: "pdd", divisionName: "PDD", image: "/alfian_fatoni.webp" },
  { id: "31", name: "Wanda Adelya Pratiwi", prodi: "Akuntansi", role: "Anggota PDD", divisionId: "pdd", divisionName: "PDD", image: "/wanda_adelya.webp" },
  { id: "32", name: "Salwa Mufidah Hayati", prodi: "Eksyar", role: "Anggota PDD", divisionId: "pdd", divisionName: "PDD", image: "/salwa_mufidah.webp" },
  { id: "33", name: "Mohammad Fathir Ubaidillah Al Azubi", prodi: "Manajemen", role: "Anggota PDD", divisionId: "pdd", divisionName: "PDD", image: "/fathir_al_azubi.webp" },
  { id: "34", name: "Athallah Yahya Armadhanu", prodi: "DKV", role: "Anggota PDD", divisionId: "pdd", divisionName: "PDD", image: "/athallah_armadhanu.webp" },
  { id: "35", name: "Encik Thuffayl Izzatul Syamsi", prodi: "DKV", role: "Anggota PDD", divisionId: "pdd", divisionName: "PDD", image: "/thuffayl_syamsi.webp" },
  { id: "36", name: "Muhammad Hadi Masbukhin Assafi'i", prodi: "DKV", role: "Anggota PDD", divisionId: "pdd", divisionName: "PDD", image: "/hadi_assafi.webp" },
  { id: "37", name: "Lelly Michela Aprilindo", prodi: "DKV", role: "Anggota PDD", divisionId: "pdd", divisionName: "PDD", image: "/lelly_michela.webp" },

  // Logtrans
  { id: "38", name: "Muhammad Faidza Airlangga", prodi: "Informatika", role: "Koordinator Logtrans", divisionId: "logtrans", divisionName: "Logtrans", image: "/faidza_airlangga.webp" },
  { id: "39", name: "Agil Boy Ahmada", prodi: "DKV", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans", image: "/agil_boy.webp" },
  { id: "40", name: "Galan Gantari", prodi: "Ekonomi Syariah", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans", image: "/galan_gantari.webp" },
  { id: "41", name: "M. Abdillah Malik", prodi: "Ekonomi Syariah", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans", image: "/abdillah_malik.webp" },
  { id: "42", name: "Muhammad Rizqi Fadhilah", prodi: "Informatika", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans", image: "/muhammad_rizqi.webp" },
  { id: "43", name: "Rais Attalla Prakasa", prodi: "Teknik Logistik", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans", image: "/rais_attalla.webp" },
  { id: "44", name: "Panji Nashrulloh", prodi: "DKV", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans", image: "/panji_nashrulloh.webp" },
  { id: "45", name: "Byandra Galang Atmodjo", prodi: "Manajemen", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans", image: "/byandra_galang.webp" },
  { id: "46", name: "Bagus Setyo Nugroho", prodi: "Informatika", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans", image: "/bagus_setyo.webp" },
  { id: "47", name: "M Awaludin Ikbar", prodi: "Informatika", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans", image: "/awaludin_ikbar.webp" },
  { id: "48", name: "Dimas Putra Ardiansyah", prodi: "Manajemen Rekayasa", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans", image: "/dimas_putra.webp" },
  { id: "49", name: "Muhammad Daniel Arya putra", prodi: "Informatika", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans", image: "/daniel_putra.webp" },
  { id: "50", name: "Ravil Rizkia Nurdiansyah", prodi: "Manajemen Rekayasa", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans", image: "/ravil_rizkia.webp" },
  { id: "51", name: "Aqil Ilham Anandra", prodi: "Teknik Kimia", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans", image: "/aqil_ilham.webp" },
  { id: "52", name: "Didin Khoiruddin Amin", prodi: "Teknik Logistik", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans", image: "/didin_khoiruddin.webp" },
  { id: "53", name: "Gading Najha Rahadiananto", prodi: "Teknik Logistik", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans", image: "/gading_najha.webp" },
  { id: "54", name: "Erlangga Harsyawardhana Aria Purwadi", prodi: "Teknik Logistik", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans", image: "/erlangga_harsya.webp" },
  { id: "55", name: "Rio Al Kaseno", prodi: "Informatika", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans", image: "/rio_al_kaseno.webp" },

  // Medis
  { id: "56", name: "Callysta Goesti Annayla Sumarlin", prodi: "Akuntansi", role: "Kepala Divisi Medis", divisionId: "medis", divisionName: "Medis", image: "/callysta_goesti.webp" },
  { id: "57", name: "Faza Sazkiyah", prodi: "Akuntansi", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis", image: "/faza_sazkiyah.webp" },
  { id: "58", name: "Reynata Hartani", prodi: "Teknik Kimia", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis", image: "/reynata_hartani.webp" },
  { id: "59", name: "Raditya Fahrezi Putra Ahsan", prodi: "Informatika", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis", image: "/raditya_fahrezi.webp" },
  { id: "60", name: "Mochamad Rifki Al Farizi", prodi: "Informatika", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis", image: "/rifki_al_farizi.webp" },
  { id: "61", name: "Jafar Sodiq", prodi: "Informatika", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis", image: "/jafar_sodiq.webp" },
  { id: "62", name: "Ananda Khusnul Selfiana", prodi: "Manajemen Rekayasa", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis", image: "/ananda_khusnul.webp" },
  { id: "63", name: "Pradita Syifa Azizah", prodi: "Akuntansi", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis", image: "/pradita_syifa.webp" },
  { id: "64", name: "Siti Nur Solika Anwar", prodi: "Akuntansi", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis", image: "/siti_nur_solika.webp" },
  { id: "65", name: "Muhammad Fahri Hidayat", prodi: "Teknik Logistik", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis", image: "/fahri_hidayat.webp" },
  { id: "66", name: "Abid Naufal Arifin", prodi: "Teknik Logistik", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis", image: "/abid_naufal.webp" },
  { id: "67", name: "Fauzan Ali Subhan", prodi: "Teknik Logistik", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis", image: "/fauzan_ali.webp" },
  { id: "68", name: "Airlangga Putra Andhika", prodi: "Teknik Kimia", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis", image: "/airlangga_putra.webp" },
  { id: "69", name: "Maria Fransiska Cicilia", prodi: "Teknik Kimia", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis", image: "/maria_fransiska.webp" },
  { id: "70", name: "Rio Kristoper Sinaga", prodi: "Teknik Kimia", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis", image: "/rio_kristoper.webp" },
  { id: "71", name: "Amirul Hakim", prodi: "Teknik Kimia", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis", image: "/amirul_hakim.webp" },

  // Mentor Kelompok
  { id: "72", name: "Muhammad Ivandy Rohman", prodi: "Informatika", role: "Koordinator Mentor kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/ivandy_rohman.webp" },
  { id: "73", name: "Dealova Fransisca Ferlianti", prodi: "Teknik Logistik", role: "Wakil Koordinator Mentor kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/dealova_fransisca.webp" },
  { id: "74", name: "Achmad Ricky Hariono", prodi: "Informatika", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/achmad_ricky.webp" },
  { id: "75", name: "Isnanda Saputra", prodi: "Teknologi Industri Pertanian", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/isnanda_saputra.webp" },
  { id: "76", name: "In’am Faadilah Ramadhani Tavisyach", prodi: "Sistem Informasi", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/in_am_faadilah.webp" },
  { id: "77", name: "Raafa Nabil Rabbani", prodi: "Informatika", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/raafa_nabil.webp" },
  { id: "78", name: "Rexa Wiritnayaka Afandi", prodi: "Manajemen", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/rexa_wiritnayaka.webp" },
  { id: "79", name: "Tegar Aditya Utomo", prodi: "Teknik Kimia", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/tegar_aditya.webp" },
  { id: "80", name: "Rhenita Theresia Grace Bancin", prodi: "Informatika", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/rhenita_theresia.webp" },
  { id: "81", name: "Aura Raina Rezkika", prodi: "Teknik Logistik", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/aura_raina.webp" },
  { id: "82", name: "Annisa Dwi Fatmawati", prodi: "Akuntansi", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/annisa_dwi.webp" },
  { id: "83", name: "Alfianti duwi rahmawati", prodi: "Ekonomi Syariah", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/alfianti_duwi.webp" },
  { id: "84", name: "Uma Najah Salsabilah", prodi: "Teknik Logistik", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/uma_najah.webp" },
  { id: "85", name: "Fadhilatul Qomariyah", prodi: "Ekonomi Syariah", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/fadhilatul_qomariyah.webp" },
  { id: "86", name: "Wulansari", prodi: "Ekonomi Syariah", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/wulansari.webp" },
  { id: "87", name: "Putra Rizqullah Rakha Atmajaya", prodi: "Teknik Logistik", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/putra_rizqullah.webp" },
  { id: "88", name: "Adya Riski Dimas Riadi", prodi: "Akuntansi", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/adya_riski.webp" },
  { id: "89", name: "Robby Irham Nasution", prodi: "Teknik Logistik", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/robby_irham.webp" },
  { id: "90", name: "Muhammad Ierfan Fathy", prodi: "Manajemen", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/muhammad_ierfan.webp" },
  { id: "91", name: "Farrel Ozora Samuel Samosir", prodi: "Teknologi Industri Pertanian", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/farrel_ozora.webp" },
  { id: "92", name: "Muhammad Fata Azzaki", prodi: "Informatika", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/muhammad_fata.webp" },
  { id: "93", name: "Moses Farel Cristian", prodi: "Manajemen", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/moses_farel.webp" },
  { id: "94", name: "Maulana Firyalfasya Alifianto", prodi: "Teknik Logistik", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/maulana_firyalfasya.webp" },
  { id: "95", name: "Tegar Adidtya Pratama", prodi: "Informatika", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/tegar_adidtya.webp" },
  { id: "96", name: "Ahmad Fajri Kusuma", prodi: "Teknik Kimia", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/ahmad_fajri.webp" },
  { id: "97", name: "Berlian Paramita Pawestri", prodi: "Teknik Logistik", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/berlian_paramita.webp" },
  { id: "98", name: "Aura Hyunarisasi", prodi: "Manajemen", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/aura_hyunarisasi.webp" },
  { id: "99", name: "Jihan Salwa Putri Syarifuddin", prodi: "Akuntansi", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/jihan_salwa.webp" },
  { id: "100", name: "Bunga Hisanah Dyandra Rahmatullah", prodi: "Manajemen Rekayasa", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/bunga_hisanah.webp" },
  { id: "101", name: "Hilda Zana Yogya Nugrahaini", prodi: "Manajemen", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/hilda_zana.webp" },
  { id: "102", name: "Nadya Shafwah Al Qibthiyah", prodi: "Sistem Informasi", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/nadya_shafwah.webp" },
  { id: "103", name: "Alya Fadhilatun Nisa", prodi: "Teknik Kimia", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/alya_fadhilatun.webp" },
  { id: "104", name: "Novatimah Dewi Maharani", prodi: "Sistem Informasi", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/novatimah_dewi.webp" },
  { id: "105", name: "Calista Alysia Ramadhani", prodi: "Teknik Kimia", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor", image: "/calista_alysia.webp" },

  // Konsumsi (Logtrans & Konsumsi)
  { id: "106", name: "Rizqina Kautsarina", prodi: "Teknologi Industri Pertanian", role: "Anggota Konsumsi", divisionId: "logtrans", divisionName: "Konsumsi", image: "/rizqina_kautsarina.webp" },
  { id: "107", name: "Farah Nisyafira", prodi: "Ekonomi Syariah", role: "Anggota Konsumsi", divisionId: "logtrans", divisionName: "Konsumsi", image: "/farah_nisyafira.webp" },
  { id: "108", name: "Nisriina Naura Maulina", prodi: "Ekonomi Syariah", role: "Anggota Konsumsi", divisionId: "logtrans", divisionName: "Konsumsi", image: "/nisriina_naura.webp" },
  { id: "109", name: "Lidya Oktavia", prodi: "Manajemen", role: "Anggota Konsumsi", divisionId: "logtrans", divisionName: "Konsumsi", image: "/lidya_oktavia.webp" },
  { id: "110", name: "Raya Kiran Ambhieya", prodi: "Teknik Kimia", role: "Anggota Konsumsi", divisionId: "logtrans", divisionName: "Konsumsi", image: "/raya_kiran.webp" },

  // Humas & Sponsorship
  { id: "111", name: "Shelia Dwi Faradina", prodi: "Teknik Logistik", role: "Anggota Humas & Sponsorship", divisionId: "humas", divisionName: "Humas & Sponsor", image: "/shelia_dwi.webp" },
  { id: "112", name: "Faisal Dwi Herlambang", prodi: "Manajemen", role: "Anggota Humas & Sponsorship", divisionId: "humas", divisionName: "Humas & Sponsor", image: "/faisal_dwi.webp" },
  { id: "113", name: "M. Aliefta Rizky Alvansyah", prodi: "Informatika", role: "Anggota Humas & Sponsorship", divisionId: "humas", divisionName: "Humas & Sponsor", image: "/m_aliefta.webp" }
];

export default function AnggotaDivisi() {
  const [selectedDivisionId, setSelectedDivisionId] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const activeDivision = useMemo(() => {
    return DIVISIONS.find((d) => d.id === selectedDivisionId) || null;
  }, [selectedDivisionId]);

  const filteredMembers = useMemo(() => {
    return MEMBERS.filter((m) => {
      const matchDivision =
        selectedDivisionId === "all" || m.divisionId === selectedDivisionId;
      const matchSearch =
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.prodi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.divisionName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchDivision && matchSearch;
    });
  }, [selectedDivisionId, searchQuery]);

  return (
    <div className={styles.wrapper}>
      {/* Search & Filter Controls */}
      <div className={styles.controlsRow}>
        <div className={styles.searchBox}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Cari nama, prodi, atau jabatan panitia..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        {/* Division Filter Tabs */}
        <div className={styles.tabsList}>
          <button
            className={`${styles.tabBtn} ${selectedDivisionId === "all" ? styles.tabActive : ""
              }`}
            onClick={() => setSelectedDivisionId("all")}
          >
            <Users size={16} /> Semua Divisi
            <span className={styles.badgeCount}>{MEMBERS.length}</span>
          </button>

          {DIVISIONS.map((div) => {
            const count = MEMBERS.filter((m) => m.divisionId === div.id).length;
            return (
              <button
                key={div.id}
                className={`${styles.tabBtn} ${selectedDivisionId === div.id ? styles.tabActive : ""
                  }`}
                onClick={() => setSelectedDivisionId(div.id)}
              >
                {div.icon} {div.shortName}
                <span className={styles.badgeCount}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Banner Summary for Active Division */}
      {activeDivision && (
        <div className={styles.divisionBanner}>
          <div>
            <h4 className={styles.bannerTitle}>{activeDivision.name}</h4>
            <p className={styles.bannerDesc}>{activeDivision.description}</p>
          </div>
          <span className={styles.bannerBadge}>
            {activeDivision.koordinator}
          </span>
        </div>
      )}

      {/* Members Grid */}
      <div className={styles.membersGrid}>
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member) => (
            <div key={member.id} className={styles.memberCard}>
              <div className={styles.memberIconBox}>
                <img
                  src={
                    member.image
                      ? getCloudinaryUrl(member.image)
                      : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          member.name
                        )}&background=183a48&color=68cfeb&bold=true&size=128`
                  }
                  alt={member.name}
                  className={styles.memberAvatarImg}
                />
              </div>
              <div className={styles.memberInfo}>
                <h5 className={styles.memberName}>{member.name}</h5>
                <p className={styles.memberRole}>{member.role}</p>
                <div className={styles.tagsWrapper}>
                  <span className={styles.prodiTag}>{member.prodi}</span>
                  <span className={styles.divisionTag}>{member.divisionName}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.emptySearch}>
            Tidak ditemukan panitia dengan kata kunci &ldquo;{searchQuery}&rdquo;.
          </div>
        )}
      </div>
    </div>
  );
}
