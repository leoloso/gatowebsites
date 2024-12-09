'use client';

import { useState } from 'react';
import Alert from '../mdx/components/alert';
import clsx from 'clsx';
import { handleFormSubmit, canSubmitForm, FormStatus } from './form-handler';
import { useAppConfigProvider } from 'gatoapp/app/appconfig-provider'

export default function NewsletterForm() {
  const { config: AppConfig } = useAppConfigProvider()
  const formURL = AppConfig.services.newsletter.formActionURL

  const [status, setStatus] = useState<FormStatus>('pending');
  const [error, setError] = useState<string|null>(null);
  const isFormEnabled = canSubmitForm(status)

  return (
    <form
      className="w-full lg:w-auto"
      onSubmit={(e) => {
        e.preventDefault();
        handleFormSubmit(formURL, e.target as HTMLFormElement, setStatus, setError)
      }}
      // action={AppConfig.services.newsletter.formActionURL}
      // method="post"
      // target="_blank"
    >
      <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
        <input
          id={AppConfig.services.newsletter.emailFieldName}
          name={AppConfig.services.newsletter.emailFieldName}
          type="email"
          className="form-input w-full appearance-none bg-slate-800 dark:bg-purple-800 border border-slate-700 dark:border-purple-700 focus:border-blue-600 dark:focus:border-purple-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-slate-200 dark:placeholder-purple-500"
          placeholder="Your email…"
          aria-label="Your email…"
          required
          readOnly={!isFormEnabled}
        />
        <button
          className={clsx("btn text-white bg-blue-700 dark:bg-blue-600 shadow", isFormEnabled && 'hover:bg-blue-600 dark:hover:bg-blue-700')}
          type="submit"
          disabled={!isFormEnabled}
        >
          Subscribe
        </button>
      </div>
      {status === 'success' && (
        <div className="mt-3">
          <Alert type='success'>
            You have been successfully joined our newsletter 🙏
          </Alert>
        </div>
      )}
      {status === 'error' && (
        <div className="mt-3">
          <Alert type='error'>
            {error}
          </Alert>
        </div>
      )}
      {/* Success message */}
      {/* <p className="text-sm text-purple-400 mt-3">Thanks for subscribing!</p> */}
      <p className="text-sm text-slate-200 dark:text-purple-400 mt-3">No spam. You can unsubscribe at any time.</p>
    </form>
  )
}
