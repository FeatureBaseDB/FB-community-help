# Include files are for common content

We use `include` files to avoid:
* typing the same thing over and over again in different ways, and
* creating a maintenance nightmare

Include files work a little like GitHub gist files in that they are inserted into the target file at build.

## Before you begin

* [Learn about INCLUDE files on the Jekyll site](https://jekyllrb.com/docs/includes/){:target="_blank"}

## Where are include files found?

`/_includes/<foldername>`

Folders are set up to keep the files in a logical order

## File naming

Points to remember:

* Folders have parallel names (but NEVER identical) to the relevant content folder.
* Filenames are prefixed by the product
* The filename should be a general summary of the content
* Naming include files can be a bit convoluted, so do your best.


| Filename | Description | Example |
|---|---|---|
| `<product>-summary-<feature>.md` | Summary of functionality | cloud-summary-billing-contract.md |
| `<product>-<feature>-<description>.md` | describe whatever is in the file as best you can | `cloud-user-edit-steps.md` |

## Inserting an include file

Add an include file with the following shortcode:

```
{% include /folder/filename.md %}
```

## Warnings

### Includes in tables

It is possible to use an `include` file in table, but ONLY under the following circumstances:

| Circumstance | Description |
|---|---|
| Last row of markdown table | Add an appropriately formatted include file to the END of a table |
| Inserted in a table cell | This will ONLY work if you construct the whole table as HTML. If the table is markdown, a blank line is inserted after the row that contains the include |

## Troubleshooting

* **Always** do a search for the include file **Before** editing it because any destination will be affected by your edits
* Conflicts are likely if include filenames match those under `/docs`
* **NEVER** nest include files within each other because this makes editing and troubleshooting harder to complete

### Build errors

The build will be affected if:

* You name an include file the same as a file under `/docs`
* You've inserted the include shortcode **but** the include file does not exist
* Shortcode include file name or path is incorrect
* mis-spelled `include` (e.g., includ, includes, etc)
* forgotten brackets or percent symbols
