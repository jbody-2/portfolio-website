'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ACCESS_COOKIE, accessToken, safeRedirectPath } from '@/lib/protected-access'

export type UnlockState = { error: string | null }

export async function unlock(_state: UnlockState, formData: FormData): Promise<UnlockState> {
  const expected = process.env.CASE_STUDY_PASSWORD
  const password = formData.get('password')
  const next = safeRedirectPath(formData.get('next'))

  if (!expected) return { error: 'Access is not configured yet.' }
  if (typeof password !== 'string' || password !== expected) return { error: 'Incorrect password. Try again.' }

  const cookieStore = await cookies()
  cookieStore.set(ACCESS_COOKIE, await accessToken(expected), {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  })

  redirect(next)
}
