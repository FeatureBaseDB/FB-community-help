# Doc content checklist

Use these checklists and examples as guidelines on how content should be written

## Before you begin

* [Learn about writing modular content](/help-on-help/writing-help/writing-modular-content)
* [Learn how to identify your audience and other fundamental questions](/help-on-help/writing-help/writing-planning-content)

## Checklist

| Requirement | Yes/No |
|---|---|
| Is your audience familiar with the concepts, the UI or the feature you're documenting? |  |
| Does the FeatureBase UI/feature have a real-world equivalent your audience is familiar with? |  |
| Does the FeatureBase UI/feature relate to or duplicate any content found elsewhere in the help system? |  |
| Are there multiple methods of performing the **same** task using the FeatureBase UI/feature? |  |
| Can you perform multiple **different** tasks using the FeatureBase UI/feature that may be performed in isolation, in a new window or dialog? |  |

## Example 1 - Create FeatureBase Cloud tables

| Requirement | Yes/No | Reason |
|---|---|---|
| Audience familiarity | Yes | This is a database product and customers will be familiar on some level |
| Real-world equivalent | Yes | Tables feature in all kinds of RDBMS, and other datasources |
| Duplicate content? | Yes | There are common steps to create and delete a table and columns using the UI.  |
| Multiple methods of performing same task? | Yes | You can create tables using the Cloud UI, API, and even SQL |
| Different tasks in isolation/new window/dialog? | Yes | The Column UI appears via the Tables UI. |

Conclusion: Separate pages for:
* Create table in UI
* Delete table in UI
* Add columns in UI
* Delete columns in UI
* Create table using API
* Delete table using API
* Add columns using API
* Delete columns in API
* Create table in SQL
* Delete table in SQL

NOTE: The pages will more than likely:
* Use the `## Before you begin` heading to hyperlink to preceding pages where related (e.g., you can't delete a table unless you've created one)
* NOT duplicate steps found in related pages (e.g., Before you begin hyperlink to adding columns in a Delete columns page)
* use shared `/_include` files to reduce duplication
* have a `## Next step` heading to direct users to the next part of the process (e.g., **Create table** will *Next step* to **Add columns**)

## Example 2 - FeatureBase Cloud SQL editor

| Requirement | Yes/No | Reason |
|---|---|---|
| Audience familiarity | Yes | People who use databases should be marginally familiar with features of a SQL editor |
| Real-world equivalent | Yes | SQL editors are available for specific databases, as FOSS applications, etc |
| Duplicate content? | No | There's one SQL editor in the Cloud product. The `fbsql` product is related but uses a different interface. Similarly, API queries to the database are handled separately. |
| Multiple methods of performing same task? | No | You can create tables using the Cloud UI, API, and even SQL, BUT these use different interfaces and are therefore not related |
| Different tasks in isolation? | No | While viewing the query history, looking at the schema tree are **technically** different tasks, they are unlikely to be performed outside the context of writing queries |

**Conclusion**: One FeatureBase Cloud SQL editor page that could be structured as a kind of "cheat sheet" which:
* Tells the user how to get to the SQL editor
* Outlines the features on the page at a high level (because they're duplicating ones users will be familiar with)
* Does **not** explicitly step the user through writing and executing a query because of the familiar UI
* Does provide specific examples for editor-specific features such as:
  * adding the schema as a "prefix" in front of the query
  * keyboard shortcut to run a query
  * any error messages and their solutions
