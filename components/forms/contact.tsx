'use client';

import { useState } from 'react';
import Alert from '../mdx/components/alert';

export default function ContactForm() {
  const [status, setStatus] = useState<string|null>(null);
  const [error, setError] = useState<string|null>(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      setStatus('pending');
      setError(null);
      const myForm = event.target;
      const formData = new FormData(myForm);
      const res = await fetch('/__forms/contact.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      if (res.status === 200) {
        setStatus('ok');
      } else {
        setStatus('error');
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus('error');
      setError(`${e}`);
    }
  };

  const canSubmitForm = status === 'pending' || status === 'success'
  
  return (
    <form
      className="max-w-xl mx-auto"
      name="contact"
      onSubmit={handleFormSubmit}
      // netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="flex flex-wrap -mx-3 mb-8">
        <div className="w-full px-3">
          <div className="text-slate-300">
            Send us an email to <a className="font-medium text-purple-600 dark:text-purple-300 no-underline hover:no-underline hover:text-purple-500 hover:dark:text-purple-400" href="mailto:info@gatographql.com">info@gatographql.com</a>, or fill the form below.
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
          <input id="name" name="name" type="text" className="form-input w-full text-gray-300" placeholder="Enter your name" required />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
          <input id="email" name="email" type="email" className="form-input w-full text-gray-300" placeholder="Enter your email address" required />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 font-medium mb-1" htmlFor="subject">Subject <span className="text-red-600">*</span></label>
          <input id="subject" name="subject" type="text" className="form-input w-full text-gray-300" placeholder="How can we help you?" required />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 font-medium mb-1" htmlFor="topic">Topic</label>
          <select id="topic" name="topic" className="form-select w-full text-gray-300">
            <option>General</option>
            <option>Sales</option>
            <option>Affiliate Program</option>
            <option>Developer Partnership Program</option>
            <option>Say hi 👋</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-300 font-medium mb-1" htmlFor="message">Message <span className="text-red-600">*</span></label>
          <textarea id="message" name="message" rows={4} className="form-textarea w-full text-gray-300" placeholder="Write your message" required></textarea>
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
            type="submit"
            disabled={canSubmitForm}
          >
            Send
          </button>
        </div>
      </div>
      {status === 'success' && (
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="w-full px-3">        
            <Alert type='success'>
              <strong>Message submitted!</strong> We will come back to you soon.
            </Alert>
          </div>
        </div>
      )}
      {status === 'error' && (
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="w-full px-3">        
            <Alert type='error'>
              {error}
            </Alert>
          </div>
        </div>
      )}
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <div className="text-sm text-gray-600 mt-4">
            By clicking "send" you consent to allow Gato GraphQL to store and process the personal information submitted above.
            {/* By clicking "send" you consent to allow Gato GraphQL to store and process the personal information submitted above and agree to our <a className="underline" href="#0">terms and conditions</a> as well as our <a className="underline" href="#0">Privacy Policy</a>. */}
          </div>
        </div>
      </div>
      {/* <div className="hidden flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </div>
      </div> */}
    </form>
  )
}
