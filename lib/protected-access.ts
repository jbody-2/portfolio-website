export const ACCESS_COOKIE = 'case-study-access'
export const PROTECTED_PATHS = ['/case-studies/ai-search']

export function isProtectedPath(pathname: string) {
  return PROTECTED_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`))
}

export async function accessToken(password: string) {
  const data = new TextEncoder().encode(`case-study-access:${password}`)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('')
}

export async function hasValidAccess(cookieValue: string | undefined) {
  const password = process.env.CASE_STUDY_PASSWORD
  if (!password || !cookieValue) return false
  return cookieValue === (await accessToken(password))
}

export function safeRedirectPath(next: unknown) {
  return typeof next === 'string' && isProtectedPath(next) ? next : PROTECTED_PATHS[0]
}
