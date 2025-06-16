import type React from "react";
import "./globals.css";
import {
  Inter,
  Noto_Sans_Thai,
  Noto_Sans_SC,
  Noto_Sans_JP,
} from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getDictionary } from "./dictionaries";
import { FloatingElements } from "@/components/floating-elements";
import { ScrollProgress } from "@/components/scroll-progress";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoThai = Noto_Sans_Thai({ subsets: ["thai"], variable: "--font-thai" });
const notoChinese = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-chinese",
});
const notoJapanese = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-japanese",
});

export const locales = ["en", "th", "zh", "ja"];

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

function getFontClass(lang: string) {
  const baseClasses = `${inter.variable} ${notoThai.variable} ${notoChinese.variable} ${notoJapanese.variable}`;
  switch (lang) {
    case "th":
      return `${baseClasses} font-thai`;
    case "zh":
      return `${baseClasses} font-chinese`;
    case "ja":
      return `${baseClasses} font-japanese`;
    default:
      return `${baseClasses} font-inter`;
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dict = await getDictionary(params.lang as keyof typeof locales);

  return (
    <html lang={params.lang} className={getFontClass(params.lang)}>
      <body className="min-h-screen bg-white text-black relative overflow-x-hidden">
        <ScrollProgress />
        <FloatingElements />
        <Header lang={params.lang} dict={dict} />
        <main>{children}</main>
        <Footer lang={params.lang} dict={dict} />
      </body>
    </html>
  );
}
