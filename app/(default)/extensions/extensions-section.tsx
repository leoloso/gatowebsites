import { allExtensions } from 'contentlayer/generated'
import Link from 'next/link'
import { getExtensionURLPath } from '@/utils/content/application-urls'
import { sortByOrder } from '@/utils/content/sort'
import PageHeader from '@/components/page-header'
import ExtensionThumb from '@/components/extension-thumb'

export default function ExtensionsSection() {

  const extensions = allExtensions.sort(sortByOrder)
  
  return (        
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">

        {/*  Page header */}
        <PageHeader
          leading='Empower and protect your application'
          title='Extensions'
          description='Purchase and install extensions to provide additional functionality to the GraphQL server and expand the GraphQL schema'
          // headerClassname="md:text-left mx-0"
        />

        {/* Extensions */}
        {extensions.map((extension, index) => (
          <div className="pb-12 md:pb-20" key={index}>
            <article className="max-w-3xl mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
              <Link href={getExtensionURLPath(extension)} className="relative block group" data-aos="fade-right" data-aos-delay="200">
                <div className="absolute inset-0 bg-gray-700 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                {/* {extension.image &&
                  <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                    <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={extension.image} width="540" height="303" alt={extension.title} />
                  </figure>
                } */}
                <div className="relative overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                  <ExtensionThumb
                    extension={extension}
                    paddingClassname="py-5 px-4 md:py-8 md:px-6"
                  />
                </div>
              </Link>
              <div data-aos="fade-left" data-aos-delay="200">
                <header>
                  <h3 className="h3 text-2xl lg:text-3xl mb-2">
                    <Link href={getExtensionURLPath(extension)} className="hover:text-purple-300 transition duration-150 ease-in-out">{extension.title}</Link>
                  </h3>
                </header>
                <p className="text-lg text-gray-400 grow">{extension.description}</p>
              </div>
            </article>
          </div>
        ))}


      </div>
    </div>
  )
}