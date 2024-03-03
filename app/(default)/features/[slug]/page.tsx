import type { Metadata } from 'next'
import { allFeatures } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import AppConfig from '@/app/app.config'
import ArtifactSection from '@/components/sections/artifact'

export async function generateStaticParams() {
  return allFeatures.map((feature) => ({
    slug: feature.slug,
  }))
}

export async function generateMetadata({ params }: {
  params: { slug: string }
}): Promise<Metadata | undefined> {

  const feature = allFeatures.find((feature) => feature.slug === params.slug)

  if (!feature) return

  const { title, description } = feature

  return {
    title,
    description,
  }
}

export default async function SingleFeature({ params }: {
  params: { slug: string }
}) {

  const feature = allFeatures.find((feature) => feature.slug === params.slug)

  if (!feature) notFound()

  return (
    <ArtifactSection
      artifact={feature}
      sectionURL={`/${AppConfig.paths.features}`}
      testimonialIndex={feature.category === 'Free plugin' ? 1 : 4}
    >
      <ul className="text-sm">
        <li className="flex items-center justify-between space-x-4 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
          <span className="text-slate-400">Feature</span>
          <span className="text-slate-300 font-medium">{feature.title}</span>
        </li>
        <li className="flex items-center justify-between space-x-4 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
          <span className="text-slate-400">Category</span>
          <span className="text-slate-300 font-medium">{feature.category}</span>
        </li>
      </ul>
    </ArtifactSection>
  )
}