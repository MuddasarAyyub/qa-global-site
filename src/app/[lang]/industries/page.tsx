import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import IndustriesContent from "./IndustriesContent";

export default async function IndustriesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <IndustriesContent dict={dict} locale={lang as Locale} />;
}
