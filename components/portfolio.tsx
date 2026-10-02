import Image from 'next/image'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'

const projects = [
  { title: 'eBay AI Search', type: 'UI, UX, Research', year: '2023', image: '/hero thumbs/Landscape-1.png', color: 'lavender', slug: 'ai-search' },
  { title: 'eBay Local Hub', type: 'UI, UX', year: '2024', image: '/hero thumbs/Lokal Mockup_.png', color: 'blue', slug: 'lokal' },
  { title: 'eBay Influencer Storefront', type: 'UI, UX, Research', year: '2023', image: '/hero thumbs/Emma Winter.png', color: 'terra', slug: 'influencers' },
  { title: 'Our Grails', type: 'Installation, Publication', year: '2023', image: '/Grails - Body 15.jpeg', color: 'lime', slug: 'our-grails' },
  { title: 'Plush+', type: 'Physical Design', year: '2024', image: '/Plush 1.jpeg', color: 'blue', slug: 'plush' },
  { title: 'Equanimity', type: 'Physical Design', year: '2024', image: '/table 1.png', color: 'blue', slug: 'equanimity' },
]

export function Portfolio() {
  return <div className="site">
    <SiteHeader />
    <main id="top"><section id="projects" className="projects" aria-label="Projects"><div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><Link href={`/case-studies/${project.slug}`} className={`project-image ${project.color}`} aria-label={`View ${project.title} project`}><Image src={project.image} alt={`${project.title} project`} fill sizes="(max-width: 1279px) 100vw, 50vw" priority={index < 2} /></Link><div className="project-meta"><h3>{project.title}</h3><div><span>{project.type}</span></div></div></article>)}</div></section></main>
    <footer><span className="footer-copy">© {new Date().getFullYear()} Julian Body</span></footer>
  </div>
}

export default Portfolio
