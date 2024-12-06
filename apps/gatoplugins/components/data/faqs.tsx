import FAQItem from 'gatoapp/components/data/faq-item'
import { Plugin } from '@/.contentlayer/generated'

export function getFAQs({
  plugin,
}: {
  plugin: Plugin
}): FAQItem[] {

  if (plugin.slug === 'multilingual-polylang') {
    return [    
      {
        question: 'What is Gato Multilingual for Polylang?',
        answer: <span>It is a plugin for WordPress that automatically translates new posts into all languages configured in your Polylang settings.</span>,
      },
      {
        question: 'How is the translation performed?',
        answer: <span>The translation is performed by calling the Google Translate API.</span>,
      },
      {
        question: 'Can I ask for a refund?',
        answer: <span>If you are not happy with the purchased plugin, you have 30 days to <a className="text-blue-600 font-medium hover:text-blue-500" href="/refund-policy">request a refund</a>.</span>,
      },
      {
        question: 'What happens if I don\'t renew the yearly license?',
        answer: <span>If you do not renew the yearly license, you can keep using the plugin, however you won't be able to request support, or download/install product updates.</span>,
      },
    ]
  }

  throw new Error(`There are no FAQs for Plugin with slug '${plugin.slug}'`)
}