---
title: "Hiding the Tutorial page"
metaDesc: Hide the Tutorial page from the menu navigation
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 1888
---

The Tutorial section explains how to achieve many objectives, exploring all the elements from the GraphQL schema.

After taking the tutorial, and having learnt about all the distinctive features of Gato GraphQL, you can decide to hide this page from the menu navigation.

## Settings to hide the Tutorial page

An option to hide the Tutorial section has been added to the Settings page, under "Plugin Configuration > General > Hide Tutorial page?":

<div class="img-width-1024" markdown=1>

<a href="/assets/guides/upstream/settings-hide-tutorial-page.png" target="_blank">![Hiding the Tutorial page in the Settings](/assets/guides/upstream/settings-hide-tutorial-page.png "Hiding the Tutorial page in the Settings")</a>

</div>

Alternatively, we can define this value in `wp-config.php`:

```php
define( 'GATOGRAPHQL_HIDE_TUTORIAL_PAGE', true );
```
