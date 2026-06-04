import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/getDictionary";
import { locales, isRtl } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

export const dynamicParams = false;

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
    <div dir={rtl ? "rtl" : "ltr"} lang={locale}>
      <Navbar dict={dict} locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer dict={dict} locale={locale} />
    </div>
  );
}
