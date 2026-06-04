import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import ContactContent from "./ContactContent";

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <ContactContent dict={dict} locale={lang as Locale} />;
}
