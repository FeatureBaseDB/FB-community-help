FeatureBase ingest uses UPSERT behavior, but the ways a value updates varies depending on the data type.

| UPDATE Value | UPDATE Behavior |
|---|---|
| New value of same type | Add new value to existing set of values along with the time associated to it |
| Existing value of same type | Keep the same value but update the time associated to it |