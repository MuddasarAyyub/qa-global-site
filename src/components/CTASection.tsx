import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { Dictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

interface CTASectionProps {
  dict: Dictionary;
  locale: Locale;
}

export default function CTASection({ dict, locale }: CTASectionProps) {
  const prefix = `/${locale}`;

  return (
    <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-300 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {dict.cta.title}
        </h2>
        <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
          {dict.cta.description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`${prefix}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-0.5"
          >
            {dict.cta.btn1}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={`${prefix}/contact`}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            {dict.cta.btn2}
          </Link>
        </div>
      </div>
    </section>
  );
}
