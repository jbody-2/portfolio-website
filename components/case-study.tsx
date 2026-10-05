'use client'

import Link from 'next/link'
import { Fragment } from 'react'
import SiteHeader from '@/components/site-header'

const defaultSections = [
  { title: 'A clearer path forward', subtitle: 'Turning complexity into confidence', body: 'Atlas brings the most important decisions into focus. We shaped a system that feels calm at every step, helping teams move from first question to confident action.' },
  { title: 'Built around real work', subtitle: 'A flexible foundation for changing needs', body: 'Through research, prototyping, and close collaboration, we created an experience that meets people where they are and gets better as their work evolves.' },
]

const influencerSections = [
  { title: 'Elevating curation', subtitle: 'Designed for discovery & easy sharing', body: "Available on web and native, influencers can curate thousands of eBay items, enriching storefronts with rich media and sharing their collections to social media." },
  { title: 'The Cast', subtitle: 'Where Product Shapes Brand', body: "After launch, eBay partnered with a group of influencers known as The Cast, each curating personalized storefronts. The product experience soon became a brand identity, with the masonry grid system established in Storefronts being the visual language of the campaign. This motif extended across E2E modules and ads, reflecting the richness and diversity of each influencer's curation." },
]

const grailsSections = [
  { title: 'Primary Research', subtitle: '24 Collector Interviews', body: 'I conducted a qualitative study with 24 sneaker collectors recruited from a pool of nearly 90 global respondents. Methods included audio submissions, image documentation, and structured interviews. The approach surfaced motivations, behaviors, and identity markers tied to owning or pursuing a grail.' },
  { title: 'Publication Design', subtitle: 'Insights to Artifact', body: 'I chose to translate the research into a physical book as a deliberate design choice. Like a sneaker, it is susceptible to wear, aging, and personal history—yet holds enduring value. Working with my thesis committee, I distilled core themes from the interviews and structured a publication around them.' },
  { title: 'Exhibition Design', subtitle: 'Curating an Experience', body: 'I displayed my work at the Henry Art Gallery in Seattle, May 28–June 26, 2022. Highlights of the installation included the book, original artwork, and an audio station featuring voice recordings of research participants. Each of these stations gave visitors the opportunity to consume individual stories and interact with the concept of a grail.' },
]

const aiSearchSections = [
  { title: 'Integrating eBay.ai', subtitle: 'A conversational experience', body: "We integrated eBay.ai directly into core search, guiding buyers from discovery to decision through natural language. Buyers can ask questions related to their search context and receive grounded, category-specific responses." },
  { title: 'AI search interface', subtitle: 'Designing the core components', body: 'I designed the AI search bar, top navigation, and onboarding flow in collaboration with Core AI and Design Systems, shaping an experience that makes conversational discovery feel clear and approachable.' },
  { title: 'Interaction framework', subtitle: 'Levels of AI', body: "We explored different ways of interacting with AI and developed a system that adapts to the buyer's context to best support the task at hand." },
  { title: 'Evolving the Product', subtitle: 'Learning in Market', body: "I helped design and launch this product alongside one of the largest cross-functional teams I've worked with—spanning numerous disciplines and time zones. We continue refining the experience in response to live metrics, customer feedback, and ongoing experimentation." },
]

const lokalSections = [
  { title: 'Map-based discovery', subtitle: 'Making Local Visible', body: "Working closely with the Maps designer, I integrated the dynamic map experience into the Hub's core flow. Users can visually browse items around them, making discovery more intuitive and immediate. Seeing inventory geographically added transparency and trust while elevating seller presence." },
  { title: 'Experience Strategy', subtitle: 'Designing for Local Intent', body: "We defined the Local Hub as an early anchor in the local buying journey. Clear guiding principles helped define the Hub's structure across an item, feature, and page level. The result was an experience tailored to eBay members and guests alike." },
  { title: 'Launching Local', subtitle: 'Media Rollout', body: "As part of eBay Germany's local launch, the Local Hub featured prominently across TV, radio, and banners across eBay's site." },
  { title: 'Screen to street', subtitle: 'Pop-Up Experiences', body: 'The launch extended into physical experiences, including a pop-up shop called the Buy Window in Berlin. The activation brought local sellers into the real world, strengthening trust in local commerce.' },
]

export function CaseStudy({ slug }: { slug: string }) {
  const isLokal = slug === 'lokal'
  const isInfluencers = slug === 'influencers'
  const isGrails = slug === 'our-grails'
  const isAiSearch = slug === 'ai-search'
  const isEquanimity = slug === 'equanimity'
  const isPlush = slug === 'plush'
  const name = isPlush ? 'Plush+' : isEquanimity ? 'Equanimity' : isLokal ? 'Local Hub' : isInfluencers ? 'Influencers' : isGrails ? 'Our Grails' : isAiSearch ? 'AI Search' : slug === 'field-notes' ? 'Field Notes' : slug === 'forma' ? 'Forma' : slug === 'quiet-hours' ? 'Quiet Hours' : 'Atlas'
  const company = isEquanimity || isPlush ? 'Stanford University' : isLokal || isInfluencers || isAiSearch ? 'eBay' : isGrails ? 'University of Washington' : 'Independent case study'
  const equanimitySections = [
    { title: 'A personal starting point', subtitle: 'Finding form', body: 'My brother was moving into his first home, and I wanted to make an object for his new space. The contrast in our personalities—and the way those differences strengthen one another—made me wonder what an object inspired by our relationship might look like. That duality became a starting point for exploring material, structure, and form. Sketches, CAD, and physical prototypes helped translate the idea into a functional object.' },
    { title: 'Learn through making', subtitle: 'Fabrication processes', body: 'I had never welded, bent steel tubing, or worked seriously with wood before starting the project. I learned each process through repeated attempts, often discovering that a decision that worked in CAD needed to be reconsidered once I was working with the material. Fabrication became part of the design process itself, shaping both the final object and my understanding of how materials influence form.' },
    { title: 'Equanimity', subtitle: 'Final design', body: 'The finished table gives physical expression to the contrast and balance that shaped the original idea. Walnut and steel create a tension between warmth and precision, while the structure brings those differences into equilibrium. I carried the design from sketches and CAD through fabrication and finishing, documenting the materials, sourcing, and construction along the way.' },
  ]
  const plushSections = [
    { title: 'Finding opportunity', subtitle: 'From Inclusive Space to Inclusive Play', body: "Our capstone group set out to design for children, with an interest in how play shapes early relationships. At Magical Bridge Playground in Palo Alto, we observed children in an environment intentionally designed for all abilities, yet interactions between children of different abilities were often rooted in avoidance. Conversations with families gave us another perspective: parents shared how growing up alongside a sibling with a different ability had shaped their children's understanding and empathy. We saw an opportunity to recreate that kind of relationship for all children." },
    { title: 'A first friend', subtitle: 'Idea to Physical Form', body: "The plush became a method of recreating the familiarity of a sibling relationship—a child's first friend who could introduce them to someone different from themselves. Our team developed the form from simple sketches into sewing patterns and physical prototypes, testing materials, proportions, and construction along the way." },
    { title: 'Bringing it to life', subtitle: 'Making the Experience Personal', body: 'Children build their plush themselves, placing personality patches, stuffing, and personally meaningful objects inside. Each plush belongs to a diverse family, with variations in appearance representing differences in the real world. Our team made the unboxing part of the experience with a nondescript package that keeps the plush a surprise, while booklets and partnership cards introduce children to the different abilities represented by each toy.' },
    { title: 'In the real world', subtitle: 'Testing with parents and children', body: 'Our Plush+ team concept tested the experience with parents, gathering feedback on the product and mission. We then brought two prototypes to children to observe how the experience held up in person. Kids were excited to build and play with the plush, while also engaging with the booklets and other elements of the package. The testing gave us encouraging evidence that the experience could create engagement at multiple points, not just through the toy itself.' },
  ]
  const plushLandscapeImages = [
    '/Plush 1.jpeg', '/Plush 3.jpg', '/Plush 4.png', '/Plush 5.png', '/Plush 6.png',
    '/Plush 8.png', '/Plush 9.png', '/Plush 10.png', '/Plush 11.png', '/Plush 12.png', '/Plush 2.jpeg', '/Plush 14.png', '/Plush 15.png',
  ]
  const plushImageNumber = (src: string) => Number(src.match(/Plush (\d+)/)?.[1])
  const sections = isPlush ? plushSections : isEquanimity ? equanimitySections : isLokal ? lokalSections : isInfluencers ? influencerSections : isGrails ? grailsSections : isAiSearch ? aiSearchSections : defaultSections
  const metadata = isEquanimity ? { role: 'Designer', deliverables: 'Physical Product', timeline: '10 weeks' } : isPlush ? { role: 'Researcher, Designer', deliverables: 'Physical Product, UI, UX', timeline: '5 months' } : isLokal ? { role: 'Product Designer', deliverables: 'Web & Native UI, UX', timeline: '6 months' } : isInfluencers ? { role: 'Product Designer', deliverables: 'Web & Native UI, UX', timeline: '4 months' } : isGrails ? { role: 'Researcher, Designer', deliverables: 'Thesis, Publication, Gallery Exhibit', timeline: '12 months' } : isAiSearch ? { role: 'Product Designer', deliverables: 'Native UI, UX, User Research', timeline: '8 months' } : { role: 'Design direction, Product design', deliverables: 'Strategy, UX, Visual system', timeline: '12 weeks · 2024' }
  const stats = isLokal ? [['52.5M', 'GMV, +5% growth in local transactions'], ['12%', 'Increase in Watchlist saves for local inventory'], ['30%', 'Faster discovery time for local items'], ['4x', 'Increase in local pickup searches in the first 90 days']] : isInfluencers ? [['39+', 'Influencers represented in The Cast'], ['3.7M', 'Site visits to Storefronts to date'], ['1→4', 'Markets with Storefronts: US, UK, Germany, Australia'], ['882K', 'Incremental purchase volume driven by Storefronts to date']] : [['42%', 'increase in task completion'], ['3.8x', 'faster time to value'], ['12k', 'active users in the first quarter'], ['4.9', 'average product rating']]
  const landscapeImage = isLokal ? '/hero thumbs/Lokal Mockup_.png' : isInfluencers ? '/Influencer 1-v2.png' : isGrails ? '/Grails hero.png' : isAiSearch ? '/hero thumbs/Landscape-1.png' : null
  const landscapeAlt = isLokal ? 'Lokal product experience' : isInfluencers ? 'Influencer Storefront' : isGrails ? 'Our Grails installation' : isAiSearch ? 'AI Search experience' : 'Case study hero'
  const grailsImages = Array.from({ length: 14 }, (_, index) => index + 1).filter((number) => ![4, 5, 6].includes(number)).map((number) => `/Grails - Body ${number}.${number <= 10 ? 'png' : number === 11 || number === 13 ? 'JPG' : 'jpg'}`)
  const grailsPortraits = ['/Grails - Body 17 copy (Side A).jpg', '/Grails - Body 17 (Side B).jpeg']
  const grailsThumbnail = '/our grails thumbnail.png'
  const lokalLandscapeImages = [1, 5, 6, 7, 8, 11, 12, 13, 14].map((number) => `/ Local Hub ${number}.${number === 12 || number === 13 || number === 14 ? 'jpg' : 'png'}`)
  const lokalPortraitGroups = [[2, 'png'], [3, 'png'], [10, 'jpg']].map(([number, extension]) => [`/ Local Hub ${number} (Side A).${extension}`, `/ Local Hub ${number} (Side B).${extension}`])
  const influencerImages = ['/Influencer 1-v2.png', '/Influencer 2-v2.png', '/Influencer 3-v2.png', '/Influencer 5-v2.png', '/Influencer 6-v2.png', '/Influencer 7-v2.png']
  const influencerPortraits = ['/Influencer 4-v2 (Side A).png', '/Influencer 4-v2 (Side B).png']
  const renderSection = (index: number) => <div className="case-copy"><section><h2>{sections[index].title}</h2><p className="section-subtitle">{sections[index].subtitle}</p><p>{sections[index].body}</p></section></div>

  return (
    <div className="site">
      <SiteHeader />
      <main className="case-study">
        <header className="case-header"><p className="case-company">{company}</p><h1>{name}</h1><div className="case-meta"><div><span>Role</span><strong>{metadata.role}</strong></div><div><span>Deliverables</span><strong>{metadata.deliverables}</strong></div><div><span>Timeline</span><strong>{metadata.timeline}</strong></div></div><p className="case-intro">{isPlush ? "For Stanford's Product Design Capstone, our group developed a plush toy & toolkit to foster empathy among children with different abilities." : isEquanimity ? 'Designed and manufactured a bedside table exploring opposing qualities that coexist and strengthen one another.' : isLokal ? "Launched eBay's Local Hub, a neighborhood shopping experience that began in Germany which now serves as the model for global marketplaces." : isInfluencers ? "Designed eBay's first influencer platform, a virtual storefront where iconic names curate eBay items to share with their followers." : isAiSearch ? "Led the design of eBay's conversational search experience, shaping how buyers interact with AI to discover items through natural language." : isGrails ? "My graduate thesis explored what our most coveted sneakers reveal about who we are. Framed through conversations with 24 collectors, I created a book and exhibition that trace the identities, life experiences, and aspirations woven into these grails." : 'A thoughtful digital experience designed to make complex work feel simple, clear, and distinctly human.'}</p>{(isGrails || isInfluencers) ? <a className="case-cta" href={isGrails ? 'https://art.washington.edu/research/graduate-work/our-grails-conversations-our-most-prized-sneakers' : 'https://storefronts.ebay.com'} target="_blank" rel="noopener noreferrer">Check it out</a> : !(isEquanimity || isPlush || isAiSearch) && <button className="case-cta" type="button">Check it out</button>}</header>
        {isPlush ? (
          <div className="plush-gallery">
            {plushLandscapeImages.map((src) => {
              const number = plushImageNumber(src)
              return (
                <Fragment key={src}>
                  <img loading="lazy" decoding="async" className="placeholder landscape case-hero-image" src={src} alt={`Plush+ image ${number}`} />
                  {number === 1 && renderSection(0)}
                  {number === 5 && renderSection(1)}
                  {number === 6 && (
                    <div className="case-images">
                      <img loading="lazy" decoding="async" className="placeholder portrait case-portrait-image" src="/Plush 7 (Side A).png" alt="Plush+ image 7 detail A" />
                      <img loading="lazy" decoding="async" className="placeholder portrait case-portrait-image" src="/Plush 7 (Side B).png" alt="Plush+ image 7 detail B" />
                    </div>
                  )}
                  {number === 10 && renderSection(2)}
                  {number === 2 && renderSection(3)}
                </Fragment>
              )
            })}
          </div>
        ) : isEquanimity ? (
          <div className="equanimity-gallery">
            {['/table 1.png', '/table 2.png', '/Table 6.png', '/Table 7.JPG'].map((src, index) => (
              <Fragment key={src}>
                <img loading="lazy" decoding="async" className={index === 0 ? 'placeholder landscape case-hero-image equanimity-hero' : 'placeholder landscape case-hero-image'} src={src} alt={`Equanimity image ${[1, 2, 6, 7][index]}`} />
                {index === 1 && (
                  <>
                    <div className="case-images">
<img loading="lazy" decoding="async" className="placeholder portrait case-portrait-image" src="/Tabl 10 (A).png" alt="Equanimity image 3 detail A" />
<img loading="lazy" decoding="async" className="placeholder portrait case-portrait-image" src="/Table 10 (B).png" alt="Equanimity image 3 detail B" />
                    </div>
                    {renderSection(0)}
                  </>
                )}
                {index === 3 && renderSection(1)}
              </Fragment>
            ))}
            {[8, 9].map((number) => (
              <div className="case-images" key={number}>
                <img loading="lazy" decoding="async" className="placeholder portrait case-portrait-image" src={`/Table ${number} (Side A).JPG`} alt={`Equanimity image ${number} detail A`} />
                <img loading="lazy" decoding="async" className="placeholder portrait case-portrait-image" src={`/Table ${number} (Side B).${number === 8 ? 'jpg' : 'JPG'}`} alt={`Equanimity image ${number} detail B`} />
              </div>
            ))}
            {renderSection(2)}
            <img loading="lazy" decoding="async" className="placeholder landscape case-hero-image" src="/Table 4.jpg" alt="Equanimity image 4" />
          </div>
        ) : isAiSearch ? (
          <div className="ai-gallery">
            <img loading="lazy" decoding="async" className="placeholder landscape case-hero-image" src={landscapeImage ?? '/hero thumbs/Landscape-1.png'} alt={landscapeAlt} />
            <img loading="lazy" decoding="async" className="placeholder landscape case-hero-image" src="/eBay AI 2.png" alt="eBay AI Search image 2" />
            {renderSection(0)}
            <div className="case-images">
              <video className="placeholder portrait case-portrait-image" src="/eBay AI 3 (Side A).mp4" autoPlay loop muted playsInline aria-label="eBay AI Search interaction video" />
              <img loading="lazy" decoding="async" className="placeholder portrait case-portrait-image" src="/eBay AI 3 (Side B).png" alt="eBay AI Search image 3 detail" />
            </div>
            <img loading="lazy" decoding="async" className="placeholder landscape case-hero-image" src="/eBay AI 4.png" alt="eBay AI Search image 4" />
            {renderSection(1)}
            <div className="case-images">
              <img loading="lazy" decoding="async" className="placeholder portrait case-portrait-image" src="/eBay AI 5 (Side A).png" alt="eBay AI Search image 5 detail A" />
              <img loading="lazy" decoding="async" className="placeholder portrait case-portrait-image" src="/eBay AI 5 (Side B).png" alt="eBay AI Search image 5 detail B" />
            </div>
            {[6, 7, 8, 9, 10, 11].map((number) => (
              <Fragment key={number}>
                <img loading="lazy" decoding="async" className="placeholder landscape case-hero-image" src={`/eBay AI ${number}.png`} alt={`eBay AI Search image ${number}`} />
                {number === 7 && renderSection(2)}
                {number === 11 && renderSection(3)}
              </Fragment>
            ))}
          </div>
        ) : isInfluencers ? <div className="influencer-gallery"><img decoding="async" fetchPriority="high" className="placeholder landscape case-hero-image" src={influencerImages[0]} alt={landscapeAlt} /><img loading="lazy" decoding="async" className="placeholder landscape case-hero-image" src={influencerImages[1]} alt="Influencer storefront image 2" /><div className="case-copy"><section><h2>{sections[0].title}</h2><p className="section-subtitle">{sections[0].subtitle}</p><p>{sections[0].body}</p></section></div><img loading="lazy" decoding="async" className="placeholder landscape case-hero-image" src={influencerImages[2]} alt="Influencer storefront image 3" /><div className="case-images">{influencerPortraits.map((src, index) => <img loading="lazy" decoding="async" className="placeholder portrait case-portrait-image" key={src} src={src} alt={`Influencer storefront image 4, side ${index === 0 ? 'A' : 'B'}`} />)}</div><img loading="lazy" decoding="async" className="placeholder landscape case-hero-image" src={influencerImages[3]} alt="Influencer storefront image 5" /><div className="case-copy"><section><h2>{sections[1].title}</h2><p className="section-subtitle">{sections[1].subtitle}</p><p>{sections[1].body}</p></section></div>{influencerImages.slice(4).map((src, index) => <img loading="lazy" decoding="async" className="placeholder landscape case-hero-image" key={src} src={src} alt={`Influencer storefront image ${index + 6}`} />)}</div> : isLokal ? <div className="lokal-gallery"><img loading="lazy" decoding="async" className="placeholder landscape case-hero-image" src={landscapeImage ?? '/hero thumbs/Lokal Mockup_.png'} alt={landscapeAlt} /><img loading="lazy" decoding="async" className="placeholder landscape case-hero-image" src="/ Local Hub 1.png" alt="Local Hub 1" /><div className="case-images">{lokalPortraitGroups[0].map((src) => <img loading="lazy" decoding="async" className="placeholder portrait case-portrait-image" key={src} src={src} alt="Local Hub 2 detail" />)}</div><div className="case-copy"><section><h2>{sections[0].title}</h2><p className="section-subtitle">{sections[0].subtitle}</p><p>{sections[0].body}</p></section></div><div className="case-images">{lokalPortraitGroups[1].map((src) => <img loading="lazy" decoding="async" className="placeholder portrait case-portrait-image" key={src} src={src} alt="Local Hub 3 detail" />)}</div><div className="case-copy"><section><h2>{sections[1].title}</h2><p className="section-subtitle">{sections[1].subtitle}</p><p>{sections[1].body}</p></section></div>{lokalLandscapeImages.slice(1, 5).map((src, index) => <Fragment key={src}><img loading="lazy" decoding="async" className="placeholder landscape case-hero-image" src={src} alt={`Local Hub ${index + 5}`} />{index === 3 && <div className="case-copy"><section><h2>{sections[2].title}</h2><p className="section-subtitle">{sections[2].subtitle}</p><p>{sections[2].body}</p></section></div>}</Fragment>)}<video className="placeholder landscape case-video" controls playsInline preload="metadata" src="/ Local Hub 9 (Video).mp4"><track kind="captions" /></video><div className="case-images">{lokalPortraitGroups[2].map((src) => <img loading="lazy" decoding="async" className="placeholder portrait case-portrait-image" key={src} src={src} alt="Local Hub 10 detail" />)}</div>{lokalLandscapeImages.slice(5).map((src, index) => <Fragment key={src}><img loading="lazy" decoding="async" className="placeholder landscape case-hero-image" src={src} alt={`Local Hub ${index + 11}`} />{index === 0 && <div className="case-copy"><section><h2>{sections[3].title}</h2><p className="section-subtitle">{sections[3].subtitle}</p><p>{sections[3].body}</p></section></div>}</Fragment>)}</div> : isGrails ? <div className="grails-gallery"><img loading="lazy" decoding="async" className="placeholder landscape case-hero-image" src={landscapeImage ?? grailsThumbnail} alt={landscapeAlt} /><img loading="lazy" decoding="async" className="placeholder landscape case-hero-image" src={grailsThumbnail} alt="Our Grails thumbnail" />{grailsImages.map((src, index) => <Fragment key={src}>{index === 0 && <div className="case-copy"><section><h2>{sections[0].title}</h2><p className="section-subtitle">{sections[0].subtitle}</p><p>{sections[0].body}</p></section></div>} {grailsImages[index - 1]?.includes('Body 3.') && <div className="case-copy"><section><h2>{sections[1].title}</h2><p className="section-subtitle">{sections[1].subtitle}</p><p>{sections[1].body}</p></section></div>} {src.includes('Body 13.') && <><div className="case-copy"><section><h2>{sections[2].title}</h2><p className="section-subtitle">{sections[2].subtitle}</p><p>{sections[2].body}</p></section></div><div className="case-images">{grailsPortraits.map((portrait, portraitIndex) => <img loading="lazy" decoding="async" className="placeholder portrait case-portrait-image" key={portrait} src={portrait} alt={`Our Grails body 17 side ${portraitIndex === 0 ? 'A' : 'B'}`} />)}</div></>}<img loading="lazy" decoding="async" className="placeholder landscape case-hero-image" src={src} alt={`Our Grails body ${index + 1}`} /></Fragment>)}</div> : landscapeImage ? <img loading="lazy" decoding="async" className="placeholder landscape case-hero-image" src={landscapeImage} alt={landscapeAlt} /> : <div className="placeholder landscape">Landscape image placeholder</div>}
        {!isGrails && !isLokal && !isInfluencers && !isAiSearch && !isEquanimity && !isPlush && <div className="case-copy">{sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p className="section-subtitle">{section.subtitle}</p><p>{section.body}</p></section>)}</div>}
        {!isGrails && !isLokal && !isInfluencers && !isAiSearch && !isEquanimity && !isPlush && <div className="case-images"><div className="placeholder portrait">Portrait image placeholder</div><div className="placeholder portrait">Portrait image placeholder</div></div>}
        {!isGrails && !isAiSearch && !isEquanimity && !isPlush && <div className="stats">{stats.map(([value, description]) => <div key={`${value}-${description}`}><strong>{value}</strong><span>{description}</span></div>)}</div>}
      </main>
      <footer><Link className="back-link" href="/">← Back to projects</Link><span className="footer-copy">© {new Date().getFullYear()} Julian Body</span></footer>
    </div>
  )
}

export default CaseStudy
