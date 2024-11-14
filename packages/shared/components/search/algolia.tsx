import type { BaseHit } from 'instantsearch.js';

// The section label will be displayed on the search UI
export const enum Sections {
  Blog = 'Blog',
  Changelog = 'Changelog',
  Comparisons = 'Comparisons',
  ExtensionsReference = 'Extensions reference',
  Guides = 'Guides',
  SchemaTutorial = 'Schema tutorial',
  QueryLibrary = 'Query library',
  ArchitectureDocs = 'Architecture docs',
  Extensions = 'Extensions',
  Features = 'Features',
  Demos = 'Demos',
}

export interface SearchObject extends BaseHit {
  objectID: string // objectID is needed for Algolia
  title: string
  description: string
  urlPath: string,
  slug: string,
  content: string,
  section: Sections.Blog
    | Sections.Changelog
    | Sections.Comparisons
    | Sections.ExtensionsReference
    | Sections.Guides
    | Sections.SchemaTutorial
    | Sections.QueryLibrary
    | Sections.ArchitectureDocs
    | Sections.Extensions
    | Sections.Features
    | Sections.Demos
}
