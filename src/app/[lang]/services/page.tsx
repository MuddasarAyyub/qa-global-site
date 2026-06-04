"use client";

import { Smartphone, Wifi, Car, Bot, ShieldCheck, Gauge, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import { useParams } from "next/navigation";
import type { Locale } from "@/i18n/config";

const serviceDetails = [
  {
    id: "mobile",
    icon: Smartphone,
    color: "from-blue-500 to-blue-600",
    features: [
      "Functional & regression testing",
      "UI/UX validation across OS versions",
      "Multi-language & locale testing",
      "Carrier-specific testing (Etisalat, du, STC, Zain)",
      "Camera, audio, and sensor testing",
      "OTA update validation",
    ],
  },
  {
    id: "5g-iot",
    icon: Wifi,
    color: "from-purple-500 to-purple-600",
    features: [
      "5G NR protocol testing",
      "IoT protocol validation (Zigbee, Z-Wave, Matter)",
      "Network switching & handover testing",
      "Low-power consumption validation",
      "Edge computing integration testing",
      "Smart city device certification",
    ],
  },
  {
    id: "automotive",
    icon: Car,
    color: "from-orange-500 to-orange-600",
    features: [
      "IVI system testing (Android Auto, CarPlay)",
      "ADAS sensor validation",
      "V2X communication testing",
      "OBD-II diagnostics verification",
      "Climate & vibration testing",
      "ASPICE & ISO 26262 compliance",
    ],
  },
  {
    id: "automation",
    icon: Bot,
    color: "from-green-500 to-green-600",
    features: [
      "Custom framework development (Appium, Selenium)",
      "CI/CD pipeline integration",
      "AI-based visual testing",
      "Robot-based device testing",
      "Cloud device farm management",
      "Test analytics & reporting dashboards",
    ],
  },
  {
    id: "compliance",
    icon: ShieldCheck,
    color: "from-red-500 to-red-600",
    features: [
      "GCF & PTCRB certification",
      "TRA/CITC/TDRA type approval",
      "Carrier acceptance testing (all GCC operators)",
      "SAR testing & certification",
      "CE/FCC marking support",
      "Regional homologation",
    ],
  },
  {
    id: "performance",
    icon: Gauge,
    color: "from-teal-500 to-teal-600",
    features: [
      "Battery life & charging testing",
      "Thermal analysis (high-temperature environments)",
      "Network performance (4G/5G benchmarking)",
      "Memory & CPU stress testing",
      "App launch & response time",
      "Field testing in UAE conditions (heat, humidity)",
    ],
  },
];

const dictKeys: Record<string, "mobile" | "5g" | "automotive" | "automation" | "compliance" | "performance"> = {
  "mobile": "mobile",
  "5g-iot": "5g",
  "automotive": "automotive",
  "automation": "automation",
  "compliance": "compliance",
  "performance": "performance",
};

export default function ServicesPage() {
  const params = useParams();
  const locale = (params.lang as Locale) || "en";

  // Static CTA dict placeholder (page is client-side)
  const ctaDict = {
    cta: { title: "Ready to Ensure Your Device Quality?", description: "Partner with us for world-class testing services.", btn1: "Start Your Project", btn2: "Schedule a Call" },
  };

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            End-to-End Testing Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From device testing to market certification, we provide comprehensive quality assurance for your products across all global markets.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {serviceDetails.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.id.replace("-", " & ").replace(/^\w/, c => c.toUpperCase())} Testing</h2>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className={`aspect-[4/3] bg-gradient-to-br ${service.color} opacity-10 rounded-3xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection dict={ctaDict as any} locale={locale} />
    </>
  );
}
