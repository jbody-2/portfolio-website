'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const sections = [
  { title: 'A clearer path forward', subtitle: 'Turning complexity into confidence', body: 'Atlas brings the most important decisions into focus. We shaped a system that feels calm at every step, helping teams move from first question to confident action.' },
  { title: 'Built around real work', subtitle: 'A flexible foundation for changing needs', body: 'Through research, prototyping, and close collaboration, we created an experience that meets people where they are and gets better as their work evolves.' },
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

  const name = slug === 'field-notes' ? 'Field Notes' : slug === 'forma' ? 'Forma' : slug === 'quiet-hours' ? 'Quiet Hours' : 'Atlas'

  return (
    <div className={dark ? 'site dark' : 'site'}>
      <header className="nav-wrap"><nav className="nav" aria-label="Primary navigation"><Link className="wordmark" href="/">julian body</Link><div className="nav-links"><div className="desktop-nav"><Link href="/">projects</Link><Link href="/#lab">lab</Link><Link href="/#about">about</Link></div><button className="menu-link" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>menu</button><button className="theme-toggle" onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Moon size={17} strokeWidth={1.7} /> : <Sun size={17} strokeWidth={1.7} />}</button></div></nav>{menuOpen && <div className="mobile-menu"><Link href="/" onClick={() => setMenuOpen(false)}>projects</Link><Link href="/#lab" onClick={() => setMenuOpen(false)}>lab</Link><Link href="/#about" onClick={() => setMenuOpen(false)}>about</Link></div>}</header>
      <main className="case-study">
        <header className="case-header"><p className="case-company">Independent case study</p><h1>{name}</h1><div className="case-meta"><div><span>Role</span><strong>Design direction, Product design</strong></div><div><span>Deliverables</span><strong>Strategy, UX, Visual system</strong></div><div><span>Timeline</span><strong>12 weeks · 2024</strong></div></div><p className="case-intro">A thoughtful digital experience designed to make complex work feel simple, clear, and distinctly human.</p><button className="case-cta" type="button">Check it out</button></header>
        <div className="placeholder landscape">Landscape image placeholder</div>
        <div className="case-copy">{sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p className="section-subtitle">{section.subtitle}</p><p>{section.body}</p></section>)}</div>
        <div className="case-images"><div className="placeholder portrait">Portrait image placeholder</div><div className="placeholder portrait">Portrait image placeholder</div></div>
        <div className="stats"><div><strong>42%</strong><span>increase in task completion</span></div><div><strong>3.8x</strong><span>faster time to value</span></div><div><strong>12k</strong><span>active users in the first quarter</span></div><div><strong>4.9</strong><span>average product rating</span></div></div>
        <Link className="back-link back-link-bottom" href="/">← Back to projects</Link>
      </main>
      <footer><span>© {new Date().getFullYear()} Julian Body</span></footer>
    </div>
  )
}

export default CaseStudy
