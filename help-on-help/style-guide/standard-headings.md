# Standard headings

## Before you begin
Review the following help-on-help before deciding on the standard headings you need to use.
* [Planning content](help-on-help/writing-help/writing-planning-content.md)
* [Writing rules](help-on-help/writing-help/writing-rules.md)

## Standard headings used throughout help

These standard headings are used in help files across docs.featurebase.com

| Heading | Used for | Example | Additional information |
|---|---|---|---|
| Before you begin | The ultimate goal of this heading is to tell the user:<br/>* What they need to know before moving forward<br/>* What they need to have done before they get here<br/>Ultimately this is a list of prerequisites and requirements.  | `/docs/community/com-startup-connect` | [Before you begin FAQ](/help-on-help/faq/faq-before-begin.md) |
| Step N - <description> | Used to gather a series of steps into a context so the user knows they must be completed before moving forward. Especially useful if a group of steps requires some explanation before they are performed |  | Steps start at **1**. "Step 0" corresponds to "Before you begin" |
| Next step | Used for Procedure series to direct user to the next page in the sequence, and also to direct the user to something else they might choose to do (e.g., after loading data, they might want to query it) |  |  |
| Additional information | Related information to the content on the page which will likely include links to other FeatureBase documentation, and also external links which seem useful |  |  |

## Reference content

Reference content such as SQL and PQL guides, CLI ingest and config flags use the following standard headings **in addition** to the above.

| Heading | Used for | Example |
|---|---|---|
| BNF Diagrams | Currently only the SQL guide statements have BNF diagrams, and they're included at the top of each relevant page | `/docs/sql-guide/statements/select-statement` |
| Syntax | May be prefixed with DDL or other specifics, but what follows is the standard syntax used to construct commands, sql, etc. **NOT** BNF diagrams which are their own thing | `/docs/sql-guide/statements/statement-insert` |
| Arguments | May be called something else based on the context (e.g., Flags for CLI commands) but describe the syntax provided in a table form | `/docs/community/com-ingest/com-ingest-flags-csv` |
| Additional information | Further clarification on Syntax or arguments in reference file | `/docs/sql-guide/statements/statement-select/` > Additional Information |
| Examples | Usually found in reference docs and used for real-life examples of how the command/sql is used | `/docs/sql-guide/functions/function-rtrim` |
