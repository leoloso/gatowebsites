---
title: Fetch US weather forecast data for multiple locations
description: Connect to the US National Weather Service's API to fetch weather forecast data
# image: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedTutorialLessonSlugs:
- 'retrieving-data-from-an-external-api'
referencedExtensionSlugs:
- 'field-on-field'
- 'field-to-input'
- 'field-value-iteration-and-manipulation'
- 'http-client'
- 'multiple-query-execution'
- 'php-functions-via-schema'
# bundlesContainingReferencedExtensionSlugs:
# - all-in-one-toolbox-for-wordpress
# - automated-content-translation-and-sync-for-wordpress-multisite
# - better-wordpress-webhooks
# - private-graphql-server-for-wordpress
# - selective-content-import-export-and-sync-for-wordpress
# - tailored-wordpress-automator
# - versatile-wordpress-request-api
---

This query connects to [US National Weather Service's API](https://www.weather.gov/documentation/services-web-api) and retrieves the weather forecast data for the multiple locations with given coordinates (via variable `$coordinatesList`, which is a list of JSON objects with entries `lat` and `long`).

```graphql
query GenerateLocationURLs(
  # List of JSON objects with entries `lat` and `long`
  # eg: [ { "lat": 39.7456, "long": -97.0892 }, { "lat": 34.7456, "long": -77.0892 } ]
  $coordinatesList: [JSONObject!]!
) {
  coordinatesList: _echo(value: $coordinatesList)
    @underEachArrayItem(
      passValueOnwardsAs: "coordinates"
      affectDirectivesUnderPos: [1, 2, 3, 4]
    )
      @applyField(
        name: "_objectProperty",
        arguments: {
          by: { key: "lat" }
          object: $coordinates
        },
        passOnwardsAs: "lat"
      )
      @applyField(
        name: "_objectProperty",
        arguments: {
          by: { key: "long" }
          object: $coordinates
        },
        passOnwardsAs: "long"
      )
      @applyField(
        name: "_sprintf",
        arguments: {
          string: "https://api.weather.gov/points/%s,%s",
          values: [$lat, $long]
        }
        passOnwardsAs: "locationURL"
      )
      @applyField(
        name: "_echo",
        arguments: {
          value: {
            url: $locationURL
          }
        }
        setResultInResponse: true
      )
    @export(as: "coordinatesListInput")
}

query FetchUSWeatherDataForLocations
  @depends(on: "GenerateLocationURLs")
{
  _sendJSONObjectItemHTTPRequests(inputs: $coordinatesListInput)
}
```
