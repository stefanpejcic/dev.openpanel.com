# Docker

## Docker info

View [docker info](https://docs.docker.com/reference/cli/docker/system/info/#format):
```bash
curl -X GET http://PANEL:2087/api/docker/info -H "Authorization: Bearer JWT_TOKEN_HERE"
```

Example response:

```json
{
  "Architecture": "x86_64",
  "BridgeNfIp6tables": true,
  "BridgeNfIptables": true,
  "CPUSet": true,
  "CPUShares": true,
  "CgroupDriver": "systemd",
  "CgroupVersion": "2",
  "ContainerdCommit": {
    "Expected": "",
    "ID": ""
  },
  "Containers": 6,
  "ContainersPaused": 0,
...
```


## Docker context

View [docker contexts](https://docs.docker.com/engine/manage-resources/contexts/#the-anatomy-of-a-context):
```bash
curl -X GET http://PANEL:2087/api/docker/context -H "Authorization: Bearer JWT_TOKEN_HERE"
```

Example response:

```json
[
  {
    "Current": true,
    "Description": "Current DOCKER_HOST based configuration",
    "DockerEndpoint": "unix:///var/run/docker.sock",
    "Error": "",
    "Name": "default"
  }
]
```
