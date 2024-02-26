---
title: Use cases for multiple custom endpoints
description: When it makes sense to expose multiple custom endpoints (instead of the single endpoint) in GraphQL, with each of these endpoints presenting a customized schema.
# image: /assets/GatoGraphQL-logo-suki.png
order: 400
---

GraphQL is expected to expose a single endpoint to query the data. However, there are situations where it makes sense to instead expose multiple custom endpoints, where each of these endpoints presents a customized schema. This allows us to provide a distinct behavior for different users or applications by simply swapping the accessed endpoint.

Exposing multiple endpoints in GraphQL does not equate to REST. While in REST every endpoint provides access to a predefined resource or set of resources, each of the multiple GraphQL endpoints will still provide access to the whole data from its schema, enabling to fetch exactly what we need. So this is still the normal GraphQL behavior, with the addition of being able to access the data from different schemas.

This capability is also different than schema stitching or federation, which enable to incorporate several sources of data into a single, unified graph. With multiple endpoints we are dealing with multiple schemas. It is the intention to deal with them on their own, and not as part of a bigger schema.

Exposing different schemas can provide access to multiple independent graphs. GraphQL creator Lee Byron [explains when this can be useful](https://github.com/graphql/graphql-spec/issues/569#issuecomment-475670948):

> A good example of this might be if you've company is centered around a product and has built a graphql API for that product, and then decides to expand into a new business domain with a new product that doesn't relate to the original product. It could be a burden for both of these unrelated products to share a single API and two separate endpoints with different schema may be more appropriate.
>
> [...] Another example is [...] - you may have a separate internal-only endpoint that is a superset of your external GraphQL API. Facebook uses this pattern and has two endpoints, one internal and one external. The internal one includes internal tools which can interact with product types.

Let's explore some additional use cases when exposing multiple GraphQL endpoints makes sense.

## Exposing the admin and public endpoints separately

When we are using a single graph for all data in the company, we can validate who has access to the different fields in our GraphQL schema by setting-up access control policies. For instance, we can configure fields to be accessible only to logged-in users or users with a certain role.

However, when there are fields which contains sensitive or confidential information, so that under no circumstance these should be accessible to unintended actors, then we'd rather not expose these fields in a public schema in first place, and only in a private schema that only the team has access to. This strategy will protect our private data from unintended issues, such as software bugs and carelessness when configuring the schema, and even tighten security by [only allowing visitors from certain IPs to access the private endpoint](../../config/restricting-access-by-visitor-ip).

Hence, we can create two separate schemas, the Admin and Public schemas, and expose them under endpoints `/graphql/admin` (and restrict access to it to visitors from a certain IP) and `/graphql/public` (accessible to everyone) respectively.

## Restricting access to private information in a safer way

This section is a generalization of the previous one: it's not just public vs admin, but any situation in which a set of users must certainly not be able to access information from another set of users.

For instance, whenever we need to create customized schemas for our different clients, we can expose a custom endpoint for each of them (`/graphql/some-client`, `/graphql/another-client`, etc), which can be safer than giving them access to the same unified schema and validating them via access control.

## Providing a different behavior to different applications

We can grant a different behavior to the different applications accessing the same data source.

For instance, Reddit produces a dissimilar response if accessed from a desktop browser or from a mobile browser. From the desktop browser, whether we are logged-in or not, we can directly visualize the content:

![Accessing Reddit from a desktop browser](/assets/guides/downstream/recipes/reddit-desktop.png "Accessing Reddit from a desktop browser")

Accessing from mobile, though, we must be logged-in to access the content, and we're encouraged to use the app instead:

![Accessing Reddit from a mobile browser](/assets/guides/downstream/recipes/reddit-mobile.jpg "Accessing Reddit from a mobile browser")

This different behavior could be provided by creating two schemas, the Desktop and Mobile schemas, and expose them under `/graphql/desktop` and `/graphql/mobile` respectively.

## Generating a site in different languages

If we want to generate the same site in different languages, we can have the language code already be part of the custom endpoint structure, such as `/graphql/en` for English and `/graphql/fr` for French. Then, the GraphQL server can retrieve this information and translate the data to the desired language.

Finally, we point to each of these endpoints in the static site generator to produce the site in one or another language:

![The same site in multiple languages](/assets/guides/downstream/recipes/multiple-lang-endpoints.png "The same site in multiple languages")

## Testing an upgraded schema before releasing for production

If we want to upgrade our GraphQL schema, and have a set of users test it in advance, we can expose this new schema via a `/graphql/upcoming` endpoint. Even more, we could also expose a `/graphql/bleeding-edge` endpoint, that keeps deploying the schema from DEV.

## Supporting the BfF approach

Backend-for-Frontends (BfF for short) is an [approach for producing different APIs for different clients](https://philcalcado.com/2015/09/18/the_back_end_for_front_end_pattern_bff.html), having each client "own" its API, allowing it to produce the most optimal version based on its own requirements.

In this model, a custom BfF is the middleman between the back-end services and its client:

![BfF architecture](/assets/guides/downstream/recipes/bff-diagram.png "BfF architecture")

This model can be satisfied in GraphQL by having all BfFs be implemented in a single GraphQL server with multiple endpoints, with each endpoint tackling a specific BfF/client (such as `/graphql/mobile` and `/graphql/web`):

![Satisfying BfF via multiple GraphQL endpoints](/assets/guides/downstream/recipes/final-bff-with-graphql-diagram.png "Satisfying BfF via multiple GraphQL endpoints")
