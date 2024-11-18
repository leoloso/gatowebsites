import { Page } from 'gatoapp/types/types'
import { PostMdx } from 'gatoapp/components/mdx/post-mdx'
import StunningBackground from 'gatoapp/components/stunning-background'
import Image from 'next/image'
import PostDate from '../post-date'
import PageHeader from '../page-header'

export default function PageSection({
  page,
  children,
}: {
  page: Page,
  children?: React.ReactNode,
}) {
  return (
    <section className="relative">

      <StunningBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto">

            <article>

              <header className="mb-8">

                {/* Title and excerpt */}
                <PageHeader {...page} />
                
                {/* Article meta */}
                {!! page.lastModifiedAt && (
                  <div className="md:flex md:items-center md:justify-between mt-3">
                    {/* Author meta */}
                    <div className="flex items-center justify-center">
                      {/* <Image className="rounded-full shrink-0 mr-4" src={post.authorImg} width={40} height={40} alt={post.author} /> */}
                      <div>
                        {/* <span className="font-medium text-gray-200">{post.author}</span> */}
                        {/* <span className="text-gray-700"> - </span> */}
                        <span className="text-gray-500">Date last modification: <PostDate dateString={page.lastModifiedAt} /></span>
                      </div>
                    </div>
                  </div>
                )}
              </header>

              {/* Article image */}
              {page.image &&
                <>
                  <figure className="mb-8 lg:-ml-32 lg:-mr-32" data-aos="fade-up" data-aos-delay="400">
                    <Image className="w-full" src={page.image} width={1024} height={576} alt={page.title} priority />
                  </figure>
                  {/* <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                    <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={page.image} width={1024} height={576} alt={page.title} priority />
                  </figure> */}
                </>
              }

              {/* Article content */}
              <PostMdx code={page.body.code} />

              {children}
            </article>

          </div>

        </div>
      </div>
    </section>
  )
}
