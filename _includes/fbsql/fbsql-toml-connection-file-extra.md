### Connection file

You can setup a file containing connection details in the `*/fbsql/featurebase` directory or in an accessible file path.

Connections files have a `.toml` extension and contain:
* a valid combination of arguments and values in form `argument = "value"`,
* on individual lines,
* with leading `--` and trailing `\` omitted.
