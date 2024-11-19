import { allExtensions } from '@/.contentlayer/generated'
import ProductCover from 'gatoapp/components/slides/product-cover/product-cover'
import { createSEOPageTitle } from '@/utils/content/metadata'
import { notFound } from 'next/navigation'

const pageTitle = 'Extension Cover'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Gato GraphQL Extension Cover',
}

export default function ExtensionCover({ params }: {
  params: { slug: string }
}) {

  const extension = allExtensions.find((extension) => extension.slug === params.slug)

  if (!extension) notFound()

  return (
    <ProductCover
      product={extension}
      leadingTitle='Extension:'
    />
  )
}
