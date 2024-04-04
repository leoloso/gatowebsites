'use client'

import Link from "next/link"

import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({
  totalPages,
}: {
  totalPages: number
}) {

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <nav className="flex justify-center pt-16" role="navigation" aria-label="Pagination Navigation">
      <ul className="inline-flex flex-wrap font-medium text-sm -m-1">
        <li className="m-1">
          <span className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-4 rounded-full text-gray-500">Prev</span>
        </li>
        {Array.from(Array(totalPages), (e, i) => (
          <li key={i} className="m-1">
            <Link href={createPageURL(i + 1)} className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">{i + 1}</Link>
          </li>
        ))}
        {/* <li className="m-1">
          <span className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-500">...</span>
        </li>
        <li className="m-1">
          <Link href="#" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">12</Link>
        </li> */}
        <li className="m-1">
          <Link href="#" className="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-4 rounded-full text-gray-300 hover:bg-purple-600 transition-colors duration-150 ease-in-out">Next</Link>
        </li>
      </ul>
    </nav>
  )
}
