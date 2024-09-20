import Link from 'next/link'
import AppConfig from '@/app/app.config'
import { getShopAnchorClassname, getShopURL } from '@/utils/shop/shop'

export default function PurchasePROPluginButton({
  btnClassName = "btn-sm",
}: {
  btnClassName?: string
}) {
  return (
    <>
      <Link className={`${btnClassName} text-white hover:text-purple-100 dark:text-slate-300 dark:hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.blue.500),_theme(colors.blue.500))_padding-box,_conic-gradient(theme(colors.blue.100),_theme(colors.blue.400)_25%,_theme(colors.blue.400)_75%,_theme(colors.blue.100)_100%)_border-box] dark:[background:linear-gradient(theme(colors.purple.900),_theme(colors.purple.900))_padding-box,_conic-gradient(theme(colors.purple.400),_theme(colors.purple.700)_25%,_theme(colors.purple.700)_75%,_theme(colors.purple.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none ${getShopAnchorClassname()}`} href={getShopURL(AppConfig.urls.shopPurchase)}>
        <span className="relative inline-flex items-center">
          Purchase extensions <span className="tracking-normal text-purple-100 dark:text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
        </span>
      </Link>
    </>
  )
}
