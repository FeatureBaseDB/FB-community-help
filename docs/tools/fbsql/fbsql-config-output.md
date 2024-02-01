---
title: Output flags
layout: default
parent: fbsql CLI SQL tool
grand_parent: Tools
nav_order: 10
---

# fbsql output flags

{% include /fbsql/fbsql-output-flags-summary.md %}

## Before you begin

{% include /fbsql/fbsql-before-begin.md %}
{% include /fbsql/fb-db-create.md %}
{% include /fbsql/fbsql-help-quit.md %}

## Syntax

```
(<meta-prefix>)
  [--history-path="<directory-name>"] |
  [cd [<directory-name>]] |
  [[o | out] <query-output-filename>] |
  [qecho <text>] |
  [warn <text>]
]
```

{% include /fbsql/fbsql-prefix-meta-flags.md %}

## History logs

| Flag | Description | Default |
|---|---|---|
| `--history-path="<directory-name>"` | Save CLI and fbsql interface execution history to new folder | `<user-home>.featurebase/fbsql_history` |

## File output

| Flag | Description | Additional information |
|---|---|---|
| `cd [<directory-name>]` | Set fbsql file directory to $home or specified directory | Default is Directory fbsql started |

## Write text to output

| Flag | Description |
|---|---|
| `[o | out] <query-output-filename>` | Define existing file to output query results |
| `echo <text>` | Output `<text>` to fbsql interface |
| `qecho <text>` | Output `<text>` to file defined by `\[o|output <output-filename>]` |
| `warn <text>` | Output `<text>` to fbsql standard error channel |

## Additional information

{% include /fbsql/fbsql-flags-execution-extra.md %}

{% include /fbsql/fbsql-query-buffer-extra.md %}

## Examples

## Create directory and open

```
\! mkdir newfolder
\cd newfolder

```

## Output query results to file

```
\out output-test.sql
\! ls
output-test.sql
```

## Write comment to file

```
\qecho Testing 1,2,3
\! cat output-test.sql
Testing 1,2,3
```

## Run query and verify output saved to correct file

```
select * from products;
\! cat output-test.sql

Testing 1,2,3
 _id | item                 | price  | stock
-----+----------------------+--------+-------
   1 | pen                  | 2.50   | NULL
   2 | pencil               | 0.50   | NULL
   3 | playpen              | 52.50  | NULL
   4 | gold-plated earplugs | 122.50 | NULL
(0 rows)
```

## Further information

* [PSET SQL query output formatting reference](/docs/tools/fbsql/fbsql-query-output-format)
* [Learn about RFC-4180 quoting rules](https://www.rfc-editor.org/rfc/rfc4180){:target="_blank"}
