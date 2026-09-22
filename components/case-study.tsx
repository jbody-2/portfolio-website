'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const defaultSections = [
  { title: 'A clearer path forward', subtitle: 'Turning complexity into confidence', body: 'Atlas brings the most important decisions into focus. We shaped a system that feels calm at every step, helping teams move from first question to confident action.' },
  { title: 'Built around real work', subtitle: 'A flexible foundation for changing needs', body: 'Through research, prototyping, and close collaboration, we created an experience that meets people where they are and gets better as their work evolves.' },
]

const influencerSections = [
  { title: 'Elevating curation', subtitle: 'Designed for discovery & easy sharing', body: "Available on web and native, influencers can curate thousands of eBay items, enriching storefronts with rich media and sharing their collections to social media." },
  { title: 'The Cast', subtitle: 'Where Product Shapes Brand', body: "After launch, eBay partnered with a group of influencers known as The Cast, each curating personalized storefronts. The product experience soon became a brand identity, with the masonry grid system established in Storefronts being the visual language of the campaign. This motif extended across E2E modules and ads, reflecting the richness and diversity of each influencer's curation." },
]

const lokalSections = [
  { title: 'Map-based discovery', subtitle: 'Making Local Visible', body: "Working closely with the Maps designer, I integrated the dynamic map experience into the Hub's core flow. Users can visually browse items around them, making discovery more intuitive and immediate. Seeing inventory geographically added transparency and trust while elevating seller presence." },
  { title: 'Experience Strategy', subtitle: 'Designing for Local Intent', body: "We defined the Local Hub as an early anchor in the local buying journey. Clear guiding principles helped define the Hub's structure across an item, feature, and page level. The result was an experience tailored to eBay members and guests alike." },
  { title: 'Launching Local', subtitle: 'Media Rollout', body: "As part of eBay Germany's local launch, the Local Hub featured prominently across TV, radio, and banners across eBay's site." },
  { title: 'Screen to street', subtitle: 'Pop-Up Experiences', body: 'The launch extended into physical experiences, including a pop-up shop called the Buy Window in Berlin. The activation brought local sellers into the real world, strengthening trust in local commerce.' },
]

export function CaseStudy({ slug }: { slug: string }) {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setDark(window.localStorage.getItem('portfolio-theme') === 'dark')
  }, [])

  const toggleTheme = () => {
    setDark((current) => {
      const next = !current
      window.localStorage.setItem('portfolio-theme', next ? 'dark' : 'light')
      document.documentElement.classList.toggle('theme-dark', next)
      return next
    })
  }

  const isLokal = slug === 'lokal'
  const isInfluencers = slug === 'influencers'
  const name = isLokal ? 'Lokal' : isInfluencers ? 'Influencers' : slug === 'field-notes' ? 'Field Notes' : slug === 'forma' ? 'Forma' : slug === 'quiet-hours' ? 'Quiet Hours' : 'Atlas'
  const company = isLokal || isInfluencers ? 'eBay' : 'Independent case study'
  const sections = isLokal ? lokalSections : isInfluencers ? influencerSections : defaultSections
  const metadata = isLokal ? { role: 'Product Designer', deliverables: 'Web & Native UI, UX', timeline: '6 months' } : isInfluencers ? { role: 'Product Designer', deliverables: 'Web & Native UI, UX', timeline: '4 months' } : { role: 'Design direction, Product design', deliverables: 'Strategy, UX, Visual system', timeline: '12 weeks · 2024' }
  const stats = isLokal ? [['52.5M', 'GMV, +5% growth in local transactions'], ['12', 'Percent increase in Watchlist saves for local inventory'], ['30', 'Percent faster discovery time for local items'], ['4x', 'Increase in local pickup searches in the first 90 days']] : isInfluencers ? [['22', 'Influencers represented in The Cast'], ['400+', 'Updates to Storefronts this year'], ['3', 'Global markets Storefronts has expanded to'], ['22', 'Colleagues I collaborated with to make this project a reality across ads, marketing, product, & engineering']] : [['42%', 'increase in task completion'], ['3.8x', 'faster time to value'], ['12k', 'active users in the first quarter'], ['4.9', 'average product rating']]

  return (
    <div className={dark ? 'site dark' : 'site'}>
      <header className="nav-wrap"><nav className="nav" aria-label="Primary navigation"><Link className="wordmark" href="/">julian body</Link><div className="nav-links"><div className="desktop-nav"><Link href="/">projects</Link><Link href="/#lab">lab</Link><Link href="/#about">about</Link></div><button className="menu-link" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>menu</button><button className="theme-toggle" onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Moon size={17} strokeWidth={1.7} /> : <Sun size={17} strokeWidth={1.7} />}</button></div></nav>{menuOpen && <div className="mobile-menu"><Link href="/" onClick={() => setMenuOpen(false)}>projects</Link><Link href="/#lab" onClick={() => setMenuOpen(false)}>lab</Link><Link href="/#about" onClick={() => setMenuOpen(false)}>about</Link></div>}</header>
      <main className="case-study">
        <header className="case-header"><p className="case-company">{company}</p><h1>{name}</h1><div className="case-meta"><div><span>Role</span><strong>{metadata.role}</strong></div><div><span>Deliverables</span><strong>{metadata.deliverables}</strong></div><div><span>Timeline</span><strong>{metadata.timeline}</strong></div></div><p className="case-intro">{isLokal ? "I helped launch eBay's Local Hub, a neighborhood shopping experience that began in Germany which now serves as the model for global marketplaces." : isInfluencers ? "I was responsible for the buyer-facing user experience of eBay's first influencer platform, a virtual storefront where iconic names curate eBay items to share with their followers." : 'A thoughtful digital experience designed to make complex work feel simple, clear, and distinctly human.'}</p><button className="case-cta" type="button">Check it out</button></header>
        <div className={`placeholder landscape ${isLokal ? 'lokal-placeholder' : ''}`}>{isLokal ? 'Lokal landscape image · /public/lokal/hero.png' : 'Landscape image placeholder'}</div>
        <div className="case-copy">{sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p className="section-subtitle">{section.subtitle}</p><p>{section.body}</p></section>)}</div>
        <div className="case-images"><div className="placeholder portrait">{isLokal ? 'Lokal portrait image · /public/lokal/portrait-1.png' : 'Portrait image placeholder'}</div><div className="placeholder portrait">{isLokal ? 'Lokal portrait image · /public/lokal/portrait-2.png' : 'Portrait image placeholder'}</div></div>
        <div className="stats">{stats.map(([value, description]) => <div key={`${value}-${description}`}><strong>{value}</strong><span>{description}</span></div>)}</div>
        <Link className="back-link back-link-bottom" href="/">← Back to projects</Link>
      </main>
      <footer><span>© {new Date().getFullYear()} Julian Body</span></footer>
    </div>
  )
}

export default CaseStudy
