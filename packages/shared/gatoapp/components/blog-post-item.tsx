import Link from 'next/link'
import Image from 'next/image'
import PostDate from 'gatoapp/components/post-date'
import { BlogPost } from 'gatoapp/types/types'
import PostTags from './post-tags'
import AppConfig from 'gatoapp/app/app.config'

export default function BlogPostItem({ post }: {
  post: BlogPost
}) {
  return (
    <article className="flex items-center pt-4 pb-8 mb-4 border-b border-gray-300 dark:border-slate-200 [&:last-child]:border-b-0">
      <div className='w-full'>
        <header>
          <h2 className="h4 mb-2">
            <Link href={post.urlPath} className="dark:text-slate-300 hover:text-blue-600 dark:hover:text-purple-400 transition duration-150 ease-in-out">{post.title}</Link>
          </h2>
        </header>
        <div className="text-lg text-cyan-800 dark:text-slate-400 mb-4">{post.description}</div>
        <footer className="text-sm md:flex md:items-center md:justify-between">
          <div className="flex items-center">
            <div className="flex shrink-0 mr-3">
              <span className="relative">
                <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-blue-400 dark:bg-white rounded-full"></span></span>
                <Image className="relative rounded-full" src={post.authorImg} width={32} height={32} alt={post.author} />
              </span>
            </div>
            <div>
              <span className="text-gray-500 dark:text-slate-400">By </span>
              <span className="font-medium">{post.author}</span>
              <span className="text-gray-500 dark:text-slate-400"> · <PostDate dateString={post.publishedAt} /></span>
            </div>
          </div>
          <div className="flex md:justify-center mt-4 md:mt-0 items-center mb-6 md:mb-0 md:ml-4">
            {/* Article tags */}
            {post.tags &&
              <PostTags tags={post.tags} baseURL={`/${AppConfig.paths.blog}`} />
            }
          </div>
        </footer>
      </div>
      <Link href={post.urlPath} className="block shrink-0 ml-6">
        <span className="sr-only">Read more</span>
        <svg className="w-4 h-4 fill-current text-blue-400 dark:text-purple-400" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
        </svg>
      </Link>
    </article>
  )
}
