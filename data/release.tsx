const releaseDates : { [key: string]: string } = {
  '2.2': "2024-03-08",
}

export function getReleaseData(version: string): string {
  if (!releaseDates[version]) {
    throw new Error(`There is no release with version ${version}`)
  }
  return releaseDates[version];
}