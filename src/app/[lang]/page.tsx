import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import IndustriesSection from "@/components/IndustriesSection";
import GlobalPresence from "@/components/GlobalPresence";
import CTASection from "@/components/CTASection";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <HeroSection dict={dict} locale={lang as Locale} />
      <TrustBar dict={dict} />
      <ServicesSection dict={dict} locale={lang as Locale} />
      <StatsSection dict={dict} />
      <IndustriesSection dict={dict} />
      <GlobalPresence dict={dict} />
      <CTASection dict={dict} locale={lang as Locale} />
    </>
  );
}
