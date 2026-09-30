import { NextResponse, type NextRequest } from 'next/server'
import { ACCESS_COOKIE, hasValidAccess } from '@/lib/protected-access'

export async function proxy(request: NextRequest) {
  if (await hasValidAccess(request.cookies.get(ACCESS_COOKIE)?.value)) return NextResponse.next()

  const unlockUrl = new URL('/unlock', request.url)
  unlockUrl.searchParams.set('next', request.nextUrl.pathname)
  return NextResponse.redirect(unlockUrl)
}

export const config = {
  matcher: ['/case-studies/ai-search', '/case-studies/ai-search/:path*'],
}
