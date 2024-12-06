import StunningBackground from 'gatoapp/components/stunning-background'
import PageHeader from 'gatoapp/components/page-header'
import PluginDocList from './plugin-doc-list'
import { createSEOPageTitle } from '@/utils/content/metadata'

const pageTitle = 'Documentation'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'Browse the documentation for all plugins by Gato Plugins',
}

export default function DocumentationPage() {

  return (
    <section className="relative">

      <StunningBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">

          {/* Section header */}
          <PageHeader
            leading='Gato Plugins'
            title='Documentation'
            description='Browse the docs for the plugins by Gato Plugins'
          />

          <PluginDocList />

        </div>
      </div>

    </section>
  )
}
