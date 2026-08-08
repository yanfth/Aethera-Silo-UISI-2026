'use client';

import React, { use, useState } from "react";
import Link from "next/link";
import { CLUSTERS } from "../components/GlobeSection";
import { KELOMPOK_DETAILS } from "../data/kelompokData";
import { MessageCircle } from "lucide-react";

export default function KelompokPage({
  searchParams,
}: {
  searchParams: Promise<{ cluster?: string }>;
}) {
  const resolvedParams = use(searchParams);
  const clusterId = resolvedParams.cluster || "01";

  const [searchTerm, setSearchTerm] = useState("");

  const selectedCluster = CLUSTERS.find((c) => c.id === clusterId) || CLUSTERS[0];
  const groupDetails = KELOMPOK_DETAILS[clusterId] || KELOMPOK_DETAILS["01"];

  const filteredAnggota = groupDetails.anggota.filter(
    (m) =>
      m.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.nim.includes(searchTerm) ||
      m.prodi.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main
      style={{
        padding: "4rem 2rem",
        backgroundColor: "#FFFCF7",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "2rem",
            color: "#1f4b5d",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "0.9rem",
          }}
        >
          <span>←</span> Kembali ke Beranda
        </Link>

        {/* Header Selected Cluster */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "inline-block",
              background: "#1f4b5d",
              color: "#ffffff",
              padding: "0.3rem 0.85rem",
              borderRadius: "999px",
              fontSize: "0.8rem",
              fontWeight: 800,
              marginBottom: "0.75rem",
              letterSpacing: "0.05em",
            }}
          >
            BENUA {selectedCluster.continent.toUpperCase()} · KELOMPOK {selectedCluster.no}
          </div>

          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              marginBottom: "0.5rem",
              color: "#1A1A1A",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <span>{selectedCluster.flag}</span>
            <span>{selectedCluster.name}</span>
          </h1>

          <p
            style={{
              color: "#475569",
              fontSize: "1rem",
              lineHeight: 1.6,
              maxWidth: "750px",
            }}
          >
            {selectedCluster.desc}
          </p>
        </div>

        {/* Section Mentor Kelompok */}
        <div style={{ marginBottom: "2.5rem" }}>
          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 800,
              color: "#1f4b5d",
              marginBottom: "1rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            👨‍🏫 MENTOR KELOMPOK {selectedCluster.no}
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {groupDetails.mentors.map((mentor, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                  padding: "1.75rem",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(31,75,93,0.15)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                }}
              >
                {/* Avatar Icon */}
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background:
                      index === 0
                        ? "linear-gradient(135deg, #1f4b5d 0%, #68cfeb 100%)"
                        : "linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.75rem",
                    boxShadow: "0 4px 15px rgba(31,75,93,0.2)",
                    flexShrink: 0,
                  }}
                >
                  {index === 0 ? "👨‍🏫" : "👩‍🏫"}
                </div>

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "inline-block",
                      background: "rgba(31,75,93,0.1)",
                      color: "#1f4b5d",
                      padding: "0.2rem 0.65rem",
                      borderRadius: "6px",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      marginBottom: "0.35rem",
                      letterSpacing: "0.06em",
                    }}
                  >
                    MENTOR KELOMPOK
                  </div>

                  <h4
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 800,
                      color: "#0F172A",
                      marginBottom: "0.2rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {mentor.nama}
                  </h4>

                  <p
                    style={{
                      color: "#64748B",
                      fontSize: "0.85rem",
                      margin: "0 0 0.85rem 0",
                      fontWeight: 600,
                    }}
                  >
                    {mentor.prodi} · Angkatan {mentor.angkatan}
                  </p>

                  <a
                    href={`https://wa.me/${mentor.kontak.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      background: "#25D366",
                      color: "#ffffff",
                      padding: "0.45rem 0.95rem",
                      borderRadius: "999px",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      textDecoration: "none",
                      boxShadow: "0 4px 12px rgba(37,211,102,0.25)",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}><MessageCircle size={15} /> Hubungi Mentor</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabel Data Anggota Kelompok */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            padding: "2rem",
            boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.5rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: "#1E293B",
                  marginBottom: "0.25rem",
                }}
              >
                Daftar Anggota Kelompok {selectedCluster.no}
              </h2>
              <p style={{ color: "#64748B", fontSize: "0.875rem", margin: 0 }}>
                Total {groupDetails.anggota.length} Mahasiswa Peserta AETHERA SILO UISI 2026
              </p>
            </div>

            {/* Input Pencarian */}
            <div>
              <input
                type="text"
                placeholder="Cari nama, NIM, atau prodi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  padding: "0.55rem 1.1rem",
                  borderRadius: "999px",
                  border: "1px solid #CBD5E1",
                  fontSize: "0.85rem",
                  outline: "none",
                  width: "250px",
                  background: "#F8FAFC",
                  color: "#1E293B",
                }}
              />
            </div>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "left",
                fontSize: "0.92rem",
              }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "#F8FAFC",
                    borderBottom: "2px solid #E2E8F0",
                    color: "#475569",
                  }}
                >
                  <th style={{ padding: "0.85rem 1rem", width: "70px" }}>NO</th>
                  <th style={{ padding: "0.85rem 1rem", width: "160px" }}>NIM</th>
                  <th style={{ padding: "0.85rem 1rem" }}>Nama Mahasiswa</th>
                  <th style={{ padding: "0.85rem 1rem" }}>Program Studi</th>
                </tr>
              </thead>
              <tbody>
                {filteredAnggota.length > 0 ? (
                  filteredAnggota.map((member) => (
                    <tr
                      key={member.nim}
                      style={{
                        borderBottom: "1px solid #F1F5F9",
                      }}
                    >
                      <td style={{ padding: "0.85rem 1rem", fontWeight: 700, color: "#64748B" }}>
                        {member.no}
                      </td>
                      <td style={{ padding: "0.85rem 1rem", fontWeight: 600, color: "#475569" }}>
                        {member.nim}
                      </td>
                      <td style={{ padding: "0.85rem 1rem", fontWeight: 700, color: "#0F172A" }}>
                        {member.nama}
                      </td>
                      <td style={{ padding: "0.85rem 1rem", color: "#334155" }}>
                        {member.prodi}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      style={{
                        padding: "2rem",
                        textAlign: "center",
                        color: "#94A3B8",
                      }}
                    >
                      Tidak ada anggota yang cocok dengan kata kunci "{searchTerm}".
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
