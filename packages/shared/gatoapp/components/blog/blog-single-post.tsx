import Image from 'next/image'
import Link from 'next/link'
import PostDate from 'gatoapp/components/post-date'
import { PostMdx } from 'gatoapp/components/mdx/post-mdx'
import PostNav from 'gatoapp/components/post-nav'
import PostTags from 'gatoapp/components/post-tags'
import AppConfig from 'gatoapp/app/app.config'
import StunningBackground from 'gatoapp/components/stunning-background'
import { getURL } from 'gatoapp/utils/content/application-urls'
import BlogPostingSchemaJsonLdScript from 'gatoapp/components/schema/blogposting-schema-json-ld';
import CampaignBanner from 'gatoapp/components/campaigns/campaign-banner'
import AppSettings from 'gatoapp/app/app.settings'
import { BlogPost } from 'gatoapp/types/types'
import PageHeader from '../page-header'

export default function BlogSinglePost({
  blogPost
}: {
  blogPost: BlogPost
}) {

  const contentId = 'main-content'

  return (
    <>
      <BlogPostingSchemaJsonLdScript
        headline={blogPost.title}
        url={getURL(blogPost)}
        image={blogPost.image}
        description={blogPost.description}
        datePublished={blogPost.publishedAt}
      />

      <section className="relative">
        <StunningBackground />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            { AppSettings.addCampaignBannerToBlog && (
              <CampaignBanner />
            )}

            <div className="max-w-3xl mx-auto lg:max-w-none">

              <article>

                {/* Article header */}
                <PageHeader
                  leading="Blog"
                  title={blogPost.title}
                  titleClassname="" // Pass empty so that the emojis are not cut
                />

                {/* Article content */}
                <div className="lg:flex lg:justify-between">

                  {/* Sidebar */}
                  <PostNav contentId={contentId} />

                  {/* Main content */}
                  <div id={contentId} className='min-w-0'>

                    {/* Article meta */}
                    <div className="md:flex md:items-center md:justify-between mt-3">
                      <div className="flex items-center mb-6">
                        <div className="flex shrink-0 mr-3">
                          <span className="relative">
                            <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                            <Image className="relative rounded-full" src={blogPost.authorImg} width={32} height={32} alt={blogPost.author} />
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-500">By </span>
                          <span className="font-medium">{blogPost.author}</span>
                          <span className="text-gray-500"> · <PostDate dateString={blogPost.publishedAt} /></span>
                        </div>
                      </div>
                      {/* Article tags */}
                      {blogPost.tags &&
                        <div className="flex justify-center mt-4 md:mt-0 items-center mb-6">
                          <PostTags tags={blogPost.tags} baseURL={`/${AppConfig.paths.blog}`} />
                        </div>
                      }
                    </div>
                    <hr className="w-16 h-px pt-px bg-gray-200 border-0 mb-6" />

                    {/* Article body */}
                    <PostMdx code={blogPost.body.code} />

                    <hr className="w-full h-px pt-px mt-16 bg-gray-200 border-0" />

                    <div className="text-lg text-gray-600">
                      <div className="mt-8">
                        <Link href={`/${AppConfig.paths.blog}`} className="inline-flex items-center text-base text-blue-600 font-medium hover:underline">
                          <svg className="w-3 h-3 fill-current text-blue-400 shrink-0 mr-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M.293 5.282L5 .5l1.414 1.436-3 3.048H12v2.032H3.414l3 3.048L5 11.5.293 6.718a1.027 1.027 0 010-1.436z" />
                          </svg>
                          <span>Back to all posts</span>
                        </Link>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Article footer */}
              </article>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}