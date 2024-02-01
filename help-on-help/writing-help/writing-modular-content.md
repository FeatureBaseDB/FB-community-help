# Write modular content

Endless scroll articles seem a good way to present information to users but **only** from the point of view of someone who **already knows how to use the system**.

For everyone else, they're a nightmare.

## Before you begin

* [Learn about planning content](/help-on-help/writing-help/planning content.md)

## The issues with endless scroll

### Issue: A user may not complete a process in one go

It is impossible to guarantee a user will have time to complete a long process in one go.

What’s more likely is they’ll stop and start for:
* lunch, conversations, meetings
* go home & come back
* turn computer off and on at beginning/end of day (or the computer crashes and restarts)

If this happens, they need to:
* search a long page for where they were up to
* hope they're right about where they left off, OR
* start the whole thing again in the hope the system will forgive them for repeating steps.

### Issue: A user may be searching for specific information

On the whole, website search indexes everything in a site, so when the user enters a keyword, it'll be displayed.

But what's **not** guaranteed is that search will take the user **straight** to the search keyword.

More likely, the user will be dumped at the top of a given page that **features** the search term, then have to search **again** to find the term.

## Issue: Search takes the user to the correct content in a longer page

If search **does** take the user to a specific instance of a keyword in a long page of content, they have an additional problem:

> Is the preceding content a requirement to understand or perform what I've searched for?

## Solution: How we avoid these problems

Very simply, we write modular documentation.

Or put another way:

> If you wouldn't write all your code in one huge file, don't write content as endless scroll

For example:

| Writing Code | Writing Docs |
|---|---|
| Reuse common functions/code/components | Don’t code the same thing in multiple places |
| If you’ve already explained something, reuse it by creating:<br/>* a workflow of individual pages which can be used for different use cases<br/>* Jekyll include files (reusable files) which can be inserted into other pages
| Use third-party components rather than writing your own | Don’t reinvent the wheel.<br/>* If someone else has already documented something, just hyperlink to it (e.g., SQL guide)<br/>* If you’ve already explained a concept or a procedure, create an `/_include` file so it can be reused |
| Code reference systems to refer to when writing code | Code reference files to help end users understand syntax, arguments and usage of API and other systems. These are then be hyperlinked from procedural help rather than duplicating the content. |
| Spaghetti code is difficult to debug and regression test. | Rambling content that jumps from one idea to the next in no logical order is difficult to follow for the user, and makes it easier to make mistakes |
| Raise a Pull Request so code changes can be reviewed and tested before being merged and deployed. | Raise a Pull Request so help content changes can be reviewed and tested before being merged and deployed. |

## How do I determine how the content should be written?

* [Plan your content](/writing-help/writing-planning-content)
* [Content planning checklist with examples](/writing-help/writing-content-checklist)
