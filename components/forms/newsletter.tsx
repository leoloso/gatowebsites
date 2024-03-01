import AppConfig from '@/app/app.config'

export default function NewsletterForm() {
  return (
    <form className="w-full lg:w-auto" action={AppConfig.services.newsletter.formActionURL} method="post" target="_blank">
      <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
        <input id={AppConfig.services.newsletter.emailFieldName} name={AppConfig.services.newsletter.emailFieldName} type="email" className="form-input w-full appearance-none bg-purple-800 border border-purple-700 focus:border-purple-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-purple-500" placeholder="Your email…" aria-label="Your email…" required />
        <button className="btn text-white bg-blue-600 hover:bg-blue-700 shadow">Subscribe</button>
      </div>
      {/* Success message */}
      {/* <p className="text-sm text-purple-400 mt-3">Thanks for subscribing!</p> */}
      <p className="text-sm text-purple-400 mt-3">No spam. You can unsubscribe at any time.</p>
    </form>
  )
}
