import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css"; // ✅ Import global styles ONCE
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load Local Fonts
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

// Global Metadata
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ Navbar & Footer are now directly inside app/layout.tsx */}
        <div className="flex flex-col min-h-screen">
          <Navbar />
          
          {/* ✅ Main Content */}
          <main className="flex-1 pt-16">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}