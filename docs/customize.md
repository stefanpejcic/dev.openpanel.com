# Customize


## Pre-fill **OpenAdmin > Plans > New** form

To pref-fill data into the new plan form, simply create a new file:

```
/usr/local/admin/conf/new_plan_template
```

and set the data to be used:

```
{
  "name": "Starter Plan",
  "description": "Basic starter plan for new users.",
  "docker_image": "apache",
  "domains": 5,
  "websites": 3,
  "databases": 2,
  "ram": 2,
  "cpu": 1,
  "port_speed": 100,
  "disk_limit_for_docker": 10,
  "inodes_for_storage_file": 500000,
  "disk_limit_for_storage_file": 20
}

```
