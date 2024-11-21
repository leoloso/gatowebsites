import { allPlugins } from '@/.contentlayer/generated'
import Link from 'next/link'
import Dropdown from 'gatoapp/components/utils/dropdown'
import AppConfig from '@/app/app.config'

export default function HeaderMenu() {
  {/* Desktop menu links */}
  return (
    <ul className="flex grow justify-center flex-wrap items-center">
      <Dropdown
        title="Plugins"
        link={`/${AppConfig.paths.plugins}`}
        dropdownWidthClassname='-left-40 w-104'
      >
        {/* 2nd level: hover */}
        {allPlugins.map((plugin, index) => (
          <li key={index}>
            <Link className="flex font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-5 lg:mx-6 transition duration-150 ease-in-out py-0.5" href={plugin.urlPath}>{plugin.title}</Link>
          </li>
        ))}
      </Dropdown>
      {/* <li>
        <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-5 lg:mx-6 transition duration-150 ease-in-out" href={`/${AppConfig.paths.demoPosts}`}>Demos</Link>
      </li> */}
      {/* 1st level: hover */}
      <Dropdown
        title="Documentation"
        link={`/${AppConfig.paths.docs}`}
        dropdownWidthClassname='-left-36 w-104'
      >
        {/* 2nd level: hover */}
        {allPlugins.map((plugin, index) => (
          <li key={index}>
            <Link className="flex font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-5 lg:mx-6 transition duration-150 ease-in-out py-0.5" href={plugin.docUrlPath}>{plugin.title}</Link>
          </li>
        ))}
      </Dropdown>
      {/* <li>
        <Link className="font-medium text-sm text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white mx-5 lg:mx-6 transition duration-150 ease-in-out" href={`/${AppConfig.paths.blog}`}>Blog</Link>
      </li> */}
    </ul>
  )
}
