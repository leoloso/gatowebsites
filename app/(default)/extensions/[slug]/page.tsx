import type { Metadata } from 'next'
import { allExtensions } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Illustration from '@/public/images/page-illustration.svg'
import DefaultExtensionImg from '@/public/images/default/extension-image.png'
import DefaultExtensionIcon from '@/public/images/default/extension-icon.svg'
import Star from '@/public/images/star.svg'
import Avatar from '@/public/images/post-avatar.jpg'
import Particles from '@/components/particles'
import { ExtensionMdx } from '@/components/mdx/extension-mdx'
import AppConfig from '@/app/app.config'

export async function generateStaticParams() {
  return allExtensions.map((extension) => ({
    slug: extension.slug,
  }))
}

export async function generateMetadata({ params }: {
  params: { slug: string }
}): Promise<Metadata | undefined> {

  const extension = allExtensions.find((extension) => extension.slug === params.slug)

  if (!extension) return

  const { name: title, description } = extension

  return {
    title,
    description,
  }
}

export default async function SingleExtension({ params }: {
  params: { slug: string }
}) {

  const extension = allExtensions.find((extension) => extension.slug === params.slug)

  if (!extension) notFound()

  return (
    <section className="relative">

      {/* Radial gradient */}
      <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
        <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />

      {/* Illustration */}
      <div className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" width={1440} height={427} alt="Page Illustration" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">

          <div className="md:flex md:justify-between">

            {/* Page content */}
            <div className="md:grow pb-12 md:pb-20">
              <div className="max-w-[720px]">

                <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-16">

                  {/* Back button */}
                  <div className="shrink-0">
                    <div className="sticky top-20">
                      <Link className="flex items-center justify-center w-9 h-9 group border border-transparent rounded-full [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none" href={`/${AppConfig.paths.extensions}`}>
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

                      <figure className="bg-slate-700/20 border border-slate-300/10 p-4 rounded-3xl mb-8">
                        <Image className="w-full rounded-2xl" src={extension.image || DefaultExtensionImg} width={586} height={316} alt="Extension image" />
                      </figure>

                      <h1 className="sr-only">{extension.name}</h1>

                      {/* Extension content */}
                      <ExtensionMdx code={extension.body.code} />
                    </article>

                    <aside className="pl-6 border-l-2 border-purple-500">
                      <p className="inline-flex font-medium italic text-lg bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">“ This integration is so perfect it tickles my brain. It ensures that your work is in sync across your entire team. ”</p>
                      <footer className="flex items-center space-x-4">
                        <Image className="shrink-0 rounded-full" src={Avatar} width={32} height={32} alt="Author" />
                        <div className="text-sm font-medium text-slate-300">
                          Mike Hunt <span className="text-slate-700">-</span> <a className="text-purple-500 hover:underline" href="#0">Thunderbolt</a>
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
                            <Image src={extension.icon || DefaultExtensionIcon} width={80} height={80} alt="Extension icon" />
                            {!! extension.featured && (
                              <Image className="absolute top-0 -right-1" src={Star} width={24} height={24} alt="Star" aria-hidden="true" />
                            )}
                          </div>
                        </div>
                        <a className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/70 before:rounded-full before:pointer-events-none" href={`/${AppConfig.paths.docs}/extensions/${extension.slug}`}>
                          <span className="relative inline-flex items-center">
                            Open documentation <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                          </span>
                        </a>
                      </div>
                      <ul className="text-sm">
                        <li className="flex items-center justify-between space-x-2 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
                          <span className="text-slate-400">Extension</span>
                          <span className="text-slate-300 font-medium">{extension.name}</span>
                        </li>
                        {!! extension.integration && (
                          <li className="flex items-center justify-between space-x-2 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
                            <span className="text-slate-400">Integration for</span>
                            <a className="text-purple-500 font-medium flex items-center space-x-1" href={extension.integration.url} target="_blank">
                              <span>{extension.integration.name}</span>
                              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="9" height="9">
                                <path d="m1.285 8.514-.909-.915 5.513-5.523H1.663l.01-1.258h6.389v6.394H6.794l.01-4.226z" />
                              </svg>
                            </a>
                          </li>
                        )}
                        <li className="flex items-center justify-between space-x-2 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
                          <span className="text-slate-400">Category</span>
                          <span className="text-slate-300 font-medium">{extension.category}</span>
                        </li>
                      </ul>
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