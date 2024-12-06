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
      className="mt-8 flex flex-col items-center"
      onSubmit={(e) => {
        e.preventDefault();
        handleFormSubmit(formURL, e.target as HTMLFormElement, setStatus, setError)
      }}
      // action={AppConfig.services.newsletter.formActionURL}
      // method="post"
      // target="_blank"
    >
      <div className="inline-flex max-w-sm w-full">
        <div className="w-full flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-none">
          <input
            id={AppConfig.services.newsletter.emailFieldName}
            name={AppConfig.services.newsletter.emailFieldName}
            type="email"
            className="form-input py-1.5 w-full mb-3 sm:mb-0 sm:mr-2 rounded-full bg-blue-400/30 border-blue-500 dark:bg-slate-800/30 dark:border-slate-700 placeholder-blue-200 dark:placeholder-slate-500 text-white dark:text-slate-100"
            placeholder="Your email…"
            aria-label="Your email…"
            required
            readOnly={!isFormEnabled}
          />
          <button
            className={clsx("btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white transition duration-150 ease-in-out group", !isFormEnabled && 'pointer-events-none')}
            type="submit"
            disabled={!isFormEnabled}
          >
            Subscribe <span className="tracking-normal text-blue-500 dark:text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
          </button>
        </div>
      </div>
      {status === 'success' && (
        <div className="mt-3 max-w-sm">
          <Alert type='success'>
            You have been successfully joined our newsletter 🙏
          </Alert>
        </div>
      )}
      {status === 'error' && (
        <div className="mt-3 max-w-sm">
          <Alert type='error'>
            {error}
          </Alert>
        </div>
      )}
    </form>
  )
}
