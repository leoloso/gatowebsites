import type { Metadata } from 'next'
import { allPages } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { PostMdx } from '@/components/mdx/post-mdx'
import StunningBackground from '@/components/stunning-background'

export async function generateStaticParams() {
  return allPages.map((page) => ({
    slug: page.slug,
  }))
}

export async function generateMetadata({ params }: {
  params: { slug: string }
}): Promise<Metadata | undefined> {

  const page = allPages.find((page) => page.slug === params.slug)

  if (!page) return

  const { title, summary: description } = page

  return {
    title,
    description,
  }
}

export default async function SinglePage({ params }: {
  params: { slug: string }
}) {

  const page = allPages.find((page) => page.slug === params.slug)

  if (!page) notFound()

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

              {/* Article content */}
              <PostMdx code={page.body.code} />
            </article>

          </div>

        </div>
      </div>
    </section>
  )
}