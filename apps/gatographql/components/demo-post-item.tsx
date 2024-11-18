import Link from 'next/link'
import PostDate from '@gato/components/post-date'
import PostTags from '@gato/components/post-tags'
import { DemoPost } from '@/.contentlayer/generated'
import { getDemoPostURLPath } from '@/utils/content/application-urls'
import DemoPostThumb from './demo-post-thumb'
import AppConfig from '@/app/app.config'

export default function DemoPostPostItem({
  demoPost,
  bgClassname,
}: {
  demoPost: DemoPost,
  bgClassname?: string,
}) {
  return (
    <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
      <header>
        {/* {demoPost.image &&
          <Link href={getDemoPostURLPath(demoPost)} className="block mb-6">
            <figure className="relative h-0 pb-[56.25%] overflow-hidden rounded-sm">
              <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={demoPost.image} width={352} height={198} alt={demoPost.title} />
            </figure>
          </Link>
        } */}
        <Link href={getDemoPostURLPath(demoPost)} className="block mb-6">
          <div className='relative h-0 pb-[56.25%] overflow-hidden rounded-sm'>
            <div className='absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out'>
              <DemoPostThumb
                demoPost={demoPost}
                paddingClassname=""
                isLandscape={true}
                bgClassname={bgClassname}
              />
            </div>
          </div>
        </Link>
        {demoPost.tags &&
          <div className="mb-3">
            <PostTags tags={demoPost.tags} baseURL={`/${AppConfig.paths.demoPosts}`} />
          </div>
        }
        <h3 className="h4 mb-2">
          <Link href={getDemoPostURLPath(demoPost)} className="hover:text-purple-300 transition duration-150 ease-in-out">{demoPost.title}</Link>
        </h3>
      </header>
      <p className="text-lg text-gray-400 grow">{demoPost.description}</p>
      <footer className="flex items-center mt-4">
        <img className="rounded-full shrink-0 mr-4" src={demoPost.authorImg} width={40} height={40} alt={demoPost.author} />
        <div className="font-medium">
          <span className="text-gray-200">{demoPost.author}</span>
          <span className="text-gray-700"> - </span>
          <span className="text-gray-500"><PostDate dateString={demoPost.publishedAt} /></span>
        </div>
      </footer>
    </article>  
  )
}
