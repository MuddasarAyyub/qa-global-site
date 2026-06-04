"use client";

import { Smartphone, Radio, Car, Cpu, Watch, Home, Monitor, Heart } from "lucide-react";
import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import type { Dictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

interface IndustriesContentProps {
  dict: Dictionary;
  locale: Locale;
}

const industries = [
  {
    id: "telecom",
    icon: Smartphone,
    capabilities: ["Device certification", "Carrier acceptance", "Network interoperability", "VoLTE/VoNR testing", "Roaming validation"],
  },
  {
    id: "automotive",
    icon: Car,
    capabilities: ["IVI system testing", "ADAS validation", "EV charger interoperability", "V2X communications", "Cybersecurity testing"],
  },
  {
    id: "consumer",
    icon: Monitor,
    capabilities: ["Hardware validation", "Software/firmware testing", "Packaging & unboxing QA", "Retail readiness", "Multi-market localization"],
  },
  {
    id: "iot",
    icon: Home,
    capabilities: ["Matter/Thread certification", "Voice assistant testing", "Ecosystem compatibility", "Security audit", "OTA update validation"],
  },
  {
    id: "semiconductor",
    icon: Cpu,
    capabilities: ["Reference design testing", "Driver validation", "Power management", "Thermal characterization", "Platform stability"],
  },
  {
    id: "wearables",
    icon: Watch,
    capabilities: ["Sensor accuracy testing", "BLE connectivity", "Battery endurance", "Health metric validation", "Companion app testing"],
  },
  {
    id: "5g",
    icon: Radio,
    capabilities: ["Protocol conformance", "Performance benchmarking", "Interoperability testing", "Field trial support", "RAN optimization"],
  },
  {
    id: "healthcare",
    icon: Heart,
    capabilities: ["FDA/CE compliance testing", "Data accuracy validation", "Cybersecurity assessment", "Usability testing", "Interoperability (HL7/FHIR)"],
  },
];

export default function IndustriesContent({ dict, locale }: IndustriesContentProps) {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
            {dict.industries.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {dict.industries.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {dict.industries.description}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                id={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <industry.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.id}</h3>
                    <div className="flex flex-wrap gap-2">
                      {industry.capabilities.map((cap) => (
                        <span key={cap} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection dict={dict} locale={locale} />
    </>
  );
}
