import Header from '@/components/ui/header'
import Search from '@/components/ui/search'
import ThemeToggle from '@/components/ui/theme-toggle'

export default function DocsHeader() {
  return (
    <Header useLightDarkMode={true}>
      <nav>
        {/* Desktop menu links */}
        <ul className="flex grow justify-center flex-wrap items-center">
          <li>
            <Search />
          </li>
          {/* Lights switch */}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </Header>
  )
}
