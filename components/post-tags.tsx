import { getPostTagColors } from '@/utils/post-tags'
import Link from 'next/link'

export default function PostTags({ tags }: {
  tags: string[]
}) {

  const tagColor = (tag: string) => {
    const colors = [
      'red',
      'orange',
      'amber',
      'yellow',
      'lime',
      'green',
      'emerald',
      'teal',
      'cyan',
      'sky',
      'blue',
      'indigo',
      'violet',
      'purple',
      'fuchsia',
      'pink',
      'rose',
    ]
    const postTagColors = getPostTagColors(colors)
    return `text-gray-100 bg-${postTagColors[tag]}-700 hover:bg-${postTagColors[tag]}-600`
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
