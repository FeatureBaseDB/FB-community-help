# Custom headings

There are two kinds of custom heading:

* The page title
* Content headings that follow the **Before you begin** heading.

### Page title based on the page type

**NOTE**: Page title standards have not been fully implemented as of 2023-02-21.

Page titles are added **after** page YAML and as the first heading in the body. For example:

```md
# How do I write FeatureBase Docs?
```

| Page type | Page title structure | Description | Example |
|---|---|---|---|
| Overview | [question] [generic-term] | A [question] will be "how do I" or "what is", while the [generic-term] is a term that will be understood to anyone who **has not used featurebase before**. | How do I import data to FeatureBase? |
| Process and Procedure| How do I [action] [task] | An action could be Create, delete, perform or something like that. A task is something the user wants to do | How do I create a table? |
| Procedure series | A procedure series can be titled [Part N] - [Action] [Task]| Part 1 - Set up Windows Subsystem for Linux<br/>Part 2 - install FeatureBase in Windows Subsystem for Linux |
| FAQ | FAQ - [Context] | The Context for the FAQ is important and the page should **always** be confined to a specific context, not a large area of functionality or an entire application | FAQ - Community ingestion |
| Issue | Issue - [summary of issue ] | The summary should be written based on what the user experiences, no more. | Issue - FeatureBase Community won't startup on Mac |
| Reference | [Context] [Specifics] | The [Context] tells the user what the page is referring to. The [Specifics] gives a brief name for what's going on | SQL SELECT statement</br>SQL Ingest tool |

## Custom headings for the content that follows

The **only** heading 1 in the page is the page title.
The maximum depth of headings is heading 4

Headings need to:

* be simple and easy to understand
* summarize what follows

| Content | Example heading |
|---|---|
| Discussion of host system requirements for FeatureBase Community | FeatureBase Community system requirements |
| Conceptual discussion of Time Quantums | How can I reduce table rows for timestamp data? |
| Create a table using FeatureBase Cloud | How do I create a table in FeatureBase Cloud? |
