import Link from 'next/link'
import AppConfig from '@/app/app.config'

export default function DownloadFreePluginButton() {
  return (
    <Link className="btn-sm font-medium text-sm text-white hover:text-purple-100 dark:text-slate-300 dark:hover:text-white whitespace-nowrap transition duration-150 ease-in-out" href={AppConfig.urls.wpDownload}>Download free</Link>
  )
}
