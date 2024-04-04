import type { Metadata } from 'next'
import { allDemoPosts, DemoPost } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import PostDate from '@/components/post-date'
import PostTags from '@/components/post-tags'
import { PostMdx } from '@/components/mdx/post-mdx'
import StunningBackground from '@/components/stunning-background'
import Newsletter from '@/components/newsletter'
import ArticleNavigation from '@/components/ui/article-navigation'
import { getPrevNextArticles } from '@/utils/content/document'
import { sortByPublishedAt } from '@/utils/content/sort'
import Logo from '@/public/assets/GatoGraphQL-logo-suki.png'
import Particles from '@/components/particles'
// import Illustration from '@/public/assets/theme/cta-illustration.svg'
import PlusImage from '@/public/assets/theme/plus.svg'

export async function generateStaticParams() {
  return allDemoPosts.map((demoPost) => ({
    slug: demoPost.slug,
  }))
}

export async function generateMetadata({ params }: {
  params: { slug: string }
}): Promise<Metadata | undefined> {

  const demoPost = allDemoPosts.find((demoPost) => demoPost.slug === params.slug)

  if (!demoPost) return

  const { title, summary: description } = demoPost

  return {
    title,
    description,
  }
}

export default async function SingleDemoPost({ params }: {
  params: { slug: string }
}) {

  // Sort posts. Needed to find the prev/next items below
  const demoPosts = allDemoPosts.sort(sortByPublishedAt)
  const demoPostIndex = demoPosts.findIndex((demoPost) => demoPost.slug === params.slug)

  if (demoPostIndex === -1) notFound()

  const demoPost = demoPosts[demoPostIndex]
  
  {/* Page navigation */}
  const paginationArticles = getPrevNextArticles(demoPosts, demoPostIndex)
  const prevArticle = paginationArticles.prev as DemoPost
  const nextArticle = paginationArticles.next as DemoPost

  return (
    <>
      <section className="relative">

        <StunningBackground />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto">

              <article>

                <header className="mb-8">
                  {/* Title and excerpt */}
                  <div className="text-center md:text-left">
                    <h1 className="h1 mb-4" data-aos="fade-up">{demoPost.title}</h1>
                    <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">{demoPost.summary}</p>
                  </div>
                  {/* Article meta */}
                  <div className="md:flex md:items-center md:justify-between mt-3">
                    {/* Author meta */}
                    <div className="flex items-center justify-center" data-aos="fade-up" data-aos-delay="400">
                      <Link href="#">
                        <Image className="rounded-full shrink-0 mr-4" src={demoPost.authorImg} width={40} height={40} alt={demoPost.author} />
                      </Link>
                      <div>
                        <Link href="#" className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">{demoPost.author}</Link>
                        <span className="text-gray-700"> - </span>
                        <span className="text-gray-500"><PostDate dateString={demoPost.publishedAt} /></span>
                      </div>
                    </div>
                    {/* Article tags */}
                    {demoPost.tags &&
                      <div className="flex justify-center mt-4 md:mt-0" data-aos="fade-up" data-aos-delay="600">
                        <PostTags tags={demoPost.tags} />
                      </div>
                    }
                  </div>
                </header>

                {/* Article image */}
                {/* {demoPost.image &&
                  <figure className="mb-8 lg:-ml-32 lg:-mr-32" data-aos="fade-up" data-aos-delay="600">
                    <Image className="w-full" src={demoPost.image} width={1024} height={576} alt={demoPost.title} priority />
                  </figure>
                } */}

                <div className="mb-8 lg:-ml-32 lg:-mr-32">
                  <div className="relative bg-gradient-to-tr from-blue-600 to-purple-500 py-10 px-8 md:py-16 md:px-12 h-full z-20 overflow-hidden" data-aos="zoom-out">
                    <div className="flex items-center justify-center">
                      <Particles className="absolute inset-0 -z-10" quantity={10} />
                      {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 mt-8 -z-10" aria-hidden="true">
                        <Image src={Illustration} className="max-w-none" alt="Illustration" />
                      </div> */}
                      <div className="absolute -top-16 left-1/2 -translate-x-1/2 pointer-events-none -z-10 blur-3xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2106" height="1327">
                          <defs>
                            <filter id="hi-a" width="133.3%" height="131.3%" x="-16.7%" y="-15.6%" filterUnits="objectBoundingBox">
                              <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
                            </filter>
                            <filter id="hi-b" width="133.3%" height="131.3%" x="-16.7%" y="-15.6%" filterUnits="objectBoundingBox">
                              <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
                            </filter>
                            <filter id="hi-c" width="159.9%" height="145%" x="-29.9%" y="-22.5%" filterUnits="objectBoundingBox">
                              <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
                            </filter>
                          </defs>
                          <g fill="none" fillRule="evenodd">
                            <path
                              fill="#6D28D9"
                              fillOpacity=".72"
                              d="M1110.164 893.257C1191.124 1079.102 1484 839.962 1484 626.315S883.228 0 669.507 0s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
                              filter="url(#hi-a)"
                              transform="translate(0 -605)"
                            />
                            <path
                              fill="#67E8F9"
                              fillOpacity=".64"
                              d="M1732.164 1753.257c80.96 185.845 373.836-53.295 373.836-266.942S1505.228 860 1291.507 860s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
                              filter="url(#hi-b)"
                              transform="translate(0 -605)"
                            />
                            <path
                              fill="#F472B6"
                              fillOpacity=".8"
                              d="M1191.108 871C1338.988 871 1631 635.765 1631 487.507 1631 339.248 1625.874 205 1477.994 205s-267.76 120.187-267.76 268.445c0 148.259-167.006 397.555-19.126 397.555Z"
                              filter="url(#hi-c)"
                              transform="translate(0 -605)"
                            />
                          </g>
                        </svg>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="max-w-[200px] mx-auto sm:max-w-[250px] md:max-w-none" data-aos="fade-up" data-aos-delay="200">
                          <Image src={Logo} alt={demoPost.title} width={300} height={300} />
                        </div>
                        <div className="max-w-[30px] mx-auto sm:max-w-[40px] md:max-w-none mx-4 sm:mx-8 sm:mx-16 lg:mx-24" data-aos="fade-up" data-aos-delay="200">
                          <Image src={PlusImage} width={40} height={40} alt="plus image" />
                        </div>
                        <div className="max-w-[200px] mx-auto sm:max-w-[250px] md:max-w-none" data-aos="fade-up" data-aos-delay="200">
                          <Image src={Logo} alt={demoPost.title} width={300} height={300} />
                          {/* <Image src={demoPost.targetImage} alt={demoPost.title} width={300} height={300} /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article content */}
                <PostMdx code={demoPost.body.code} />

                <hr className="w-full h-px pt-px mt-16 bg-gray-200 border-0" />

                {/* Page navigation */}
                <div className="py-8 space-y-6 sm:space-y-0 sm:space-x-4">
                  <ArticleNavigation prevArticle={prevArticle} nextArticle={nextArticle} />
                </div>
              </article>

            </div>

          </div>
        </div>
      </section>
      <Newsletter label="Want more demo videos?" />
    </>
  )
}