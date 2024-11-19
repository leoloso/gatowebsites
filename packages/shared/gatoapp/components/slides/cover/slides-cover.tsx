import { Suspense } from 'react'
import SlidesCoverItem from './slides-cover-item'
import React from 'react'

export default function SlidesCover({
  logo,
  bgClassname,
}: {
  logo: React.ReactNode,
  bgClassname?: string,
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
                bgClassname={bgClassname}
              />
            </Suspense>
          </div>

        </div>

      </section>

    </>
  )
}
