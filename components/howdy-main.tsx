import Image from 'next/image'
import Team from '@/public/assets/theme/team.jpg'

export default function HowdyMain() {
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

            <div className="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
              <figure className="min-w-[240px]">
                <Image className="sticky top-24 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]" src={Team} width={420} height={280} alt="Team" />
              </figure>
              <div className="max-w-[548px] mx-auto">
                <div className="text-slate-400 space-y-6">
                  <p>
                    If you are here, that means that we have met at <strong className="text-slate-50 font-medium">WordCamp Asia 2024</strong>, and I enjoyed meeting you.
                  </p>
                  <p>
                    I surely told you about my plugin Gato GraphQL, and you got my namecard saying <strong className="text-slate-50 font-medium">Scan me for a surprise!</strong>
                  </p>
                  <p>
                    Well, here we are!
                  </p>
                  <p>
                    Gato GraphQL is a GraphQL server for WordPress, that can do a lot of things. Unexpected things too, to help manage the WordPress site.
                  </p>
                  <p>
                    I would love you to check it out. So <strong className="text-slate-50 font-medium">I'll offer you a nice discount</strong> 😀
                  </p>
                  <p>
                    (But please shhh, don't share it with anyone, it's just for you!)
                  </p>
                  <p>
                    Btw, if the conference is still ongoing, please come talk to me again. If not, you can always find me via the <a className="text-purple-500 font-medium hover:underline" href="/contact">contact</a> page.
                  </p>
                  <p>
                    Let's stay in touch!
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