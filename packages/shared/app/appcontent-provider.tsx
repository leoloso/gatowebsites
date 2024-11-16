'use client'

import React from 'react'
import { createContext, useContext } from 'react'
import { Doc, DocTopic } from '@gato/utils/content/types';

type ContextProps = {
  allDocs: Doc[],
  allDocTopics: DocTopic[],
}

const AppContentContext = createContext<ContextProps>({
  allDocs: [],
  allDocTopics: [],
})

export interface AppContentProviderInterface extends ContextProps {
  children: React.ReactNode,
}

export default function AppContentProvider({
  children,
  allDocs,
  allDocTopics,
}: AppContentProviderInterface) {  
  return (
    <AppContentContext.Provider
      value={{
        allDocs: allDocs,
        allDocTopics: allDocTopics,
      }}
    >
      {children}
    </AppContentContext.Provider>
  )
}

export const useAppContentProvider = () => useContext(AppContentContext)