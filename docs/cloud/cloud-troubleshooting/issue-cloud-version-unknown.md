---
title: Database Unknown
layout: default
parent: Cloud troubleshooting
grand_parent: Cloud
nav_order: 4
---

# Issue - unknown database version

A database has an *Unknown* version when it fails to respond to queries.

## Causes

The cause may be any of the following:

| Database Status | Description |
|---|---|
| BACKUP | All instances should be available for queries, attempts should be made to not tax the instance backing up |
| CREATING | Not available for queries, nothing exists yet |
| DEGRADED | Available for queries, some instances are down but the database is in a serviceable state and automatic recovery efforts will be underway |
| DELETED | Not available for queries, they are all gone |
| DELETING | Not available for queries, user has committed to deleting the db |
| DEPROVISIONING | Not available for queries, instances are being actively destroyed |
| FAILED | Not available for queries, a provisioning failure has occurred and there shouldn't be any data |
| FROZEN | Unknown instances should be available for queries, queries should be allowed to help with diagnosis. |
| PROVISIONING | Not available for queries, instances are being provisioned and configured |
| RESTORING | All instances should be available for queries, incomplete results will be given on some cases |
| RUNNING | All instances should be available for queries |
| UPDATING | Instances will be coming in and out of the cluster as they are updated, only active instances should be queried |

## Solution

In most cases, the solution is to simply wait. Here's a more detailed breakdown:

| Database Status | Solution |
|---|---|
| BACKUP | Wait for the database to finish backing up |
| CREATING | Wait for the database to finish creating |
| DEGRADED | Wait for the database to recover |
| DELETED | The version is irretrievable, the database has been deleted |
| DELETING | The version is irretrievable, the database will be deleted |
| DEPROVISIONING| The version is irretrievable, the database will be deleted |
| FAILED | Delete this database and create a new one |
| FROZEN | {% include contact-support.md %} |
| PROVISIONING | Wait for the database to finish provisioning |
| RESTORING | Wait for the database to finish restoring |
| RUNNING | {% include contact-support.md %} |
| UPDATING | Wait for the database to finish updating |

## Further information

* [Learn about the FeatureBase database states](/docs/cloud/cloud-databases/cloud-db-states)
