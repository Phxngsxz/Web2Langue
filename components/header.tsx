"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LanguageSwitcher } from "./language-switcher"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import type { Dictionary } from "@/app/[lang]/dictionaries"

interface HeaderProps {
  lang: string
  dict: Dictionary
}

export function Header({ lang, dict }: HeaderProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === `/${lang}${path === "/" ? "" : path}`
  }

  const navItems = [
    { href: "/", label: dict.navigation.home },
    { href: "/about", label: dict.navigation.about },
    { href: "/services", label: dict.navigation.services },
    { href: "/portfolio", label: dict.navigation.portfolio },
    { href: "/blog", label: dict.navigation.blog },
    { href: "/contact", label: dict.navigation.contact },
  ]

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center space-x-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
              <span className="text-sm font-bold">ML</span>
            </div>
            <span className="text-xl font-bold text-black transition-colors duration-300 group-hover:text-gray-600">
              MultiLang
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={`/${lang}${item.href === "/" ? "" : item.href}`}
                className={`text-sm font-medium transition-all duration-300 hover:text-black relative group animate-fade-in-up ${
                  isActive(item.href) ? "text-black" : "text-gray-600"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher currentLang={lang} />

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden hover:bg-gray-100">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={`/${lang}${item.href === "/" ? "" : item.href}`}
                      className={`text-sm font-medium transition-colors hover:text-black animate-slide-in-right ${
                        isActive(item.href) ? "text-black" : "text-gray-600"
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
