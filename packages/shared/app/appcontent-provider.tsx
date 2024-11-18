'use client'

import React from 'react'
import { createContext, useContext } from 'react'
import { BlogPost, Doc, DocTopic, Page, Snippet } from '@gato/types/types';

type ContextProps = {
  allBlogPosts: BlogPost[],
  allDocs: Doc[],
  allDocTopics: DocTopic[],
  allPages: Page[],
  allSnippets: Snippet[],
}

const AppContentContext = createContext<ContextProps>({
  allBlogPosts: [],
  allDocs: [],
  allDocTopics: [],
  allPages: [],
  allSnippets: [],
})

export interface AppContentProviderInterface extends ContextProps {
  children: React.ReactNode,
}

export default function AppContentProvider({
  children,
  allBlogPosts,
  allDocs,
  allDocTopics,
  allPages,
  allSnippets,
}: AppContentProviderInterface) {  
  return (
    <AppContentContext.Provider
      value={{
        allBlogPosts: allBlogPosts,
        allDocs: allDocs,
        allDocTopics: allDocTopics,
        allPages: allPages,
        allSnippets: allSnippets,
      }}
    >
      {children}
    </AppContentContext.Provider>
  )
}

export const useAppContentProvider = () => useContext(AppContentContext)