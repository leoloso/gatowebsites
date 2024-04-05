import Link from 'next/link'
import { DemoPostIntegration } from '@/.contentlayer/generated'

export default function DemoPostItemIntegration({
  ...demoPostIntegration
}/*, {
  demoPostIntegration: DemoPostIntegration
}*/) {
  return (
    <div className="group border-b border-gray-200">
      <div className="px-4 py-6">
        <div className="sm:flex items-center space-y-3 sm:space-y-0 sm:space-x-5">
          <div className="shrink-0">
            <img src={demoPostIntegration.image} width="56" height="56" alt={demoPostIntegration.name} />
          </div>
          <div className="grow lg:flex items-center justify-between space-y-5 lg:space-x-2 lg:space-y-0">
            <div>
              <div className="mb-2">
                <Link className="text-lg text-gray-800 font-bold" href={demoPostIntegration.url}>
                  {demoPostIntegration.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
