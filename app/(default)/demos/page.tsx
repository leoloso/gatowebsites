import Newsletter from '@/components/newsletter'
import StunningBackground from '@/components/stunning-background'
import { Suspense } from 'react'
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'
import DemoPostsSection from './demo-posts-section'

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