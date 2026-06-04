"use client";

import Link from "next/link";
import { Smartphone, Wifi, Car, Bot, ShieldCheck, Gauge, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Dictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

interface ServicesSectionProps {
  dict: Dictionary;
  locale: Locale;
}

export default function ServicesSection({ dict, locale }: ServicesSectionProps) {
  const prefix = `/${locale}`;

  const services = [
    { icon: Smartphone, key: "mobile" as const, href: `${prefix}/services#mobile`, color: "from-blue-500 to-blue-600" },
    { icon: Wifi, key: "5g" as const, href: `${prefix}/services#5g-iot`, color: "from-purple-500 to-purple-600" },
    { icon: Car, key: "automotive" as const, href: `${prefix}/services#automotive`, color: "from-orange-500 to-orange-600" },
    { icon: Bot, key: "automation" as const, href: `${prefix}/services#automation`, color: "from-green-500 to-green-600" },
    { icon: ShieldCheck, key: "compliance" as const, href: `${prefix}/services#compliance`, color: "from-red-500 to-red-600" },
    { icon: Gauge, key: "performance" as const, href: `${prefix}/services#performance`, color: "from-teal-500 to-teal-600" },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
            {dict.services.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {dict.services.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {dict.services.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block p-6 bg-white border border-gray-200 rounded-2xl hover:border-primary-200 hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {dict.services.items[service.key].title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {dict.services.items[service.key].description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  {dict.services.learnMore} <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
