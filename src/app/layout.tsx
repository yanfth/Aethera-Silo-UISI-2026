import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AETHERA SILO UISI 2026",
  description: "Portal Resmi AETHERA SILO UISI 2026 — Universitas Internasional Semen Indonesia",
  icons: {
    icon: "/icon.png?v=3",
    shortcut: "/favicon.ico?v=3",
    apple: "/apple-icon.png?v=3",
  },
};

import AosInit from "./components/AosInit";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <AosInit />
        {children}
      </body>
    </html>
  );
}
