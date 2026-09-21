'use client'

import Image from 'next/image'
import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'

const projects = [
  { title: 'Atlas', type: 'Product system', year: '2024', image: '/projects/atlas.png', color: 'blue' },
  { title: 'Field Notes', type: 'Editorial platform', year: '2023', image: '/projects/fieldnotes.png', color: 'terra' },
  { title: 'Forma', type: 'Brand & digital', year: '2023', image: '/projects/forma.png', color: 'lime' },
  { title: 'Quiet Hours', type: 'Mobile experience', year: '2022', image: '/projects/quiet.png', color: 'lavender' },
]

export function Portfolio() {
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? 'site dark' : 'site'}>
      <header className="nav-wrap">
        <nav className="nav" aria-label="Primary navigation">
          <a className="wordmark" href="#top">julian body</a>
          <div className="nav-links">
            <a href="#projects">projects</a>
            <a href="#lab">lab</a>
            <a href="#about">about</a>
            <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
              {dark ? <Moon size={17} strokeWidth={1.7} /> : <Sun size={17} strokeWidth={1.7} />}
            </button>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="intro" aria-labelledby="intro-title">
          <p className="eyebrow">Senior product designer / New York</p>
          <h1 id="intro-title">I make useful things<br className="desktop-break" /> feel inevitable.</h1>
          <p className="intro-copy">I&apos;m Julian, a product designer interested in the space between people, technology, and the everyday. Currently designing at <span>Arc.</span></p>
        </section>

        <section id="projects" className="projects" aria-labelledby="projects-title">
          <div className="section-heading"><h2 id="projects-title">Selected work</h2><span>01—04</span></div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <a href={`#${project.title.toLowerCase().replaceAll(' ', '-')}`} className={`project-image ${project.color}`} aria-label={`View ${project.title} project`}>
                  <Image src={project.image} alt="" fill sizes="(max-width: 1279px) 100vw, 50vw" priority={index < 2} />
                  <span className="project-number">0{index + 1}</span>
                </a>
                <div className="project-meta"><h3>{project.title}</h3><div><span>{project.type}</span><span>{project.year}</span></div></div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="section-heading"><h2>About</h2><span>01—02</span></div>
          <div className="about-grid">
            <p className="about-lede">Designing digital products, identities, and experiences for teams building what&apos;s next.</p>
            <div className="about-detail"><p>Over the past decade I&apos;ve worked across product, brand, and strategy — from early-stage startups to global teams. I like clear questions, good constraints, and the moment a complicated idea clicks.</p><a href="mailto:hello@julianbody.com">Get in touch <span>↗</span></a></div>
          </div>
        </section>

        <section id="lab" className="lab-section">
          <div className="section-heading"><h2>Lab notes</h2><span>Small observations</span></div>
          <div className="notes"><p><span>01</span>Making room for the unfinished.</p><p><span>02</span>Interfaces as a form of hospitality.</p><p><span>03</span>On collecting good questions.</p></div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Julian Body</span><span>Designed in New York · Built with care</span></footer>
    </div>
  )
}

export default Portfolio
