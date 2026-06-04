"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import type { Dictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

interface HeroProps {
  dict: Dictionary;
  locale: Locale;
}

export default function HeroSection({ dict, locale }: HeroProps) {
  const prefix = `/${locale}`;

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-dark-900 via-primary-900 to-dark-800 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-primary-200">{dict.hero.badge}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {dict.hero.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                {dict.hero.titleHighlight}
              </span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
              {dict.hero.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href={`${prefix}/services`}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-500 transition-all shadow-lg shadow-primary-600/30 hover:shadow-xl hover:-translate-y-0.5"
              >
                {dict.hero.cta1}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`${prefix}/about`}
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                <Play className="w-4 h-4" />
                {dict.hero.cta2}
              </Link>
            </div>

            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-gray-400">{dict.hero.stat1Label}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">{dict.hero.stat2Label}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">12</div>
                <div className="text-sm text-gray-400">{dict.hero.stat3Label}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-gray-400">{dict.hero.stat4Label}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-primary-600/20 to-accent-600/20 rounded-3xl border border-white/10 backdrop-blur-sm p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  {[
                    { label: dict.stats.devices, value: "10M+" },
                    { label: "Test Cases", value: "500K+" },
                    { label: dict.stats.markets, value: "30+" },
                    { label: dict.stats.engineers, value: "200+" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-accent-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                ISO 17025
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                GCF Certified
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
