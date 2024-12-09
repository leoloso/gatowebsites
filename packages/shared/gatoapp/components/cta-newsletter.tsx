'use client';

import NewsletterForm from "./forms/newsletter-02";
import SectionHeader from "./section-header";
import { useAppConfigProvider } from 'gatoapp/app/appconfig-provider'
import { usingDarkColorThemeMode } from 'gatoapp/utils/context/style'
import Image from 'next/image'
import Illustration from 'gatoapp/public/assets/theme/lightmode/cta-illustration.svg'
import clsx from "clsx";

export default function CtaNewsletter({
  title = 'Stay connected with us',
}: {
  title?: string,
}) {
  const { config: AppConfig } = useAppConfigProvider()
  const isDarkColorThemeMode = usingDarkColorThemeMode()
  return (
    <section className="relative overflow-hidden">
      { !isDarkColorThemeMode && (
        <>
          {/* Bg */}
          <div className="absolute inset-0 bg-blue-600 pointer-events-none -z-10" aria-hidden="true" />

          {/* Illustration */}
          <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
            <Image className="max-w-none" src={Illustration} alt="Illustration" />
          </div>
        </>
      )}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={clsx("relative", !isDarkColorThemeMode && "pt-12 md:pt-20 pb-4", isDarkColorThemeMode && "py-12 md:py-20 px-8 pt-16 md:pt-32 rounded-[3rem] overflow-hidden")}>
          { isDarkColorThemeMode && (
            <>
              {/* Radial gradient */}
              <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-70"></div>
                <div className="absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]"></div>
              </div>
              {/* Blurred shape */}
              <div className="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                  <defs>
                    <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                      <stop offset="0%" stopColor="#A855F7" />
                      <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#bs5-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
                </svg>
              </div>
            </>
          )}

          {/* Content */}
          <SectionHeader
            leading={isDarkColorThemeMode ? 'Never miss an update' : ''}
            title={title}
            description={`Find out about our latest product updates as we continue improving ${AppConfig.meta.name}.`}
            titleColorClassname={clsx(!isDarkColorThemeMode && "text-white")}
            descriptionColorClassname={clsx(!isDarkColorThemeMode && "text-white")}
          >
            <NewsletterForm />
          </SectionHeader>
        </div>
      </div>
    </section>
  )
}