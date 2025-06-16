import Link from "next/link";
import type { Dictionary } from "@/app/[lang]/dictionaries";

interface FooterProps {
  lang: string;
  dict: Dictionary;
}

export function Footer({ lang, dict }: FooterProps) {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold">ML</span>
              </div>
              <span className="font-bold text-xl">MultiLang</span>
            </div>
            <p className="text-gray-400 text-sm">{dict.about.subtitle}</p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{dict.navigation.home}</h3>
            <div className="space-y-2">
              <Link
                href={`/${lang}`}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                {dict.navigation.home}
              </Link>
              <Link
                href={`/${lang}/about`}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                {dict.navigation.about}
              </Link>
              <Link
                href={`/${lang}/services`}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                {dict.navigation.services}
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">
              {dict.navigation.services}
            </h3>
            <div className="space-y-2">
              <Link
                href={`/${lang}/portfolio`}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                {dict.navigation.portfolio}
              </Link>
              <Link
                href={`/${lang}/blog`}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                {dict.navigation.blog}
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                {dict.navigation.contact}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{dict.contact.title}</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>{dict.contact.info.address}</p>
              <p>{dict.contact.info.phone}</p>
              <p>{dict.contact.info.email}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} MultiLang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
