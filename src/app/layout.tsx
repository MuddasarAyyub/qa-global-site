import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nulbug - Zero Bugs. Guaranteed. | Device Testing & QA Services",
  description: "We eliminate every bug before your device hits the market. Mobile testing, automation & compliance services worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased bg-gray-950 text-white">
        {children}
      </body>
    </html>
  );
}
