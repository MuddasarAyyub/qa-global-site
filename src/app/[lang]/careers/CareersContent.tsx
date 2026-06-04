"use client";

import { MapPin, Briefcase, Clock } from "lucide-react";
import { motion } from "framer-motion";
import type { Dictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

interface CareersContentProps {
  dict: Dictionary;
  locale: Locale;
}

const openings = [
  { title: "Senior QA Engineer - Mobile", location: "Dubai, UAE", type: "Full-time", department: "Mobile Testing" },
  { title: "5G Protocol Test Engineer", location: "Riyadh, KSA", type: "Full-time", department: "Network Testing" },
  { title: "Automation Architect", location: "Bangalore, India", type: "Full-time", department: "Automation" },
  { title: "Automotive Test Lead", location: "Dubai, UAE", type: "Full-time", department: "Automotive" },
  { title: "IoT Test Engineer", location: "Dubai, UAE", type: "Full-time", department: "IoT Testing" },
  { title: "QA Intern - Mobile Testing", location: "Dubai, UAE", type: "Internship", department: "Mobile Testing" },
];

const benefits = [
  "Competitive salary + annual bonus",
  "Health insurance (family coverage)",
  "Annual flight ticket home",
  "Professional certifications paid",
  "Flexible working hours",
  "Career development program",
  "Latest device access",
  "Team events & activities",
];

export default function CareersContent({ dict }: CareersContentProps) {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
            {dict.careers.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {dict.careers.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {dict.careers.description}
          </p>
        </div>
      </section>

      <section className="py-12 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">{dict.careers.whyTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{dict.careers.openPositions}</h2>
          <div className="space-y-4">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-6 bg-white border border-gray-200 rounded-xl hover:border-primary-200 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {job.department}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {job.type}</span>
                    </div>
                  </div>
                  <button className="self-start sm:self-center px-4 py-2 text-sm font-medium text-primary-600 border border-primary-200 rounded-lg hover:bg-primary-50 transition-colors flex-shrink-0">
                    {dict.careers.apply}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
