'use client'

import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function SiteHeader() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('theme-dark'))
  }, [])

  const toggleTheme = () => {
    const next = !dark
    window.localStorage.setItem('portfolio-theme', next ? 'dark' : 'light')
    document.documentElement.classList.toggle('theme-dark', next)
    setDark(next)
  }

  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Primary navigation">
        <Link className="wordmark" href="/">julian body</Link>
        <div className="nav-links">
          {/* Temporarily hidden: <Link href="/">projects</Link><Link href="/#lab">lab</Link> */}
          <Link href="/about">about</Link>
          <button className="theme-toggle" onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
            {dark ? <Sun size={17} strokeWidth={1.7} /> : <Moon size={17} strokeWidth={1.7} />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default SiteHeader
