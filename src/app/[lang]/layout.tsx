import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/getDictionary";
import { locales, isRtl } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QAGlobal - Device Quality Assurance | Mobile Testing Services",
  description: "World-class mobile testing, automation, and compliance services for global markets.",
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const rtl = isRtl(locale);

  return (
    <html lang={locale} dir={rtl ? "rtl" : "ltr"} className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Navbar dict={dict} locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer dict={dict} locale={locale} />
      </body>
    </html>
  );
}
