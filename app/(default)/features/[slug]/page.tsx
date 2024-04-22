import type { Metadata, ResolvingMetadata } from 'next'
import { allFeatures } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import AppConfig from '@/app/app.config'
import ArtifactSection from '@/components/sections/artifact'
import DefaultArtifactIcon02 from '@/public/assets/theme/default/artifact-icon-02.png'
import DefaultArtifactIcon04 from '@/public/assets/theme/default/artifact-icon-04.png'
import { getGuideDocument } from '@/utils/content/document'
import { getDocURLPath } from '@/utils/content/application-urls'
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'
import clsx from 'clsx'

export async function generateStaticParams() {
  return allFeatures.map((feature) => ({
    slug: feature.slug,
  }))
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata,
): Promise<Metadata | undefined> {

  const feature = allFeatures.find((feature) => feature.slug === params.slug)

  if (!feature) return

  const { title, seoTitle, description, seoDescription } = feature

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: createSEOPageTitle(title, seoTitle),
    description: seoDescription || description,
    openGraph: {
      title: createOpenGraphPageTitle(title),
      description,
      images: previousImages,
    },
    twitter: {
      title: createOpenGraphPageTitle(title),
      description,
      images: previousImages,
    },
  }
}

export default async function SingleFeature({ params }: {
  params: { slug: string }
}) {

  const feature = allFeatures.find((feature) => feature.slug === params.slug)

  if (!feature) notFound()

  const relatedGuide = feature.relatedGuide ? getGuideDocument(feature.relatedGuide) : null

  return (
    <ArtifactSection
      artifact={feature}
      sectionURL={`/${AppConfig.paths.features}`}
      testimonialIndex={feature.category === 'Free plugin' ? 1 : 4}
      defaultArtifactIcon={feature.category === 'Free plugin' ? DefaultArtifactIcon02 : DefaultArtifactIcon04}
      bgClassname={clsx("bg-gradient-to-tr", feature.category === 'Free plugin' && "from-slate-900 to-brown-900", feature.category !== 'Free plugin' && "from-slate-900 to-fuchsia-900")}
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
        {!! relatedGuide && (
          <li className="py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
            <div className="text-slate-400">Related guide:</div>
            <div className="mt-1">
              <a className="text-purple-500 font-medium" href={getDocURLPath(relatedGuide)}>
                <span>{relatedGuide.title}</span>
              </a>
            </div>
          </li>
        )}
      </ul>
    </ArtifactSection>
  )
}