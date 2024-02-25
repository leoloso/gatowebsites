---
title: Removing fields from the schema via hooks
metaDesc: Using filter hooks to prevent fields from being added to the schema.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 200
---

In addition to using Access Control to remove access to a field, we can also use filter hooks to prevent fields from being added to the schema.

The following PHP code will remove access to field `User.email`:

```php
use PoP\ComponentModel\FieldResolvers\InterfaceType\InterfaceTypeFieldResolverInterface;
use PoP\ComponentModel\FieldResolvers\ObjectType\ObjectTypeFieldResolverInterface;
use PoP\ComponentModel\TypeResolvers\HookHelpers;
use PoP\ComponentModel\TypeResolvers\InterfaceType\InterfaceTypeResolverInterface;
use PoP\ComponentModel\TypeResolvers\ObjectType\ObjectTypeResolverInterface;
use PoP\Root\Facades\Instances\InstanceManagerFacade;
use PoPCMSSchema\Users\TypeResolvers\ObjectType\UserObjectTypeResolver;

add_filter(
    HookHelpers::getHookNameToFilterField(),
    function (
        bool $include,
        ObjectTypeResolverInterface | InterfaceTypeResolverInterface $objectTypeOrInterfaceTypeResolver,
        ObjectTypeFieldResolverInterface | InterfaceTypeFieldResolverInterface $objectTypeOrInterfaceTypeFieldResolver,
        string $fieldName
    ): bool {
        // Check if this is the field to exclude
        if ($fieldName !== 'email') {
            return $include;
        }

        // Make sure it is the `User` type. First obtain the type resolver
        $instanceManager = InstanceManagerFacade::getInstance();
        /** @var UserObjectTypeResolver */
        $userObjectTypeResolver = $instanceManager->getInstance(UserObjectTypeResolver::class);

        // Compare them
        if ($objectTypeOrInterfaceTypeResolver->getNamespacedTypeName() !== $userObjectTypeResolver->getNamespacedTypeName()) {
            return $include;
        }

        // Match type resolver and field => do not include in schema
        return false;
    },
    10,
    4
);
```
