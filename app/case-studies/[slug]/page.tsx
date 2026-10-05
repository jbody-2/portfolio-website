import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CaseStudy from '@/components/case-study'

const caseStudies: Record<string, string> = {
  'ai-search': 'eBay AI Search',
  lokal: 'eBay Local Hub',
  influencers: 'eBay Influencer Storefront',
  'our-grails': 'Our Grails',
  plush: 'Plush+',
  equanimity: 'Equanimity',
}

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const title = caseStudies[slug]
  return title ? { title: `${title} — Julian Body` } : {}
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  if (!caseStudies[slug]) notFound()
  return <CaseStudy slug={slug} />
}
