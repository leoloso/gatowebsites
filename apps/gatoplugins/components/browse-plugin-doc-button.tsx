import Link from 'next/link'
import { Plugin } from '@/.contentlayer/generated'

export default function BrowsePluginDocButton({
  btnClassName = "btn",
  styleClassname = "text-slate-100 bg-blue-700 hover:bg-blue-600 transition duration-150 ease-in-out group w-full",
  plugin,
}: {
  btnClassName?: string
  styleClassname?: string,
  plugin: Plugin
}) {
  return (
    <Link className={`${btnClassName} ${styleClassname}`} href={plugin.docUrlPath}>
      <span className="relative inline-flex items-center">
        Browse the Plugin docs
      </span>
    </Link>
  )
}
