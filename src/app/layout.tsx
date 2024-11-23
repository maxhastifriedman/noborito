import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

// Metadata for global usage, including favicon
export const metadata: Metadata = {
  title: "Noborito English Club", // Your custom site title
  description: "Providing English education opportunities in Noborito.", // Custom description
  icons: {
    icon: "/favicon.ico", // Points to the favicon in the `public` folder
    apple: "/images/apple-touch-icon.png", // Optional: for Apple devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
