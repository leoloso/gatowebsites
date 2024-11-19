import { Suspense } from 'react'
import SlidesCoverItem from './slides-cover-item'
import React from 'react'

export default function SlidesCover({
  logo,
}: {
  logo: React.ReactNode,
}) {

  return (
    <>

      {/* Content */}
      <section className="relative">

        <div>
          <div className="relative">
            <Suspense>
              <SlidesCoverItem
                logo={logo}
              />
            </Suspense>
          </div>

        </div>

      </section>

    </>
  )
}
