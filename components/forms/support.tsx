export default function SupportForm() {
  return (
    <form className="max-w-xl mx-auto">
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
          <label className="block text-gray-300 font-medium mb-1" htmlFor="first-name">First Name <span className="text-red-600">*</span></label>
          <input id="first-name" type="text" className="form-input w-full text-gray-300" placeholder="Enter your first name" required />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block text-gray-300 font-medium mb-1" htmlFor="last-name">Last Name</label>
          <input id="last-name" type="text" className="form-input w-full text-gray-300" placeholder="Enter your last name" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
          <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="Enter your email address" required />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 font-medium mb-1" htmlFor="subject">Subject <span className="text-red-600">*</span></label>
          <input id="subject" type="text" className="form-input w-full text-gray-300" placeholder="How can we help you?" required />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 font-medium mb-1" htmlFor="topic">Topic</label>
          <select id="topic" className="form-select w-full text-gray-300">
            <option>General</option>
            <option>Sales</option>
            <option>Affiliate program</option>
            <option>Developer partnership program</option>
            <option>Say hi 👋</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 font-medium mb-1" htmlFor="message">Message <span className="text-red-600">*</span></label>
          <textarea id="message" rows={4} className="form-textarea w-full text-gray-300" placeholder="Write your message" required></textarea>
        </div>
      </div>
      {/* <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-gray-400 ml-2">I agree to the privacy policy</span>
          </label>
        </div>
      </div> */}
      <div className="flex flex-wrap -mx-3 mt-6">
        <div className="w-full px-3">
          <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Send</button>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <div className="text-sm text-gray-600 mt-4">
            By clicking "send" you consent to allow Gato GraphQL to store and process the personal information submitted above.
            {/* By clicking "send" you consent to allow Simple to store and process the personal information submitted above and agree to our <a className="underline" href="#0">terms and conditions</a> as well as our <a className="underline" href="#0">Privacy Policy</a>. */}
          </div>
        </div>
      </div>
    </form>
  )
}
