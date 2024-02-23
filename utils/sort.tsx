export function sortByName(a: { name: string }, b: { name: string }) {
  return (a.name > b.name) ? 1 : -1
}

export function sortByTitle(a: { title: string }, b: { title: string }) {
  return (a.title > b.title) ? 1 : -1
}

export function sortByOrder(a: { order: number }, b: { order: number }) {
  return (a.order > b.order) ? 1 : -1
}

export function sortAlphabetically(a: string, b: string) {
  return (a > b) ? 1 : -1
}

