import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { PostMdx } from 'gatoapp/components/mdx/post-mdx'
import PostNav from 'gatoapp/components/post-nav'
import StunningBackground from 'gatoapp/components/stunning-background'
import { sortByOrderAndTitle } from 'gatoapp/utils/content/sort'
import { getComparisonPostURL } from '@/utils/content/application-urls'
import ArticleSchemaJsonLdScript from 'gatoapp/components/schema/article-schema-json-ld';
import Cta from 'gatoapp/components/cta-02'
import PageHeader from 'gatoapp/components/page-header'
import { allComparisonPosts } from '@/.contentlayer/generated'
import Logo from 'gatoapp/public/assets/Gato-logo-suki.png'
import { getComparisonPostBackground } from '@/utils/content/comparison-backgrounds'
import RelatedPosts from './related-posts'
import Particles from 'gatoapp/components/particles'
import VsImage from 'gatoapp/public/assets/theme/vs.svg'
import { createSEOPageTitle, createOpenGraphPageTitle } from '@/utils/content/metadata'
import CampaignBanner from 'gatoapp/components/ui/campaigns/campaign-banner'

export async function generateStaticParams() {
  return allComparisonPosts.map((comparisonPost) => ({
    slug: comparisonPost.slug,
  }))
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata,
): Promise<Metadata | undefined> {

  const comparisonPost = allComparisonPosts.find((comparisonPost) => comparisonPost.slug === params.slug)

  if (!comparisonPost) return

  const { title, seoTitle, description, seoDescription } = comparisonPost

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: createSEOPageTitle(title, seoTitle),
    description: seoDescription || description,
    openGraph: {
      title: createOpenGraphPageTitle(title),
      description,
      images: comparisonPost.image ? [comparisonPost.image] : previousImages,
    },
    twitter: {
      title: createOpenGraphPageTitle(title),
      description,
      images: comparisonPost.image ? [comparisonPost.image] : previousImages,
    },
  }
}

export default async function SingleComparisonPost({ params }: {
  params: { slug: string }
}) {

  // Sort comparisonPosts. Needed to find the prev/next items below
  const comparisonPosts = allComparisonPosts.sort(sortByOrderAndTitle)
  const comparisonPostIndex = comparisonPosts.findIndex((comparisonPost) => comparisonPost.slug === params.slug)

  if (comparisonPostIndex === -1) notFound()

  const comparisonPost = comparisonPosts[comparisonPostIndex]

  const contentId = 'main-content'
  
  return (
    <>
      <ArticleSchemaJsonLdScript
        headline={comparisonPost.title}
        url={getComparisonPostURL(comparisonPost)}
        image={comparisonPost.image}
        description={comparisonPost.description}
      />

      <section className="relative">
        <StunningBackground />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            <CampaignBanner />

            <div className="max-w-3xl mx-auto lg:max-w-none">

              <article className="pb-12 mb-12 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">

                {/* Article header */}
                <PageHeader {...comparisonPost} />

                <div className="pb-12 md:pb-20">
                  <div className="relative h-full bg-purple-900/70 rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex items-center justify-center">
                      <Particles className="absolute inset-0 -z-10" quantity={10} />
                      <Image className="w-full h-full aspect-video object-cover" src={getComparisonPostBackground(comparisonPost.targetName)} width={352} height={198} alt="Comparison Target Background" aria-hidden="true" />
                      <div className="absolute flex items-center justify-center">
                        <div className="max-w-[200px] mx-auto sm:max-w-[250px] md:max-w-none" data-aos="fade-up" data-aos-delay="200">
                          <Image src={Logo} alt={comparisonPost.title} width={300} height={300} />
                        </div>
                        <div className="mx-4 sm:mx-8 sm:mx-16 lg:mx-24">
                          <Image src={VsImage} width={30} height={30} alt="plus image" />
                        </div>
                        <div className="max-w-[200px] mx-auto sm:max-w-[250px] md:max-w-none" data-aos="fade-up" data-aos-delay="200">
                          <Image src={comparisonPost.targetImage} alt={comparisonPost.title} width={300} height={300} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Article content */}
                <div className="lg:flex lg:justify-between">

                  {/* Sidebar */}
                  <PostNav
                    contentId={contentId}
                    header='Comparison items'
                    navClassName='bg-gradient-to-tr from-slate-800 to-slate-800/25 border border-slate-800 hover:border-slate-700/60 transition-colors group relative p-5 rounded-xl'
                  />

                  {/* Main content */}
                  <div id={contentId} className='min-w-0'>

                    {/* Have Tailwind include classes to .js, so they can be included in .mdx */}
                    <div className='hidden lg:-ml-16 lg:-mr-16' />

                    {/* Article body */}
                    <PostMdx code={comparisonPost.body.code} />

                  </div>

                </div>

                {/* Article footer */}
              </article>

              <RelatedPosts current={comparisonPost} />

            </div>

          </div>
        </div>
      </section>
      <Cta
        tryoutProduct='Gato GraphQL + all extensions'
      />
    </>
  )
}