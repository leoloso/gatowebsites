import Link from 'next/link'
import Image from 'next/image'
import PostDate from '@/components/post-date'
import { Post } from '@/.contentlayer/generated'
import { getPostURL } from '@/utils/application-urls'

export default function PostItem({ post }: {
  post: Post
}) {
  return (
    <article className="flex items-center py-4 border-b border-gray-200">
      <div>
        <header>
          <h2 className="h4 mb-2">
            <Link href={getPostURL(post)} className="hover:underline">{post.title}</Link>
          </h2>
        </header>
        <div className="text-lg text-gray-400 mb-4">{post.summary}</div>
        <footer className="text-sm">
          <div className="flex items-center">
            <div className="flex shrink-0 mr-3">
              <a className="relative" href="#0">
                <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                <Image className="relative rounded-full" src={post.authorImg} width={32} height={32} alt={post.author} />
              </a>
            </div>
            <div>
              <span className="text-gray-400">By </span>
              <a className="font-medium hover:underline" href="#0">{post.author}</a>
              <span className="text-gray-400"> · <PostDate dateString={post.publishedAt} /></span>
            </div>
          </div>
        </footer>
      </div>
      <Link href={getPostURL(post)} className="block shrink-0 ml-6">
        <span className="sr-only">Read more</span>
        <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
        </svg>
      </Link>
    </article>
  )
}
