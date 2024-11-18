import Link from 'next/link'
// import { PostIntegration } from '@gato/types/types'

export default function PostItemIntegration({
  ...postIntegration
}/*, {
  postIntegration: PostIntegration
}*/) {
  return (
    <div className="group border-b border-slate-200">
      <div className="px-4 py-6 bg-slate-800">
        <div className="sm:flex items-center space-y-3 sm:space-y-0 sm:space-x-5">
          <div className="shrink-0">
            <Link href={postIntegration.url} target="_blank">
              <img src={postIntegration.image} width="56" height="56" alt={postIntegration.name} />
            </Link>
          </div>
          <div className="grow lg:flex items-center justify-between space-y-5 lg:space-x-2 lg:space-y-0">
            <div>
              <div className="mb-2">
                <Link className="text-lg text-slate-300 hover:text-purple-400 transition duration-150 ease-in-out font-bold" href={postIntegration.url} target="_blank">
                  {postIntegration.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
