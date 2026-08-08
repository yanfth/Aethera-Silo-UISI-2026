import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AETHERA SILO UISI 2026",
  description: "Portal Resmi AETHERA SILO UISI 2026 — Universitas Internasional Semen Indonesia",
  icons: {
    icon: "/logo_aethera.png?v=99",
    shortcut: "/logo_aethera.png?v=99",
    apple: "/logo_aethera.png?v=99",
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
      <head>
        <link rel="icon" href="/logo_aethera.png?v=99" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/logo_aethera.png?v=99" type="image/png" />
        <link rel="apple-touch-icon" href="/logo_aethera.png?v=99" />
      </head>
      <body>
        <AosInit />
        {children}
      </body>
    </html>
  );
}
