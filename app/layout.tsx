import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RENEW Design System",
  description: "A comprehensive design system documentation for RENEW brand identity, including colors, typography, and components.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
