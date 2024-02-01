### Kafka delete records raw message

```
{"keys": {"array": ["9z4aw|5ptDx|CKs1F", "ASSAw|kauLy|oxjI0"]}, "filter": {"null": null}}
{"keys": {"null": null}, "filter": {"string": "Row(stringset_string='58KIR')"}}
```

* The first message deletes the entire record for records with ID `9z4aw|5ptDx|CKs1F` and `ASSAw|kauLy|oxjI0`.
* The second message deletes all records that had the value `58KIR` in the field `stringset_string`.
