import { allPlugins } from '@/.contentlayer/generated'
import ProductCover from 'gatoapp/app/(nobackground)/slides/product-cover/[slug]/product-cover'
import { createSEOPageTitle } from '@/utils/content/metadata'
import { notFound } from 'next/navigation'

const pageTitle = 'Plugin Cover'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Gato Plugins Plugin Cover',
}

export default function PluginCover({ params }: {
  params: { slug: string }
}) {

  const plugin = allPlugins.find((plugin) => plugin.slug === params.slug)

  if (!plugin) notFound()

  return (
    <ProductCover
      product={plugin}
      // leadingTitle='Plugin:'
    />
  )
}
