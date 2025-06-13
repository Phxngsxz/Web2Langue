import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

// สร้างรายการภาษาที่รองรับ
const locales = ["en", "th", "zh", "ja"]
const defaultLocale = "en"

function getLocale(request: NextRequest): string {
  const headers = {
    "accept-language": request.headers.get("accept-language") || defaultLocale,
  }
  const languages = new Negotiator({ headers }).languages()
  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next()
  }

  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) return NextResponse.next()

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
