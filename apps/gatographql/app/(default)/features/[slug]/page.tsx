import type { Metadata, ResolvingMetadata } from 'next'
import { allFeatures, Feature } from '@/.contentlayer/generated'
import { notFound } from 'next/navigation'
import AppConfig from '@/app/app.config'
import FeatureSection from 'gatoapp/components/sections/feature'
import DefaultFeatureIcon02 from 'gatoapp/public/assets/theme/default/feature-icon-02.png'
import { getGuideDocument, getPrevNextArticles } from '@/utils/content/document'
import { getDocURLPath } from '@/utils/content/application-urls'
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'
import clsx from 'clsx'
import ArticleNavigation from 'gatoapp/components/ui/article-navigation'
import { sortByOrderAndTitle } from 'gatoapp/utils/content/sort'
import { getTestimonials } from '@/components/data/testimonials'

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

  // Sort posts. Needed to find the prev/next items below
  const features = allFeatures.sort(sortByOrderAndTitle)
  const featureIndex = features.findIndex((feature) => feature.slug === params.slug)

  if (featureIndex === -1) notFound()

  const feature = features[featureIndex]
  
  {/* Page navigation (with looping to first/last item) */}
  const paginationFeatures = getPrevNextArticles(features, featureIndex)
  const prevFeature = paginationFeatures.prev ? paginationFeatures.prev as Feature : features[features.length - 1]
  const nextFeature = paginationFeatures.next ? paginationFeatures.next as Feature : features[0]

  const relatedGuides = feature.relatedGuides ? feature.relatedGuides.map((guide) => getGuideDocument(guide)) : null
  const testimonials = getTestimonials()

  return (
    <FeatureSection
      feature={feature}
      sectionURL={`/${AppConfig.paths.features}`}
      testimonials={testimonials}
      testimonialIndex={1}
      showTestimonial={false}
      defaultFeatureIcon={DefaultFeatureIcon02}
      bgClassname={clsx("bg-gradient-to-tr", "from-slate-900 to-fuchsia-900")}
      thumbLeading='Feature:'
    >
      <ul className="text-sm">
        <li className="flex items-center justify-between space-x-4 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
          <span className="text-slate-400">Feature</span>
          <span className="text-slate-300 font-medium"><strong>{feature.title}</strong></span>
        </li>
        {!! relatedGuides && (
          <li className="py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
            <div className="text-slate-400">{ relatedGuides.length === 1 ? `Related guide:` : `Related guides:` }</div>
            <ul className="mt-1">
              {relatedGuides.map((relatedGuide, index) => (
                <li key={index}>
                  <a className="text-purple-500 font-medium flex items-center pl-2 py-1.5 before:absolute before:-left-px before:top-2 before:bottom-2 before:w-0.5" href={getDocURLPath(relatedGuide)}>
                    <svg className="fill-slate-400 shrink-0 mr-2 dark:fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path d="M7.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM7.3 15.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM.3 10.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0Z" />
                    </svg>
                    <span>{relatedGuide.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </li>
        )}
        <li className="py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
          {/* Page navigation */}
          <div className="pt-6 space-y-3 sm:space-y-0 sm:space-x-2">
            <ArticleNavigation prevArticle={prevFeature} nextArticle={nextFeature} />
          </div>
        </li>
      </ul>
    </FeatureSection>
  )
}