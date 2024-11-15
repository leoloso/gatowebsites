import Newsletter from '@gato/components/newsletter'
import StunningBackground from '@gato/components/stunning-background'
import { Suspense } from 'react'
import { createSEOPageTitle } from '@/utils/content/metadata'
import DemoPostsSection from './demo-posts-section'
import AppConfig from '@/app/app.config'

const pageTitle = 'Demos'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Tutorials to learn what you can accomplish with Gato GraphQL',
  alternates: {
    canonical: `/${AppConfig.paths.demoPosts}`,
  },
}

export default function Demos() {

  return (
    <>
      <section className="relative">

        <StunningBackground />

        <Suspense>
          <DemoPostsSection />
        </Suspense>
      </section>  
      <Newsletter label="Want more demo videos?" />
    </>
  )
}