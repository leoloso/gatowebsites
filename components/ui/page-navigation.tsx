import { Doc } from '@/.contentlayer/generated'
import Link from 'next/link'
import AppConfig from '@/app/app.config'

export default function PageNavigation({
  prevDoc,
  nextDoc
}: {
    prevDoc?: Doc,
    nextDoc?: Doc
}) {
  return (
    <div className="sm:flex items-center justify-between py-8 space-y-6 sm:space-y-0 sm:space-x-4">
      {/* Prev link */}
      {prevDoc &&
        <div className="sm:w-1/2 sm:flex flex-col items-start">
          <div>
            <div className="text-xs font-[650] text-blue-600 uppercase mb-1">Prev</div>
            <div>
              <Link className="text-slate-800 font-[650] flex items-center dark:text-slate-200" href={`/${AppConfig.paths.docs}/${prevDoc.slug}`}>
                <svg className="fill-slate-400 shrink-0 mr-2 rotate-180 dark:fill-slate-500" width="8" height="10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
                </svg>
                <span>{prevDoc.title}</span>
              </Link>
            </div>
          </div>
        </div>
      }
      {/* Next link */}
      {nextDoc &&
        <div className="sm:w-1/2 sm:flex flex-col items-end ml-auto">
          <div>
            <div className="text-xs font-[650] text-blue-600 uppercase mb-1">Next</div>
            <div>
              <Link className="text-slate-800 font-[650] flex items-center dark:text-slate-200" href={`/${AppConfig.paths.docs}/${nextDoc.slug}`}>
                <span>{nextDoc.title}</span>
                <svg className="fill-slate-400 shrink-0 ml-2 dark:fill-slate-500" width="8" height="10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
