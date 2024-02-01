<!-- Keep this in case useful for Cloud too -->

| Port | Used for | Example |
|---|---|---|---|
| `5432` |  External database for `ExternalLookup` queries | `lookup-db-dsn = "postgres://localhost:5432/db"` |
| `6831` | Tracing agent | `agent-host-port = "localhost:6831"` |
| `8125` |`statsd` metrics | `host = "localhost:8125"` |
| `9093` | Ingest metrics | `[metric] stats` |
| `10101` | FeatureBase IP address | `bind = "localhost:10101"` |
| `10301` | FeatureBase cluster listen peer address |  | * `listen-peer-address = "http://localhost:10301"`<br/>* `initial-cluster = "featurebase1=http://localhost:10301"` |
| `10401` | FeatureBase Cluster URL |  | * `cluster-url = "http://localhost:10401"`<br/>* `listen-client-address = "http://localhost:10401"` |
| `20101` | Bind grpc | `bind-grpc = "0.0.0.0:20101"` |
