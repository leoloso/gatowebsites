const releaseDates : { [key: string]: string } = {
  '2.2': "2024-03-08",
  '2.2.1': "2024-03-13",
  '2.2.2': "2024-03-26",
  '2.2.3': "2024-04-24",
  '2.2.4': "2024-08-22",
}

export function getReleaseData(version: string): string {
  if (!releaseDates[version]) {
    throw new Error(`There is no release with version '${version}'`)
  }
  return releaseDates[version];
}