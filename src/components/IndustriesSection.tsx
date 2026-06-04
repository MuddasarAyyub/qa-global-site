"use client";

import { Smartphone, Radio, Car, Cpu, Watch, Home } from "lucide-react";
import { motion } from "framer-motion";
import type { Dictionary } from "@/i18n/getDictionary";

interface IndustriesSectionProps {
  dict: Dictionary;
}

export default function IndustriesSection({ dict }: IndustriesSectionProps) {
  const industries = [
    { icon: Smartphone, key: "smartphones" as const },
    { icon: Radio, key: "telecom" as const },
    { icon: Car, key: "automotive" as const },
    { icon: Cpu, key: "semiconductors" as const },
    { icon: Watch, key: "wearables" as const },
    { icon: Home, key: "smarthome" as const },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-500/10 text-primary-400 text-sm font-medium rounded-full mb-4">
            {dict.industries.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {dict.industries.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {dict.industries.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group p-6 bg-gray-950 rounded-2xl border border-gray-800 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-primary-500/10 rounded-xl flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                <industry.icon className="w-7 h-7 text-primary-400" />
              </div>
              <h3 className="font-semibold text-white mb-1">{dict.industries.items[industry.key].title}</h3>
              <p className="text-sm text-gray-500">{dict.industries.items[industry.key].description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
