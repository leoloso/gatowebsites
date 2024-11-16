import Link from 'next/link'
import AppConfig from '@/app/app.config'
import TryPROPluginButton from '@gato/components/try-pro-plugin-button'

export default function HeaderMobileMenu() {
  return (
    <ul className="border border-transparent [background:linear-gradient(theme(colors.slate.100),_theme(colors.slate.100))_padding-box,_conic-gradient(theme(colors.slate.500),_theme(colors.slate.300)_25%,_theme(colors.slate.300)_75%,_theme(colors.slate.500)_100%)_border-box] dark:[background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] rounded-lg px-4 py-1.5">
      <li>
        <Link className="flex font-medium text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white py-1.5" href="/pricing">Pricing</Link>
      </li>
      {/* <li>
        <Link className="flex font-medium text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white py-1.5" href={`/${AppConfig.paths.features}`}>Features</Link>
      </li> */}
      <li>
        <Link className="flex font-medium text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white py-1.5" href={`/${AppConfig.paths.extensions}`}>Extensions</Link>
      </li>
      {/* <li>
        <Link className="flex font-medium text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white py-1.5" href={`/${AppConfig.paths.demoPosts}`}>Demos</Link>
      </li> */}
      <li className="py-2 my-2 border-t border-b border-slate-300 dark:border-gray-700">
        <span className="flex font-medium text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white py-1.5 pointer-events-none">Documentation</span>
        <ul className="pl-4">
          <li>
            <Link className="flex font-medium text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white py-1.5" href={`/${AppConfig.paths.docs.guides}`}>Guides</Link>
          </li>
          <li>
            <Link className="flex font-medium text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white py-1.5" href={`/${AppConfig.paths.docs.extensionsReference}`}>Extensions reference</Link>
          </li>
          <li>
            <Link className="flex font-medium text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white py-1.5" href={`/${AppConfig.paths.docs.queryLibrary}`}>Queries library</Link>
          </li>
          <li>
            <Link className="flex font-medium text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white py-1.5" href={`/${AppConfig.paths.docs.tutorial}`}>Schema tutorial</Link>
          </li>
        </ul>
      </li>
      <li className="py-1">
        <TryPROPluginButton btnClassName="btn" />
      </li>
    </ul>
  )
}
