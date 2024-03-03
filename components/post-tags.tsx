import { getPostTagColors } from '@/utils/post-tags'
import Link from 'next/link'

export default function PostTags({ tags }: {
  tags: string[]
}) {

  const tagColor = (tag: string) => {
    const bgcolors = [
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
    ]
    const postTagColors = getPostTagColors(bgcolors)
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
