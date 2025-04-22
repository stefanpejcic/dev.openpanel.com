# Docker Images

## Introduction

OpenPanel uses official Docker images for services.

For each user you can edit their `/home/USER/docker-composq.yml` file to specify custom services.

To edit services for all new users that you create, edit the template files:

- `/etc/openpanel/docker/compose/1.0/docker-compose.yml` - services for users, volumes and networks.
- `/etc/openpanel/docker/compose/1.0/.env` - limits for services.
