---
title: Running SQL queries
layout: default
parent: fbsql CLI SQL tool
grand_parent: Tools
nav_order: 5
---

# How do I run SQL queries with fbsql?

Valid SQL queries can be run directly in the fbsql interface and via files in accessible directories.

This reference explains fbsql flags relating to database connections and schema

## Before you begin

{% include /fbsql/fbsql-before-begin.md %}
{% include /fbsql/fb-db-create.md %}
{% include /fbsql/fbsql-help-quit.md %}

## Syntax

```
[
  (<meta-flag-prefix>)
    [ c|connect [ <cloud-database-name> | - ] ] |
    [ d[< tablename>|t|v ] ] |
    [ l|list ] |
    [ set <variable-name> [variable-value,...] ] |
    [ unset <variable-name> ] |
    [ i|include <filename> ] |
    [ watch <seconds> ] |
    [ t|timing [on|off] ] |
    [ p|print ] |
    [ r|reset ] |
]
<sql-query>
```

{% include /fbsql/fbsql-prefix-meta-flags.md %}

## Database flags

| Argument | Description | Additional information |
|---|---|---|
| `[c|connect] <cloud-database-name>` | Connect to an available database in the currently connected cloud account. | [Connect cloud database additional](#connect-cloud-database-additional) |
| `[c|connect] -` | Disconnect from the current cloud database |  |
| `d` | List all tables in the connected database. Equivalent to Cloud `SHOW DATABASE` statement | [SHOW DATABASE](/docs/sql-guide/statements/statement-db-show) |
| `d <tablename>` | Equivalent to `SHOW COLUMNS` statement | [SHOW COLUMNS](/docs/sql-guide/statements/statement-columns-show) |
| `dt` | Equivalent to `SHOW TABLES` statement | [SHOW TABLES](/docs/sql-guide/statements/statement-tables-show) |
| `dv` | Show definition of all views | [CREATE VIEWS](/docs/sql-guide/statements/statement-view-create) |
| `[l|list]` | List databases in connected Cloud database |  |

## File flags

| Flag | Description | Additional information |
|---|---|---|
| `file <filename> [<alias>]` | Create alias for filename to use in SQL queries | [Filename alias](#filename-alias) |
| `[w|write] <filename>` | Write most recent query or query buffer to file |  | [File write](#file-write) |
|`[i|include] <filename>` | Run content from file which can include valid meta-commands and SQL queries | Equivalent to `fbsql --file` command |

## Query flags

| Flag | Description | Default |
|---|---|---|
| `timing` | Toggle time SQL statement takes to execute | off |
| `watch <seconds>` | Repeat query from buffer or last in history at interval of <seconds> until failure or manual break |  |

## Query buffer flags

| Flag | Description |
|---|---|
| `[p | print]` | Display most recent query or query buffer to fbsql interface followed by a newline |
| `[r | reset]` | Reset query buffer |

## Set variable flags

| Flag | Description | Additional information |
|---|---|---|
| `set` | List all variable names |  |
| `[set|unset] <variable-name>` | Set or unset named variable |  |
| `set <variable-name> <value>...` | Set a variable name and value. Multiple values are concatenated. | [SET variable names](#set-variable-names) |

## SQL query syntax

* [SQL guide](/docs/sql-guide/sql-guide-home)

## Additional information

{% include /fbsql/fbsql-flags-execution-extra.md %}

{% include /fbsql/fbsql-query-buffer-extra.md %}

### Cloud database connect additional

{% include /fbsql/fbsql-db-connect-same.md %}

### Filename alias

Aliases are case sensitive and can be inserted into statements in two ways:

| Quotation marks | Example |
|---|---|
| Single | `:'<variable-name>'` |
| Double | `:"<variable-name>"` |

### Query output formatting

Query output can be formatted using `PSET` (Print Set) meta flags.

* [PSET query output formatting reference](/docs/tools/fbsql/fbsql-query-output-format)

## Examples

### Filename alias examples

#### Alias for CSV file

Create a filename alias for file containing CSV data:

```
\file insert_test.csv icsv
```

Use the alias in SQL statement:

```sql
fbsql-# bulk replace
     -#     into insert_test (_id, int1, string1, timestamp1)
     -#     map (0 id, 1 int, 2 string)
     -#     transform (@0, @1, @2, current_timestamp)
     -# from
     -#     'icsv'
     -# with
     -#     format 'CSV'
     -#     input 'STREAM';
```

#### Alias for SQL file

* Create `docviewtest.sql` and add the following SQL statement:

```sql
SELECT * from doctest where _id = 0;
```

Add filename alias:

```
fbsql -c '\file docviewtest.sql mynewview'
```

Use the alias in a SQL statement:

```sql
CREATE VIEW docview AS :mynewview;
```

### SET variable

| SET variable | Result |
|---|---|
| `set myvarname 1,2,3,4` | `myvarname = '1,2,3,4'` |
| `set myvarname 1 2 3 4` | `myvarname = '1234'` |

### SET variable in a query

`\SET prod products`

Query with variable

`select * from :prod;`

## Further information

* [SQL Guide](/docs/sql-guide/sql-guide-home)
* [PSET SQL Query output formatting](/docs/tools/fbsql/fbsql-query-output-format)
