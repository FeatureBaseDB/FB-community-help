<!--Copied from /com-inges/old-kafka-ingester-config.md -->
<!--compare with PQL data types already in PQL-guide folder-->
<!--Rip out ingest-specific stuff to the "extra" include files in com-ingest-->
<!--Relates to includes/com-ingest/com-ingest-kafka-static-type-map.md-->
<!-- CAPTAIN OBVIOUS -- this include file is a dump and NOT TO BE USED IN ANY LIVE DOCS UNTIL FIXED!! -->


| Data type | Description | Values | Default | Additional information |
|---|---|---|---|
| Layout | Format to parse time strings |
| Min |
| Max |
| Mutex |
| Quantum |
|

When all config options are left as default, the `"Config"` field may be omitted. Otherwise, the config options are:
* `"Mutex"`: if set to `true`, the data will be ingested into a mutex field instead of a set field
* `"Quantum"`: the time quantum selection (Any Combination of  time granularity `Y`,`M`,`D`,`H` that doesn't skip a grain e.g. `"YM"`/`"MDH"` but not `YD`) to use when ingesting into a time column using the time value from a `"recordTime"`
* `"CacheConfig"`: the configuration when using a `TopN` cache; does not affect time fields
* `"TTL"`: Time To Live duration for views specifies when views will deleted. Allowed time units are `h`, `m`, `s`, `ms`, `us`, `ns`. Time quantum is required in order to use TTL.
* `"Layout"`: the format in which to parse time strings (defaults to RFC3339) - specified in [Go's format](https://golang.org/pkg/time/#pkg-constants)
* `"Min"`: the minimum possible value for an acceptable integer (defaults to -2^63)
* `"Max"`: the maximum possible value for an acceptable integer (defaults to 2^63 - 1)
* `"ForeignIndex"`: the target index to reference columns of
* `"Scale"`: the number of digits of precision to store after the decimal point
* `"Epoch"`: Only set `Epoch` if the incoming data is a number (rather than a timestamp string). The incoming number will be interpreted as the number of `Unit` since `Epoch`. The value may specify a timezone, for example `"1980-11-30T14:20:28.000+07:00"`, or use zulu time (i.e. +00:00) `"1980-11-30T14:20:28.000Z"`. Defaults to the Unix epoch if not configured.  E.G. If the `Unit` is 's' and the `Epoch` is January 1, 2000 and the number is 86,400 then the number represents January 2, 2000.
* `"Unit"`: For a (`dateInt`) type field, `Unit` is the time unit in which to store a timestamp.  For the (`recordTime`, `timestamp`) type fields, only set `Unit` if the incoming data is a number (rather than a timestamp string). The incoming number will be interpreted as the number of `Unit` since `Epoch`. `Unit` Can be `"d"`, `"h"`, `"m"`, `"s"`, `"ms"`, `"us"`, `"ns"`, for day, hour, minute, second, millisecond, microsecond, nanosecond respectively or `"c"` for custom (using `"CustomUnit"` for `dateInt`). Defaults to `"s"`.  E.G. If the `Unit` is 's' and the `Epoch` is January 1, 2000 and the number is 86,400 then the number represents January 2, 2000.
* `"CustomUnit"`: a 'duration' value which specifies a custom time unit; accepts values like "6h" for 6 hours, "1m30s" for 1 minute and 30 seconds; valid units can be described using "ns", "us", "ms", "s", "m", or "h"
* `"Granularity"`: the resolution at which the incoming values will be stored. Allowed values are `s`, `ms`, `us`, `ns`. Defaults to `"s"`.

The `"CacheConfig"` option specifies the size and type of a [`TopN`](/docs/pql-guide/pql-read-topn) cache for a set or mutex field.
This "cache" is used for the `TopN` approximation.
The default setting is:
```json
{
	"CacheType": "ranked",
	"CacheSize": 50000,
}
```

When using the `"ranked"` cache type, increasing the "cache" size will increase the number of top rows tracked within a shard of data (theoretically improving precision).
Assuming that the cache is full (the field has more than `"CacheSize"` rows within each shard), the `TopN` cache's memory usage is jointly proportional to the cache size and number of shards.

This cache can also be disabled by setting the type to `"none"`.
Disabling the `TopN` cache will prevent `TopN` from working.
When operating on a field without a cache, a slower [`TopK`](/docs/pql-guide/pql-read-topk) or sorted [`GroupBy`](/docs/pql-guide/pql-read-groupby) query may be used instead.

### Time Quantum

Setting a time quantums involves creating two fields. A field that contains the data that will be set with a time, and a field that holds the actual time. Note that the time field won't be a field in the target table and can be named anything. It is only is used as the time associated with all time quantums for the ingester. An example of the this might be "stores_visited_id" that holds all store ids someone has visited and at what time they visited that store last:

```json
[
	{
		"name": "stores_visited_id",
		"path": ["Path to stores_visited_id"],
		"type": "id",
		"config": {
			"Mutex": false
		}
	}
]
```

```json
[
	{
		"name": "Any name you want",
		"path": ["location to the timestamp/epoch"],
		"type": "recordTime"
	}
]
```

For `"recordTime"` fields, there are essentially two modes. If `"Epoch"` or `"Unit"` are set, then the incoming data is interpreted as a number. Otherwise it's assumed that the incoming data is interpreted as a date/timestamp and the `"Layout"` is used to parse that value.
