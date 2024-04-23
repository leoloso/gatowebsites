import { allHighlights } from 'contentlayer/generated'
import HighlightItem from './highlight-item'
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'
import { sortByOrder } from '@/utils/content/sort'

const pageTitle = 'Slides'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Gato GraphQL Slides',
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
              <HighlightItem key={highlightIndex} {...highlight} />
            ))}
          </div>

        </div>

      </section>

    </>
  )
}
