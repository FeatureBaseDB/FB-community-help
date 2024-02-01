---
YAML Header information
- /help-on-help/content-nav-page-order.md
- /help-on-help/content-nav-nesting-folder.md
---

# Reference page title
{: .no_toc }
>no_toc shortcode excludes page title from the page_toc shortcode

>A reference page builds the user's knowledge in stages:
* Page title should give context to what's on the page
  * SQL and PQL can get away with just using the Keyword
  * FeatureBase-specific content needs to have a more **generic** title so that users get a clue as to what the page is for.
  * e.g., "Query FeatureBase data from the command line"
* Introductory paragraph -- Give the reader a **brief** explanation of the purpose and context in which the content is relevant. Provide detail below
* Syntax -- Provide syntax to give the user a grounding in the structure and order of arguments
* Arguments -- Table of arguments and descriptions. Descriptions should be short (any more than 2 sentences and the information goes under "Additional nformation"
* Additional information -- drill down into more detailed information on arguments
* Examples -- provide at least one example of how the syntax can be applied for a real world situation

> Add the page table of contents shortcode if the page content becomes long.

{% include page-toc.md %}


## Before you begin

> List of prerequisites and requirements a user needs to have met **before** attempting to use the reference content

## Syntax

> Add a relevant prefix to the heading to clarify what's going on.
> e.g., DDL Syntax for SQL pages

> Add the language after the first 3 backticks to guarantee the code block renders properly

```
# Syntax you are describing
# Use relevant notation for the language
# Include only keywords and variable names
# Examples are where actual values can be provided
```

## [Arguments | Parameters | Flags | pick one]

| Argument | Data type | Description | Required | Additional information |
|---|---|---|---|---|
| `syntax keywords`| Optional for SQL/PQL | Brief description of keyword | Use `optional` or state under which circumstance it's required | [Link to additional information] |
| `arguments` | Optional for SQL/PQL | Brief description of the argument | can also say "yes", "no" here or leave blank | Can clarify information if *very* short |

## Additional information

> More detailed information on the arguments are provided here.

### Result

> This may be relevant for SQL/PQL or even Terminal commands
> Avoid restating what's in the page introduction

| Result | Description |
|---|---|
| <specify the result> | Describe the result |

### Link from Arguments

> This is where you can discuss things like:
> * warnings/risks/costs of using the argument
> * list the possible variables
> * any edge cases
> * Link from here to specific examples which use the arguments

## Examples

### Short heading to describe the example

> Provide a **brief** explanation of each example code block.
> Avoid detailed explanations because you'll just be re-stating what you've already written

```
# Provide optional setup examples
# such as creating a table
```

>Give a brief description of the code block that applies the syntax for a real world situation

```
# real world application of syntax
```

## Further information

> Optional heading to list anything that's related or useful to know but is NOT a requirement

* [SQL reference examples](/docs/sql-guide/sql-guide-home)
* [FeatureBase backup reference example](/docs/community/com-backup/com-config-backup)
* [FeatureBase ingest reference example](/docs/community/com-ingest/com-ingest-flags-csv)
* [Help on Standard Headings](/help-on-help/style-guide/standard-headings)
* [Help on page types](/help-on-help/style-guide/page-purpose-layout)
