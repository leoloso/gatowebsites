import { BlogPost } from 'gatoapp/types/types'
import { sortByPublishedAt } from 'gatoapp/utils/content/sort';
import Link from "next/link";
import { getFeaturedBlogPosts } from "gatoapp/utils/content/post";

export default function PopularPosts({
  blogPosts,
}: {
  blogPosts: BlogPost[]
}) {
  const featuredBlogPosts = getFeaturedBlogPosts(blogPosts)
  const sortedBlogPosts = featuredBlogPosts.sort(sortByPublishedAt)
  return (
    <div className="mb-8">
      <h4 className="text-lg font-bold leading-snug tracking-tight mb-4">Popular on the blog</h4>
      <ul className="-my-2">
        {sortedBlogPosts.map((post, index) => (
          <li className="flex py-2 border-b border-gray-300 dark:border-slate-200 [&:last-child]:border-b-0" key={index}>
            <svg className="w-4 h-4 shrink-0 fill-current text-gray-500 dark:text-slate-400 mt-1 mr-3" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z" />
            </svg>
            <article>
              <h3 className="font-medium mb-1">
                <Link href={post.urlPath} className="dark:text-slate-300 hover:text-blue-500 dark:hover:text-purple-400 transition duration-150 ease-in-out">{post.title}</Link>
              </h3>
              <div className="text-sm text-gray-500 dark:text-slate-500">
                <span className="text-gray-400 dark:text-slate-400">By </span>
                <span className="font-medium">{post.author}</span>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
