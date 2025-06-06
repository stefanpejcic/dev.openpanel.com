# Usage

Display real-time resource usage.


## Stats

Display current number of users, domains and websites:
```bash
curl -X GET http://PANEL:2087/api/usage/stats -H "Authorization: Bearer JWT_TOKEN_HERE"
```

Example response:
```json
{
  "usage_stats": "{\"timestamp\": \"2024-09-03\", \"users\": 1, \"domains\": 2, \"websites\": 0}\n{\"timestamp\": \"2024-09-04\", \"users\": 1, \"domains\": 2, \"websites\": 0}"
}
```

## Endpoints

Display available API endpoints with usage examples:
```bash
curl -X GET http://PANEL:2087/api/usage -H "Authorization: Bearer JWT_TOKEN_HERE"
```


## CPU usage

View current CPU usage:
```bash
curl -X GET http://PANEL:2087/api/usage/cpu -H "Authorization: Bearer JWT_TOKEN_HERE"
```

Example response:
```json
{
  "core_0": 0,
  "core_1": 0
}
```

## Memory usage

View current RAM usage:
```bash
curl -X GET http://PANEL:2087/api/usage/memory -H "Authorization: Bearer JWT_TOKEN_HERE"
```

Example response:
```json
{
  "human_readable_info": {
    "available": "6.14 GB",
    "percent": "20.9%",
    "total": "7.76 GB",
    "used": "1.33 GB"
  },
  "ram_info": {
    "available": 6587547648,
    "percent": 20.9,
    "total": 8327839744,
    "used": 1425428480
  }
}
```

## Users Disk usage

View current disk usage for all users:
```bash
curl -X GET http://PANEL:2087/api/usage/disk -H "Authorization: Bearer JWT_TOKEN_HERE"
```

Example response:
```json
[ ]
```


## Server Disk usage

View current server disk usage:
```bash
curl -X GET http://PANEL:2087/api/usage/server -H "Authorization: Bearer JWT_TOKEN_HERE"
```

Example response:
```json
[
  {
    "device": "/dev/vda1",
    "free": 60307525632,
    "fstype": "ext4",
    "mountpoint": "/",
    "percent": 51.2,
    "total": 123690532864,
    "used": 63366230016
  },
  {
    "device": "/dev/vda16",
    "free": 794705920,
    "fstype": "ext4",
    "mountpoint": "/boot",
    "percent": 7.4,
    "total": 923156480,
    "used": 63807488
  },
  {
    "device": "/dev/loop0",
    "free": 54706995200,
    "fstype": "xfs",
    "mountpoint": "/var/lib/docker",
    "percent": 8.9,
    "total": 60062433280,
    "used": 5355438080
  }
]
```
