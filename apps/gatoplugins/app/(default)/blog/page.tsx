import StunningBackground from 'gatoapp/components/stunning-background'
import BlogSchemaJsonLdScript from 'gatoapp/components/schema/blog-schema-json-ld'
import { createSEOPageTitle } from '@/utils/content/metadata'
import BlogSection from 'gatoapp/components/blog/blog-section'
import { Suspense } from 'react'
import AppConfig from '@/app/app.config'
import { allBlogPosts } from '@/.contentlayer/generated'
import { sortByPublishedAt } from 'gatoapp/utils/content/sort'

const pageTitle = 'Blog'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Stay up to date on the latest from Gato Plugins',
  alternates: {
    canonical: `/${AppConfig.paths.blog}`,
  },
}

export default function Blog() {
  const sortedBlogPosts = allBlogPosts.sort(sortByPublishedAt)

  return (
    <>
      <BlogSchemaJsonLdScript
        headline={metadata.title}
        description={metadata.description}
      />

      <section className="relative">
        <StunningBackground />    
        <Suspense>
          <BlogSection
            leading="Building Gato Plugins"
            description='Stay up to date with our latest news'
            blogPosts={sortedBlogPosts}
          />
        </Suspense>
      </section>
    </>
  )
}
