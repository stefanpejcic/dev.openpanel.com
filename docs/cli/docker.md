# Docker

Manage Docker settings.

### Collect Stats

To collect docker resource usage information (cpu, ram, i/o) for all users:
```bash
opencli docker-collect_stats
```

#### Limits

Set global docker limits (storage, ram and cpu) for all containers combined.
```bash
opencli docker-limits [--apply | --read]
```


To view current limits: 
```bash
opencli docker-limits --read
```

Example:
```bash

```

To apply new limits for CPU % and RAM %:

```bash
opencli docker-limits --apply
```

To increase storage (disk) allocated to Docker, pass the size in **GB**:

```bash
opencli docker-limits --apply 100
```
#### Update Images

Download [official docker images](/images/browse.html) for OpenPanel:

```bash
opencli docker-update_images
```

#### Usage Stats Cleanup

Rotate resource usage logs for all users according to the [resource_usage_retention](#resource-usage-retention) setting.

```bash
opencli docker-usage_stats_cleanup
```
