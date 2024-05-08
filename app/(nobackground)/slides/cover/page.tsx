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

        <div
          // className="max-w-6xl mx-auto px-4 sm:px-6"
        >
          <div className="relative">
            <SlidesCoverItem />
          </div>

        </div>

      </section>

    </>
  )
}
