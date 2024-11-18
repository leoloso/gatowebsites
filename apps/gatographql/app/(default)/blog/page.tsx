import StunningBackground from 'gatoapp/components/stunning-background'
import Newsletter from 'gatoapp/components/newsletter'
import BlogSchemaJsonLdScript from 'gatoapp/components/schema/blog-schema-json-ld'
import { createSEOPageTitle } from '@/utils/content/metadata'
import BlogSection from './blog-section'
import { Suspense } from 'react'
import AppConfig from '@/app/app.config'

const pageTitle = 'Blog'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Stay up to date on the latest from Gato GraphQL',
  alternates: {
    canonical: `/${AppConfig.paths.blog}`,
  },
}

export default function Blog() {

  return (
    <>
      <BlogSchemaJsonLdScript
        headline={metadata.title}
        description={metadata.description}
      />

      <section className="relative">
        <StunningBackground />    
        <Suspense>
          <BlogSection />
        </Suspense>
      </section>
      <Newsletter label="Want more posts & tutorials?" />
    </>
  )
}
