import FAQItem from 'gatoapp/components/data/faq-item'

export function getFAQs(): FAQItem[] {

  return [    
    {
      question: 'What is Gato GraphQL?',
      answer: <span>Gato GraphQL is a plugin for WordPress that converts the site into a GraphQL server, allowing you to fetch and modify data from WordPress via a GraphQL API.</span>,
      column: 1,
    },
    {
      question: 'Can I ask for a refund?',
      answer: <span>If you purchased a Gato GraphQL product and it does not solve your problem, you have 30 days to <a className="text-purple-500 font-medium hover:text-purple-400" href="/refund-policy">request a refund</a>.</span>,
      column: 1,
    },
    {
      question: 'What\'s the Life Time Deal?',
      answer: <span>If you purchase the Life Time Deal license, you can request support and download/install product updates forever.</span>,
      column: 1,
    },
    {
      question: 'How does Gato GraphQL compare against the WP REST API?',
      answer: <span>Check out the <a className="text-purple-500 font-medium hover:text-purple-400" href="/comparisons/gatographql-vs-wp-rest-api">Gato GraphQL vs WP REST API comparison</a>.</span>,
      column: 1,
    },
    {
      question: 'What are extensions needed for?',
      answer: <span>Extensions are needed to enhance the security of public APIs, add HTTP caching to speed up the application, execute multiple queries in a single request, connect to external services, send emails, and others.</span>,
      column: 2,
    },
    {
      question: 'What happens if I don\'t renew the yearly license?',
      answer: <span>If you do not renew the yearly license, you can keep using the plugin, however you won't be able to request support, or download/install product updates.</span>,
      column: 2,
    },
    {
      question: 'How does Gato GraphQL compare against WPGraphQL?',
      answer: <span>Check out the <a className="text-purple-500 font-medium hover:text-purple-400" href="/comparisons/gatographql-vs-wpgraphql">Gato GraphQL vs WPGraphQL comparison</a>.</span>,
      column: 2,
    },
  ]
}