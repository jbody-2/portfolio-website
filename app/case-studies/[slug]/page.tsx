import CaseStudy from '@/components/case-study'

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <CaseStudy slug={slug} />
}
