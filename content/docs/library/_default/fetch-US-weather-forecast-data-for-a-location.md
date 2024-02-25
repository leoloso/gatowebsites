---
title: Fetch US weather forecast data for a location
description: Connect to the US National Weather Service's API to fetch weather forecast data
# image: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedTutorialLessonSlugs:
- 'retrieving-data-from-an-external-api'
referencedExtensionSlugs:
- 'field-to-input'
- 'http-client'
# bundlesContainingReferencedExtensionSlugs:
# - all-in-one-toolbox-for-wordpress
# - automated-content-translation-and-sync-for-wordpress-multisite
# - better-wordpress-webhooks
# - private-graphql-server-for-wordpress
# - selective-content-import-export-and-sync-for-wordpress
# - tailored-wordpress-automator
# - versatile-wordpress-request-api
---

This query connects to [US National Weather Service's API](https://www.weather.gov/documentation/services-web-api) and retrieves the weather forecast data for the location with given coordinates (via variables `$lat` and `$long`).

```graphql
query FetchUSWeatherDataForLocation(
  $lat: Float!
  $long: Float!
) {
  url: _sprintf(
    string: "https://api.weather.gov/points/%s,%s",
    values: [$lat, $long]
  )
  _sendJSONObjectItemHTTPRequest(input: {
    url: $__url
  })
}
```
