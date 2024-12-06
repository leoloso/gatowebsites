'use client';

import { useState } from 'react';
import Alert from '../mdx/components/alert';
import clsx from 'clsx';
import { handleFormSubmit, canSubmitForm, FormStatus } from './form-handler';
import { useAppConfigProvider } from 'gatoapp/app/appconfig-provider'

export default function RefundForm() {
  const formURL = '/__forms/refund.html'

  const [status, setStatus] = useState<FormStatus>('pending');
  const [error, setError] = useState<string|null>(null);
  const isFormEnabled = canSubmitForm(status)
  const { config: AppConfig } = useAppConfigProvider()

  return (
    <form
      name="refund"
      className="max-w-xl mx-auto mt-10"
      onSubmit={(e) => {
        e.preventDefault();
        handleFormSubmit(formURL, e.target as HTMLFormElement, setStatus, setError)
      }}
    >
      <input type="hidden" name="form-name" value="refund" />
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-600 dark:text-gray-300 font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-input w-full text-gray-600 dark:text-gray-300"
            placeholder="Enter your name"
            required
            readOnly={!isFormEnabled}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-600 dark:text-gray-300 font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-input w-full text-gray-600 dark:text-gray-300"
            placeholder="Enter your email address"
            required
            readOnly={!isFormEnabled}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-600 dark:text-gray-300 font-medium mb-1" htmlFor="order">Order number <span className="text-red-600">*</span></label>
          <input
            id="order"
            name="order"
            type="text"
            className="form-input w-full text-gray-600 dark:text-gray-300"
            placeholder="Enter the purchase order number"
            required
            readOnly={!isFormEnabled}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full px-3">
          <label className="block text-gray-600 dark:text-gray-300 font-medium mb-1" htmlFor="message">Reasons for refund <span className="text-red-600">*</span></label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="form-textarea w-full text-gray-600 dark:text-gray-300"
            placeholder="Write detailed reasons for the refund"
            required
            readOnly={!isFormEnabled}
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
            className={clsx("btn text-white bg-blue-600 dark:bg-purple-600 w-full", isFormEnabled && 'hover:bg-blue-700 dark:bg-purple-700')}
            type="submit"
            disabled={!isFormEnabled}
          >
            Send
          </button>
        </div>
      </div>
      {status === 'success' && (
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="w-full px-3">        
            <Alert type='success'>
              <strong>We have received your submission.</strong> We will contact you soon.
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
          <div className="text-sm text-gray-500 dark:text-gray-600 mt-4">
            By clicking "send" you consent to allow {AppConfig.meta.name} to store and process the personal information submitted above.
            {/* By clicking "send" you consent to allow {AppConfig.meta.name} to store and process the personal information submitted above and agree to our <a className="underline" href="#0">terms and conditions</a> as well as our <a className="underline" href="#0">Privacy Policy</a>. */}
          </div>
        </div>
      </div>
    </form>
  )
}
