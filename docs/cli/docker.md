# Docker

Manage Docker settings.

### Collect Stats

To collect docker resource usage information (cpu, ram, i/o) for all users:
```bash
opencli docker-collect_stats
```

#### Limits

Set global docker limits (ram and cpu) for all containers combined.

```bash
opencli docker-limits [--apply | --read]
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
