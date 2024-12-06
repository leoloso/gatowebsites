import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAppProvider } from 'gatoapp/app/(docs)/app-provider'

interface SidebarLinkProps {
  children: React.ReactNode
  href: string
}

export default function SidebarLink({
  children,
  href,
}: SidebarLinkProps) {

  const pathname = usePathname()
  const { setSidebarOpen } = useAppProvider()  
  
  return (
    <Link className={`flex items-center space-x-3 font-medium ${pathname === href ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700 dark:text-slate-200 dark:hover:text-slate-400'}`} href={href} onClick={() => setSidebarOpen(false)}>
      {children}
    </Link>
  )
}
