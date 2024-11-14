import Link from 'next/link'
import AppConfig from '@/app/app.config'

export default function TryPROPluginButton({
  btnClassName = "btn-sm",
  styleClassname = "text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white transition duration-150 ease-in-out group w-full",
}: {
  btnClassName?: string
  styleClassname?: string,
}) {
  return (
    <Link className={`${btnClassName} ${styleClassname}`} href={AppConfig.urls.instawpSandboxDemo} target='_blank'>
      <span className="relative inline-flex items-center">
        Try for free <span className="tracking-normal text-slate-100 dark:text-slate-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
      </span>
    </Link>
  )
}
