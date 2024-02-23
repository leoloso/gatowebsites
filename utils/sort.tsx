// Sort extensions by name
export function sortByName(a: { name: string }, b: { name: string }) {
  return (a.name > b.name) ? 1 : -1
}

// Sort extensions by name
export function sortAlphabetically(a: string, b: string) {
  return (a > b) ? 1 : -1
}

