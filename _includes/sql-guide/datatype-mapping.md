This table provides mapping between [FeatureBase SQL data types](https://docs.featurebase.com/docs/sql-guidedata-types/data-types-home) and internal data types used by the application for configuring ingestion, API calls, etc.

| General data type | FeatureBase SQL data type | Internal data type | Additional information |
|---|---|---|---|
| boolean | [bool](https://docs.featurebase.com/docs/sql-guidedata-types/data-type-bool) | bool |  |
| integer | [int](https://docs.featurebase.com/docs/sql-guidedata-types/data-type-int) | int |  |
| decimal | [decimal](https://docs.featurebase.com/docs/sql-guidedata-types/data-type-decimal) | decimal |  |
| not applicable | [id](https://docs.featurebase.com/docs/sql-guidedata-types/data-type-id) | mutex | Table primary key |
| not applicable | * [idset](https://docs.featurebase.com/docs/sql-guidedata-types/data-type-idset)<br/>* [idsetq](https://docs.featurebase.com/docs/sql-guidedata-types/data-type-idsetq) | set | Used to reduce table rows and make queries more efficient.  |
| string | [string](https://docs.featurebase.com/docs/sql-guidedata-types/data-type-string) | keyed mutex |  |
| not applicable | * [stringset](https://docs.featurebase.com/docs/sql-guidedata-types/data-type-stringset)<br/>* [stringsetq](https://docs.featurebase.com/docs/sql-guidedata-types/data-type-stringsetq) | keyed set | Used to reduce table rows and make queries more efficient. |
| timestamp | [timestamp](https://docs.featurebase.com/docs/sql-guidedata-types/data-type-timestamp) | timestamp |  |
