# System

### System info

Return system information:
- Hostname
- OS
- current time
- kernel version
- CPU architecture
- OpenPanel version
- Number of running processes
- Number of available package updates

```bash
curl -X GET http://PANEL:2087/api/system -H "Authorization: Bearer JWT_TOKEN_HERE"
```

Example response:

```json
{
  "cpu": "DO-Premium-Intel(x86_64)",
  "hostname": "stefi",
  "kernel": "6.8.0-36-generic",
  "openpanel_version": "0.2.7",
  "os": "Ubuntu 24.04 LTS",
  "package_updates": 98,
  "running_processes": 178,
  "time": "2024-09-04 15:09:16",
  "uptime": "18905"
}
```
