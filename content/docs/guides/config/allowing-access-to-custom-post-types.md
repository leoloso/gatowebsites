---
title: Allowing access to Custom Post Types
metaDesc: Configuring an endpoint in Gato GraphQL to indicate what Custom Post Types can be accessed.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 400
---

The custom post types that can be queried must be explicitly configured. This can be done in 2 places.

In the Schema Configuration applied to the endpoint, by selecting option `"Use custom configuration"` under "Customize configuration, or use default from Settings?" and then selecting the desired items:

![Selecting the allowed Custom Post Types in the Schema Configuration](/assets/guides/upstream/customposts-schema-configuration-queryable-cpts.png "Selecting the allowed Custom Post Types in the Schema Configuration")

Or, if selecting option `"Use configuration from Settings"`, the value defined under section "Included custom post types" in the Settings page for `Schema Custom Posts` is used:

<div class="img-width-1024" markdown=1>

![Selecting the allowed Custom Post Types in the Settings](/assets/guides/upstream/customposts-settings-queryable-cpts.png "Selecting the allowed Custom Post Types in the Settings")

</div>
