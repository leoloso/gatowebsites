export function sortAlphabetically(a: string, b: string) {
  return (a > b) ? 1 : -1
}

export function sortByName(a: { name: string }, b: { name: string }) {
  return (a.name > b.name) ? 1 : -1
}

type SortByTitleProps = {
  title: string,
}

export function sortByTitle(a: SortByTitleProps, b: SortByTitleProps) {
  return (a.title > b.title) ? 1 : -1
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

export function sortByOrderAndTitle(a: SortByOrderAndTitleProps, b: SortByOrderAndTitleProps) {
  if (a.order === b.order) {
    return sortByTitle(a, b)
  }
  return sortByOrder(a, b)
}

