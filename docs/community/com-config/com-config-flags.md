---
title: Configuration flags
layout: default
parent: Community configuration
grand_parent: Community
---

# FeatureBase community Command Line Interface (CLI) configuration flags
{: .no_toc }

The following configuration flags are used in different contexts within FeatureBase Community.

{% include page-toc.md %}

## Before you begin

{% include /com-install/com-install-before-begin.md %}

## CLI configuration flags

FeatureBase can be configured through command line flags, environment variables, and/or a TOML configuration file; configured options take precedence in that order.

{: .warning}
Environment variables require passing `--future.rename` flag to use.

| CLI Flag | Environment Variable | Type  | Description  |
|---|---|---|-------|
| [advertise](#advertise)| FEATUREBASE_ADVERTISE  | str   | Address to advertise externally.   |
| [advertise-grpc](#advertise-grpc) | FEATUREBASE_ADVERTISE_GRPC | str   | Address to advertise externally for gRPC. |
| [bind](#bind) | FEATUREBASE_BIND | str   | Default URI on which FeatureBase should listen.   |
| [bind-grpc](#bind-grpc)| FEATUREBASE_BIND_GRPC   | str   | URI on which FeatureBase should listen for gRPC requests. |
| [data-dir](#data-dir) | FEATUREBASE_DATA_DIR   | str   | Directory to store FeatureBase data files. |
| [log-path](#log-path) | FEATUREBASE_LOG_PATH   | str   | Path to store FeatureBase logs. |
| [max-file-count](#max-file-count) | FEATUREBASE_MAX_FILE_COUNT  | int   | Soft limit on the maximum number of fragment files FeatureBase keeps open simultaneously. |
| [max-map-count](#max-map-count) | FEATUREBASE_MAX_MAP_COUNT   | int   | Limits the maximum number of active mmaps. FeatureBase will fall back to reading files once this is exhausted. Set below your system's vm.max_map_count. |
| [max-writes-per-request](#max-writes-per-request)| FEATUREBASE_MAX_WRITES_PER_REQUEST   | int   | Number of write commands per request. |
| [max-query-memory](#max-query-memory)  | FEATUREBASE_MAX_QUERY_MEMORY| int   | Maximum memory allowed per Extract() or SELECT query. |
| [name](#name)| FEATUREBASE_NAME   | str   | Name of the node in the cluster. |
| [verbose](#verbose)  | FEATUREBASE_VERBOSE| bool  | Enable verbose logging |
| [anti-entropy.interval](#anti-entropy-interval) | FEATUREBASE_ANTI_ENTROPY_INTERVAL| str   | Interval at which to run anti-entropy routine. |
| [cluster.name](#cluster-name) | FEATUREBASE_CLUSTER_NAME| str   | Human-readable name for the cluster. |
| [cluster.long-query-time](#cluster-long-query-time)| FEATUREBASE_CLUSTER_LONG_QUERY_TIME  | str   | Duration that will trigger log and stat messages for slow queries. |
| [cluster.replicas](#cluster-replicas)  | FEATUREBASE_CLUSTER_REPLICAS| int   | Number of hosts each piece of data should be stored on. |
| [cluster.partition-to-node-assignment](#cluster-partition-to-node-assignment) | CLUSTER_PARTITION_TO_NODE_ASSIGNMENT| str   | How to assign partitions to nodes. jmp-hash or modulus |
| [etcd.advertise-client-address](#etcd-advertise-client-address)  | FEATUREBASE_ETCD_ADVERTISE_CLIENT_ADDRESS| str   | Advertise client address. If not provided, uses the listen client address. |
| [etcd.advertise-peer-address](#etcd-advertise-peer-address)| FEATUREBASE_ETCD_ADVERTISE_PEER_ADDRESS  | str   | Advertise peer address. If not provided, uses the listen peer address. |
| [etcd.cluster-url](#etcd-cluster-url)  | FEATUREBASE_ETCD_CLUSTER_URL| str   | Cluster URL to join. |
| [etcd.initial-cluster](#etcd-initial-cluster)  | FEATUREBASE_ETCD_INITIAL_CLUSTER| str   | Initial cluster name1=apurl1,name2=apurl2 |
| [etcd.listen-client-address](#etcd-listen-client-address) | FEATUREBASE_ETCD_LISTEN_CLIENT_ADDRESS   | str   | Listen client address. |
| [etcd.listen-peer-address](#etcd-listen-peer-address)   | FEATUREBASE_ETCD_LISTEN_PEER_ADDRESS | str   | Listen peer address. |
| [handler.allowed-origins](#handler-allowed-origins)| FEATUREBASE_HANDLER_ALLOWED_ORIGINS  | list  | Comma separated list of allowed origin URIs (for CORS/Web UI). |
| [metric.diagnostics](#metric-diagnostics)| FEATUREBASE_METRIC_DIAGNOSTICS  | bool  | Enables diagnostics reporting. |
| [metric.host](#metric-host)  | FEATUREBASE_METRIC_HOST| str   | URI to send metrics when metric.service is statsd. |
| [metric.poll-interval](#metric-poll-interval)  | FEATUREBASE_METRIC_POLL_INTERVAL| str   | Polling interval for metrics.diagnositcs. |
| [metric.service](#metric-service)| FEATUREBASE_METRIC_SERVICE  | str   | Where to send stats: can be expvar (in-memory served at /debug/vars), prometheus, statsd or none. |
| [profile.block-rate](#profile-block-rate)| FEATUREBASE_PROFILE_BLOCK_RATE  | int   | Sampling rate for goroutine blocking profiler. One sample per rate ns. |
| [profile.mutex-fraction](#profile-mutex-fraction)| FEATUREBASE_PROFILE_MUTEX_FRACTION   | int   | Sampling fraction for mutex contention profiling. Sample 1/rate of events |
| [storage.backend](#storage-backend)   | FEATUREBASE_STORAGE_BACKEND | str   | Storage backend to use: 'rbf' is only supported value. |
| [tls.ca-certificate](#tls-ca-certificate)| FEATUREBASE_TLS_CA_CERTIFICATE  | str   | TLS CA certificate path (usually has the .pem extension) |
| [tls.certificate](#tls-certificate)   | FEATUREBASE_TLS_CERTIFICATE | str   | TLS certificate path (usually has the .crt or .pem extension) |
| [tls.enable-client-verification](#tls-enable-client-verification) | FEATUREBASE_TLS_ENABLE_CLIENT_VERIFICATION| bool  | Enable TLS certificate client verification for incoming connections |
| [tls.key](#tls-certificate-key)  | FEATUREBASE_TLS_KEY| str   | TLS certificate key path (usually has the .key extension) |
| [tls.skip-verify](#tls-skip-verify)   | FEATUREBASE_TLS_SKIP_VERIFY | bool  | Skip TLS certificate server verification (not secure) |
| [tracing.agent-host-port](#tracing-agent-hostport)| FEATUREBASE_TRACING_AGENT_HOST_PORT  | str   | Jaeger agent host:port. |
| [tracing.sampler-param](#tracing-sampler-parameter) | FEATUREBASE_TRACING_SAMPLER_PARAM| float | Jaeger sampler parameter. |
| [tracing.sampler-type](#tracing-sampler-type)  | FEATUREBASE_TRACING_SAMPLER_TYPE| str   | Jaeger sampler type (remote, const, probabilistic, ratelimiting) or 'off' to disable tracing completely. |
| [translation.map-size](#translation-map-size)  | FEATUREBASE_TRANSLATION_MAP_SIZE| int   | Size in bytes of mmap to allocate for key translation. |
| [auth.enable](#auth-authenticationauthorization-configuration)  | FEATUREBASE_AUTH_ENABLE| bool  | Enable AuthN/AuthZ of featurebase, disabled by default. |
| [auth.client-id](#auth-authenticationauthorization-configuration)| FEATUREBASE_AUTH_CLIENT_ID  | str   | Identity Provider's Application/Client ID. |
| [auth.client-secret](#auth-authenticationauthorization-configuration)| FEATUREBASE_AUTH_CLIENT_SECRET  | str   | Identity Provider's Client Secret. |
| [auth.authorize-url](#auth-authenticationauthorization-configuration)| FEATUREBASE_AUTH_AUTHORIZE_URL  | str   | Identity Provider's Authorize URL. |
| [auth.token-url](#auth-authenticationauthorization-configuration)| FEATUREBASE_AUTH_TOKEN_URL  | str   | Identity Provider's Token URL. |
| [auth.group-endpoint-url](#auth-authenticationauthorization-configuration)| FEATUREBASE_AUTH_GROUP_ENDPOINT_URL  | str   | Identity Provider's Group endpoint URL. |
| [auth.redirect-base-url](#auth-authenticationauthorization-configuration)| FEATUREBASE_AUTH_REDIRECT_BASE_URL   | str   | Base URL of the featurebase instance used to redirect IDP. |
| [auth.logout-url](#auth-authenticationauthorization-configuration)   | FEATUREBASE_AUTH_LOGOUT_URL | str   | Identity Provider's Logout URL. |
| [auth.scopes](#auth-authenticationauthorization-configuration)  | FEATUREBASE_AUTH_SCOPES| list  | Comma separated list of scopes obtained from IdP |
| [auth.secret-key](#auth-authenticationauthorization-configuration)   | FEATUREBASE_AUTH_SECRET_KEY | str   | Secret key used for auth. |
| [auth.permissions](#auth-authenticationauthorization-configuration)  | FEATUREBASE_AUTH_PERMISSIONS| str   | Permissions' file with group authorization. |
| [auth.query-log-path](#auth-authenticationauthorization-configuration)   | FEATUREBASE_AUTH_QUERY_LOG_PATH | str   | Path to log user queries |
| [auth.configured-ips](#auth-authenticationauthorization-configuration)   | FEATUREBASE_AUTH_CONFIGURED_IPS | str   | List of configured IPs allowed for ingest |


Options are listed in the table by their CLI and Environment names. Further details are given below with the TOML configuration file variables. Note that there is a direct correlation between the CLI name and the TOML name. For example, the CLI flag `etcd.initial-cluster` is identified in TOML as:

```toml
[etcd]
  initial-cluster = "featurebase1=http://localhost:10301,featurebase2=http://localhost:10302"
```



### Advertise

Address advertised by the server to other nodes in the cluster and to clients via the `/status` endpoint. Host defaults to the IP address represented by `bind` and port to 10101. If `bind` is set to `0.0.0.0` and `advertise` is not specified, then FeatureBase will try to determine a reasonable, external IP address to use for `advertise`.


```toml
advertise = 192.168.1.100:10101
```

### Advertise gRPC

Address advertised by the server to other nodes in the cluster and to clients via the `/status` endpoint. Host defaults to the IP address represented by `bind` and port to 20101. If `bind` is set to `0.0.0.0` and `advertise-grpc` is not specified, then FeatureBase will try to determine a reasonable, external IP address to use for `advertise-grpc`.


```toml
advertise-grpc = 192.168.1.100:20101
```

### Bind

host:port on which the FeatureBase server will listen for requests. Host defaults to localhost and port to 10101. If `bind` is set to `0.0.0.0` then FeatureBase will listen on all available interfaces.


```toml
bind = localhost:10101
```
### Bind gRPC

host:port on which the FeatureBase server will listen for GRPC connections (Ex. python-molecula, grafana for queries, etc.). Host defaults to localhost and port to 20101. If `bind-grpc` is set to `0.0.0.0` then FeatureBase will listen on all available interfaces.


```toml
bind-grpc = localhost:20101
```


### Data Dir

Directory to store FeatureBase data files.


```toml
data-dir = "/opt/molecula/featurebase"
```



### Log Path

Path of log file.


```toml
log-path = "/path/to/logfile"
```



### Name

Unique name for the node in the cluster.


```toml
name = "featurebase0"
```



### Verbose

Enable verbose logging.


```toml
verbose = true
```



### Max Map Count

Maximum number of active memory maps FeatureBase will use for fragment files (actual total usage may be slightly higher). Best practice is to set this ~10% lower than your system's maximum map count (obtained via `sysctl vm.max_map_count` on Linux). If you plan on having lots of fragments per host, it's a good idea to raise both the system's max map count, and FeatureBase's. The number of fragments is a function of the number of shards, fields, and time quantums. Using, for example, YMDH time quantum fields with a wide range of timestamps will create lots of fragments. When FeatureBase exhausts the max-map-count it falls back to reading files directly into memory. This can be a bit slower, and cause slower restarts, but is generally fine.

```toml
max-map-count = 1000000
```

### Max Writes Per Request

Maximum number of mutating commands allowed per request. This includes Set, Clear, ClearRow, and Store.

```toml
max-writes-per-request = 5000
```

### Max File Count

A soft limit on the maximum number of files that FeatureBase will keep open simultaneously. When past this limit, FeatureBase will only keep files open for as long as it needs to write updates. This will negatively affect performance in cases where FeatureBase is doing lots of small updates.

```toml
max-file-count = 1000000
```
### Max Query Memory
A limit on the maximum memory allowed per Extract() or SELECT query. When past this limit, FeatureBase will return an error ```"query result exceeded memory threshold"```. When limit is not set, the max query memory is set to 20% of total memory of the node by default. The max query memory is specified in bytes.

```toml
max-query-memory = 4000000000
```

### Cluster Name

Name for the cluster, must be the same on all nodes in the cluster.

```toml
[cluster]
  name = "cluster0"
```

### Cluster Long-Query Time

Long-Query Time represents duration of time that will trigger log and stat message for queries longer than X time. Ex. "1m30s" 1 minute 30 seconds

```toml
[cluster]
  long-query-time = "10s"
```

### Cluster Replicas

Number of hosts each piece of data should be stored on. Must be greater than or equal to 1 and less than or equal to the number of nodes in the cluster.

```toml
[cluster]
  replicas = 1
```

### Cluster Partition To Node Assignment

{: .warning}
This controls how partitions are assigned to cluster nodes. Default is "jmp-hash". Larger clusters will experience more equal data distribution using "modulus". This *must* not be changed once a cluster has data, only set this option to something different on a brand new cluster. To change from the default to modulus, take a backup, start up a new empty cluster with the setting set to "modulus", then restore your backup into the new cluster.

```toml
[cluster]
  partition-to-node-assignment =jmp-hash
```

### Etcd Advertise Client Address

Address to advertise externally for client connections. If a value is not provided, this will default to the value provided for `etcd.listen-client-address`.

```toml
[etcd]
  advertise-client-address = "http://localhost:10401"
```

### Etcd Advertise Peer Address

Address to advertise externally for peer connections. If a value is not provided, this will default to the value provided for `etcd.listen-peer-address`.

```toml
[etcd]
  advertise-peer-address = "http://localhost:10301"
```

### Etcd Cluster URL

URL of an existing cluster that a new node should join to when growing the cluster.

```toml
[etcd]
  cluster-url = "http://localhost:10401"
```

### Etcd Initial Cluster

Comma-separated list of `node=address` pairs which make up the initial cluster when it's first started. In each pair, the `node` value—the left side of the `=` sign—should match the name of the node which is specified by its `name` configuration parameter.

```toml
[etcd]
  initial-cluster = "featurebase1=http://localhost:10401,featurebase2=http://localhost:10402"
```

### Etcd Listen Client Address

Address and port to bind to for client communication.

```toml
[etcd]
  listen-client-address = "http://localhost:10401"
```

### Etcd Listen Peer Address

Address and port to bind to for peer communication.

```toml
[etcd]
  listen-peer-address = "http://localhost:10301"
```

### Profile CPU

If this is set to a path, collect a cpu profile and store it there.

```toml
[profile]
  cpu = "/path/to/somewhere"
```

### Profile CPU Time

Amount of time to collect cpu profiling data at startup if `profile.cpu` is set.

```toml
[profile]
  cpu-time = "30s"
```

### Metric Service

Which stats service to use for collecting metrics. Choose from [statsd, expvar, prometheus, none].

```toml
[metric]
  service = "statsd"
```

### Metric Host

Address of the StatsD service host.

```toml
[metric]
  host = "localhost:8125"
```

### Metric Poll Interval

Rate at which runtime metrics (such as open file handles and memory usage) are collected.

```toml
[metric]
  poll-interval = "0m15s"
```

### Metric Diagnostics

Enable reporting of limited usage statistics to FeatureBase developers. To disable, set to false.

```toml
[metric]
  diagnostics = true
```

### Storage Backend

Storage backend to use for all indexes in the cluster. Options are: "rbf", "roaring", "bolt". "bolt" is used for testing, and "roaring" is deprecated. Don't change this unless you know what you're doing. Default: "rbf".

```toml
[storage]
  backend = "rbf"
```

### TLS CA Certificate

Path to the TLS CA certificate to use for serving HTTPS. Usually has one of `.crt` or `.pem` extensions.

```toml
[tls]
  ca-certificate = "/srv/featurebase/certs/server.crt

### TLS Certificate

Path to the TLS certificate to use for serving HTTPS. Usually has one of `.crt` or `.pem` extensions.

```toml
[tls]
  certificate = "/srv/featurebase/certs/server.crt"
```

### TLS Certificate Key

Path to the TLS certificate key to use for serving HTTPS. Usually has the `.key` extension.

```toml
[tls]
  key = "/srv/featurebase/certs/server.key"
```

### TLS Skip Verify

Disables verification for checking TLS certificates. This configuration item is mainly useful for using self-signed certificates for a FeatureBase cluster. Do not use in production since it makes man-in-the-middle attacks trivial.

```toml
[tls]
  skip-verify = true
```

### Tracing Sampler Type

Jaeger sampler type (const, probabilistic, ratelimiting, or remote). Set to '`off`' to disable tracing completely.

```toml
[tracing]
  sampler-type = "remote"
```

### Tracing Sampler Parameter

Jaeger sampler parameter (number)

```toml
[tracing]
  sampler-param = 0.001
```

### Tracing Agent Host/Port

Jaeger agent host:port

```toml
[tracing]
  agent-host-port = "localhost:6831"
```

### Profile Block Rate

Block Rate is passed directly to Go's runtime.SetBlockProfileRate. Goroutine blocking events will be sampled at 1 per `rate` nanoseconds. A value of "1" samples every event, and 0 disables profiling.

```toml
[profile]
  block-rate = 10000000
```

### Profile Mutex Fraction

Mutex Fraction is passed directly to Go's runtime.SetMutexProfileFraction. 1/`fraction` of events will be sampled.

```toml
[profile]
  mutex-fraction = 100
```

### Translation Map Size

Size in bytes of mmap to allocate for key translation

```toml
[translation]
  map-size = 10737418240
```

### SQL (preview) enabled

Enable or disable the SQL (preview) feature.

```toml
[sql]
  endpoint-enabled = true
```

### Auth (Authentication/Authorization) configuration
Parameters to configure FeatureBase authentication and authorization with an identity provider.

#### Parameters
- `enable`: enable/disable auth in FeatureBase.
- `secret-key`: Use `keygen` included in FeatureBase release to generate a secret key. This key is used for securing intra-node communication in a FeatureBase cluster.
```
featurebase keygen
```
- `permissions`: path to `permissions.yaml` file which maps group IDs from identity provider to permissions for indexes in FeatureBase.

Identity provider specific parameters should be obtained from the identity provider.
- `client-id`: client id for registered application.
- `client-secret`: client secret for registered application.
- `authorize-url`: authorization endpoint on the identity provider's domain.
- `token-url`: token endpoint to obtain JWT from identity provider.
- `redirect-base-url`: redirect url configured in identity provider without `/redirect`. This is usually the URI of your primary featurebase node, e.g. "https://your-ip-here:10101"
- `group-endpoint-url`: HTTP endpoint that returns groups for a user's valid JWT
- `logout-url`: identity provider's logout URL
- `scopes`: a list of scopes required for an access token to request groups from the identity provider.
- `configured-ips`: list of whitelisted IPs/subnets, admin permissions are granted for any request originating from an IP in this list. Domain names and `0.0.0.0/0` are not allowed options. If list is empty or if option is not set, no IPs are whitelisted.

#### Anti Entropy Interval

Interval at which the cluster will run its anti-entropy routine which ensures that all replicas of each shard are in sync.

```toml
[anti-entropy]
  interval = "10m0s"
```

#### CORS (Cross-Origin Resource Sharing) Allowed Origins

List of allowed origin URIs for CORS

```toml
[handler]
  allowed-origins = ["https://myapp.com", "https://myapp.org"]
```
