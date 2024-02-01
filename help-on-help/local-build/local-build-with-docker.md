# Local build with Docker

## Before you begin

* Install [Docker Desktop](https://www.docker.com/get-started/)
* [Learn about Docker build](https://docs.docker.com/engine/reference/commandline/build/){:target="_blank"}
* Open Docker Desktop to start the daemon
* Verify the following files are in the `/featurebase-docs` root:
  * Dockerfile
  * docker-compose.yml

NOTE: There are undoubtedly other methods of setting up Docker, however this way definitely works.

## Load Docker container from Dockerfile

NOTE: This process can take some time if starting from scratch or after executing `docker system prune -a`

1. Open a CLI then CD to the `/featurebase-docs` directory

2. Load the container

| OS | CLI | Command |
|---|---|---|
| Windows | Powershell | `Get-Content Dockerfile | docker build -` |
| Linux | Bash | `docker build - < Dockerfile` |
| Mac | Terminal | `docker build - < Dockerfile` |

## Serve the container

NOTE: Changes to configuration files such as `/_config.yml` are not loaded while the site is up.

* Run the the following in the `/featurebase-docs` directory:

```
docker compose up serve
```

## Troubleshooting

| Error | Cause |
|---|---|
| `featurebase-docs-site-container exited with code 1` | Scroll up, there's usually a missing include file or something else interfering with the Jekyll build |
| `docker network not found` | The network may have been killed due to a `docker prune` command or suchlike | Copy the network ID then recreate using `docker network create <mising-network-id>` |


## View local site

To view the local site on port `4000` head to:

* http://localhost:4000/ or
* http://<local-ip>:4000

## Editing content

Updated content is reloaded automatically on save with the exception of:
* `/_config.yml`
* `git pull`

To stop the server
* Open the CLI where the server is running
* Press CTRL+C

## Deleting containers and images

Containers and images can be deleted from Docker Desktop if required or via the command line.

* [Remove docker images, containers, volumes and networks](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes)

## Further information

* [Check for broken links](https://github.com/FeatureBaseDB/featurebase-docs/blob/main/help-on-help/broken-link-check.md)
