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
              <p className="text-slate-400">The Gato GraphQL plugin for WordPress is free, while Gato GraphQL PRO is its commercial extension.</p>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">When do I need to buy the PRO version?</h4>
              <p className="text-slate-400">The Gato GraphQL plugin completely maps the WordPress schema, and is enough to build headless sites.</p>
              <p className="text-slate-400">Gato GraphQL PRO is needed for enhanced security for public APIs, improving speed, automating tasks, and connecting to external services (among others).</p>
            </div>

          </div>

          {/* Column */}
          <div className="w-full md:w-1/2 space-y-8">

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">What kind of data can I collect from my customers?</h4>
              <p className="text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
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