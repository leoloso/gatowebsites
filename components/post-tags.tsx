import { getPostTagColors } from '@/utils/post-tags'
import Link from 'next/link'

export default function PostTags({ tags }: {
  tags: string[]
}) {

  const tagColor = (tag: string) => {
    const colors = [
      'bg-red-700',
      'bg-orange-700',
      'bg-amber-700',
      'bg-yellow-700',
      'bg-lime-700',
      'bg-green-700',
      'bg-emerald-700',
      'bg-teal-700',
      'bg-cyan-700',
      'bg-sky-700',
      'bg-blue-700',
      'bg-indigo-700',
      'bg-violet-700',
      'bg-purple-700',
      'bg-fuchsia-700',
      'bg-pink-700',
      'bg-rose-700',

      'bg-red-600',
      'bg-orange-600',
      'bg-amber-600',
      'bg-yellow-600',
      'bg-lime-600',
      'bg-green-600',
      'bg-emerald-600',
      'bg-teal-600',
      'bg-cyan-600',
      'bg-sky-600',
      'bg-blue-600',
      'bg-indigo-600',
      'bg-violet-600',
      'bg-purple-600',
      'bg-fuchsia-600',
      'bg-pink-600',
      'bg-rose-600',
    ]
    const postTagColors = getPostTagColors(colors)
    return `text-gray-100 ${postTagColors[tag]}`
  }

  return (
    <ul className="flex flex-wrap text-xs font-medium -m-1">
      {tags.map((tag, tagIndex) => (
        <li key={tagIndex} className="m-1">
          <span className={`inline-flex text-center py-1 px-3 rounded-full ${tagColor(tag)} pointer-events-none`}>
            {tag}
          </span>
        </li>
      ))}
    </ul>
  )
}
