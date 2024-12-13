import Link from 'next/link'
import Dropdown from 'gatoapp/components/utils/dropdown'
import AppConfig from '@/app/app.config'

export default function HeaderMenu() {
  {/* Desktop menu links */}
  return (
    <ul className="flex grow justify-center flex-wrap items-center">
      <li>
        <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-5 lg:mx-6 transition duration-150 ease-in-out" href="/pricing">Pricing</Link>
      </li>
      {/* <li>
        <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-5 lg:mx-6 transition duration-150 ease-in-out" href={`/${AppConfig.paths.features}`}>Features</Link>
      </li> */}
      <li>
        <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-5 lg:mx-6 transition duration-150 ease-in-out" href={`/${AppConfig.paths.extensions}`}>Extensions</Link>
      </li>
      {/* <li>
        <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-5 lg:mx-6 transition duration-150 ease-in-out" href={`/${AppConfig.paths.demoPosts}`}>Demos</Link>
      </li> */}
      {/* 1st level: hover */}
      <Dropdown title="Documentation">
        {/* 2nd level: hover */}
        <li>
          <Link className="flex font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-5 lg:mx-6 transition duration-150 ease-in-out py-0.5" href={`/${AppConfig.paths.docs.guides}`}>Guides</Link>
        </li>
        <li>
          <Link className="flex font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-5 lg:mx-6 transition duration-150 ease-in-out py-0.5" href={`/${AppConfig.paths.docs.extensionsReference}`}>Extensions reference</Link>
        </li>
        <li>
          <Link className="flex font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-5 lg:mx-6 transition duration-150 ease-in-out py-0.5" href={`/${AppConfig.paths.docs.queryLibrary}`}>Queries library</Link>
        </li>
        <li>
          <Link className="flex font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-5 lg:mx-6 transition duration-150 ease-in-out py-0.5" href={`/${AppConfig.paths.docs.tutorial}`}>Schema tutorial</Link>
        </li>
      </Dropdown>
      {/* <li>
        <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-5 lg:mx-6 transition duration-150 ease-in-out" href={`/${AppConfig.paths.blog}`}>Blog</Link>
      </li> */}
    </ul>
  )
}
