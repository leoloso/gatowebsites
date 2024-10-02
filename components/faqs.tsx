import SectionHeader from "./section-header";

export default function Faqs() {
  return (
  <section className="relative">

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

    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20 mb-8 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">

        {/* Section header */}
        <SectionHeader
          leading="Purchasing extensions"
          title='Frequently Asked Questions'
        />

        {/* Columns */}
        <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">

          {/* Column */}
          <div className="w-full md:w-1/2 space-y-8">

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">What is Gato GraphQL?</h4>
              <p className="text-slate-400">Gato GraphQL is a plugin for WordPress that converts the site into a GraphQL server, allowing you to fetch and modify data from WordPress via a GraphQL API.</p>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">Can I ask for a refund?</h4>
              <p className="text-slate-400">If you purchased a Gato GraphQL product and it does not solve your problem, you have 30 days to request a refund.</p>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">What's the Life Time Deal?</h4>
              <p className="text-slate-400">If you purchase the Life Time Deal license, you can request support and download/install product updates forever.</p>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">Can Gato GraphQL replace the WP REST API?</h4>
              <p className="text-slate-400">With the “Persisted Queries” extension, you can use GraphQL to publish endpoints that expose predefined data, as in REST. These endpoints can replace WP REST API endpoints.</p>
            </div>

          </div>

          {/* Column */}
          <div className="w-full md:w-1/2 space-y-8">

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">What are extensions needed for?</h4>
              {/* <p className="text-slate-400">The Gato GraphQL plugin maps the WordPress schema, and is enough to use GraphQL as an API, such as for building headless sites.</p> */}
              <p className="text-slate-400">Extensions are needed to enhance the security of public APIs, add HTTP caching to speed up the application, execute multiple queries in a single request, connect to external services, send emails, and others.</p>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">What happens if I don't renew the yearly license?</h4>
              <p className="text-slate-400">If you do not renew the yearly license, you can keep using the plugin, however you won't be able to request support, or download/install product updates.</p>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">Can Gato GraphQL replace WPGraphQL?</h4>
              <p className="text-slate-400">Yes, it can. However, because the GraphQL schema provided by both plugins are different, the GraphQL queries will need to be adapted.</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
  )
}