import Link from 'next/link'
import Image from 'next/image'
import PostDate from '@/components/post-date'
import PostTags from './post-tags'
import { VideoPost } from '@/.contentlayer/generated'
import { getVideoPostURL } from '@/utils/application-urls'

export default function VideoPostPostItem({ videoPost }: {
  videoPost: VideoPost,
}) {
  return (
    <article className="flex flex-col h-full" data-aos="fade-up">
      <header>
        {videoPost.image &&
          <Link href={getVideoPostURL(videoPost)} className="block mb-6">
            <figure className="relative h-0 pb-[56.25%] overflow-hidden rounded-sm">
              <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={videoPost.image} width={352} height={198} alt={videoPost.title} />
            </figure>
          </Link>
        }
        {videoPost.tags &&
          <div className="mb-3">
            <PostTags tags={videoPost.tags} />
          </div>
        }
        <h3 className="h4 mb-2">
          <Link href={getVideoPostURL(videoPost)} className="hover:text-gray-100 transition duration-150 ease-in-out">{videoPost.title}</Link>
        </h3>
      </header>
      <p className="text-lg text-gray-400 grow">{videoPost.summary}</p>
      <footer className="flex items-center mt-4">
        <Link href="#">
          <img className="rounded-full shrink-0 mr-4" src={videoPost.authorImg} width={40} height={40} alt={videoPost.author} />
        </Link>
        <div className="font-medium">
          <Link href="#" className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">{videoPost.author}</Link>
          <span className="text-gray-700"> - </span>
          <span className="text-gray-500"><PostDate dateString={videoPost.publishedAt} /></span>
        </div>
      </footer>
    </article>  
  )
}
