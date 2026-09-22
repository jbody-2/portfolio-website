'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const projects = [
  { title: 'Lokal', type: 'UI, UX', year: '2024', image: '/lokal/hero.png', color: 'blue', slug: 'lokal' },
  { title: 'Field Notes', type: 'Editorial, UX', year: '2023', image: '/projects/fieldnotes.png', color: 'terra', slug: 'field-notes' },
  { title: 'Forma', type: 'Brand, Digital', year: '2023', image: '/projects/forma.png', color: 'lime', slug: 'forma' },
  { title: 'Quiet Hours', type: 'Mobile, UX', year: '2022', image: '/projects/quiet.png', color: 'lavender', slug: 'quiet-hours' },
]

export function Portfolio() {
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

  return <div className={dark ? 'site dark' : 'site'}>
    <header className="nav-wrap"><nav className="nav" aria-label="Primary navigation"><Link className="wordmark" href="#top">julian body</Link><div className="nav-links"><div className="desktop-nav"><Link href="#projects">projects</Link><Link href="#lab">lab</Link><Link href="#about">about</Link></div><button className="menu-link" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>menu</button><button className="theme-toggle" onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Moon size={17} strokeWidth={1.7} /> : <Sun size={17} strokeWidth={1.7} />}</button></div></nav>{menuOpen && <div className="mobile-menu"><Link href="#projects" onClick={() => setMenuOpen(false)}>projects</Link><Link href="#about" onClick={() => setMenuOpen(false)}>about</Link></div>}</header>
    <main id="top"><section id="projects" className="projects" aria-labelledby="projects-title"><div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><Link href={`/case-studies/${project.slug}`} className={`project-image ${project.color}`} aria-label={`View ${project.title} project`}><Image src={project.image} alt={`${project.title} project`} fill sizes="(max-width: 1279px) 100vw, 50vw" priority={index < 2} /></Link><div className="project-meta"><h3>{project.title}</h3><div><span>{project.type}</span></div></div></article>)}</div></section><section id="about" className="about-section"><div className="section-heading"><h2>About</h2></div><div className="about-grid"><p className="about-lede">Designing digital products, identities, and experiences for teams building what&apos;s next.</p><div className="about-detail"><p>Over the past decade I&apos;ve worked across product, brand, and strategy — from early-stage startups to global teams. I like clear questions, good constraints, and the moment a complicated idea clicks.</p><a href="mailto:hello@julianbody.com">Get in touch <span>↗</span></a></div></div></section></main>
    <footer><span>© {new Date().getFullYear()} Julian Body</span></footer>
  </div>
}

export default Portfolio
