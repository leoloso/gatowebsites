---
title: Versioning fields and directives
metaDesc:
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 1500
draft: true
---

Check:
    ########################################################
	# Even though field "helloWorld" and directive "helloWorld"
	# have versioning, arg "versionConstraint" still DOES NOT
	# appear on introspection!
	# That's because the schema is retrieved from the field/directive
	# resolver without version defined, and for that one, arg
	# versionConstraint will not show up.
	########################################################
In:
    submodules/PoP/layers/GraphQLAPIForWP/phpunit-packages/graphql-api-for-wp/tests/Unit/Faker/fixture-schema-versioning/version-constraint-arg-introspection.gql

Mention that:
    - Most updated directives must have a higher `public function getPriorityToAttachToClasses(): int` as they will be considered first and then, if they satisfy `versionConstraint`, they are used
    - `versionConstraint` will NEVER appear on the schema when doing introspection!
        Hence we need to know about this in advance
    - Use cases: test a bug fix before deploying to everyone, etc
        Check recipes
    - If there's no default version of the resolver (i.e. without the version defined), then the field/directive will only be queryable when passing `versionConstraint`, otherwise the field/directive will not exist at all!