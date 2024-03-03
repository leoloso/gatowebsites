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
      <div className="py-12 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">

        {/* Section header */}
        <SectionHeader
          leading='Getting started with Gato GraphQL'
          title='Everything you need to know'
        />

        {/* Columns */}
        <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">

          {/* Column */}
          <div className="w-full md:w-1/2 space-y-8">

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">What is Gato GraphQL?</h4>
              <p className="text-slate-400">Gato GraphQL is a plugin for WordPress that converts the site into a GraphQL server, allowing to fetch and modify data from the WordPress site using the GraphQL language.</p>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">Is Gato GraphQL free?</h4>
              <p className="text-slate-400">The Gato GraphQL plugin for WordPress is free, while Gato GraphQL PRO is the commercial extension, that supports additional use cases.</p>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">What's the difference between free and PRO?</h4>
              <p className="text-slate-400">The Gato GraphQL plugin maps the WordPress schema, and is enough to use GraphQL as an API, such as for building headless sites.</p>
              <p className="text-slate-400">Gato GraphQL PRO is needed for enhanced security for public APIs, adding HTTP caching, sending emails, executing updates in bulk, connecting to external services, and automating tasks (among others).</p>
            </div>

          </div>

          {/* Column */}
          <div className="w-full md:w-1/2 space-y-8">

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">How is Gato GraphQL different than the WP REST API?</h4>
              <p className="text-slate-400">Gato GraphQL supports “Persisted Queries”, which are similar to REST endpoints as they expose pre-defined data, however these are created and published directly within the wp-admin, using GraphQL.</p>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">Can I use Stellar for free?</h4>
              <p className="text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">Is Stellar affordable for small businesses?</h4>
              <p className="text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
  )
}