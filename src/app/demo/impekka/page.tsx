"use client";

import Link from "next/link";
import { ArrowRight, Play, Smartphone, Wifi, Car, Bot, ShieldCheck, Gauge, Award, MapPin, Phone, Mail, Globe, Menu } from "lucide-react";

export default function ImpekkaDemo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-amber-400 font-bold text-lg">I</span>
              </div>
              <div>
                <span className="font-bold text-xl text-gray-900">Impekka</span>
                <span className="hidden sm:block text-xs text-gray-500">Impeccable, Always.</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-6">
              <a href="#" className="text-sm text-gray-700 hover:text-blue-700">Services</a>
              <a href="#" className="text-sm text-gray-700 hover:text-blue-700">Industries</a>
              <a href="#" className="text-sm text-gray-700 hover:text-blue-700">About</a>
              <a href="#" className="text-sm text-gray-700 hover:text-blue-700">Careers</a>
              <a href="#" className="text-sm text-gray-700 hover:text-blue-700">Contact</a>
              <button className="flex items-center gap-1 text-sm text-gray-500"><Globe className="w-4 h-4"/>EN</button>
              <a href="#" className="px-5 py-2.5 bg-blue-800 text-white text-sm font-semibold rounded-lg hover:bg-blue-700">Get a Quote</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-amber-200">Now Serving UAE & GCC Markets</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Your Trusted Partner in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                  Device Quality Assurance
                </span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
                World-class mobile testing, automation, and compliance services for global markets. From smartphones to IoT — impeccable results, always.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#" className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 text-blue-950 font-semibold rounded-lg hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/30">
                  Explore Services <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10">
                  <Play className="w-4 h-4" /> Watch Overview
                </a>
              </div>

              <div className="flex flex-wrap gap-8">
                <div><div className="text-3xl font-bold text-white">15+</div><div className="text-sm text-gray-400">Years Experience</div></div>
                <div><div className="text-3xl font-bold text-white">50+</div><div className="text-sm text-gray-400">OEM Partners</div></div>
                <div><div className="text-3xl font-bold text-white">12</div><div className="text-sm text-gray-400">Global Labs</div></div>
                <div><div className="text-3xl font-bold text-white">99.9%</div><div className="text-sm text-gray-400">Accuracy Rate</div></div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-square bg-gradient-to-br from-blue-600/20 to-amber-600/10 rounded-3xl border border-blue-400/20 backdrop-blur-sm p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Award className="w-20 h-20 text-amber-400 mx-auto mb-4 opacity-40" />
                    <div className="text-4xl font-bold text-white">Impeccable</div>
                    <div className="text-lg text-amber-300 mt-1">Quality Standard</div>
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {[{l:"Devices Tested",v:"10M+"},{l:"Test Cases",v:"500K+"},{l:"Markets",v:"30+"},{l:"Engineers",v:"200+"}].map(s=>(
                        <div key={s.l} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                          <div className="text-lg font-bold text-white">{s.v}</div>
                          <div className="text-xs text-gray-400">{s.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-amber-500 text-blue-950 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">ISO 17025</div>
                <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">GCF Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Trusted by Leading Technology Companies</p>
          <div className="flex flex-wrap justify-center gap-8">
            {["Samsung","Xiaomi","OPPO","Vivo","Qualcomm","MediaTek","Google","Nokia"].map(p=>(
              <span key={p} className="text-gray-400 font-semibold text-lg">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-full mb-4">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Testing Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From device testing to compliance certification — impeccable quality assurance.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {icon: Smartphone, title:"Mobile Device Testing", desc:"5000+ device models tested for global market readiness.", color:"from-blue-600 to-blue-700"},
              {icon: Wifi, title:"5G & IoT Testing", desc:"End-to-end validation of connectivity and smart ecosystems.", color:"from-indigo-600 to-indigo-700"},
              {icon: Car, title:"Automotive Testing", desc:"IVI, ADAS, and connected car systems validation.", color:"from-amber-500 to-amber-600"},
              {icon: Bot, title:"Automation Solutions", desc:"Custom frameworks, CI/CD, and AI-powered testing.", color:"from-blue-700 to-indigo-700"},
              {icon: ShieldCheck, title:"Compliance & Certification", desc:"GCF, PTCRB, carrier acceptance for market entry.", color:"from-blue-600 to-blue-800"},
              {icon: Gauge, title:"Performance Testing", desc:"Battery, thermal, network stress under real conditions.", color:"from-indigo-600 to-blue-700"},
            ].map(s=>(
              <div key={s.title} className="group p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-200 hover:shadow-xl transition-all">
                <div className={`w-12 h-12 bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center mb-4`}>
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-950">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[{v:"15+",l:"Years of Excellence"},{v:"200+",l:"Expert Engineers"},{v:"10M+",l:"Devices Tested"},{v:"30+",l:"Markets Served"}].map(s=>(
            <div key={s.l}><div className="text-4xl md:text-5xl font-bold text-white">{s.v}</div><div className="text-blue-200 mt-1">{s.l}</div></div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Ensure Impeccable Quality?</h2>
          <p className="text-lg text-blue-200 mb-8">Partner with us for world-class testing services.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="px-8 py-4 bg-amber-500 text-blue-950 font-semibold rounded-lg hover:bg-amber-400 shadow-xl">Start Your Project</a>
            <a href="#" className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10">Schedule a Call</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 border-t border-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg flex items-center justify-center"><span className="text-amber-400 font-bold">I</span></div>
            <span className="font-bold text-white">Impekka</span>
          </div>
          <p className="text-sm text-blue-300">&copy; 2026 Impekka. Impeccable, Always.</p>
        </div>
      </footer>

      {/* Switch link */}
      <div className="fixed bottom-4 right-4 z-50 bg-white shadow-xl rounded-lg p-3 border">
        <p className="text-xs text-gray-500 mb-1">Compare with:</p>
        <a href="/demo/nulbug" className="text-sm font-semibold text-green-600 hover:underline">→ View Nulbug Version</a>
      </div>
    </div>
  );
}
