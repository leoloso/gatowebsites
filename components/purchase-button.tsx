import Link from 'next/link'

export default function PurchaseButton() {
  return (
    <Link className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.gray.900),_theme(colors.gray.900))_padding-box,_conic-gradient(theme(colors.gray.400),_theme(colors.gray.700)_25%,_theme(colors.gray.700)_75%,_theme(colors.gray.400)_100%)_border-box] dark:[background:linear-gradient(theme(colors.purple.900),_theme(colors.purple.900))_padding-box,_conic-gradient(theme(colors.purple.400),_theme(colors.purple.700)_25%,_theme(colors.purple.700)_75%,_theme(colors.purple.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none" href="/signup">
      <span className="relative inline-flex items-center">
        Purchase Gato GraphQL PRO <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
      </span>
    </Link>
  )
}
