import { Page } from '@/.contentlayer/generated'
import { PostMdx } from '@/components/mdx/post-mdx'
import StunningBackground from '@/components/stunning-background'
import Image from 'next/image'

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
                  <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">{page.summary}</p>
                </div>
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
