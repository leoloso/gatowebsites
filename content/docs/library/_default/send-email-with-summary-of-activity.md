---
title: Send an email with summary of activity
description: "Integrate this query with automation to receive updates on your email account"
# image: /assets/GatoGraphQL-logo-suki.png
#order: 100
referencedTutorialLessonSlugs:
- 'querying-dynamic-data'
- 'sending-a-daily-summary-of-activity'
- 'sending-emails-with-pleasure'
referencedExtensionSlugs:
- 'email-sender'
- 'field-response-removal'
- 'field-to-input'
- 'helper-function-collection'
- 'multiple-query-execution'
- 'php-functions-via-schema'
# bundlesContainingReferencedExtensionSlugs:
# - all-in-one-toolbox-for-wordpress
# - better-wordpress-webhooks
# - private-graphql-server-for-wordpress
# - tailored-wordpress-automator
---

This query sends an email indicating the number of new comments added to the site for several periods of time:

- In the last 24 hs
- In the last 1 year
- Since the beginning of the month
- Since the beginning of the year

```graphql
query CountComments {
  DATE_ISO8601: _env(name: DATE_ISO8601) @remove

  timeToday: _time
  dateToday: _date(format: $__DATE_ISO8601, timestamp: $__timeToday)
  
  timeYesterday: _intSubstract(substract: 86400, from: $__timeToday)
  dateYesterday: _date(format: $__DATE_ISO8601, timestamp: $__timeYesterday)
  
  time1YearAgo: _intSubstract(substract: 31536000, from: $__timeToday)
  date1YearAgo: _date(format: $__DATE_ISO8601, timestamp: $__time1YearAgo)

  timeBegOfThisMonth: _makeTime(hour: 0, minute: 0, second: 0, day: 1)
  dateBegOfThisMonth: _date(format: $__DATE_ISO8601, timestamp: $__timeBegOfThisMonth)

  timeBegOfThisYear: _makeTime(hour: 0, minute: 0, second: 0, month: 1, day: 1)
  dateBegOfThisYear: _date(format: $__DATE_ISO8601, timestamp: $__timeBegOfThisYear)
  
  commentsAddedInLast24Hs: commentCount(filter: { dateQuery: { after: $__dateYesterday } } )
    @export(as: "commentsAddedInLast24Hs")
  commentsAddedInLast1Year: commentCount(filter: { dateQuery: { after: $__date1YearAgo } } )
    @export(as: "commentsAddedInLast1Year")
  commentsAddedSinceBegOfThisMonth: commentCount(filter: { dateQuery: { after: $__dateBegOfThisMonth } } )
    @export(as: "commentsAddedSinceBegOfThisMonth")
  commentsAddedSinceBegOfThisYear: commentCount(filter: { dateQuery: { after: $__dateBegOfThisYear } } )
    @export(as: "commentsAddedSinceBegOfThisYear")
}

query CreateEmailMessage @depends(on: "CountComments") {
  emailMessageTemplate: _strConvertMarkdownToHTML(
    text: """

This is the number of comments added to the site:

| Period | # Comments added |
| --- | --- |
| **In the last 24 hs**: | {$commentsAddedInLast24Hs} |
| **In the last 365 days**: | {$commentsAddedInLast1Year} |
| **Since beggining of this month**: | {$commentsAddedSinceBegOfThisMonth} |
| **Since beggining of this year**: | {$commentsAddedSinceBegOfThisYear} |

    """
  )
  emailMessage: _strReplaceMultiple(
    search: [
      "{$commentsAddedInLast24Hs}",
      "{$commentsAddedInLast1Year}",
      "{$commentsAddedSinceBegOfThisMonth}",
      "{$commentsAddedSinceBegOfThisYear}"
    ],
    replaceWith: [
      $commentsAddedInLast24Hs,
      $commentsAddedInLast1Year,
      $commentsAddedSinceBegOfThisMonth,
      $commentsAddedSinceBegOfThisYear
    ],
    in: $__emailMessageTemplate
  )
    @export(as: "emailMessage")
}

mutation SendDailyStatsByEmailNumberOfComments(
  $to: [String!]!
)
  @depends(on: "CreateEmailMessage")
{
  _sendEmail(
    input: {
      to: $to
      subject: "Daily stats: Number of new comments"
      messageAs: {
        html: $emailMessage
      }
    }
  ) {
    status
  }
}
```
