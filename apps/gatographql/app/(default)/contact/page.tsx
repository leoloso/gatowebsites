import ContactForm from "@gato/components/forms/contact"
import PageHeader from "@gato/components/page-header"
import ContactPageSchemaJsonLdScript from "@gato/components/schema/contactpage-schema-json-ld"
import StunningBackground from "@gato/components/stunning-background"
import { createSEOPageTitle } from '@/utils/content/metadata'

const pageTitle = 'Contact us'
export const metadata = {
  title: createSEOPageTitle(pageTitle),
  description: 'How can we help you?',
}

export default function Contact() {
  return (
    <>
      <ContactPageSchemaJsonLdScript
        headline={metadata.title}
        description={metadata.description}
      />

      <section className="relative">
        <StunningBackground />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <PageHeader
              leading="How can we help you?"
              title='Contact us'
              description="Send us a message, and we'll contact you shortly."
            />

            <ContactForm
              options={[
                'General',
                'Request extension',
                'Sales',
                'Affiliate Program',
                'Developer Partnership Program',
                'Say hi 👋',
              ]}
            />

          </div>
        </div>
      </section>
    </>
  )
}