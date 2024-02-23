export function sortAlphabetically(a: string, b: string) {
  return (a > b) ? 1 : -1
}

type SortByNameProps = {
  name: string,
}

export function sortByName(a: SortByNameProps, b: SortByNameProps) {
  return sortAlphabetically(a.name, b.name)
}

type SortByTitleProps = {
  title: string,
}

export function sortByTitle(a: SortByTitleProps, b: SortByTitleProps) {
  return sortAlphabetically(a.title, b.title)
}

type SortByOrderProps = {
  order: number,
}

export function sortByOrder(a: SortByOrderProps, b: SortByOrderProps) {
  return (a.order > b.order) ? 1 : -1
}

type SortByPublishedAtProps = {
  publishedAt: string,
}

export function sortByPublishedAt(a: SortByPublishedAtProps, b: SortByPublishedAtProps) {
  return (new Date(a.publishedAt) > new Date(b.publishedAt)) ? -1 : 1
}

type SortByOrderAndTitleProps = {
  order: number,
  title: string,
}

// Used to order docs, so that all docs in the Query Library have the
// same order, then they are sorted alphabetically
export function sortByOrderAndTitle(a: SortByOrderAndTitleProps, b: SortByOrderAndTitleProps) {
  if (a.order === b.order) {
    return sortByTitle(a, b)
  }
  return sortByOrder(a, b)
}

