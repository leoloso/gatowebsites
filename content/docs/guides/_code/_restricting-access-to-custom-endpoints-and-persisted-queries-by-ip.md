---
title: Restricting access to Custom endpoints and Persisted queries by IP
metaDesc:
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 100
hidden: true
---

In order to allow access to some Custom Endpoint or Persisted Query only to visitors from a certain IP or IP range, we can add a filter hook on `Hooks::FORBID_ACCESS` ([triggered by method `isAccessForbidden`](https://github.com/GatoGraphQL/GatoGraphQL/blob/7202a71f982eb6e416b57d04e332d6de33aaf6e0/layers/GraphQLAPIForWP/plugins/graphql-api-for-wp/src/Services/CustomPostTypes/AbstractGraphQLEndpointCustomPostType.php#L143)):

```php
use GraphQLAPI\GraphQLAPI\Services\CustomPostTypes\Hooks;

// ID of the Custom Endpoint or Persisted Query
$customEndpointPostID = 34;
add_action(
    Hooks::FORBID_ACCESS,
    function(bool $forbidAccess) use ($customEndpointPostID): bool
    {
        if (!is_single($customEndpointPostID)) {
            return $forbidAccess;
        }
        $visitorIP = $_SERVER['REMOTE_ADDR'];
        $allowedIPs = [
            "192.168.*.*",
            "202.119.42.*",
        ];
        foreach ($allowedIPs as $allowedIP) {
            if (filter_var($visitorIP, FILTER_VALIDATE_IP)) {
                // Allowed IP => Do not forbid access
                return false;
            }
        }
        // No allowed IP matches => forbid access
        return true;
    }
);
```

And also make sure to not enable Cache Control on the endpoint, as the response must not be cached.

<!-- If we have Cache Control enabled, then we must also set the HTTP Caching to `no-store`, like this:

```php
use PoP\CacheControl\Facades\CacheControlEngineFacade;
$cacheControlEngine = CacheControlEngineFacade::getInstance();
$cacheControlEngine->addMaxAge(0);
```

Then, the example becomes:

```php
use PoP\CacheControl\Facades\CacheControlEngineFacade;
add_action(
    Hooks::FORBID_ACCESS,
    function(bool $forbidAccess): bool {
        if (is_single($someCustomEndpointPostID)) {
            $cacheControlEngine = CacheControlEngineFacade::getInstance();
            $cacheControlEngine->addMaxAge(0);
            return is_user_logged_in();
        }
        return $forbidAccess;
    }
);
``` -->
