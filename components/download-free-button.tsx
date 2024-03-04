import Link from 'next/link'
import AppConfig from '@/app/app.config'

export default function DownloadFreePluginButton({
  btnClassName = "btn-sm",
  variation = 1,
}: {
  btnClassName?: string
  variation?: number,
}) {
  return (
    <Link className={`${btnClassName} ${variation === 2 ? 'text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white' : 'text-white hover:text-gray-100 dark:text-slate-300 dark:hover:text-white [background:linear-gradient(theme(colors.slate.500),_theme(colors.slate.500))_padding-box,_conic-gradient(theme(colors.slate.100),_theme(colors.slate.400)_25%,_theme(colors.slate.400)_75%,_theme(colors.slate.100)_100%)_border-box] dark:[background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none'} transition duration-150 ease-in-out w-full group`} href={AppConfig.urls.wpDownload}>
      <span className="relative inline-flex items-center">
        Download free <span className="tracking-normal text-slate-100 dark:text-slate-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
      </span>
    </Link>
  )
}
