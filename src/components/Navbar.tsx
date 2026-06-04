"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import type { Dictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import { locales, localeNames } from "@/i18n/config";

interface NavbarProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Navbar({ dict, locale }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);

  const prefix = `/${locale}`;

  const services = [
    { name: dict.services.items.mobile.title, href: `${prefix}/services#mobile` },
    { name: dict.services.items["5g"].title, href: `${prefix}/services#5g-iot` },
    { name: dict.services.items.automotive.title, href: `${prefix}/services#automotive` },
    { name: dict.services.items.automation.title, href: `${prefix}/services#automation` },
    { name: dict.services.items.compliance.title, href: `${prefix}/services#compliance` },
    { name: dict.services.items.performance.title, href: `${prefix}/services#performance` },
  ];

  const navLinks = [
    { name: dict.nav.home, href: prefix },
    { name: dict.nav.services, href: `${prefix}/services`, children: services },
    { name: dict.nav.industries, href: `${prefix}/industries` },
    { name: dict.nav.about, href: `${prefix}/about` },
    { name: dict.nav.careers, href: `${prefix}/careers` },
    { name: dict.nav.contact, href: `${prefix}/contact` },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href={prefix} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Q</span>
            </div>
            <div>
              <span className="font-bold text-xl text-gray-900">QAGlobal</span>
              <span className="hidden sm:block text-xs text-gray-500">Quality Without Borders</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.children && <ChevronDown className="w-3 h-3" />}
                </Link>

                {link.children && activeDropdown === link.name && (
                  <div className="absolute top-full start-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Globe className="w-4 h-4" />
                {localeNames[locale]}
                <ChevronDown className="w-3 h-3" />
              </button>
              {langOpen && (
                <div className="absolute top-full end-0 mt-1 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {locales.map((loc) => (
                    <Link
                      key={loc}
                      href={`/${loc}`}
                      className={`block px-4 py-2 text-sm transition-colors ${loc === locale ? "text-primary-600 bg-primary-50 font-medium" : "text-gray-700 hover:bg-gray-50"}`}
                      onClick={() => setLangOpen(false)}
                    >
                      {localeNames[loc]}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href={`${prefix}/contact`}
              className="px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-md hover:shadow-lg"
            >
              {dict.nav.getQuote}
            </Link>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              </div>
            ))}
            {/* Language links mobile */}
            <div className="border-t border-gray-100 mt-3 pt-3 px-4">
              <p className="text-xs text-gray-500 mb-2 font-medium">Language</p>
              <div className="flex flex-wrap gap-2">
                {locales.map((loc) => (
                  <Link
                    key={loc}
                    href={`/${loc}`}
                    className={`px-3 py-1.5 text-sm rounded-lg ${loc === locale ? "bg-primary-100 text-primary-700 font-medium" : "bg-gray-100 text-gray-600"}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {localeNames[loc]}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-4 px-4">
              <Link
                href={`${prefix}/contact`}
                className="block w-full text-center px-5 py-3 bg-primary-600 text-white font-semibold rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                {dict.nav.getQuote}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
