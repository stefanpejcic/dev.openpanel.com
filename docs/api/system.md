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
