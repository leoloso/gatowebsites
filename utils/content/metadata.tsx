export function getPageTitle(title?: string): string | undefined {

  if (!title) {
    return title;
  }

  return title.replaceAll(
    '{year}',
    new Date().getFullYear().toString()
  )
}