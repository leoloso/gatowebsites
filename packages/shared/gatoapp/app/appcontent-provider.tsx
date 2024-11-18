'use client'

import React from 'react'
import { createContext, useContext } from 'react'
import { BlogPost, DemoPost, Doc, DocTopic, Page, Snippet } from 'gatoapp/types/types';

type ContextProps = {
  allBlogPosts: BlogPost[],
  allDemoPosts: DemoPost[],
  allDocs: Doc[],
  allDocTopics: DocTopic[],
  allPages: Page[],
  allSnippets: Snippet[],
}

const AppContentContext = createContext<ContextProps>({
  allBlogPosts: [],
  allDemoPosts: [],
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
  allDemoPosts,
  allDocs,
  allDocTopics,
  allPages,
  allSnippets,
}: AppContentProviderInterface) {  
  return (
    <AppContentContext.Provider
      value={{
        allBlogPosts: allBlogPosts,
        allDemoPosts: allDemoPosts,
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