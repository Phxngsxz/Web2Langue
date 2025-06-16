"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const languageNames: Record<string, { name: string; flag: string }> = {
  en: { name: "English", flag: "🇺🇸" },
  th: { name: "ไทย", flag: "🇹🇭" },
  zh: { name: "中文", flag: "🇨🇳" },
  ja: { name: "日本語", flag: "🇯🇵" },
};

const locales = ["en", "th", "zh", "ja"];

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (locale: string) => {
    if (locale === currentLang) return;
    const pathWithoutLang = pathname.replace(`/${currentLang}`, "");
    const newPath = `/${locale}${pathWithoutLang || ""}`;
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 bg-white border-gray-300 hover:border-black hover:bg-gray-50 transition-all duration-300 hover:scale-105"
        >
          <Globe className="h-4 w-4 text-black" />
          <span className="hidden sm:inline">
            {languageNames[currentLang]?.flag}
          </span>
          <span className="font-medium">
            {languageNames[currentLang]?.name}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[140px] bg-white border-gray-200"
      >
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLanguage(locale)}
            className={`cursor-pointer flex items-center gap-2 transition-colors duration-200 ${
              locale === currentLang
                ? "bg-gray-100 text-black font-medium"
                : "hover:bg-gray-50 text-gray-700"
            }`}
          >
            <span>{languageNames[locale]?.flag}</span>
            <span>{languageNames[locale]?.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
