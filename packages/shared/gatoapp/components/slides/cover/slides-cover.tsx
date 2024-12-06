import { Suspense } from 'react'
import SlidesCoverItem from './slides-cover-item'
import React from 'react'

export default function SlidesCover({
  logo,
  applyStyle,
}: {
  logo: React.ReactNode,
  applyStyle?: number,
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
                applyStyle={applyStyle}
              />
            </Suspense>
          </div>

        </div>

      </section>

    </>
  )
}
