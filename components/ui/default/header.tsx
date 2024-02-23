import Header from '@/components/ui/header'
import Link from 'next/link'
import Dropdown from '@/components/utils/dropdown'
import AppConfig from '@/app/app.config'

export default function DefaultHeader() {
  return (
    <Header>
      <nav className="hidden md:flex md:grow">
        {/* Desktop menu links */}
        <ul className="flex grow justify-center flex-wrap items-center">
          <li>
            <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href={`/${AppConfig.paths.extensions}`}>Extensions</Link>
          </li>
          <li>
            <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href={`/${AppConfig.paths.videoPosts}`}>Videos</Link>
          </li>
          {/* 1st level: hover */}
          <Dropdown title="Documentation">
            {/* 2nd level: hover */}
            <li>
              <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href={`/${AppConfig.paths.docs.guides}`}>Guides</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href={`/${AppConfig.paths.docs.extensionsReference}`}>Extensions reference</Link>
            </li>
          </Dropdown>
        </ul>
      </nav>
    </Header>
  )
}
