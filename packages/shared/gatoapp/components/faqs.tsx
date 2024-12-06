'use client'

import FAQItem from "./data/faq-item";
import SectionHeader from "./section-header";
import React from 'react'
import { usingDarkColorThemeMode } from 'gatoapp/utils/context/style'
import Accordion from "./mdx/components/accordion-02";

export default function Faqs({
  faqItems,
  leading,
  foldable,
}: {
  faqItems: FAQItem[],
  leading?: string,
  foldable?: boolean
}) {
  const isDarkColorThemeMode = usingDarkColorThemeMode()
  const hasColumns = faqItems[0].column !== undefined
  return (
    <section className="relative">
      { isDarkColorThemeMode && (
        <>
          {/* Blurred shape */}
          <div className="absolute top-0 -translate-y-1/3 left-1/2 -translate-x-1/2 ml-24 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
              <defs>
                <linearGradient id="bs3-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path fill="url(#bs3-a)" fillRule="evenodd" d="m410 0 461 369-284 58z" transform="matrix(1 0 0 -1 -410 427)" />
            </svg>
          </div>
        </>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 mb-8 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.cyan.400),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">

          {/* Section header */}
          <SectionHeader
            leading={leading}
            title='Frequently Asked Questions'
          />

          { hasColumns && (
            <>
              {/* Columns */}
              <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">

                {/* Column */}
                <div className="w-full md:w-1/2 space-y-8">

                  {/* Items */}
                  {faqItems.filter((faqItem) => faqItem.column === 1).map((faqItem, index) => (
                    <div className="space-y-2" key={index}>
                      <h4 className="font-semibold">{faqItem.question}</h4>
                      <p className="text-gray-500 dark:text-slate-400">{faqItem.answer}</p>
                    </div>
                  ))}

                </div>

                {/* Column */}
                <div className="w-full md:w-1/2 space-y-8">

                  {/* Items */}
                  {faqItems.filter((faqItem) => faqItem.column === 2).map((faqItem, index) => (
                    <div className="space-y-2" key={index}>
                      <h4 className="font-semibold">{faqItem.question}</h4>
                      <p className="text-gray-500 dark:text-slate-400">{faqItem.answer}</p>
                    </div>
                  ))}

                </div>

              </div>
            </>
          )}

          { !hasColumns && (
            <div className="max-w-3xl mx-auto space-y-6">
              {/* Items */}
              {faqItems.map((faqItem, index) => (
                <div className="space-y-2" key={index}>
                  <>
                    { foldable && (
                      <Accordion
                        title={faqItem.question}
                        id={`faqs-${index}`}
                        active={false}
                      >
                        {faqItem.answer}
                      </Accordion>
                    )}
                    { !foldable && (
                      <>
                        <h4 className="font-semibold">{faqItem.question}</h4>
                        <p className="text-gray-500 dark:text-slate-400">{faqItem.answer}</p>
                      </>
                    )}
                  </>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  )
}