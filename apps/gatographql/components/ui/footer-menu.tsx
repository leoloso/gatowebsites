import { allComparisonPosts } from '@/.contentlayer/generated'
import AppConfig from '@/app/app.config'
import { getShopAnchorClassname, getShopURL } from '@gato/utils/shop/shop'
import {
  getComparisonPostURLPath,
} from '@/utils/content/application-urls'

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
        <h6 className="text-sm text-slate-50 font-medium mb-2">Product</h6>
        <ul className="text-sm space-y-2">
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="/pricing">Pricing</a>
          </li>
          {/* <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={`/${AppConfig.paths.highlights}`}>Highlights</a>
          </li> */}
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={`/${AppConfig.paths.features}`}>Features</a>
          </li>
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={`/${AppConfig.paths.extensions}`}>Extensions</a>
          </li>
          {/* <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={`/${AppConfig.paths.demoPosts}`}>Demos</a>
          </li> */}
          {/* <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="/changelog">Changelog</a>
          </li> */}
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={AppConfig.urls.instawpSandboxDemo} target="_blank">Try out</a>
          </li>
          {/* <li>
            <a className={`text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out ${getShopAnchorClassname()}`} href={getShopURL(AppConfig.urls.shopProducts.bundles.allExtensions.defaultTier)}>Purchase</a>
          </li> */}
        </ul>
        <h6 className="text-sm text-slate-50 font-medium mb-2 mt-8 lg:mt-6">Documentation</h6>
        <ul className="text-sm space-y-2">
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={`/${AppConfig.paths.docs.guides}`}>Guides</a>
          </li>
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={`/${AppConfig.paths.docs.extensionsReference}`}>Extensions reference</a>
          </li>
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={`/${AppConfig.paths.docs.queryLibrary}`}>Queries library</a>
          </li>
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={`/${AppConfig.paths.docs.tutorial}`}>Schema tutorial</a>
          </li>
        </ul>
        <h6 className="text-sm text-slate-50 font-medium mb-2 mt-8 lg:mt-6">Comparisons</h6>
        <ul className="text-sm space-y-2">
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="/comparisons">Overview</a>
          </li>
          {allComparisonPosts.map((comparisonPost, index) => (
            <li key={index}>
              <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={getComparisonPostURLPath(comparisonPost)}>{comparisonPost.title}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* 3rd block */}
      <div className={columnClassname}>
        <h6 className="text-sm text-slate-50 font-medium mb-2">GitHub</h6>
        <ul className="text-sm space-y-2">
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={AppConfig.urls.githubRepo} target="_blank">Gato GraphQL open source code</a>
          </li>
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={AppConfig.urls.githubExtensionStarter} target="_blank">Gato GraphQL extension starter</a>
          </li>
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={AppConfig.urls.nextjsWordPressStarter} target="_blank">Next.js + Gato GraphQL WordPress starter</a>
          </li>
        </ul>
        <h6 className="text-sm text-slate-50 font-medium mb-2 mt-8 lg:mt-6">WordPress.org</h6>
        <ul className="text-sm space-y-2">
          {/* <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={AppConfig.urls.wpDownload}>Download free plugin</a>
          </li> */}
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={AppConfig.urls.wpDirectory} target="_blank">Gato GraphQL plugin</a>
          </li>
        </ul>
        <h6 className="text-sm text-slate-50 font-medium mb-2 mt-8 lg:mt-6">Resources</h6>
        <ul className="text-sm space-y-2">
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={`/${AppConfig.paths.docs.architecture}`}>Architecture docs</a>
          </li>
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="/specials/wpbuilds">WPBuilds series</a>
          </li>
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="https://www.youtube.com/@GatoGraphQL" target="_blank">@GatoGraphQL YouTube channel</a>
          </li>
        </ul>
      </div>

      {/* 4th block */}
      <div className={columnClassname}>
        <h6 className="text-sm text-slate-50 font-medium mb-2">Company</h6>
        <ul className="text-sm space-y-2">
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={`/${AppConfig.paths.blog}`}>Blog</a>
          </li>
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="/about">About us</a>
          </li>
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="/contact">Contact us</a>
          </li>
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="/newsletter">Newsletter</a>
          </li>
          {/* @todo Re-enable when adding Customers to the site */}
          {/* <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="/customers">Customers</a>
          </li> */}
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href={AppConfig.urls.shopAffiliateProgram} target="_blank">Affiliate Program</a>
          </li>
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="/developers">Developer Partnership Program</a>
          </li>
        </ul>
      </div>

      {/* 5th block */}
      <div className={columnClassname}>
        <h6 className="text-sm text-slate-50 font-medium mb-2">Support</h6>
        <ul className="text-sm space-y-2">
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="/shop/my-orders">My orders</a>
          </li>
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="/shop/customer-portal">Customer portal</a>
          </li>
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="/support">Support request</a>
          </li>
          <li>
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition duration-150 ease-in-out" href="/refund-policy">Refund policy</a>
          </li>
        </ul>
      </div>
    </>
  )
}
