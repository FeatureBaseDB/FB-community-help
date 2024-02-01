### header-defined.csv

This CSV file defines the header row as follows:

| Field | Data type | Additional |
|---|---|---|
| `username` | `String` | This will be used as the primary key |
| `salary` | `Int` |  |
| `created_at` | `Timestamp` | Timestamp field with 1 second granularity and parse dates with this [layout](https://pkg.go.dev/time#pkg-constants) 2006-01-02T15:04  |
| `balance` | `Decimal` | Scale of 2 (store two decimal places) |
| `account_types` | `StringArray` | Values are comma separated list enclosed in double quotes |

```
username__String,salary__Int,created_at__Timestamp_s_2006-01-02T15:04,balance__Decimal_2,account_types__StringArray
erin,85000,2019-05-22T13:44,334.43,"checking,savings"
will,90000,2019-05-22T13:44,111.13,"savings"
john,35000,2019-05-22T13:44,999.22,"savings"
paul,50000,2019-05-22T13:44,444.53,"checking,savings"
mary,40000,2019-05-22T13:44,555.63,"checking,savings"
jack,95000,2019-05-22T13:44,888.73,"savings"
dogg,85000,2019-05-22T13:44,777.83,"checking,savings"
zoom,15000,2019-05-22T13:44,222.93,"checking"
```
