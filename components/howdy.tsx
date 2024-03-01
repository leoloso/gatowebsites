import Image from 'next/image'
import Team from '@/public/assets/theme/team.jpg'
import SectionHeader from './section-header'

export default function Howdy() {
  return (
    <section className="relative">

      {/* Blurred shape */}
      <div className="absolute top-0 -mt-32 left-1/2 -translate-x-1/2 ml-10 blur-2xl opacity-70 pointer-events-none -z-10" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stopColor="#A855F7"></stop>
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#bs4-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)"></path>
        </svg>
      </div>

      <div className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="pb-12 md:pb-20">

            {/* Section header */}
            {/* <SectionHeader
              title='Our story (so far)'
            /> */}

            <div className="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
              <figure className="min-w-[240px]">
                <Image className="sticky top-24 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]" src={Team} width={420} height={280} alt="Team" />
              </figure>
              <div className="max-w-[548px] mx-auto">
                <div className="text-slate-400 space-y-6">
                  <p>
                    If you are here, it's because we have recently met at **WordCamp Asia 2024**, and I enjoyed meeting you.
                  </p>
                  <p>
                    I am sure I told you about Gato GraphQL (I always do!), and you got my namecard saying "Scan me for a surprise!"
                  </p>
                  <p>
                    Well, here we are!
                  </p>
                  <p>
                    Gato GraphQL is a GraphQL server for WordPress, that can do a lot of things. Unexpected things, that can help managing the WordPress site. And I want you to check it out.
                  </p>
                  <p>
                    So I'll give you a nice discount, but please shhh, don't share it with anyone, it's just for you! 😀
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}