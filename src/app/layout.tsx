import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SILO UISI 2026",
  description: "Portal Resmi SILO UISI 2026",
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
