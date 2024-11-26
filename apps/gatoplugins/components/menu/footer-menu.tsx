import { allPlugins } from '@/.contentlayer/generated'
import AppConfig from '@/app/app.config'

export default function FooterMenu({
  children,
  columnClassname = "sm:col-span-6 md:col-span-3 lg:col-span-2"
}: {
  children?: React.ReactNode,
  columnClassname?: string
}) {
  {/* Blocks */}
  return (
    <>
      {/* 1st block? */}
      {children}

      {/* 2nd block */}
      <div className={columnClassname}>
        <h6 className="text-sm text-white font-medium mb-2">Plugins</h6>
        <ul className="text-sm space-y-2">
          <li>
            <a className="text-fuchsia-100 dark:text-slate-400 hover:text-amber-200 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={`/${AppConfig.paths.plugins}`}>Overview</a>
          </li>
          {allPlugins.map((plugin, index) => (
            <li key={index}>
              <a className="text-fuchsia-100 dark:text-slate-400 hover:text-amber-200 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={plugin.urlPath}>{plugin.title}</a>
            </li>
          ))}
          {/* <li>
            <a className="text-fuchsia-100 dark:text-slate-400 hover:text-amber-200 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={`/${AppConfig.paths.demoPosts}`}>Demos</a>
          </li> */}
          {/* <li>
            <a className="text-fuchsia-100 dark:text-slate-400 hover:text-amber-200 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="/changelog">Changelog</a>
          </li> */}
          {/* <li>
            <a className="text-fuchsia-100 dark:text-slate-400 hover:text-amber-200 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={AppConfig.urls.instawpSandboxDemo} target="_blank">Try out</a>
          </li> */}
        </ul>
      </div>

      {/* 3rd block */}
      <div className={columnClassname}>
        <h6 className="text-sm text-white font-medium mb-2">Documentation</h6>
        <ul className="text-sm space-y-2">
          <li>
            <a className="text-fuchsia-100 dark:text-slate-400 hover:text-amber-200 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={`/${AppConfig.paths.docs}`}>Overview</a>
          </li>
          {allPlugins.map((plugin, index) => (
            <li key={index}>
              <a className="text-fuchsia-100 dark:text-slate-400 hover:text-amber-200 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={plugin.docUrlPath}>{plugin.title}</a>
            </li>
          ))}
        </ul>
        <h6 className="text-sm text-white font-medium mb-2 mt-8 lg:mt-6">Resources</h6>
        <ul className="text-sm space-y-2">
          <li>
            <a className="text-fuchsia-100 dark:text-slate-400 hover:text-amber-200 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={AppConfig.urls.gatoGraphQL} target="_blank">Gato GraphQL</a>
          </li>
          <li>
            <a className="text-fuchsia-100 dark:text-slate-400 hover:text-amber-200 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="https://www.youtube.com/@GatoGraphQL" target="_blank">@GatoGraphQL YouTube channel</a>
          </li>
        </ul>
      </div>

      {/* 4th block */}
      <div className={columnClassname}>
        <h6 className="text-sm text-white font-medium mb-2">Company</h6>
        <ul className="text-sm space-y-2">
          <li>
            <a className="text-fuchsia-100 dark:text-slate-400 hover:text-amber-200 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={`/${AppConfig.paths.blog}`}>Blog</a>
          </li>
          <li>
            <a className="text-fuchsia-100 dark:text-slate-400 hover:text-amber-200 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="/about">About us</a>
          </li>
          <li>
            <a className="text-fuchsia-100 dark:text-slate-400 hover:text-amber-200 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="/contact">Contact us</a>
          </li>
          <li>
            <a className="text-fuchsia-100 dark:text-slate-400 hover:text-amber-200 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="/newsletter">Newsletter</a>
          </li>
          <li>
            <a className="text-fuchsia-100 dark:text-slate-400 hover:text-amber-200 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={AppConfig.urls.shopAffiliateProgram} target="_blank">Affiliate Program</a>
          </li>
        </ul>
      </div>

      {/* 5th block */}
      <div className={columnClassname}>
        <h6 className="text-sm text-white font-medium mb-2">Support</h6>
        <ul className="text-sm space-y-2">
          <li>
            <a className="text-fuchsia-100 dark:text-slate-400 hover:text-amber-200 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="/shop/my-orders">My orders</a>
          </li>
          <li>
            <a className="text-fuchsia-100 dark:text-slate-400 hover:text-amber-200 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="/shop/customer-portal">Customer portal</a>
          </li>
          <li>
            <a className="text-fuchsia-100 dark:text-slate-400 hover:text-amber-200 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="/support">Support request</a>
          </li>
          <li>
            <a className="text-fuchsia-100 dark:text-slate-400 hover:text-amber-200 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="/refund-policy">Refund policy</a>
          </li>
        </ul>
      </div>
    </>
  )
}
