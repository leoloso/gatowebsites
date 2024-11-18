import { getPostTagColors } from '@/utils/content/post-tags'
import clsx from 'clsx'
import Link from 'next/link'

export default function PostTags(
{
  tags,
  baseURL,
  tagClassName = 'text-xs',
}: {
  tags: string[],
  baseURL?: string,
  tagClassName?: string
}) {

  const tagColor = (tag: string) => {
    const colors = [
      'bg-red-700 hover:bg-red-600',
      'bg-orange-700 hover:bg-orange-600',
      'bg-amber-700 hover:bg-amber-600',
      'bg-yellow-700 hover:bg-yellow-600',
      'bg-lime-700 hover:bg-lime-600',
      'bg-green-700 hover:bg-green-600',
      'bg-emerald-700 hover:bg-emerald-600',
      'bg-teal-700 hover:bg-teal-600',
      'bg-cyan-700 hover:bg-cyan-600',
      'bg-sky-700 hover:bg-sky-600',
      'bg-blue-700 hover:bg-blue-600',
      'bg-indigo-700 hover:bg-indigo-600',
      'bg-violet-700 hover:bg-violet-600',
      'bg-purple-700 hover:bg-purple-600',
      'bg-fuchsia-700 hover:bg-fuchsia-600',
      'bg-pink-700 hover:bg-pink-600',
      'bg-rose-700 hover:bg-rose-600',

      'bg-red-600 hover:bg-red-500',
      'bg-orange-600 hover:bg-orange-500',
      'bg-amber-600 hover:bg-amber-500',
      'bg-yellow-600 hover:bg-yellow-500',
      'bg-lime-600 hover:bg-lime-500',
      'bg-green-600 hover:bg-green-500',
      'bg-emerald-600 hover:bg-emerald-500',
      'bg-teal-600 hover:bg-teal-500',
      'bg-cyan-600 hover:bg-cyan-500',
      'bg-sky-600 hover:bg-sky-500',
      'bg-blue-600 hover:bg-blue-500',
      'bg-indigo-600 hover:bg-indigo-500',
      'bg-violet-600 hover:bg-violet-500',
      'bg-purple-600 hover:bg-purple-500',
      'bg-fuchsia-600 hover:bg-fuchsia-500',
      'bg-pink-600 hover:bg-pink-500',
      'bg-rose-600 hover:bg-rose-500',
    ]
    const postTagColors = getPostTagColors(colors)
    return `text-gray-100 ${postTagColors[tag.toLowerCase()]}`
  }

  return (
    <ul className={clsx('flex flex-wrap font-medium -m-1', tagClassName)}>
      {tags.map((tag, tagIndex) => (
        <li key={tagIndex} className="m-1">
          {!! baseURL && (
            <Link href={`${baseURL}?tag=${encodeURI(tag)}`} className={`inline-flex text-center py-1 px-3 rounded-full ${tagColor(tag)} transition duration-150 ease-in-out`}>
              {tag}
            </Link>
          )}
          {! baseURL && (
            <span className={`inline-flex text-center py-1 px-3 rounded-full ${tagColor(tag)} pointer-events-none`}>
              {tag}
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}
