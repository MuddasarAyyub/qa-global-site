"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import type { Dictionary } from "@/i18n/getDictionary";

interface GlobalPresenceProps {
  dict: Dictionary;
}

const offices = [
  { city: "Dubai", country: "UAE", type: "HQ", description: "Regional headquarters & primary testing lab" },
  { city: "Riyadh", country: "Saudi Arabia", type: "Lab", description: "CITC compliance & carrier testing" },
  { city: "Shenzhen", country: "China", type: "Lab", description: "Device hardware & component testing" },
  { city: "Bangalore", country: "India", type: "Center", description: "Automation development center" },
  { city: "Seoul", country: "South Korea", type: "Lab", description: "5G & semiconductor testing" },
  { city: "Cairo", country: "Egypt", type: "Office", description: "MENA regional support" },
];

export default function GlobalPresence({ dict }: GlobalPresenceProps) {
  return (
    <section className="py-20 md:py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary-500/10 text-primary-400 text-sm font-medium rounded-full mb-4">
              {dict.global.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {dict.global.title}
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              {dict.global.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {offices.map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white text-sm">
                      {office.city}, {office.country}
                      <span className="ms-2 text-xs bg-primary-500/10 text-primary-400 px-2 py-0.5 rounded-full">
                        {office.type}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">{office.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-700 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary-400 mb-2">6</div>
                <div className="text-xl font-semibold text-white mb-1">{dict.global.locations}</div>
                <div className="text-gray-400">{dict.global.continents}</div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {["MENA", "Asia Pacific", "South Asia"].map((region) => (
                    <div key={region} className="text-center">
                      <div className="w-3 h-3 bg-primary-500 rounded-full mx-auto mb-1"></div>
                      <div className="text-xs text-gray-400">{region}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
