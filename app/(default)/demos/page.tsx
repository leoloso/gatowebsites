import Newsletter from '@/components/newsletter'
import StunningBackground from '@/components/stunning-background'
import { Suspense } from 'react'
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'
import DemoPostsSection from './demo-posts-section'
import AppConfig from '@/app/app.config'

const pageTitle = 'Demos'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Tutorials to learn what you can accomplish with Gato GraphQL',
  // openGraph: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
  // twitter: {
  //   title: createOpenGraphPageTitle(pageTitle),
  // },
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