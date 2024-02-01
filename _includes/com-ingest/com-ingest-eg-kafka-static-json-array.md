`kafka-static-header-2.json` reads values from the Kafka message and structures the values according to the destination table.

```json
[
    {
        "name": "from_ip",
        "path": [
            "from_interface",
            "ip"
        ],
        "type": "string"
    },
    {
        "name": "from_port",
        "path": [
            "from_interface",
            "port"
        ],
        "type": "int"
    },
    {
        "name": "to_ip",
        "path": [
            "to_interface",
            "ip"
        ],
        "type": "string"
    },
    {
        "name": "to_port",
        "path": [
            "to_interface",
            "port"
        ],
        "type": "int"
    },
    {
        "name": "event_time",
        "path": [
            "event_time"
        ],
        "type": "timestamp"
    },
    {
        "name": "severity",
        "path": [
            "severity"
        ],
        "type": "set"
    },
    {
        "name": "bytes",
        "path": [
            "bytes"
        ],
        "type": "int"
    },
    {
        "name": "protocol",
        "path": [
            "protocol"
        ],
        "type": "string"
    }
]
```
