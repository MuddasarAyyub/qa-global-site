import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Dictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

interface FooterProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Footer({ dict, locale }: FooterProps) {
  const prefix = `/${locale}`;

  const footerLinks = {
    services: [
      { name: dict.services.items.mobile.title, href: `${prefix}/services#mobile` },
      { name: dict.services.items["5g"].title, href: `${prefix}/services#5g-iot` },
      { name: dict.services.items.automotive.title, href: `${prefix}/services#automotive` },
      { name: dict.services.items.automation.title, href: `${prefix}/services#automation` },
      { name: dict.services.items.compliance.title, href: `${prefix}/services#compliance` },
    ],
    company: [
      { name: dict.nav.about, href: `${prefix}/about` },
      { name: dict.nav.industries, href: `${prefix}/industries` },
      { name: dict.nav.careers, href: `${prefix}/careers` },
      { name: dict.nav.contact, href: `${prefix}/contact` },
    ],
    industries: [
      { name: dict.industries.items.smartphones.title, href: `${prefix}/industries#telecom` },
      { name: dict.industries.items.automotive.title, href: `${prefix}/industries#automotive` },
      { name: dict.industries.items.smarthome.title, href: `${prefix}/industries#iot` },
      { name: dict.industries.items.wearables.title, href: `${prefix}/industries#wearables` },
    ],
  };

  return (
    <footer className="bg-dark-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Q</span>
              </div>
              <span className="font-bold text-xl text-white">QAGlobal</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">{dict.footer.description}</p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span>Dubai Silicon Oasis, UAE</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span>+971 4 XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span>info@qaglobal.ae</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base mb-4">{dict.footer.servicesTitle}</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base mb-4">{dict.footer.companyTitle}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base mb-4">{dict.footer.industriesTitle}</h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} QAGlobal. {dict.footer.rights}
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href={`${prefix}/privacy`} className="hover:text-gray-300 transition-colors">{dict.footer.privacy}</Link>
            <Link href={`${prefix}/terms`} className="hover:text-gray-300 transition-colors">{dict.footer.terms}</Link>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>{dict.footer.certified}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
