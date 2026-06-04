import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import AboutContent from "./AboutContent";

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <AboutContent dict={dict} locale={lang as Locale} />;
}
