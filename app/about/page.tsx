import { existsSync } from 'node:fs'
import path from 'node:path'
import type { Metadata } from 'next'
import Image from 'next/image'
import SiteHeader from '@/components/site-header'

export const metadata: Metadata = {
  title: 'About — Julian Body',
  description: 'Julian Body is a senior experience designer at eBay, currently building AI buyer experiences.',
}

const capabilities = [
  'Interaction Design',
  'Visual Design',
  'Motion',
  '3D Modeling',
  'Machining',
  'Research Methods',
]

const portraitFile = [
  'Julian Alamo Sq.png',
  'Julian Alamo Sq.jpg',
  'Julian Alamo Sq.jpeg',
  'Julian Alama Sq.png',
  'Julian Alama Sq.jpg',
].find((file) =>
  existsSync(path.join(process.cwd(), 'public', file)),
)

export default function AboutPage() {
  return (
    <div className="site">
      <SiteHeader />
      <main className="about-page">
        <p className="about-bio">
          Julian Body is a senior experience designer at eBay, currently building AI buyer experiences. He is based in the San Francisco Bay Area.
        </p>
        <section className="about-capabilities" aria-labelledby="capabilities-title">
          <h2 id="capabilities-title" className="about-label">Capabilities</h2>
          <ul className="capability-list">
            {capabilities.map((item) => <li key={item}>{item}</li>)}
          </ul>
          {portraitFile && (
            <div className="about-portrait">
              <Image src={`/${portraitFile}`} alt="Portrait of Julian Body" fill sizes="(max-width: 900px) 100vw, 40vw" priority />
            </div>
          )}
        </section>
      </main>
      <footer><span className="footer-copy">© {new Date().getFullYear()} Julian Body</span></footer>
    </div>
  )
}
