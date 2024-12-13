'use client'

import { useState, useEffect } from 'react'
import SearchModal from './search-modal'
import { usePathname } from 'next/navigation';

export default function Search({
  showSearchInput = true,
}: {
  showSearchInput?: boolean,
}) {

  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false)

  // Close the search Dialog when the page has loaded,
  // otherwise it hides the page on mobile
  const pathname = usePathname()
  useEffect(() => {
    setSearchModalOpen(false)
  }, [pathname])

  return (
    <div className={showSearchInput ? 'grow ml-4 md:ml-8' : ''}>
      <button
        className={`${showSearchInput ? 'w-[200px] sm:w-[340px] text-[15px] pr-2 rounded bg-white dark:bg-slate-800 text-slate-400 inline-flex items-center justify-between leading-5 pl-3 py-[7px] border border-slate-200 hover:border-slate-300 shadow-sm whitespace-nowrap dark:text-slate-500 dark:border-slate-700 dark:hover:border-slate-600' : 'btn text-slate-200 hover:text-white bg-slate-300 dark:bg-slate-900 bg-opacity-25 hover:bg-opacity-40 dark:bg-opacity-25 dark:hover:bg-opacity-40 w-full transition duration-150 ease-in-out' }`}
        onClick={() => { setSearchModalOpen(true) }}
      >
        <div className="flex items-center justify-center">
          <svg
            className={`w-4 h-4 ${showSearchInput ? 'mr-3 fill-slate-500 dark:fill-slate-400' : 'fill-slate-500 dark:fill-slate-200'} shrink-0`}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m14.707 13.293-1.414 1.414-2.4-2.4 1.414-1.414 2.4 2.4ZM6.8 12.6A5.8 5.8 0 1 1 6.8 1a5.8 5.8 0 0 1 0 11.6Zm0-2a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z" />
          </svg>
          {showSearchInput && (
            <span>
              Search<span className="hidden sm:inline"> for anything</span>…
            </span>
          )}
        </div>
        {showSearchInput && (
          <div className="flex items-center justify-center h-5 w-5 font-medium text-slate-500 rounded border border-slate-200 shadow-sm ml-3 dark:bg-slate-700 dark:text-slate-400 dark:border-slate-600">
            /
          </div>
        )}
      </button>
      <div>
        <SearchModal
          isOpen={searchModalOpen}
          setIsOpen={setSearchModalOpen}
        />
      </div>
    </div>
  )
}
