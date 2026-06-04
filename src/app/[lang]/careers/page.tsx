import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import CareersContent from "./CareersContent";

export default async function CareersPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <CareersContent dict={dict} locale={lang as Locale} />;
}
