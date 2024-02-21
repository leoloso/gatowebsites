import Link from 'next/link'
import Image from 'next/image'
import PostDate from '@/components/post-date'
import PostTags from './post-tags'
import AppConfig from '@/app/app.config'
import { Guide } from '@/.contentlayer/generated'
import { getGuideURL } from '@/utils/application-urls'

export default function GuidePostItem({ guide }: {
  guide: Guide,
}) {
  return (
    <article className="flex flex-col h-full" data-aos="fade-up">
      <header>
        {guide.image &&
          <Link href={getGuideURL(guide)} className="block mb-6">
            <figure className="relative h-0 pb-[56.25%] overflow-hidden rounded-sm">
              <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={guide.image} width={352} height={198} alt={guide.title} />
            </figure>
          </Link>
        }
        {guide.tags &&
          <div className="mb-3">
            <PostTags tags={guide.tags} />
          </div>
        }
        <h3 className="h4 mb-2">
          <Link href={getGuideURL(guide)} className="hover:text-gray-100 transition duration-150 ease-in-out">{guide.title}</Link>
        </h3>
      </header>
      <p className="text-lg text-gray-400 grow">{guide.summary}</p>
      <footer className="flex items-center mt-4">
        <Link href="#">
          <img className="rounded-full shrink-0 mr-4" src={guide.authorImg} width={40} height={40} alt={guide.author} />
        </Link>
        <div className="font-medium">
          <Link href="#" className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">{guide.author}</Link>
          <span className="text-gray-700"> - </span>
          <span className="text-gray-500"><PostDate dateString={guide.publishedAt} /></span>
        </div>
      </footer>
    </article>  
  )
}
