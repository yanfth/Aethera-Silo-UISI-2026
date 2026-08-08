'use client';

import React, { useState, useMemo } from "react";
import styles from "./AnggotaDivisi.module.css";
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
  Megaphone
} from "lucide-react";

interface Member {
  id: string;
  name: string;
  prodi: string;
  role: string;
  divisionId: string;
  divisionName: string;
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
    id: "ic",
    name: "Divisi Instructor Committee (IC)",
    shortName: "Instructor",
    icon: <GraduationCap size={16} />,
    description: "Memandu kedisiplinan, mengarahkan instruksi lapangan, dan mendampingi pelaksanaan penugasan peserta.",
    koordinator: "Muhammad Daniyal Wahidy"
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
  }
];

const MEMBERS: Member[] = [
  // BPH
  { id: "1", name: "Nabil Qudsi Mas’ud", prodi: "Ekonomi Syariah", role: "Ketua Pelaksana", divisionId: "bph", divisionName: "BPH" },
  { id: "2", name: "M. Rosyid Ridlo", prodi: "Teknik Logistik", role: "Sekretaris 1", divisionId: "bph", divisionName: "BPH" },
  { id: "3", name: "Hillyatut Taqiya", prodi: "Ekonomi Syariah", role: "Sekretaris 2", divisionId: "bph", divisionName: "BPH" },
  { id: "4", name: "Zahra Naila Supriyono Putri", prodi: "Akuntansi", role: "Bendahara 1", divisionId: "bph", divisionName: "BPH" },
  { id: "5", name: "Putri Fara Diba", prodi: "Ekonomi Syariah", role: "Bendahara 2", divisionId: "bph", divisionName: "BPH" },

  // SC & Acara
  { id: "6", name: "Jefranda Dinata", prodi: "Ekonomi Syariah", role: "Koordinator SC & Acara", divisionId: "acara", divisionName: "SC & Acara" },
  { id: "7", name: "Khairun Niza", prodi: "Manajemen", role: "Wakil Koordinator SC & Acara", divisionId: "acara", divisionName: "SC & Acara" },
  { id: "8", name: "Melly Mutiara", prodi: "Manajemen", role: "Anggota SC", divisionId: "acara", divisionName: "SC & Acara" },
  { id: "9", name: "Muhaemit", prodi: "Manajemen", role: "Anggota SC", divisionId: "acara", divisionName: "SC & Acara" },
  { id: "10", name: "Novi Risma Ameliasari", prodi: "Teknik Kimia", role: "Anggota SC", divisionId: "acara", divisionName: "SC & Acara" },
  { id: "11", name: "Regitha Eka Purwananditha Candraningtyas", prodi: "Sistem Informasi", role: "Anggota SC", divisionId: "acara", divisionName: "SC & Acara" },
  { id: "12", name: "Sneha Naafi' Amrulloh", prodi: "Teknik Logistik", role: "Anggota SC", divisionId: "acara", divisionName: "SC & Acara" },
  { id: "13", name: "Valentino Zaky", prodi: "Manajemen", role: "Anggota SC", divisionId: "acara", divisionName: "SC & Acara" },
  { id: "14", name: "Chelsea Aurelia Manihuruk", prodi: "Akuntansi", role: "Anggota Acara", divisionId: "acara", divisionName: "SC & Acara" },
  { id: "15", name: "Nisa Dzakiatul Fikriyah", prodi: "Akuntansi", role: "Anggota Acara", divisionId: "acara", divisionName: "SC & Acara" },
  { id: "16", name: "Rendy Alfiansyah", prodi: "Informatika", role: "Anggota Acara", divisionId: "acara", divisionName: "SC & Acara" },
  { id: "17", name: "Jevamya Chelcie Wicaksana", prodi: "Teknik Kimia", role: "Anggota Acara", divisionId: "acara", divisionName: "SC & Acara" },
  { id: "18", name: "Muhammad Hanif Raja I", prodi: "Manajemen", role: "Anggota Acara", divisionId: "acara", divisionName: "SC & Acara" },
  { id: "19", name: "Dhea Safira Rahmawati", prodi: "Teknologi Industri Pertanian", role: "Anggota Acara", divisionId: "acara", divisionName: "SC & Acara" },

  // Instructor Committee
  { id: "20", name: "Muhammad Daniyal Wahidy", prodi: "Manajemen", role: "Koordinator Instructor Committee", divisionId: "ic", divisionName: "Instructor" },
  { id: "21", name: "Febriana Dwi Anggraini", prodi: "Akuntansi", role: "Anggota Instructor Committee", divisionId: "ic", divisionName: "Instructor" },
  { id: "22", name: "Gita Nur Arif", prodi: "Teknik Logistik", role: "Anggota Instructor Committee", divisionId: "ic", divisionName: "Instructor" },
  { id: "23", name: "Permata Citra Afrilia", prodi: "Ekonomi Syariah", role: "Anggota Instructor Committee", divisionId: "ic", divisionName: "Instructor" },
  { id: "24", name: "Rahma Cahyani Salsabila", prodi: "Manajemen", role: "Anggota Instructor Committee", divisionId: "ic", divisionName: "Instructor" },
  { id: "25", name: "Anggi Fadilah Pratiwi", prodi: "Manajemen", role: "Anggota Instructor Committee", divisionId: "ic", divisionName: "Instructor" },
  { id: "26", name: "Saiqu Rafly Aldavy", prodi: "Manajemen", role: "Anggota Instructor Committee", divisionId: "ic", divisionName: "Instructor" },
  { id: "27", name: "Bunga Ismananda Sari", prodi: "Teknik Logistik", role: "Anggota Instructor Committee", divisionId: "ic", divisionName: "Instructor" },
  { id: "28", name: "Aulia Putra Akbar", prodi: "Teknik Kimia", role: "Anggota Instructor Committee", divisionId: "ic", divisionName: "Instructor" },
  { id: "29", name: "Mochammad Naufal Abimanyu", prodi: "Teknik Kimia", role: "Anggota Instructor Committee", divisionId: "ic", divisionName: "Instructor" },

  // PDD
  { id: "30", name: "Alfian Khusnul Fatoni", prodi: "Informatika", role: "Koordinator PDD", divisionId: "pdd", divisionName: "PDD" },
  { id: "31", name: "Wanda Adelya Pratiwi", prodi: "Akuntansi", role: "Anggota PDD", divisionId: "pdd", divisionName: "PDD" },
  { id: "32", name: "Salwa Mufidah Hayati", prodi: "Eksyar", role: "Anggota PDD", divisionId: "pdd", divisionName: "PDD" },
  { id: "33", name: "Mohammad Fathir Ubaidillah Al Azubi", prodi: "Manajemen", role: "Anggota PDD", divisionId: "pdd", divisionName: "PDD" },
  { id: "34", name: "Athallah Yahya Armadhanu", prodi: "DKV", role: "Anggota PDD", divisionId: "pdd", divisionName: "PDD" },
  { id: "35", name: "Encik Thuffayl Izzatul Syamsi", prodi: "DKV", role: "Anggota PDD", divisionId: "pdd", divisionName: "PDD" },
  { id: "36", name: "Muhammad Hadi Masbukhin Assafi'i", prodi: "DKV", role: "Anggota PDD", divisionId: "pdd", divisionName: "PDD" },
  { id: "37", name: "Lelly Michela Aprilindo", prodi: "DKV", role: "Anggota PDD", divisionId: "pdd", divisionName: "PDD" },

  // Logtrans
  { id: "38", name: "Muhammad Faidza Airlangga", prodi: "Informatika", role: "Koordinator Logtrans", divisionId: "logtrans", divisionName: "Logtrans" },
  { id: "39", name: "Agil Boy Ahmada", prodi: "DKV", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans" },
  { id: "40", name: "Galan Gantari", prodi: "Ekonomi Syariah", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans" },
  { id: "41", name: "M. Abdillah Malik", prodi: "Ekonomi Syariah", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans" },
  { id: "42", name: "Muhammad Rizqi Fadhilah", prodi: "Informatika", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans" },
  { id: "43", name: "Rais Attalla Prakasa", prodi: "Teknik Logistik", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans" },
  { id: "44", name: "Panji Nashrulloh", prodi: "DKV", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans" },
  { id: "45", name: "Byandra Galang Atmodjo", prodi: "Manajemen", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans" },
  { id: "46", name: "Bagus Setyo Nugroho", prodi: "Informatika", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans" },
  { id: "47", name: "M Awaludin Ikbar", prodi: "Informatika", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans" },
  { id: "48", name: "Dimas Putra Ardiansyah", prodi: "Manajemen Rekayasa", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans" },
  { id: "49", name: "Muhammad Daniel Arya putra", prodi: "Informatika", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans" },
  { id: "50", name: "Ravil Rizkia Nurdiansyah", prodi: "Manajemen Rekayasa", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans" },
  { id: "51", name: "Aqil Ilham Anandra", prodi: "Teknik Kimia", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans" },
  { id: "52", name: "Didin Khoiruddin Amin", prodi: "Teknik Logistik", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans" },
  { id: "53", name: "Gading Najha Rahadiananto", prodi: "Teknik Logistik", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans" },
  { id: "54", name: "Erlangga Harsyawardhana Aria Purwadi", prodi: "Teknik Logistik", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans" },
  { id: "55", name: "Rio Al Kaseno", prodi: "Informatika", role: "Anggota Logtrans", divisionId: "logtrans", divisionName: "Logtrans" },

  // Medis
  { id: "56", name: "Callysta Goesti Annayla Sumarlin", prodi: "Akuntansi", role: "Kepala Divisi Medis", divisionId: "medis", divisionName: "Medis" },
  { id: "57", name: "Faza Sazkiyah", prodi: "Akuntansi", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis" },
  { id: "58", name: "Reynata Hartani", prodi: "Teknik Kimia", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis" },
  { id: "59", name: "Raditya Fahrezi Putra Ahsan", prodi: "Informatika", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis" },
  { id: "60", name: "Mochamad Rifki Al Farizi", prodi: "Informatika", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis" },
  { id: "61", name: "Jafar Sodiq", prodi: "Informatika", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis" },
  { id: "62", name: "Ananda Khusnul Selfiana", prodi: "Manajemen Rekayasa", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis" },
  { id: "63", name: "Pradita Syifa Azizah", prodi: "Akuntansi", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis" },
  { id: "64", name: "Siti Nur Solika Anwar", prodi: "Akuntansi", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis" },
  { id: "65", name: "Muhammad Fahri Hidayat", prodi: "Teknik Logistik", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis" },
  { id: "66", name: "Abid Naufal Arifin", prodi: "Teknik Logistik", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis" },
  { id: "67", name: "Fauzan Ali Subhan", prodi: "Teknik Logistik", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis" },
  { id: "68", name: "Airlangga Putra Andhika", prodi: "Teknik Kimia", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis" },
  { id: "69", name: "Maria Fransiska Cicilia", prodi: "Teknik Kimia", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis" },
  { id: "70", name: "Rio Kristoper Sinaga", prodi: "Teknik Kimia", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis" },
  { id: "71", name: "Amirul Hakim", prodi: "Teknik Kimia", role: "Anggota Medis", divisionId: "medis", divisionName: "Medis" },

  // Mentor Kelompok
  { id: "72", name: "Muhammad Ivandy Rohman", prodi: "Informatika", role: "Koordinator Mentor kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "73", name: "Dealova Fransisca Ferlianti", prodi: "Teknik Logistik", role: "Wakil Koordinator Mentor kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "74", name: "Achmad Ricky Hariono", prodi: "Informatika", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "75", name: "Isnanda Saputra", prodi: "Teknologi Industri Pertanian", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "76", name: "In’am Faadilah Ramadhani Tavisyach", prodi: "Sistem Informasi", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "77", name: "Raafa Nabil Rabbani", prodi: "Informatika", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "78", name: "Rexa Wiritnayaka Afandi", prodi: "Manajemen", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "79", name: "Tegar Aditya Utomo", prodi: "Teknik Kimia", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "80", name: "Rhenita Theresia Grace Bancin", prodi: "Informatika", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "81", name: "Aura Raina Rezkika", prodi: "Teknik Logistik", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "82", name: "Annisa Dwi Fatmawati", prodi: "Akuntansi", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "83", name: "Alfianti duwi rahmawati", prodi: "Ekonomi Syariah", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "84", name: "Uma Najah Salsabilah", prodi: "Teknik Logistik", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "85", name: "Fadhilatul Qomariyah", prodi: "Ekonomi Syariah", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "86", name: "Wulansari", prodi: "Ekonomi Syariah", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "87", name: "Putra Rizqullah Rakha Atmajaya", prodi: "Teknik Logistik", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "88", name: "Adya Riski Dimas Riadi", prodi: "Akuntansi", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "89", name: "Robby Irham Nasution", prodi: "Teknik Logistik", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "90", name: "Muhammad Ierfan Fathy", prodi: "Manajemen", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "91", name: "Farrel Ozora Samuel Samosir", prodi: "Teknologi Industri Pertanian", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "92", name: "Muhammad Fata Azzaki", prodi: "Informatika", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "93", name: "Moses Farel Cristian", prodi: "Manajemen", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "94", name: "Maulana Firyalfasya Alifianto", prodi: "Teknik Logistik", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "95", name: "Tegar Adidtya Pratama", prodi: "Informatika", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "96", name: "Ahmad Fajri Kusuma", prodi: "Teknik Kimia", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "97", name: "Berlian Paramita Pawestri", prodi: "Teknik Logistik", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "98", name: "Aura Hyunarisasi", prodi: "Manajemen", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "99", name: "Jihan Salwa Putri Syarifuddin", prodi: "Akuntansi", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "100", name: "Bunga Hisanah Dyandra Rahmatullah", prodi: "Manajemen Rekayasa", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "101", name: "Hilda Zana Yogya Nugrahaini", prodi: "Manajemen", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "102", name: "Nadya Shafwah Al Qibthiyah", prodi: "Sistem Informasi", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "103", name: "Alya Fadhilatun Nisa", prodi: "Teknik Kimia", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "104", name: "Novatimah Dewi Maharani", prodi: "Sistem Informasi", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },
  { id: "105", name: "Calista Alysia Ramadhani", prodi: "Teknik Kimia", role: "Anggota Mentor Kelompok", divisionId: "mentor", divisionName: "Mentor" },

  // Humas & Sponsorship
  { id: "106", name: "Rizqina Kautsarina", prodi: "Teknologi Industri Pertanian", role: "Anggota Konsumsi", divisionId: "logtrans", divisionName: "Logtrans & Konsumsi" },
  { id: "107", name: "Farah Nisyafira", prodi: "Ekonomi Syariah", role: "Anggota Konsumsi", divisionId: "logtrans", divisionName: "Logtrans & Konsumsi" },
  { id: "108", name: "Nisriina Naura Maulina", prodi: "Ekonomi Syariah", role: "Anggota Konsumsi", divisionId: "logtrans", divisionName: "Logtrans & Konsumsi" },
  { id: "109", name: "Lidya Oktavia", prodi: "Manajemen", role: "Anggota Konsumsi", divisionId: "logtrans", divisionName: "Logtrans & Konsumsi" },
  { id: "110", name: "Raya Kiran Ambhieya", prodi: "Teknik Kimia", role: "Anggota Konsumsi", divisionId: "logtrans", divisionName: "Logtrans & Konsumsi" },
  { id: "111", name: "Shelia Dwi Faradina", prodi: "Teknik Logistik", role: "Anggota Humas & Sponsorship", divisionId: "humas", divisionName: "Humas & Sponsor" },
  { id: "112", name: "Faisal Dwi Herlambang", prodi: "Manajemen", role: "Anggota Humas & Sponsorship", divisionId: "humas", divisionName: "Humas & Sponsor" },
  { id: "113", name: "M. Aliefta Rizky Alvansyah", prodi: "Informatika", role: "Anggota Humas & Sponsorship", divisionId: "humas", divisionName: "Humas & Sponsor" }
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
            className={`${styles.tabBtn} ${
              selectedDivisionId === "all" ? styles.tabActive : ""
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
                className={`${styles.tabBtn} ${
                  selectedDivisionId === div.id ? styles.tabActive : ""
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
                <User size={18} />
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
