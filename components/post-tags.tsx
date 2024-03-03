import { getPostTagColors } from '@/utils/post-tags'
import Link from 'next/link'

export default function PostTags({ tags }: {
  tags: string[]
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

      'bg-red-500 hover:bg-red-400',
      'bg-orange-500 hover:bg-orange-400',
      'bg-amber-500 hover:bg-amber-400',
      'bg-yellow-500 hover:bg-yellow-400',
      'bg-lime-500 hover:bg-lime-400',
      'bg-green-500 hover:bg-green-400',
      'bg-emerald-500 hover:bg-emerald-400',
      'bg-teal-500 hover:bg-teal-400',
      'bg-cyan-500 hover:bg-cyan-400',
      'bg-sky-500 hover:bg-sky-400',
      'bg-blue-500 hover:bg-blue-400',
      'bg-indigo-500 hover:bg-indigo-400',
      'bg-violet-500 hover:bg-violet-400',
      'bg-purple-500 hover:bg-purple-400',
      'bg-fuchsia-500 hover:bg-fuchsia-400',
      'bg-pink-500 hover:bg-pink-400',
      'bg-rose-500 hover:bg-rose-400',
    ]
    const postTagColors = getPostTagColors(colors)
    return `text-gray-100 ${postTagColors[tag]}`
  }

  return (
    <ul className="flex flex-wrap text-xs font-medium -m-1">
      {tags.map((tag, tagIndex) => (
        <li key={tagIndex} className="m-1">
          <Link href="#" className={`inline-flex text-center py-1 px-3 rounded-full transition duration-150 ease-in-out ${tagColor(tag)}`}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  )
}
