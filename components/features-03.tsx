import Image from 'next/image'
import Highlighter, { HighlighterItem } from './highlighter'
import Illustration from '@/public/assets/theme/glow-top.svg'

import FeatureImg04 from '@/public/assets/theme/feature-image-04.png'
import SectionHeader from './section-header'

export default function Features03() {
  return (
    <section className="relative">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Illustration */}
        <div className="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10">
            <Image src={Illustration} className="max-w-none" width={1404} height={658} alt="Features Illustration" />
          </div>
        </div>

        <div className="pt-16 pb-12 md:pt-32 md:pb-20">

          {/* Section header */}
          <SectionHeader
            leading='Treat WordPress as the OS of the web'
            title='Interact with the Cloud'
            description="Send requests to external services with ease, and accept incoming requests via webhooks."
          />

          <div className="max-w-3xl mx-auto">
            <div data-aos="fade-down">
              <Highlighter className="group">
                <HighlighterItem>
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    {/* Radial gradient */}
                    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                      <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px]" />
                    </div>
                    <Image src={FeatureImg04} width={768} height={400} alt="Feature 04" />
                  </div>
                </HighlighterItem>
              </Highlighter>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}