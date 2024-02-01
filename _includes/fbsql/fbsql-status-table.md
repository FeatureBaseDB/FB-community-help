### fbsql status

fbsql displays status information at startup:

| Status | Description | Additional information |
|---|---|---|
| Detected on-prem, classic deployment | FeatureBase Community started<br/>Host:http://<hostname>:10101 | [Manage FeatureBase Community systemctl service](/docs/community/com-config/com-config-service-fb-manage) |
| Could not detect deployment<br/>Host:http://<hostname> | FeatureBase Community service stopped | [Manage FeatureBase Community systemctl service](/docs/community/com-config/com-config-service-fb-manage) |
| You are not connected to a database | Not connected to remote database |  |
| connecting to database: invalid database: dbname | error in database name |  |
| `dbname=#` | Connected to specific database |  |
