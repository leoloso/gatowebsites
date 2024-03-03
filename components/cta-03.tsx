import NewsletterForm from "./forms/newsletter-02";
import SectionHeader from "./section-header";

export default function Cta03() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden">
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
          {/* Content */}
          <SectionHeader
            leading='Never miss an update'
            title='Stay in the loop'
            description='Find out about our latest product changes as we continue improving Gato GraphQL to empower your WordPress site.'
            paddingClassname=''
          >
            <NewsletterForm />
          </SectionHeader>
        </div>
      </div>
    </section>
  )
}