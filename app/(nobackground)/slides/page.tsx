import { allHighlights } from 'contentlayer/generated'
import HighlightSlidesItem from './highlight-slides-item'
import { createSEOPageTitle } from '@/utils/content/metadata'
import { sortByOrder } from '@/utils/content/sort'

const pageTitle = 'Highlight Slides'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Gato GraphQL Highlight Slides',
}

export default function Slides() {

  // Sort highlights by order
  allHighlights.sort(sortByOrder)

  return (
    <>

      {/* Content */}
      <section className="relative">

        <div
          // className="max-w-6xl mx-auto px-4 sm:px-6"
        >
          <div className="relative">
            {allHighlights.map((highlight, highlightIndex) => (
              <HighlightSlidesItem key={highlightIndex} {...highlight} />
            ))}
          </div>

        </div>

      </section>

    </>
  )
}
