import Link from 'next/link'
import { Extension } from '@/.contentlayer/generated'

export default function BrowseExtensionReferenceDocButton({
  btnClassName = "btn",
  styleClassname = "text-slate-900 bg-slate-200 hover:bg-white transition duration-150 ease-in-out group w-full",
  extension,
}: {
  btnClassName?: string
  styleClassname?: string,
  extension: Extension
}) {
  return (
    <Link className={`${btnClassName} ${styleClassname}`} href={extension.urlPath}>
      <span className="relative inline-flex items-center">
        Browse the Extension Reference docs
      </span>
    </Link>
  )
}
