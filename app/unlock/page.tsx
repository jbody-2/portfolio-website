import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import { UnlockForm } from '@/components/unlock-form'
import { safeRedirectPath } from '@/lib/protected-access'

export const metadata: Metadata = {
  title: 'Protected project — Julian Body',
  robots: { index: false, follow: false },
}

export default async function UnlockPage({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  const { next } = await searchParams

  return (
    <div className="site">
      <SiteHeader />
      <main className="case-study unlock">
        <Link className="back-link" href="/">← Back to projects</Link>
        <div className="case-header">
          <p className="case-company">eBay</p>
          <h1>AI Search</h1>
          <p className="unlock-note">This case study is password protected. Enter the password to continue.</p>
          <UnlockForm next={safeRedirectPath(next)} />
        </div>
      </main>
    </div>
  )
}
