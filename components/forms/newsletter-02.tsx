import AppConfig from '@/app/app.config'

export default function NewsletterForm() {
  return (
    <form className="inline-flex max-w-sm w-full mt-8" action={AppConfig.services.newsletter.formActionURL} method="post" target="_blank">
      <div className="w-full flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-none">
        <input id={AppConfig.services.newsletter.emailFieldName} name={AppConfig.services.newsletter.emailFieldName} type="email" className="form-input py-1.5 w-full mb-3 sm:mb-0 sm:mr-2 rounded-full bg-slate-800/30 border-slate-700" placeholder="Your email" aria-label="Your email" required />
          <button className="btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white transition duration-150 ease-in-out group" type="submit">Subscribe <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></button>
      </div>
    </form>
  )
}
