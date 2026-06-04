"use client";

import Link from "next/link";
import { ArrowRight, Play, Smartphone, Wifi, Car, Bot, ShieldCheck, Gauge, Bug, MapPin, Phone, Mail, Globe, Menu } from "lucide-react";

export default function NulbugDemo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <Bug className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl text-white">Nulbug</span>
                <span className="hidden sm:block text-xs text-green-400">Zero Bugs. Guaranteed.</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-6">
              <a href="#" className="text-sm text-gray-300 hover:text-green-400">Services</a>
              <a href="#" className="text-sm text-gray-300 hover:text-green-400">Industries</a>
              <a href="#" className="text-sm text-gray-300 hover:text-green-400">About</a>
              <a href="#" className="text-sm text-gray-300 hover:text-green-400">Careers</a>
              <a href="#" className="text-sm text-gray-300 hover:text-green-400">Contact</a>
              <button className="flex items-center gap-1 text-sm text-gray-400"><Globe className="w-4 h-4"/>EN</button>
              <a href="#" className="px-5 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-lg hover:bg-green-400">Get a Quote</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-green-300">Now Serving UAE & GCC Markets</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Your Trusted Partner in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  Zero-Defect Device Assurance
                </span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
                We eliminate every bug before your device hits the market. Mobile testing, automation & compliance services — worldwide. Zero bugs, guaranteed.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#" className="inline-flex items-center gap-2 px-7 py-3.5 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition-all shadow-lg shadow-green-500/30">
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
                <div><div className="text-3xl font-bold text-white">99.9%</div><div className="text-sm text-gray-400">Bug Detection</div></div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full aspect-square bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-3xl border border-green-500/20 backdrop-blur-sm p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Bug className="w-20 h-20 text-green-400 mx-auto mb-4 opacity-20" />
                    <div className="text-6xl font-bold text-green-400">∅</div>
                    <div className="text-xl text-gray-300 mt-2">Zero Defects</div>
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
                <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">ISO 17025</div>
                <div className="absolute -bottom-4 -left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">GCF Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-gray-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Trusted by Leading Technology Companies</p>
          <div className="flex flex-wrap justify-center gap-8">
            {["Samsung","Xiaomi","OPPO","Vivo","Qualcomm","MediaTek","Google","Nokia"].map(p=>(
              <span key={p} className="text-gray-600 font-semibold text-lg">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-green-500/10 text-green-400 text-sm font-medium rounded-full mb-4">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Bug Elimination</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">From device testing to compliance certification — we find and kill every bug.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {icon: Smartphone, title:"Mobile Device Testing", desc:"5000+ device models tested for global market readiness.", color:"from-green-500 to-green-600"},
              {icon: Wifi, title:"5G & IoT Testing", desc:"End-to-end validation of connectivity and smart ecosystems.", color:"from-emerald-500 to-emerald-600"},
              {icon: Car, title:"Automotive Testing", desc:"IVI, ADAS, and connected car systems validation.", color:"from-teal-500 to-teal-600"},
              {icon: Bot, title:"Automation Solutions", desc:"Custom frameworks, CI/CD, and AI-powered testing.", color:"from-green-500 to-teal-600"},
              {icon: ShieldCheck, title:"Compliance & Certification", desc:"GCF, PTCRB, carrier acceptance for market entry.", color:"from-emerald-500 to-green-600"},
              {icon: Gauge, title:"Performance Testing", desc:"Battery, thermal, network stress under real conditions.", color:"from-teal-500 to-green-600"},
            ].map(s=>(
              <div key={s.title} className="group p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 transition-all">
                <div className={`w-12 h-12 bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center mb-4`}>
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[{v:"15+",l:"Years of Excellence"},{v:"200+",l:"Expert Engineers"},{v:"10M+",l:"Devices Tested"},{v:"30+",l:"Markets Served"}].map(s=>(
            <div key={s.l}><div className="text-4xl md:text-5xl font-bold text-white">{s.v}</div><div className="text-green-100 mt-1">{s.l}</div></div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Ship Bug-Free?</h2>
          <p className="text-lg text-gray-400 mb-8">Partner with us. Zero bugs in your next release.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 shadow-xl">Start Your Project</a>
            <a href="#" className="px-8 py-4 border-2 border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10">Schedule a Call</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center"><Bug className="w-4 h-4 text-white"/></div>
            <span className="font-bold text-white">Nulbug</span>
          </div>
          <p className="text-sm text-gray-500">&copy; 2026 Nulbug. Zero Bugs. Guaranteed.</p>
        </div>
      </footer>

      {/* Switch link */}
      <div className="fixed bottom-4 right-4 z-50 bg-white shadow-xl rounded-lg p-3 border">
        <p className="text-xs text-gray-500 mb-1">Compare with:</p>
        <a href="/demo/impekka" className="text-sm font-semibold text-blue-600 hover:underline">→ View Impekka Version</a>
      </div>
    </div>
  );
}
