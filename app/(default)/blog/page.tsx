import StunningBackground from '@/components/stunning-background'
import Newsletter from '@/components/newsletter'
import BlogSchemaJsonLdScript from '@/components/schema/blog-schema-json-ld'
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'
import BlogSection from './blog-section'
import { Suspense } from 'react'

const pageTitle = 'Blog'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Stay up to date on the latest from Gato GraphQL and our engineering practices',
  // openGraph: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
  // twitter: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
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
