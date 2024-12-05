'use client'

import Image from 'next/image'
import FounderPic from 'gatoapp/public/assets/team/Leo-square.jpg'
import { getSnippet } from 'gatoapp/utils/content/snippet'
import { SnippetMdx } from './mdx/snippet-mdx'
import { usingDarkColorThemeMode } from 'gatoapp/utils/context/style'

export default function HowdyMain() {
  const snippet = getSnippet('howdy')
  const isDarkColorThemeMode = usingDarkColorThemeMode()
  return (
    <section className="relative">
      { isDarkColorThemeMode && (
        <>
          {/* Blurred shape */}
          <div className="absolute top-0 -mt-32 left-1/2 -translate-x-1/2 ml-10 blur-2xl opacity-70 pointer-events-none -z-10" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
              <defs>
                <linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                  <stop offset="0%" stopColor="#A855F7"></stop>
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <path fill="url(#bs4-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)"></path>
            </svg>
          </div>
        </>
      )}

      <div className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="pb-12 md:pb-20">

            <div className="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
              <figure className="min-w-[240px]">
                <Image className="sticky top-24 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[2deg]" src={FounderPic} width={400} height={533} alt="Founder pic" />
              </figure>
              <div className="max-w-[548px] mx-auto">
                <SnippetMdx code={snippet.body.code} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}