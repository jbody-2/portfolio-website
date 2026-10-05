import Link from 'next/link'
import SiteHeader from '@/components/site-header'

export default function NotFound() {
  return (
    <div className="site">
      <SiteHeader />
      <main className="case-study not-found">
        <div className="case-header">
          <p className="case-company">404</p>
          <h1>Not found</h1>
          <Link className="back-link" href="/">← Back to projects</Link>
        </div>
      </main>
      <footer><span className="footer-copy">© {new Date().getFullYear()} Julian Body</span></footer>
    </div>
  )
}
