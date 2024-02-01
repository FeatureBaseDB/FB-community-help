### Missing value processing

Missing and empty string values are handled the same.

| Field data type | Expected behaviour |
|---|---|
| `"ID"` | Error if ``"ID"`` selected for id-field. Otherwise, do not update value in index. |
|`"DateInt"`| Raise error during ingestion - timestamp must have a valid value.|
|`"Timestamp"`| Raise error during ingestion - input is not time. |
|`"RecordTime"`| Do not update value in index. |
|`"Int"` | Do not update value in index. |
|`"Decimal"`| Do not update value in index. |
| `"String"` | Error if `"String"` select for primary-key field. Otherwise do not update value in index.
|`"Bool"`| Do not update value in index. |
|`"StringArray"`| Do not update value in index. |
|`"IDArray"`| Do not update value in index. |
|`"ForeignKey"` | Do not update value in index. |
