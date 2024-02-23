export function sortAlphabetically(a: string, b: string) {
  return (a > b) ? 1 : -1
}

export function sortByName(a: { name: string }, b: { name: string }) {
  return (a.name > b.name) ? 1 : -1
}

export function sortByTitle(a: { title: string }, b: { title: string }) {
  return (a.title > b.title) ? 1 : -1
}

export function sortByOrder(a: { order: number }, b: { order: number }) {
  return (a.order > b.order) ? 1 : -1
}

export function sortByPublishedAt(a: { publishedAt: string }, b: { publishedAt: string }) {
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

