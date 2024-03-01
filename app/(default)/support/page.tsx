import SupportForm from "@/components/forms/contact"
import StunningBackground from "@/components/stunning-background"

export const metadata = {
  title: 'Support - Open PRO',
  description: 'Page description',
}

export default function Contact() {
  return (
    <section className="relative">

      <StunningBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">Support</h1>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Send us your request, and we'll work on it.</p>
          </div>

          <SupportForm />

        </div>
      </div>
    </section>
  )
}