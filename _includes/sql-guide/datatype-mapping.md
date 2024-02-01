This table provides mapping between [FeatureBase SQL data types](/docs/sql-guide/data-types/data-types-home) and internal data types used by the application for configuring ingestion, API calls, etc.

| General data type | FeatureBase SQL data type | Internal data type | Additional information |
|---|---|---|---|
| boolean | [bool](/docs/sql-guide/data-types/data-type-bool) | bool |  |
| integer | [int](/docs/sql-guide/data-types/data-type-int) | int |  |
| decimal | [decimal](/docs/sql-guide/data-types/data-type-decimal) | decimal |  |
| not applicable | [id](/docs/sql-guide/data-types/data-type-id) | mutex | Table primary key |
| not applicable | * [idset](/docs/sql-guide/data-types/data-type-idset)<br/>* [idsetq](/docs/sql-guide/data-types/data-type-idsetq) | set | Used to reduce table rows and make queries more efficient.  |
| string | [string](/docs/sql-guide/data-types/data-type-string) | keyed mutex |  |
| not applicable | * [stringset](/docs/sql-guide/data-types/data-type-stringset)<br/>* [stringsetq](/docs/sql-guide/data-types/data-type-stringsetq) | keyed set | Used to reduce table rows and make queries more efficient. |
| timestamp | [timestamp](/docs/sql-guide/data-types/data-type-timestamp) | timestamp |  |
| vector | [vector](/docs/sql-guide/data-types/data-type-vector) | vector |  |
