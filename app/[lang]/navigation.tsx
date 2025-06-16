import Link from "next/link";
import { getDictionary } from "./dictionaries";

export default async function Navigation({ lang }: { lang: string }) {
  const dict = await getDictionary(lang as "en" | "th");
  return (
    <nav className="flex gap-4">
      <Link href={`/${lang}`} className="hover:underline">
        {dict.navigation.home}
      </Link>
      <Link href={`/${lang}/about`} className="hover:underline">
        {dict.navigation.about}
      </Link>
      <Link href={`/${lang}/contact`} className="hover:underline">
        {dict.navigation.contact}
      </Link>
    </nav>
  );
}
