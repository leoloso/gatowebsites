import type { Metadata } from 'next'
import { allFeatures } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import AppConfig from '@/app/app.config'
import ArtifactSection from '@/components/sections/artifact'
import DefaultArtifactIcon02 from '@/public/assets/theme/default/artifact-icon-02.png'
import DefaultArtifactIcon04 from '@/public/assets/theme/default/artifact-icon-04.png'
import DefaultArtifactImage01 from '@/public/assets/theme/default/feature-image.png'
import DefaultArtifactImage02 from '@/public/assets/theme/default/feature-pro-image.png'
import { getGuideDocument } from '@/utils/content/document'
import { getDocURLPath } from '@/utils/content/application-urls'
import { getPageTitle } from '@/utils/content/metadata'

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

  const { title, seoTitle, description, seoDescription } = feature

  return {
    title: `${getPageTitle(seoTitle) || title} | Gato GraphQL for WordPress`,
    description: seoDescription || description,
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
      defaultArtifactImage={feature.category === 'Free plugin' ? DefaultArtifactImage01 : DefaultArtifactImage02}
      defaultArtifactIcon={feature.category === 'Free plugin' ? DefaultArtifactIcon02 : DefaultArtifactIcon04}
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