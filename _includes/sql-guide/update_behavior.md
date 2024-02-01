FeatureBase ingest uses UPSERT behavior, but the ways a value updates varies depending on the data type.

| Literal Value | Target Data Type | Resultant | Additional information |
|---|---|---|---|
| Value of same type  | All unless explicitly listed | Replace existing value with literal value | |
| string literal  | `stringset` | Add new value to existing set of values if it does not exist | |
| string literal  | `stringsetq` | Add new value to existing set of values if it does not exist or update associated timestamp and views if value does exist | |
| integer literal  | `idset` | Add new value to existing set of values if it does not exist | |
| integer literal  | `idsetq` | Add new value to existing set of values if it does not exist or update associated timestamp and views if value does exist | |
| `,NULL,` | All unless explicitly listed | set to `NULL` |  |
| `,[],` | `stringset` <br/>`idset` <br/>`stringsetq` <br/>`idsetq` |Keep existing set of values or set to `[]` (empty set) if existing set is `NULL` | |