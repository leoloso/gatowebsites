import Image from 'next/image'
import FounderPic from '@/public/assets/team/Leo.jpg'
import SectionHeader from './section-header'

export default function Story() {
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
            <SectionHeader
              title='Our story (so far)'
            />

            <div className="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
              <figure className="min-w-[240px]">
                <Image className="sticky top-24 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]" src={FounderPic} width={400} height={533} alt="FounderPic" />
              </figure>
              <div className="max-w-[548px] mx-auto">
                <div className="text-slate-400 space-y-6">
                  <p>Gato GraphQL is the creation of <a className="text-purple-500 font-medium hover:underline" href="https://leoloso.com" target="_blank">Leonardo Losoviz</a>, a developer who started coding for WordPress in 2012, and using GraphQL since 2019.</p>
                  <p>Leo has been working on making WordPress the single source of truth for all our content, as expressed in his article <a className="text-purple-500 font-medium hover:underline" href="https://www.smashingmagazine.com/2019/10/create-once-publish-everywhere-wordpress/" target="_blank">“Create Once, Publish Everywhere” with WordPress</a>, from 2019.</p>
                  <p>With the advent of GraphQL and the WordPress block editor (aka Gutenberg) around that same time, Leo understood that these could provide the foundation to achieve the sought-after goal:</p>
                  <ul>
                  <li>Use the block editor to store structured data in WordPress</li>
                  <li>Use GraphQL to retrieve that data, for any client and application</li>
                  </ul>
                  <p>And hence, work on what would end-up being Gato GraphQL commenced.</p>
                  <p>During this process, it was discovered that GraphQL is more powerful than commonly known, and that it could be used for more use cases than just retrieving data for a client.</p>
                  <p>With this realization, Leo designed Gato GraphQL as a tool to retrieve any piece of data in WordPress, transform the data in any desired way, and store the data again to the DB, or execute some operation with it.</p>
                  <p>This was a formidable proposition, and it took 5 years of development to come to completion: In January 2024, <a className="text-purple-500 font-medium hover:underline" href="https://wordpress.org/plugins/gatographql/">Gato GraphQL was released in the WordPress plugin directory</a>.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}