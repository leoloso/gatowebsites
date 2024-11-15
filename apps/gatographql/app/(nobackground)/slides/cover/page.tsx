import { Suspense } from 'react'
import SlidesCoverItem from './slides-cover-item'
import { createSEOPageTitle } from '@/utils/content/metadata'

const pageTitle = 'Slides Cover'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Gato GraphQL Slides Cover',
}

export default function SlidesCover() {

  return (
    <>

      {/* Content */}
      <section className="relative">

        <div>
          <div className="relative">
            <Suspense>
              <SlidesCoverItem />
            </Suspense>
          </div>

        </div>

      </section>

    </>
  )
}
