---
title: Automation
# isPRO: true
description: Automatically execute a GraphQL Persisted Query when some event happens on the site, creating automations directly via the WordPress editor.
# image: /assets/GatoGraphQL-logo-suki.png
order: 690
---

📣 **Note:** This feature is unlocked by the [Automation](../../../extensions/automation/) extension.

Automatically execute a GraphQL Persisted Query when some event happens on the site.

Create automations directly via the WordPress editor. The automation trigger is any WordPress action hook, and the action is the execution of a GraphQL persisted query.

These are some examples of how we can use it:

- Create a featured image for new posts using AI
- Add a mandatory block to the post when published
- Replace `http` with `https` in all image sources and links when a post is updated
- Send an email to the admin when there's a new post
- Send an email to the user whose comment has a new response
- [Multisite] Translate a new post to different languages, and add the translated posts to each site
- Execute an action on an external service (eg: automatically share new posts on Facebook)

For instance, when creating a new post, automation rule **Add comments block to new post** checks if the `core/comments` block is present and, if not, it adds it at the bottom of the post:

<div class="img-width-640" markdown=1>

![Automatically inserting the comments block to new 'draft' posts](/assets/extensions/upstream-pro/automation-rule-insert-mandatory-comments-block.gif "Automatically inserting the comments block to new 'draft' posts")

</div>
