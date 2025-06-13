"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavigationProps {
  lang: string
  dict: {
    navigation: {
      home: string
      about: string
      contact: string
    }
  }
}

export function Navigation({ lang, dict }: NavigationProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === `/${lang}${path === "/" ? "" : path}`
  }

  return (
    <nav className="hidden md:flex items-center space-x-6">
      <Link
        href={`/${lang}`}
        className={`text-sm font-medium transition-colors hover:text-blue-600 ${
          isActive("/") ? "text-blue-600" : "text-gray-700"
        }`}
      >
        {dict.navigation.home}
      </Link>
      <Link
        href={`/${lang}/about`}
        className={`text-sm font-medium transition-colors hover:text-blue-600 ${
          isActive("/about") ? "text-blue-600" : "text-gray-700"
        }`}
      >
        {dict.navigation.about}
      </Link>
      <Link
        href={`/${lang}/contact`}
        className={`text-sm font-medium transition-colors hover:text-blue-600 ${
          isActive("/contact") ? "text-blue-600" : "text-gray-700"
        }`}
      >
        {dict.navigation.contact}
      </Link>
    </nav>
  )
}
