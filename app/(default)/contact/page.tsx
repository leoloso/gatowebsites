import ContactForm from "@/components/forms/contact"
import PageHeader from "@/components/page-header"
import StunningBackground from "@/components/stunning-background"
import Cta from '@/components/cta-03'

export const metadata = {
  title: 'Contact us - Open PRO',
  description: 'Page description',
}

export default function Contact() {
  return (
    <>
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
      <Cta />
    </>
  )
}