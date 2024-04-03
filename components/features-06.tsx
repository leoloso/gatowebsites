import Particles from './particles'

import SectionHeader from './section-header'
import Image from 'next/image'
import Illustration from '@/public/assets/theme/glow-top.svg'

export default function Features06() {
  return (
    <section className="relative">

      {/* Particles animation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32">
        <Particles className="absolute inset-0 -z-10" quantity={6} staticity={30} />    
      </div>

      {/* Illustration */}
      <div className="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10">
          <Image src={Illustration} className="max-w-none" width={1404} height={658} alt="Features Illustration" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 pb-12 md:pt-32 md:pb-20 border-b border-slate-800">

          {/* Section header */}
          <SectionHeader
            // leading='Versatility to satisfy your needs'
            title='Accomplish your goals'
            description="Whether building an API, a website, theme, plugin or Gutenberg block, GraphQL can help you."
          />

          {/* Features list */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Feature */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <svg className="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z"></path>
                </svg>
                <h4 className="font-medium text-slate-50">Build headless sites</h4>
              </div>
              <p className="text-sm text-slate-400">Use your JavaScript framework of choice to render your site.</p>
            </div>
            {/* Feature */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <svg className="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="M15.5 11H13a5.022 5.022 0 0 1-3.453-1.4l-1.2 1.607A7.065 7.065 0 0 0 12 12.92v1.586a.5.5 0 0 0 .853.349l3-3A.5.5 0 0 0 15.5 11ZM1 5a5.022 5.022 0 0 1 3.453 1.4l1.205-1.61A7.028 7.028 0 0 0 1 3a1 1 0 1 0 0 2ZM13 5h2.5a.5.5 0 0 0 .354-.853l-3-3A.5.5 0 0 0 12 1.5v1.58a7.032 7.032 0 0 0-4.6 2.72L5 9a5.025 5.025 0 0 1-4 2 1 1 0 0 0 0 2 7.034 7.034 0 0 0 5.6-2.8L9 7a5.025 5.025 0 0 1 4-2Z"></path>
                </svg>
                <h4 className="font-medium text-slate-50">Power your Gutenberg blocks</h4>
              </div>
              <p className="text-sm text-slate-400">Fetch data to render your Gutenberg blocks on both the client and server sides.</p>
            </div>
            {/* Feature */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <svg className="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="M14 0a2 2 0 0 1 2 2v4a1 1 0 0 1-2 0V2H2v12h4a1 1 0 0 1 0 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm-1.957 10.629 3.664 3.664a1 1 0 0 1-1.414 1.414l-3.664-3.664-.644 2.578a.5.5 0 0 1-.476.379H9.5a.5.5 0 0 1-.48-.362l-2-7a.5.5 0 0 1 .618-.618l7 2a.5.5 0 0 1-.017.965l-2.578.644Z" />
                </svg>
                <h4 className="font-medium text-slate-50">Private GraphQL Server</h4>
              </div>
              <p className="text-sm text-slate-400">Use GraphQL as a tool to internally power your application, without exposing an API.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}