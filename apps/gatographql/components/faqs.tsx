import FAQItem from "gatoapp/components/data/faq-item";
import Faqs from "gatoapp/components/faqs";
import React from 'react'

export default function AppFaqs({
  faqItems,
}: {
  faqItems: FAQItem[],
}) {
  return (
    <Faqs
      faqItems={faqItems}
      leading="Purchasing extensions"
    />
  )
}