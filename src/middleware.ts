import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./i18n/config";

function getLocale(request: NextRequest): string {
  const acceptLang = request.headers.get("accept-language") || "";
  const preferred = acceptLang.split(",")[0]?.split("-")[0] || defaultLocale;
  return locales.includes(preferred as typeof locales[number]) ? preferred : defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Skip static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return;
  }

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
