import type { Metadata } from "next";
import localFont from "next/font/local";
import './globals.css'; // Global CSS file (Tailwind or custom styles)
import { ReactNode } from 'react';
import Layout from '../components/Layout'; // Import Layout to wrap all pages

// Local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for global usage
export const metadata: Metadata = {
  title: "Max English Club",
  description: "Providing English education opportunities in Kanagawa.",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* 🛠️ Wrap everything in Layout.tsx */}
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
