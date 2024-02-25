---
title: Building static sites
metaDesc:
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 160
hidden: true
---

Gato GraphQL provides safe default settings, to make "live" sites secure. However, these safe default settings are not needed when building "static" sites, where the WordPress site is not exposed to the Internet.

This is how the "safe" and "unsafe" default behaviors compare:

| Feature | Safe behavior | Unsafe behavior |
| --- | --- | --- |
| Single endpoint | Disabled | Enabled |
| “Sensitive” data fields | Not added to the schema | Added to the schema |
| Settings from `wp_options` | Only a few predefined options are queryable | All options are queryable |
| Meta (posts, users, comments, taxonomies) | No keys are queryable | All keys are queryable |
| Max limit to query entities (posts, users, etc) | Limited | Unlimited |
| Environment Fields | No environment variables or PHP constants are queryable | All environment variables and PHP constants are queryable |
| Send HTTP Request Fields | No URL can be requested | All URLs can be requested |

## Enabling unsafe defaults

To enable unsafe defaults (to simplify fetching data for building a static site):

- Go to the "Plugin Management => Reset Settings" tab in the Settings Page
- Click on "Show options to reset the Settings"
- A select input to choose the "safe" or "unsafe" behavior will appear; select the "unsafe" option
- Click on "Confirm: Reset Settings"

<a href="/assets/guides/downstream/reset-settings-page.png" target="_blank">![Reset Settings](/assets/guides/downstream/reset-settings-page.png "Reset Settings")</a>

### Pre-defining the behavior

Before installing or activating the plugin (i.e. before the default values are calculated and stored in the database), define to use the "unsafe" behavior by adding the following PHP constant in `wp-config.php`:

```php
define( 'GATOGRAPHQL_SETTINGS_OPTION_ENABLE_UNSAFE_DEFAULT_BEHAVIOR', true );
```

Or define this same key/value as an environment variable.
