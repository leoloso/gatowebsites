import SupportForm from "gatoapp/components/forms/support"
import PageHeader from "gatoapp/components/page-header"
import StunningBackground from "gatoapp/components/stunning-background"
import { createSEOPageTitle } from '@/utils/content/metadata'

export const metadata = {
  title: createSEOPageTitle('Support'),
  description: "Send us your request, and we'll work on it",
}

export default function Support() {
  return (
    <section className="relative">

      <StunningBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <PageHeader
            leading='Support for our customers'
            title="Request for Support"
            description="Send us your request, and we'll work on it."
          />

          <SupportForm />

        </div>
      </div>
    </section>
  )
}