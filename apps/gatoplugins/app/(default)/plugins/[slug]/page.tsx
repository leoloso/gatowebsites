import type { Metadata, ResolvingMetadata } from 'next'
import { allPlugins } from '@/.contentlayer/generated'
import { notFound } from 'next/navigation'
import StunningBackground from 'gatoapp/components/stunning-background'
import { sortByOrderAndTitle } from 'gatoapp/utils/content/sort'
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'
import SinglePlugin from './single-plugin'
import SinglePluginPricing from './single-plugin-pricing-section'
import { getFAQs } from '@/components/data/faqs'

export async function generateStaticParams() {
  return allPlugins.map((plugin) => ({
    slug: plugin.slug,
  }))
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata,
): Promise<Metadata | undefined> {

  const plugin = allPlugins.find((plugin) => plugin.slug === params.slug)

  if (!plugin) return

  const { title, seoTitle, description, seoDescription } = plugin

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: createSEOPageTitle(title, seoTitle),
    description: seoDescription || description,
    openGraph: {
      title: createOpenGraphPageTitle(title),
      description,
      images: plugin.image ? [plugin.image] : previousImages,
    },
    twitter: {
      title: createOpenGraphPageTitle(title),
      description,
      images: plugin.image ? [plugin.image] : previousImages,
    },
  }
}

export default async function SinglePluginPage({ params }: {
  params: { slug: string }
}) {

  // Sort posts. Needed to find the prev/next items below
  const plugins = allPlugins.sort(sortByOrderAndTitle)
  const pluginIndex = plugins.findIndex((plugin) => plugin.slug === params.slug)

  if (pluginIndex === -1) notFound()

  const plugin = plugins[pluginIndex]
  const faqItems = getFAQs({plugin: plugin})
  
  return (
    <section className="relative">

      <StunningBackground />

      <div className="pb-12 md:pb-20"> 

        <SinglePlugin
          plugin={plugin}
          // printIntegrations={false}
        />

      </div>
      
      <SinglePluginPricing
        plugin={plugin}
        faqItems={faqItems}
      />
      
    </section>
  )
}