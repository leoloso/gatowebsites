---
title: Resolving CustomPostUnion to a single type
metaDesc: "If there is only one type added to 'CustomPostUnion' (eg: only 'Post'), we can then have the fields that resolve to 'CustomPostUnion' be resolved to that unique type instead."
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 405
---

If there is only one type added to `CustomPostUnion` (eg: only `Post`), we can then have the fields that resolve to `CustomPostUnion` be resolved to that unique type instead.

For that, head over to the Settings page for `Schema Custom Posts`, and click on option `"Use single type instead of union type?"`:

<div class="img-width-1024" markdown=1>

<a href="/assets/guides/upstream/settings-customposts-single-type.png" target="_blank">![Settings for Custom Posts](/assets/guides/upstream/settings-customposts-single-type.png "Settings for Custom Posts")</a>

</div>

For instance, if `Post` is the only type, field `customPosts` from type `Root` resolves to it directly:

<a href="/assets/guides/upstream/interactive-schema-root.png" target="_blank">![`customPosts` field resolves to `Post` type](/assets/guides/upstream/interactive-schema-root.png "`customPosts` field resolves to `Post` type")</a>
