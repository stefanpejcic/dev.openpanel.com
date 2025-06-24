# Docker Images

## Introduction

OpenPanel uses official Docker images for services.

For each user you can edit their `/home/USER/docker-compose.yml` file to specify custom services.

To edit services for all new users that you create, edit the template files:

- `/etc/openpanel/docker/compose/1.0/docker-compose.yml` - services for users, volumes and networks.
- `/etc/openpanel/docker/compose/1.0/.env` - limits for services.

## Default services


## Examples


### FileBrowser

To add [FileBrowser](https://github.com/filebrowser/filebrowser) as a service or user in OpenPanel:

add to .env file:

```
# FILEBROWSER
FILEBROWSER_VERSION="s6"
FILEBROWSER_CPU="0.25"
FILEBROWSER_RAM="0.35"
```

add to `docker-compose.yml` file in the **services** section:

```
  filebrowser:
    image: filebrowser/filebrowser:${FILEBROWSER_VERSION:-s6}
    container_name: filebrowser
    volumes:
      - html_data:/srv
      - ./filebrowser/config/:/config/
      - ./filebrowser/database/:/database/
    environment:
      - PUID=${USER_ID:-0}
      - PGID=${USER_ID:-0}
    restart: unless-stopped
    deploy:
      resources:
        limits:
          cpus: "${FILEBROWSER_CPU:-0.35}"
          memory: "${FILEBROWSER_RAM:-0.35G}"   
          pids: 100
    networks:
      - www
```




### Minecraft

To add [Minecraft](https://github.com/itzg/docker-minecraft-server) as a service or user in OpenPanel:

add to .env file:

```
# MINECRAFT
MINECRAFT_VERSION="latest"
MINECRAFT_PORT="25565"
MINECRAFT_CPU="1.0"
MINECRAFT_RAM="1.0G"
MINECRAFT_ENABLE_QUERY="true"
MINECRAFT_MAX_PLAYERS="20"
MINECRAFT_MAX_WORLD_SIZE="10000"
MINECRAFT_ALLOW_NETHER="false"
MINECRAFT_ANNOUNCE_PLAYER_ACHIEVEMENTS="false"
MINECRAFT_ENABLE_COMMAND_BLOCK="false"
```

add to `docker-compose.yml` file in the **volumes** section:

```
  mc_data:
    driver: local
    labels:
      description: "This volume holds the minecraft data directory."
      purpose: "storage"
```

add to `docker-compose.yml` file in the **services** section:

```
  minecraft:
    image: itzg/minecraft-server:${MINECRAFT_VERSION:-latest}
    container_name: minecraft
    tty: true
    stdin_open: true
    ports:
      - "${MINECRAFT_PORT:-25565}:25565"
    environment:
      EULA: "TRUE"
      ENABLE_QUERY: "${MINECRAFT_ENABLE_QUERY:-true}"
      QUERY_PORT: "${MINECRAFT_PORT:-25565}"
    volumes:
      - mc_data:/data
    deploy:
      resources:
        limits:
          cpus: "${MINECRAFT_CPU:-1.0}"
          memory: "${MINECRAFT_RAM:-1.0G}"
          pids: 100
    healthcheck:
      test: mc-health
      start_period: 1m
      interval: 5s
      retries: 20
    networks:
      - www
```




### MsSQL

To add [MsSQL](https://hub.docker.com/r/microsoft/mssql-server) as a service or user in OpenPanel:

add to .env file:

```
# MSSQL
MSSQL_IMAGE="mcr.microsoft.com/mssql/server"
MSSQL_VERSION="latest"
MSSQL_PID="Standard"
MSSQL_PORT="0:1433"
MSSQL_CPU="1.0"
MSSQL_RAM="1.0G"
MSSQL_SA_PASSWORD="rootpassword"
```

add to `docker-compose.yml` file in the **volumes** section:

```
  mssql_data:
    driver: local
    labels:
      description: "This volume holds the MSSQL databases."
      purpose: "database"      
```

add to `docker-compose.yml` file in the **services** section:

```
  mssql:
    image: ${MSSQL_IMAGE}:${MSSQL_VERSION:-latest}
    container_name: mssql
    restart: unless-stopped
    environment:
      ACCEPT_EULA: "Y"
      MSSQL_SA_PASSWORD: ${MSSQL_SA_PASSWORD:-StrongPassword!}
      MSSQL_PID: ${MSSQL_PID:-Developer}  # Options: Developer, Express, Standard, Enterprise
    ports:
      - "${MSSQL_PORT}"
    volumes:
      - mssql_data:/var/opt/mssql                                      # MSSQL data
      - ./sockets/mssql:/var/opt/mssql/sockets          # MSSQL socket
      - ./mssql.conf:/etc/mssql/mssql.conf:ro           # Custom MSSQL config
    deploy:
      resources:
        limits:
          cpus: "${MSSQL_CPU:-1}"
          memory: "${MSSQL_RAM:-2G}"
          pids: 100
    networks:
      - db
    healthcheck:
      test: ['CMD-SHELL', 'sqlcmd -S localhost -U sa -P "$$MSSQL_SA_PASSWORD" -Q "SELECT 1" || exit 1']
      interval: 10s
      timeout: 5s
      retries: 5

```


### UptimeKuma

To add [UtimeKuma](https://github.com/louislam/uptime-kuma) as a service or user in OpenPanel:

add to .env file:

```
# UPTIMEKUMA
UPTIMEKUMA_VERSION="1"
UPTIMEKUMA_CPU="0.5"
UPTIMEKUMA_RAM="0.5G"
```

add to `docker-compose.yml` file in the **services** section:

```
  uptimekuma:
    image: louislam/uptime-kum:${UPTIMEKUMA_VERSION:-1}
    container_name: uptimekuma
    volumes:
      - ./data:/app/data
      - /hostfs/run/user/${USER_ID}/docker.sock:/var/run/docker.sock:ro
    restart: unless-stopped
    deploy:
      resources:
        limits:
          cpus: "${UPTIMEKUMA_CPU:-0.35}"
          memory: "${UPTIMEKUMA_RAM:-0.35G}"   
          pids: 100
    networks:
      - www
```




### BusyBox

This example adds busybox container, its an example on how to add any docker compose service:

add to .env file:

```
# BUSYBOX
BUSYBOX_CPU="0.1"
BUSYBOX_RAM="0.1G"
```

add to `docker-compose.yml` file in the **services** section:

```
  busybox:
    image: busybox
    container_name: busybox          
    restart: unless-stopped
    working_dir: /var/www/html
    deploy:
      resources:
        limits:
          cpus: "${BUSYBOX_CPU:-0.1}"
          memory: "${BUSYBOX_RAM:-0.1G}"   
          pids: 100
    volumes:
      - html_data:/var/www/html/
```

