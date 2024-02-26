---
title: Automating tasks
# isPRO: true
description: Automatically execute a GraphQL Persisted Query when some event happens on the site, creating automations directly via the WordPress editor.
socialImage: /assets/GatoGraphQL-logo-suki.png
order: 100
---

Automatically execute a GraphQL Persisted Query when some event happens on the site.

Create automations directly via the WordPress editor. The automation trigger is any WordPress action hook, and the action is the execution of a GraphQL persisted query.

### Accessing all automation rules

Clicking on "Automation Rules" on the plugin's menu, it displays the list of all the created automation rules:

<div class="img-width-1024" markdown=1>

![Automation Rules](/assets/extensions/upstream-pro/automation-rules.png "Automation Rules")

</div>

## Creating a new automation rule

Click on the "Add New Automation Rule" to add a new entry.

In the editor screen, we must provide the configuration for:

- Automation trigger(s)
- Automation action

<div class="img-width-1024" markdown=1>

![Automation Rule editor](/assets/extensions/upstream-pro/automation-rule-editor.png "Automation Rule editor")

</div>

### Automation action

The automation action indicates what GraphQL persisted query will be executed.

Configure this item with the following elements:

**Persisted Query**: Select which GraphQL persisted query to execute (among all the ones with status `publish` or `private`)

**Static GraphQL Variables**: Provide a JSON string with values for the GraphQL variables in the persisted query. These are static values.

For instance:

```json
{
  "emailSubject": "New post on the site"
}
```

These values are overriden by the "dynamic" GraphQL variables (see **Automation trigger(s)** below).

**Operation name** (optional): If the persisted query contains more than one operation, you can indicate which one to execute (by default, it is the last one).

**Execute as user** (optional): Execute the GraphQL persisted query being logged-in as a specific user, providing the user slug.

<div class="img-width-392" markdown=1>

![Automation Rule - Persisted Query Execution](/assets/extensions/upstream-pro/automation-mapping-persisted-query-execution.png "Automation Rule - Persisted Query Execution")

</div>

### Automation trigger(s)

An automation trigger indicates what WordPress action hook will trigger the execution of the Persisted Query. We can provide more than one (eg: to react to editing a post or page only, we can provide hooks `edit_post_post` and `edit_post_page`).

Configure this item with the following elements:

**Hook name**: The WordPress action hook name.

**Dynamic GraphQL Variables**: Provide a JSON string mapping GraphQL variables to the arguments provided to the hook function. These dynamic values will then be provided to the query on runtime.

The JSON dictionary must contain the GraphQL variable name as key, and the position of the argument in the action hook as value.

For instance, hook `draft_post` (from the [post status transitions](https://codex.wordpress.org/Post_Status_Transitions)) provides the `$post_id` as the first argument. Then, the following JSON indicates that GraphQL variable `$postID` will receive the value of `$post_id` passed to the hook:

```json
{
  "postID": 1
}
```

(In this example, `1` means "value of the 1st argument by `draft_post`".)

If the same key is used for the "dynamic" and "static" GraphQL variables (see **Automation action** above), then the dynamic values take priority.

<div class="img-width-412" markdown=1>

![Automation Rule - Action hook](/assets/extensions/upstream-pro/automation-mapping-action-hook.png "Automation Rule - Action hook")

</div>

## Debugging issues

If the automation hasn't been executed, there could be an error with the configuration of the automation, or execution of the persisted query.

All configuration problems (such as a malformed JSON string for the GraphQL variables, or pointing to a persisted query that has been deleted) and execution errors (such as thrown exceptions, or `errors` entries in the GraphQL query) are sent to PHP function's `error_log`, so these are printed in the [WordPress error log](https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/).

These error logs are prepended with string `[Gato GraphQL]`.