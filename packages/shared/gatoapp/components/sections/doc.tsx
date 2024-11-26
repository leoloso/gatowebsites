import { DocMdx } from 'gatoapp/components/mdx/doc-mdx'
import TopicTitle from 'gatoapp/components/ui/docs/topic-title'
import Hamburger from 'gatoapp/components/ui/docs/hamburger'
// import Feedback from 'gatoapp/components/ui/feedback'
import ArticleNavigation from 'gatoapp/components/ui/article-navigation'
import Footer from 'gatoapp/components/ui/docs/footer'
import SecondaryNav from 'gatoapp/components/ui/docs/secondary-nav'
import { Doc, DocTopic } from 'gatoapp/types/types'
import ArticleSchemaJsonLdScript from '../schema/article-schema-json-ld'
import { getURL } from 'gatoapp/utils/content/application-urls'

export default function DocSection({
  svgOption,
  doc,
  docTopic,
  prevDoc,
  nextDoc,
}: {
  svgOption?: number
  doc: Doc,
  docTopic: DocTopic,
  prevDoc?: Doc,
  nextDoc?: Doc,
}) {

  return (
    <>
      <ArticleSchemaJsonLdScript
        headline={doc.title}
        url={getURL(doc)}
        description={doc.description}
      />

      {/* Page header */}
      <div className="h-16 flex items-center mb-6">
        <TopicTitle name={docTopic.name} svgOption={svgOption} />
      </div>

      <article className="flex xl:space-x-12">

        {/* Main area */}
        <div className="min-w-0">

          {/* Mobile hamburger + breadcrumbs */}
          <div className="md:hidden flex items-center mb-8">

            <Hamburger />

            {/* Breadcrumbs */}
            <div className="flex items-center text-sm whitespace-nowrap min-w-0 ml-3">
              <span className="text-slate-600 dark:text-slate-400">{docTopic.name}</span>
              <svg className="fill-slate-400 shrink-0 mx-2 dark:fill-slate-500" width="8" height="10" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
              </svg>
              <span className="text-slate-800 font-medium truncate dark:text-slate-200">{doc.title}</span>
            </div>

          </div>

          {/* Doc content */}
          <div>
            <header className="mb-6">
              <h1 className="h2 text-slate-800 mb-4 dark:text-slate-200">{doc.title}</h1>
              {/* <p className="text-lg text-slate-600 dark:text-slate-400">
                {doc.description}
              </p> */}
            </header>
            <DocMdx code={doc.body.code} />
          </div>

          {/* Feedback */}
          <div className="py-8 border-b border-slate-200 space-x-6 dark:border-slate-800">
            {/* <Feedback /> */}
          </div>

          {/* Page navigation */}
          <div className="py-8 space-y-6 sm:space-y-0 sm:space-x-4">
            <ArticleNavigation prevArticle={prevDoc} nextArticle={nextDoc} />
          </div>

          {/* Content footer */}
          <div className='bg-purple-500 dark:bg-transparent -mr-12 -ml-12 pr-12 pl-12'>
            <Footer />
          </div>

        </div>

        {/* Secondary navigation */}
        <SecondaryNav />

      </article>
    </>
  )
}
