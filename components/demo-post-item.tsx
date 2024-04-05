import Link from 'next/link'
import PostDate from '@/components/post-date'
import PostTags from './post-tags'
import { DemoPost } from '@/.contentlayer/generated'
import { getDemoPostURLPath } from '@/utils/content/application-urls'
import DemoPostThumb from './demo-post-thumb'

export default function DemoPostPostItem({
  demoPost,
  bgClassname,
}: {
  demoPost: DemoPost,
  bgClassname?: string,
}) {
  return (
    // @todo Remove AOS!?
    <article className="flex flex-col h-full" data-aos="fade-up">
      <header>
        {/* {demoPost.image &&
          <Link href={getDemoPostURLPath(demoPost)} className="block mb-6">
            <figure className="relative h-0 pb-[56.25%] overflow-hidden rounded-sm">
              <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={demoPost.image} width={352} height={198} alt={demoPost.title} />
            </figure>
          </Link>
        } */}
        <Link href={getDemoPostURLPath(demoPost)} className="block mb-6">
          <DemoPostThumb
            demoPost={demoPost}
            paddingClassname=""
            isLandscape={true}
            bgClassname={bgClassname}
          />
        </Link>
        {demoPost.tags &&
          <div className="mb-3">
            <PostTags tags={demoPost.tags} />
          </div>
        }
        <h3 className="h4 mb-2">
          <Link href={getDemoPostURLPath(demoPost)} className="hover:text-gray-100 transition duration-150 ease-in-out">{demoPost.title}</Link>
        </h3>
      </header>
      <p className="text-lg text-gray-400 grow">{demoPost.summary}</p>
      <footer className="flex items-center mt-4">
        <Link href="#">
          <img className="rounded-full shrink-0 mr-4" src={demoPost.authorImg} width={40} height={40} alt={demoPost.author} />
        </Link>
        <div className="font-medium">
          <Link href="#" className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">{demoPost.author}</Link>
          <span className="text-gray-700"> - </span>
          <span className="text-gray-500"><PostDate dateString={demoPost.publishedAt} /></span>
        </div>
      </footer>
    </article>  
  )
}
