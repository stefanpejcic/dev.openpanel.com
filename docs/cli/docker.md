# Docker

Manage Docker settings: update docker images, set global resource limits for docker, etc.


### logs

View logs sizes for user and system containers.


```bash
# opencli docker-logs

Usage: opencli docker-logs [options]

Options:
  <USERNAME>                                    Display log sizes for specified user.
  --system                                      Display log sizes just for system containers.
  --users                                       Display log sizes just for user containers.
  --all                                         Display log sizes for all user and system containers.

Examples:
  opencli docker-logs stefan
  opencli docker-logs --users
  opencli docker-logs --system
  opencli docker-logs --all

```

### lazydocker (DEPRECATED)

To manage system containers *(run as root user):
```bash
opencli docker
```

To manage user containers:
```bash
opencli docker <USERNAME>
```

### Collect Stats

To collect docker resource usage information (cpu, ram, i/o) for all users:
```bash
opencli docker-collect_stats
```

### Limits

Set global docker limits (storage, ram and cpu) for all system containers.
```bash
opencli docker-limits [--apply | --read]
```


To view current limits: 
```bash
opencli docker-limits --read
```

Example:
```bash
root@stefan:~# opencli docker-limits --read
[DOCKER]
max_ram=90
max_cpu=95
max_disk=114
```

#### CPU and RAM limit

To apply new limits for CPU % and RAM %:

```bash
opencli docker-limits --apply
```

#### Storage (disk) limit

To increase storage (disk) allocated to Docker, pass the size in **GB**:

```bash
opencli docker-limits --apply 100
```

### Usage Stats Cleanup

Rotate resource usage logs for all users according to the [resource_usage_retention](#resource-usage-retention) setting.

```bash
opencli docker-usage_stats_cleanup
```
