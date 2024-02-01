---
title: Setup FeatureBase as a systemd service
layout: default
parent: Community configuration
grand_parent: Community
---

# How do I setup FeatureBase Community to automatically start?
{: .no_toc }

You can setup FeatureBase to automatically start using the Linux systemd service.

The parameters tell `systemd` the following information:
* where to find FeatureBase
* the command to start FeatureBase server
* the user to run the commands as
* where to find the FeatureBase configuration file
* when to restart

{% include page-toc.md %}

## Before you begin

* {% include /com-install/com-install-before-begin.md %}
* Obtain `sudo` privileges on the server machine

## Step 1 - create a service file

* Open a terminal then CD to `/etc/systemd/system`
* Create a service file `featurebase.service`

## Step 2 - add parameters to `featurebase.service`

* Add these parameters to the file.

```
[Unit]
    Description="Service for FeatureBase"

[Service]
    RestartSec=30
    Restart=on-failure
    User=molecula
    ExecStart=/usr/local/bin/featurebase server -c /etc/featurebase.conf

[Install]
    WantedBy=multi-user.target
```

* Save then exit from the file.

## Step 3 - Reload the systemd daemon

* Run the following command:

```sh
sudo systemctl daemon-reload
```

## Step 4 - Automatically start FeatureBase after reboot

* Run the following command:

```
sudo systemctl enable featurebase.service
```

## Step 5 - Start the FeatureBase service

* Run the following command:

```
sudo systemctl start featurebase
```

* Run the following command to verify the service started and is running:

```
sudo systemctl status featurebase
```

## Step 6 - connect to FeatureBase server

{: .note}
You can change this IP address in `*/featurebase/opt/featurebase.conf`

FeatureBase Community is available by default at:

```
http://localhost:10101/
```

## Next step

* [Learn how to manage the FeatureBase server status](/docs/community/com-config/com-config-service-fb-manage)
