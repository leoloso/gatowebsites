export default function RefundForm() {
  return (
    <form
      className="max-w-xl mx-auto mt-10"
      name="refund"
      method="POST"
      data-netlify="true"
      action="/refund-policy/success"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="refund" />
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-input w-full text-gray-300"
            placeholder="Enter your name"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-input w-full text-gray-300"
            placeholder="Enter your email address"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 font-medium mb-1" htmlFor="order">Order number <span className="text-red-600">*</span></label>
          <input
            id="order"
            name="order"
            type="text"
            className="form-input w-full text-gray-300"
            placeholder="Enter the purchase order number"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 font-medium mb-1" htmlFor="message">Reasons for refund <span className="text-red-600">*</span></label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="form-textarea w-full text-gray-300"
            placeholder="Write detailed reasons for the refund"
            required
          ></textarea>
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
          <button
            className="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
          >
            Send
          </button>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <div className="text-sm text-gray-600 mt-4">
            By clicking "send" you consent to allow Gato GraphQL to store and process the personal information submitted above.
            {/* By clicking "send" you consent to allow Gato GraphQL to store and process the personal information submitted above and agree to our <a className="underline" href="#0">terms and conditions</a> as well as our <a className="underline" href="#0">Privacy Policy</a>. */}
          </div>
        </div>
      </div>
      <div className="hidden flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </div>
      </div>
    </form>
  )
}
