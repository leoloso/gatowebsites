export function createSEOPageTitle(
  title: string,
  seoTitle?: string,
): string {

  const adaptedTitle = seoTitle ? seoTitle.replaceAll(
    '{year}',
    new Date().getFullYear().toString()
  ) : title
  return `${adaptedTitle} | Gato Plugins for WordPress`
}

export function createOpenGraphPageTitle(
  title: string,
): string {

  return `${title} | Gato Plugins`
}