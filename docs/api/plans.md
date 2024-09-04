# Plans

### List Plans

To retrieve a list of all available hosting plans:
```bash
curl -X GET http://PANEL:2087/api/plans -H "Authorization: Bearer JWT_TOKEN_HERE"
```

Example response:
```json
{
  "plans": [
    {
      "bandwidth": 100,
      "cpu": "1",
      "db_limit": 0,
      "description": "Unlimited disk space and Nginx",
      "disk_limit": "10 GB",
      "docker_image": "openpanel/nginx",
      "domains_limit": 0,
      "id": 1,
      "inodes_limit": 1000000,
      "name": "ubuntu_nginx_mysql",
      "ram": "1g",
      "storage_file": "0 GB",
      "websites_limit": 10
    },
    {
      "bandwidth": 100,
      "cpu": "1",
      "db_limit": 0,
      "description": "Unlimited disk space and Apache",
      "disk_limit": "10 GB",
      "docker_image": "openpanel/apache",
      "domains_limit": 0,
      "id": 2,
      "inodes_limit": 1000000,
      "name": "ubuntu_apache_mysql",
      "ram": "1g",
      "storage_file": "0 GB",
      "websites_limit": 10
    }
  ]
}
```




To retrieve information about a single hosting plan:
```bash
curl -X GET http://PANEL:2087/api/plans/<PLAN_ID> -H "Authorization: Bearer JWT_TOKEN_HERE"
```

Example response:
```json
{
  "plan": {
    "bandwidth": 100,
    "cpu": "1",
    "db_limit": 0,
    "description": "Unlimited disk space and Nginx",
    "disk_limit": "10 GB",
    "docker_image": "openpanel/nginx",
    "domains_limit": 0,
    "id": 1,
    "inodes_limit": 1000000,
    "name": "ubuntu_nginx_mysql",
    "ram": "1g",
    "storage_file": "0 GB",
    "websites_limit": 10
  }
}
```
