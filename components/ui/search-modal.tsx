'use client'

import AppConfig from '@/app/app.config'
import Link from 'next/link'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import AppSettings from '@/app/app.settings'

// import algoliasearch and InstantSearch
import algoliasearch from "algoliasearch/lite"
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import {
  SearchBox,
  useHits,
  PoweredBy,
} from 'react-instantsearch';
import type { Hit } from 'instantsearch.js';

import { ALGOLIA_API_CREDENTIALS } from '@/data/env/algolia'
import { SearchObject } from '../search/algolia'
import { useState } from 'react'

function CustomHits({...props}) {
  const { hits, results } = useHits<SearchObject>(props);
  const showPopular = true
  // Group all hits under their section
  let sectionHits : { [key: string]: Hit<SearchObject>[] } = {}
  hits.forEach((hit) => {
    sectionHits[hit.section] = sectionHits[hit.section] || [];
    sectionHits[hit.section].push(hit);
  })
  return (
    <div className="py-4 px-2 space-y-4">
      { results?.query.trim() !== '' && hits.length === 0 && (
        <>
          {/* No results */}
          <div>
            <ul>
              <li className='flex items-center px-2 py-1 leading-6 text-sm text-slate-800 rounded dark:text-slate-200 focus-within:bg-slate-100 dark:focus-within:bg-slate-700 outline-none cursor-default'>
                <span>No results found</span>
              </li>
            </ul>
          </div>
        </>
      )}
      { results?.query.trim() !== '' && hits.length !== 0 && (
        <>
          {/* Results */}
          <div>
            {Object.keys(sectionHits).map((section, index) => (
              <div key={index}>
                <div className={`font-medium text-slate-500 px-2 dark:text-slate-400 ${index > 0 ? 'mt-4' : ''}`}>{section}</div>
                <ul role='listbox'>
                  {sectionHits[section].map((hit, index) => (                
                    <li key={index} role='option'>
                      <CustomHit hit={hit} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
      { (!results || results.query.trim() === '') && (
        <>
          {/* Popular */}
          {showPopular && (
            <div>
              <div className="text-sm font-medium text-slate-500 px-2 mb-2 dark:text-slate-400">Popular</div>
              <ul role='listbox'>
                <li role='option'>
                  <HitLink
                    href='/guides/manage/automating-tasks'
                  >
                    <>
                      <svg
                        className="w-3 h-3 fill-slate-400 shrink-0 mr-3 dark:fill-slate-500"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                      </svg>
                      <span>Automation</span>
                    </>
                  </HitLink>
                </li>
                <li role='option'>
                  <HitLink
                    href='/guides/schema/executing-multiple-queries-concurrently'
                  >
                    <>
                      <svg
                        className="w-3 h-3 fill-slate-400 shrink-0 mr-3 dark:fill-slate-500"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                      </svg>
                      <span>Multiple Query Execution</span>
                    </>
                  </HitLink>
                </li>
                <li role='option'>
                  <HitLink
                    href='/guides/augment/oneof-input-object'
                  >
                    <>
                      <svg
                        className="w-3 h-3 fill-slate-400 shrink-0 mr-3 dark:fill-slate-500"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                      </svg>
                      <span>'oneOf' Input Object</span>
                    </>
                  </HitLink>
                </li>
                <li role='option'>
                  <HitLink
                    href='/guides/schema/using-nested-mutations'
                  >
                    <>
                      <svg
                        className="w-3 h-3 fill-slate-400 shrink-0 mr-3 dark:fill-slate-500"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                      </svg>
                      <span>Nested mutations</span>
                    </>
                  </HitLink>
                </li>
                <li role='option'>
                  <HitLink
                    href='/guides/schema/namespacing-the-schema'
                  >
                    <>
                      <svg
                        className="w-3 h-3 fill-slate-400 shrink-0 mr-3 dark:fill-slate-500"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                      </svg>
                      <span>Schema namespacing</span>
                    </>
                  </HitLink>
                </li>
                <li role='option'>
                  <HitLink
                    href='/guides/use/creating-a-persisted-query'
                  >
                    <>
                      <svg
                        className="w-3 h-3 fill-slate-400 shrink-0 mr-3 dark:fill-slate-500"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                      </svg>
                      <span>Persisted queries</span>
                    </>
                  </HitLink>
                </li>
              </ul>
            </div>
          )}
          {/* Actions */}
          <div>
            <div className="text-sm font-medium text-slate-500 px-2 mb-2">Actions</div>
            <ul role='listbox'>
              <li role='option'>
                <HitLink
                  href={AppConfig.urls.instawpSandboxDemo}
                  target='_blank'
                >
                  <svg
                    className="w-3 h-3 fill-teal-500 shrink-0 mr-3"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0Zm0 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                  </svg>
                  <span className="font-medium">Try out Gato GraphQL PRO</span>
                </HitLink>
              </li>
              <li role='option'>
                <HitLink
                  href="/contact"
                >
                  <svg
                    className="w-3 h-3 fill-purple-500 shrink-0 mr-3"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 0C2.691 0 0 2.362 0 5.267c0 2.905 2.691 5.266 6 5.266a6.8 6.8 0 0 0 1.036-.079l2.725 1.485a.5.5 0 0 0 .739-.439V8.711A4.893 4.893 0 0 0 12 5.267C12 2.362 9.309 0 6 0Z" />
                  </svg>
                  <span className="font-medium">Contact us</span>
                </HitLink>
              </li>
              <li role='option'>
                <HitLink
                  href="/support"
                >
                  <svg
                    className="w-3 h-3 fill-blue-600 shrink-0 mr-3"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.854.146a.5.5 0 0 0-.525-.116l-11 4a.5.5 0 0 0-.015.934l4.8 1.921 1.921 4.8A.5.5 0 0 0 7.5 12h.008a.5.5 0 0 0 .462-.329l4-11a.5.5 0 0 0-.116-.525Z" />
                  </svg>
                  <span className="font-medium">Support request</span>
                </HitLink>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

function CustomHit({ hit }: { hit: Hit<SearchObject> }) {
  return (
    <TabbedHitLink
      href={hit.urlPath}
    >
      <>
        <svg className="shrink-0 fill-gray-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
          <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
        </svg>
        <span>
          <span className='text-lg font-bold leading-snug tracking-tight block' dangerouslySetInnerHTML={
            {
              __html: (!Array.isArray(hit._highlightResult?.title) && hit._highlightResult?.title.value) || hit.title
            }
          } />
          <span className='leading-snug tracking-tight block' dangerouslySetInnerHTML={
            {
              __html: (!Array.isArray(hit._highlightResult?.description) && hit._highlightResult?.description.value) || hit.description
            }
          } />
        </span>
      </>
    </TabbedHitLink>
  );
}

function HitLink({ ...props }) {
  return (
    <Link
      className="flex items-center px-2 py-1 leading-6 text-sm text-slate-800 hover:bg-slate-100 rounded dark:text-slate-200 dark:hover:bg-slate-700 focus-within:bg-slate-100 dark:focus-within:bg-slate-700 outline-none"
      href={props.href}
      {...props}
    >
      {props.children}
    </Link>
  );
}

function TabbedHitLink({ ...props }) {
  return (
    <Link
      className="flex items-center px-2 py-4 leading-6 text-sm text-slate-800 hover:bg-slate-100 rounded dark:text-slate-200 dark:hover:bg-slate-700 focus-within:bg-slate-100 dark:focus-within:bg-slate-700 outline-none"
      href={props.href}
      // There's a bug with @headlessui: It only tabs to 2 elements (even if all of them have the `tabIndex` prop set)
      // Workaround hack: when focused increase their tabIndex, so the ones below are then reachable
      // This works on Firefox. Pressing tab does not work on Safari.
      onFocus={(e) => {e.target.tabIndex = (e.target.tabIndex || 1) + 10}}
      tabIndex={10}
      {...props}
    >
      {props.children}
    </Link>
  );
}

// Initialize the Algolia client
const searchClient = algoliasearch(
  ALGOLIA_API_CREDENTIALS.appId,
  ALGOLIA_API_CREDENTIALS.searchAPIKey,
)

interface SearchModalProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void,
  placeholder?: string,
  enableLightDarkThemeModeToggle?: boolean
}

export default function SearchModal({
  isOpen,
  setIsOpen,
  placeholder = "Search in all docs…",
  enableLightDarkThemeModeToggle = false,
}: SearchModalProps) {  
  const [initialSearchQuery, setInitialSearchQuery] = useState<string>('')
  let initialUiState: { [key: string]: { [key: string]: string }} = {}
  initialUiState[ALGOLIA_API_CREDENTIALS.indexName] = {
    query: initialSearchQuery,
  }

  // @see https://www.algolia.com/doc/api-reference/widgets/instantsearch/react/#widget-param-onstatechange
  const onStateChange = ({ uiState, setUiState }: { uiState: any, setUiState: (uiState: any) => void }) => {
    // Custom logic
    const query = uiState[ALGOLIA_API_CREDENTIALS.indexName].query || ''
    setInitialSearchQuery(query)

    setUiState(uiState);
  };
  
  return (
    <Transition appear show={isOpen}>
      <Dialog as="div" onClose={() => setIsOpen(false)}>
        <TransitionChild
          as="div"
          className="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
          enter="transition ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-out duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          aria-hidden="true"
        />
        <TransitionChild
          as="div"
          className={`${AppSettings.enableLightDarkThemeMode && enableLightDarkThemeModeToggle ? '' : 'dark' } fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center px-4 sm:px-6`}
          enter="transition ease-in-out duration-200"
          enterFrom="opacity-0 translate-y-4"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in-out duration-200"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-4"
        >
          <DialogPanel className="bg-white dark:bg-slate-800 overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg">
            <InstantSearchNext
              indexName={ALGOLIA_API_CREDENTIALS.indexName}
              searchClient={searchClient}
              future={{preserveSharedStateOnUnmount: true}}
              initialUiState={initialUiState}
              onStateChange={onStateChange}
            >
              <SearchBox
                placeholder={placeholder}
                autoFocus
                classNames={{
                  form: 'relative flex justify-center border-b border-slate-200 dark:border-slate-700',
                  input: 'text-sm text-slate-700 dark:text-slate-200 w-full bg-white border-0 focus:ring-transparent placeholder-slate-400 appearance-none py-3 pl-2 pr-4 dark:bg-slate-800 dark:placeholder:text-slate-500',
                  loadingIndicator: 'relative top-0 right-0 mt-4',
                  submitIcon: 'w-4 h-4 fill-slate-500 shrink-0 mx-4 dark:fill-slate-400',
                  resetIcon: 'w-4 h-4 fill-slate-500 shrink-0 mx-4 dark:fill-slate-400',
                  loadingIcon: 'w-4 h-4 fill-slate-500 shrink-0 mx-4 dark:fill-slate-400',
                }}
              />
              <CustomHits />
              <PoweredBy
                theme='dark'
                classNames={{
                  root: 'flex justify-center',
                  logo: 'h-4 my-2',
                }}
              />
            </InstantSearchNext>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </Transition>
  )
}
