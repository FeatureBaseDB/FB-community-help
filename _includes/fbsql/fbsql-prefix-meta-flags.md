## Meta-command flag prefix

Meta-command flags can be run from the fbsql interface or CLI using an appropriate prefix:

| Interface | Prefix | Description | Example |
|---|---|---|---|
| fbsql | `\` | Leading backslash followed by one or more meta-command flags and arguments separated by `\` backslash characters. | `\print \echo "this is a test"` |
| CLI | `fbsql [-c|--command]` | Meta-command flags enclosed in single or double quotes are executed without opening the fbsql interface | `fbsql --command '\print \echo this is a test'` |
