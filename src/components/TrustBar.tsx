import type { Dictionary } from "@/i18n/getDictionary";

interface TrustBarProps {
  dict: Dictionary;
}

export default function TrustBar({ dict }: TrustBarProps) {
  const partners = [
    "Samsung", "Xiaomi", "OPPO", "Vivo", "Huawei",
    "Qualcomm", "MediaTek", "Google", "Microsoft", "Nokia"
  ];

  return (
    <section className="py-8 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 mb-6 font-medium uppercase tracking-wider">
          {dict.trust.title}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner}
              className="text-gray-400 font-semibold text-lg hover:text-gray-600 transition-colors cursor-default"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
