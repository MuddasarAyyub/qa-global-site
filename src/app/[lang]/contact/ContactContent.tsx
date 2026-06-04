"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import type { Dictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

interface ContactContentProps {
  dict: Dictionary;
  locale: Locale;
}

export default function ContactContent({ dict, locale }: ContactContentProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(dict.contact.successMsg);
    setFormData({ name: "", email: "", company: "", service: "", message: "" });
  };

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
            {dict.contact.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {dict.contact.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {dict.contact.description}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{dict.contact.uaeOffice}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-0.5" />
                    <div className="text-sm text-gray-600">
                      Dubai Silicon Oasis<br />Building A2, Office 401<br />Dubai, UAE
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span className="text-sm text-gray-600">+971 4 XXX XXXX</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span className="text-sm text-gray-600">info@qaglobal.ae</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary-600" />
                    <span className="text-sm text-gray-600">Sun – Thu: 9:00 AM – 6:00 PM (GST)</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{dict.contact.ksaLab}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-0.5" />
                    <div className="text-sm text-gray-600">
                      Riyadh Techno Valley<br />King Saud University<br />Riyadh, KSA
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span className="text-sm text-gray-600">+966 11 XXX XXXX</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-primary-50 rounded-xl">
                <p className="text-sm text-primary-700 font-medium mb-1">{dict.contact.quickResponse}</p>
                <p className="text-xs text-primary-600">{dict.contact.quickResponseDesc} +971 50 XXX XXXX</p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{dict.contact.formTitle}</h3>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{dict.contact.name} *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{dict.contact.email} *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{dict.contact.company}</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{dict.contact.service}</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    >
                      <option value="">{dict.contact.selectService}</option>
                      <option value="mobile">Mobile Device Testing</option>
                      <option value="5g-iot">5G & IoT Testing</option>
                      <option value="automotive">Automotive Testing</option>
                      <option value="automation">Automation Solutions</option>
                      <option value="compliance">Compliance & Certification</option>
                      <option value="performance">Performance Testing</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">{dict.contact.projectDetails}</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                    placeholder={dict.contact.projectPlaceholder}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <Send className="w-4 h-4" />
                  {dict.contact.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
