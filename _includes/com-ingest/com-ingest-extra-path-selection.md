### Value Path Selection

The `path` argument is an array of JSON object keys which are applied in order.

For example:

| Source data | Path selection | Value selected |
|---|---|---|
| `{"a":{"b":{"c":1}}}` | `["a","b","c"]` | 1 |

{: .note}
Use `allow-missing-fields` to avoid `path` errors where source data is missing.
