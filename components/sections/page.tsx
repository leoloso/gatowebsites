import { Page } from '@/.contentlayer/generated'
import { PostMdx } from '@/components/mdx/post-mdx'
import StunningBackground from '@/components/stunning-background'
import Image from 'next/image'
import PostDate from '../post-date'

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
                <div className="text-center md:text-left">
                  <h1 className="h1 mb-4" data-aos="fade-up">{page.title}</h1>
                  <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">{page.description}</p>
                </div>
                {/* Article meta */}
                {!! page.lastModifiedAt && (
                  <div className="md:flex md:items-center md:justify-between mt-3">
                    {/* Author meta */}
                    <div className="flex items-center justify-center" data-aos="fade-up" data-aos-delay="400">
                      {/* <Link href="#">
                        <Image className="rounded-full shrink-0 mr-4" src={post.authorImg} width={40} height={40} alt={post.author} />
                      </Link> */}
                      <div>
                        {/* <Link href="#" className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">{post.author}</Link> */}
                        {/* <span className="text-gray-700"> - </span> */}
                        <span className="text-gray-500">Date last modification: <PostDate dateString={page.lastModifiedAt} /></span>
                      </div>
                    </div>
                  </div>
                )}
              </header>

              {/* Article image */}
              {page.image &&
                <figure className="mb-8 lg:-ml-32 lg:-mr-32" data-aos="fade-up" data-aos-delay="600">
                  <Image className="w-full" src={page.image} width={1024} height={576} alt={page.title} priority />
                </figure>
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
