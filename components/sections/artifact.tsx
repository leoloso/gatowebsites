import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import DefaultArtifactIcon from '@/public/assets/theme/default/artifact-icon.png'
import Star from '@/public/assets/theme/star.svg'
import { ArtifactMdx } from '@/components/mdx/artifact-mdx'
import StunningBackground from '@/components/stunning-background'
import { Artifact } from '@/utils/content/types'
import { getTestimonials } from '../data/testimonials'
import WithTitleThumb from '../thumbnails/with-title-thumb'

export default function ArtifactSection({
  artifact,
  sectionURL,
  children,
  widgetChildren,
  testimonialIndex = 0,
  defaultArtifactIcon,
}: {
  artifact: Artifact,
  sectionURL: string,
  children: React.ReactNode,
  widgetChildren?: React.ReactNode,
  testimonialIndex?: number,
  defaultArtifactIcon?: StaticImageData,
}) {
  const testimonial = getTestimonials()[testimonialIndex]
  return (
    <section className="relative">

      <StunningBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">

          <div className="md:flex md:justify-between">

            {/* Artifact content */}
            <div className="md:grow pb-12 md:pb-20">
              <div className="max-w-[720px]">

                <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-16">

                  {/* Back button */}
                  <div className="shrink-0">
                    <div className="sticky top-20">
                      <Link className="flex items-center justify-center w-9 h-9 group border border-transparent rounded-full [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none" href={sectionURL}>
                        <span className="sr-only">Go back</span>
                        <svg className="w-4 h-4 fill-purple-500" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <article className="pb-12 mb-12 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">

                      <div className="bg-slate-700/20 border border-slate-300/10 p-4 rounded-3xl mb-8">
                        <WithTitleThumb
                          title={artifact.title}
                          titleClassname="h1"
                          extraThumbClassname="rounded-2xl"
                        />
                      </div>

                      <h1 className="sr-only">{artifact.title}</h1>

                      {/* Artifact content */}
                      <ArtifactMdx code={artifact.body.code} />
                    </article>

                    <aside className="pl-6 border-l-2 border-purple-500">
                      <p className="inline-flex font-medium italic text-lg bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">“ {testimonial.quote} ”</p>
                      <footer className="flex items-center space-x-4">
                        <Image className="shrink-0 rounded-full" src={testimonial.img} width={32} height={32} alt="Testimonial author picture" />
                        <div className="text-sm font-medium text-slate-300">
                          {testimonial.name} <span className="text-slate-700">-</span> <span className="text-slate-400">{testimonial.role}</span>
                          {/* <span className="text-slate-700">-</span> <a className="text-purple-500 hover:underline" href="#0">Thunderbolt</a> */}
                        </div>
                      </footer>
                    </aside>
                  </div>

                </div>

              </div>
            </div>

            {/* Sidebar */}
            <aside className="md:w-64 lg:w-80 md:shrink-0 md:pt-[3.75rem] lg:pt-0 pb-12 md:pb-20">
              <div className="sticky top-20 md:pl-6 lg:pl-10">

                {/* Sidebar content */}
                <div className="space-y-6">

                  {/* Widget */}
                  <div className="bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800">
                    <div className="px-5 py-6">
                      <div className="text-center mb-5">
                        <div className="mb-4">
                          <div className="relative inline-flex">
                            <Image src={artifact.icon || defaultArtifactIcon || DefaultArtifactIcon} width={80} height={80} alt="Artifact icon" />
                            {!! artifact.featured && (
                              <Image className="absolute top-0 -right-1" src={Star} width={24} height={24} alt="Star" aria-hidden="true" />
                            )}
                          </div>
                        </div>
                        {widgetChildren}
                      </div>
                      {children}
                    </div>
                  </div>

                </div>

              </div>
            </aside>

          </div>

        </div>
      </div>
    </section>
  )
}
