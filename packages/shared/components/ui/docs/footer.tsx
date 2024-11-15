import FooterLogo from '@gato/components/ui/docs/footer-logo'
import FooterMenu from '../footer-menu'
import AppConfig from '@gato/app/app.config'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 pt-8 dark:border-slate-800">
      <div className="grid sm:grid-cols-8 gap-8 py-8 md:py-12">
        <FooterMenu columnClassname="col-span-4 lg:col-span-2" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="mb-4 md:mb-0">
          <div className="shrink-0 flex flex-col md:flex-row items-center">
            {/* Logo */}
            <FooterLogo />
            <div className="text-sm text-slate-500 ml-4">
              Copyright © {AppConfig.meta.name}<span className="md:hidden lg:inline">. All rights reserved.</span>
            </div>
          </div>
        </div>
        {/* Social links */}
        {/* <ul className="inline-flex space-x-2">
          <li>
            <a
              className="flex justify-center items-center text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"
              href={AppConfig.urls.githubRepo}
              aria-label="GitHub"
              target="_blank"
            >
              <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
              </svg>
            </a>
          </li>
        </ul> */}
      </div>
    </footer>
  )
}
