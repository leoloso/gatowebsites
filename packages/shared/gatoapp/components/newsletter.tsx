'use client'

import NewsletterForm from "./forms/newsletter"
import { useAppConfigProvider } from 'gatoapp/app/appconfig-provider'
import { usingDarkColorThemeMode } from 'gatoapp/utils/context/style'
import Image from 'next/image'
import FeaturesImage from 'gatoapp/public/assets/theme/lightmode/features-image.png'

export default function Newsletter({
  label = "Tutorials, updates, & more",
  description,
}: {
  label?: string,
  description?: string,
}) {
  const { config: AppConfig } = useAppConfigProvider()
  const isDarkColorThemeMode = usingDarkColorThemeMode()
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-gradient-to-b from-cyan-800 to-transparent opacity-25 h-[25rem] dark:bg-purple-900/70 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              { isDarkColorThemeMode && (
                <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                      <stop stopColor="#DFDFDF" offset="0%" />
                      <stop stopColor="#4C4C4C" offset="44.317%" />
                      <stop stopColor="#333" offset="100%" />
                    </radialGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <g fill="#FFF">
                      <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                      <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                      <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                      <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                      <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                      <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                      <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                      <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                    </g>
                    <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                  </g>
                </svg>
              )}
              { !isDarkColorThemeMode && (
                <Image src={FeaturesImage} className="md:max-w-none" width="480" height="414" alt="Feature" />
              )}
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">{label}</h3>
                <p className="text-blue-100 dark:text-purple-300 text-lg mb-6">{ description || `Receive timely updates as we keep improving ${AppConfig.meta.name}.`}</p>

                {/* CTA form */}
                <NewsletterForm />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}