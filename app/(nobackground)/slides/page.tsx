import SlidesItem from './slides-item'
import { createSEOPageTitle } from '@/utils/content/metadata'

const pageTitle = 'Slides'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Gato GraphQL Slides',
}

export default function Slides() {

  return (
    <>

      {/* Content */}
      <section className="relative">

        <div
          // className="max-w-6xl mx-auto px-4 sm:px-6"
        >
          <div className="relative">
            <SlidesItem />
          </div>

        </div>

      </section>

    </>
  )
}
