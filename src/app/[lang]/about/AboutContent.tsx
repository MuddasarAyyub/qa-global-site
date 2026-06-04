"use client";

import { Award, Users, Target, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import type { Dictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

interface AboutContentProps {
  dict: Dictionary;
  locale: Locale;
}

const timeline = [
  { year: "2009", event: "Founded in Shenzhen, China — mobile device testing for OEMs" },
  { year: "2013", event: "Expanded to South Korea — 5G and semiconductor testing capabilities" },
  { year: "2016", event: "Opened India development center — automation solutions" },
  { year: "2019", event: "ISO 17025 accreditation achieved across all labs" },
  { year: "2022", event: "UAE headquarters established — MENA market expansion" },
  { year: "2024", event: "Saudi Arabia lab opened — GCC coverage complete" },
];

export default function AboutContent({ dict, locale }: AboutContentProps) {
  const values = [
    { icon: Award, key: "excellence" as const },
    { icon: Users, key: "partnership" as const },
    { icon: Target, key: "precision" as const },
    { icon: Lightbulb, key: "innovation" as const },
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
              {dict.about.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {dict.about.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {dict.about.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{dict.about.missionTitle}</h2>
              <p className="text-gray-600 leading-relaxed">{dict.about.missionText}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{dict.about.visionTitle}</h2>
              <p className="text-gray-600 leading-relaxed">{dict.about.visionText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{dict.about.valuesTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-200 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-primary-50 rounded-xl flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{dict.about.values[value.key].title}</h3>
                <p className="text-sm text-gray-600">{dict.about.values[value.key].description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection dict={dict} />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{dict.about.journeyTitle}</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 text-end">
                  <span className="font-bold text-primary-600">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-3 h-3 bg-primary-500 rounded-full mt-1.5 relative">
                  {index < timeline.length - 1 && (
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-primary-100"></div>
                  )}
                </div>
                <p className="text-gray-700">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{dict.about.certTitle}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["ISO 17025", "ISO 27001", "ISO 9001", "GCF", "PTCRB", "CTIA"].map((cert) => (
              <div key={cert} className="px-6 py-3 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection dict={dict} locale={locale} />
    </>
  );
}
