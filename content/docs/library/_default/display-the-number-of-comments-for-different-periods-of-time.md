---
title: Display the number of comments for different periods of time
description: Analyze the trend of users adding comments to your site, based on several periods of time
socialImage: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedTutorialLessonSlugs:
- 'querying-dynamic-data'
referencedExtensionSlugs:
- 'field-to-input'
- 'php-constants-and-environment-variables-via-schema'
- 'php-functions-via-schema'
# bundlesContainingReferencedExtensionSlugs:
# - all-in-one-toolbox-for-wordpress
# - automated-content-translation-and-sync-for-wordpress-multisite
# - better-wordpress-webhooks
# - private-graphql-server-for-wordpress
# - selective-content-import-export-and-sync-for-wordpress
# - tailored-wordpress-automator
# - unhindered-wordpress-email-notifications
# - versatile-wordpress-request-api
predefinedPersistedQueryTitleInPlugin: Fetch comments by period
---

This query retrieves the number of comments added to the site in several periods of time:

- in the last 24 hs
- in the last 30 days
- in the last year
- since beginning of the month
- since beginning of the year

```graphql
query GetCommentsForDifferentPeriodsOfTime {
  timeNow: _time  
  time24HsAgo: _intSubstract(substract: 86400, from: $__timeNow)
  date24HsAgo: _date(format: "Y-m-d\\TH:i:sO", timestamp: $__time24HsAgo)  
  time1MonthAgo: _intSubstract(substract: 2592000, from: $__timeNow)
  date1MonthAgo: _date(format: "Y-m-d\\TH:i:sO", timestamp: $__time1MonthAgo)
  time1YearAgo: _intSubstract(substract: 31536000, from: $__timeNow)
  date1YearAgo: _date(format: "Y-m-d\\TH:i:sO", timestamp: $__time1YearAgo)
  timeBegOfThisMonth: _makeTime(hour: 0, minute: 0, second: 0, day: 1)
  dateBegOfThisMonth: _date(format: "Y-m-d\\TH:i:sO", timestamp: $__timeBegOfThisMonth)
  timeBegOfThisYear: _makeTime(hour: 0, minute: 0, second: 0, month: 1, day: 1)
  dateBegOfThisYear: _date(format: "Y-m-d\\TH:i:sO", timestamp: $__timeBegOfThisYear)
  
  commentsAddedInLast24Hs: commentCount(filter: { dateQuery: { after: $__date24HsAgo } } )  
  commentsAddedInLast1Month: commentCount(filter: { dateQuery: { after: $__date1MonthAgo } } )  
  commentsAddedInLast1Year: commentCount(filter: { dateQuery: { after: $__date1YearAgo } } )  
  commentsAddedSinceBegOfThisMonth: commentCount(filter: { dateQuery: { after: $__dateBegOfThisMonth } } )  
  commentsAddedSinceBegOfThisYear: commentCount(filter: { dateQuery: { after: $__dateBegOfThisYear } } )
}
```
