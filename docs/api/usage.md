# Usage

Display real-time resource usage.

## CPU usage

View current CPU usage:
```bash
curl -X GET http://PANEL:2087/api/usage/cpu -H "Authorization: Bearer JWT_TOKEN_HERE"
```

## Memory usage

View current RAM usage:
```bash
curl -X GET http://PANEL:2087/api/usage/memory -H "Authorization: Bearer JWT_TOKEN_HERE"
```


## Disk usage

View current disk usage:
```bash
curl -X GET http://PANEL:2087/api/usage/disk -H "Authorization: Bearer JWT_TOKEN_HERE"
```
