import ContactForm from "@/components/forms/contact"
import PageHeader from "@/components/page-header"
import ContactPageSchemaJsonLdScript from "@/components/schema/contactpage-schema-json-ld"
import StunningBackground from "@/components/stunning-background"
import { createSEOPageTitle } from '@/utils/content/metadata'

export const metadata = {
  title: createSEOPageTitle('Contact us'),
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
              leading='Contact us'
              title="How can we help you?"
              description="Tell us your needs, and we'll contact you shortly."
            />

            <ContactForm />

          </div>
        </div>
      </section>
    </>
  )
}