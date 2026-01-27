# Plans

Scripts for creating and editing hosting plans (packages).

## List Plans

To list all current hosting packages (plans) run:

```bash
opencli plan-list
```

<details>
  <summary>Example output</summary>

```bash
# opencli plan-list
+----+------------------------+-----------------------------------+---------------+----------------+-------------+-----------+------------+--------------+----------+------+------+-----------+-------------+
| id | name                   | description                       | domains_limit | websites_limit | email_limit | ftp_limit | disk_limit | inodes_limit | db_limit | cpu  | ram  | bandwidth | feature_set |
+----+------------------------+-----------------------------------+---------------+----------------+-------------+-----------+------------+--------------+----------+------+------+-----------+-------------+
|  1 | Standard plan          | Small plan for testing            |             0 |             10 |           0 |         0 | 5 GB       |      1000000 |        0 | 2    | 2g   |        10 | default     |
|  2 | Developer Plus         | 4 cores, 6G ram                   |             0 |             10 |           0 |         0 | 10 GB      |      1000000 |        0 | 4    | 6g   |       100 | default     |
|  3 | unlimited plan         | literally unlimited!              |             0 |              0 |           0 |         0 | 0 GB       |            0 |        0 | 0    | 0g   |         0 | default     |
|  4 | small 456              |                                   |             2 |              2 |           1 |         1 | 1 GB       |       100000 |        1 | 1    | 1g   |        10 | basic       |
|  5 | Database Administrator | only mysql and phpmyadmin enabled |             0 |              0 |           0 |         0 | 0 GB       |            0 |        0 | 0    | 0g   |         0 | mysql_only  |
+----+------------------------+-----------------------------------+---------------+----------------+-------------+-----------+------------+--------------+----------+------+------+-----------+-------------+
```
</details>

You can also format the data as JSON:

```bash
opencli plan-list --json
```

<details>
  <summary>Example output</summary>

```json
[
  {
    "id": "1",
    "name": "Standard plan",
    "description": "Small plan for testing",
    "email_limit": "0",
    "ftp_limit": "10",
    "domains_limit": "0",
    "websites_limit": "0",
    "disk_limit": "5 GB",
    "inodes_limit": "1000000",
    "db_limit": "0",
    "cpu": "2",
    "ram": "2g",
    "bandwidth": "10",
    "feature_set": "default"
  }
]
[
  {
    "id": "2",
    "name": "Developer Plus",
    "description": "4 cores, 6G ram",
    "email_limit": "0",
    "ftp_limit": "10",
    "domains_limit": "0",
    "websites_limit": "0",
    "disk_limit": "10 GB",
    "inodes_limit": "1000000",
    "db_limit": "0",
    "cpu": "4",
    "ram": "6g",
    "bandwidth": "100",
    "feature_set": "default"
  }
]
[
  {
    "id": "3",
    "name": "unlimited plan",
    "description": "literally unlimited!",
    "email_limit": "0",
    "ftp_limit": "0",
    "domains_limit": "0",
    "websites_limit": "0",
    "disk_limit": "0 GB",
    "inodes_limit": "0",
    "db_limit": "0",
    "cpu": "0",
    "ram": "0g",
    "bandwidth": "0",
    "feature_set": "default"
  }
]
[
  {
    "id": "4",
    "name": "small 456",
    "description": "",
    "email_limit": "2",
    "ftp_limit": "2",
    "domains_limit": "1",
    "websites_limit": "1",
    "disk_limit": "1 GB",
    "inodes_limit": "100000",
    "db_limit": "1",
    "cpu": "1",
    "ram": "1g",
    "bandwidth": "10",
    "feature_set": "basic"
  }
]
[
  {
    "id": "5",
    "name": "Database Administrator",
    "description": "only mysql and phpmyadmin enabled",
    "email_limit": "0",
    "ftp_limit": "0",
    "domains_limit": "0",
    "websites_limit": "0",
    "disk_limit": "0 GB",
    "inodes_limit": "0",
    "db_limit": "0",
    "cpu": "0",
    "ram": "0g",
    "bandwidth": "0",
    "feature_set": "mysql_only"
  }
]
```

</details>


## Create Plan

To create a new plan run the following command:

```bash
opencli plan-create name"<TEXT>" description="<TEXT>" emails=<COUNT> ftp=<COUNT> domains=<COUNT> websites=<COUNT> disk=<COUNT> inodes=<COUNT> databases=<COUNT> cpu=<COUNT> ram=<COUNT> bandwidth=<COUNT>
```

| Parameter      | Description                                           | Type      | Notes                          |
|--------------|-----------------------------------------------------|----------|-------------------------------|
| `name`       | Name of the plan                                    | String   | Use quotes for multiple words |
| `description`| Plan description                                   | String   | Use quotes for multiple words  |
| `email_limit`| Max number of email accounts                       | Integer  | 0 for unlimited                |
| `ftp_limit`  | Max number of FTP accounts                         | Integer  | 0 for unlimited                |
| `domains_limit` | Max number of domains                          | Integer  | 0 for unlimited                |
| `websites_limit` | Max number of websites                        | Integer  | 0 for unlimited                |
| `disk_limit` | Disk space limit in GB                             | Integer  |                                |
| `inodes_limit` | Max number of inodes                            | Integer  | Minimum 250000                 |
| `db_limit`   | Max number of databases                            | Integer  | 0 for unlimited                |
| `cpu`        | CPU core limit                                     | Integer  |                                |
| `ram`        | RAM limit in GB                                    | Integer  |                                |
| `bandwidth`  | Port speed in Mbit/s                               | Integer  |                                |



Example:
```bash
opencli plan-create 'basic' 'Basic Hosting Plan' 10 5 10 5 50 500000 10 2 4 nginx 1000
```

## List Users on Plan

List all users that are currently using a plan:

```bash
opencli plan-usage
```

<details>
  <summary>Example output</summary>

```bash
# opencli plan-usage 'Standard plan'
+----+----------+-------------------+---------------+---------------------+
| id | username | email             | plan_name     | registered_date     |
+----+----------+-------------------+---------------+---------------------+
|  3 | demo     | stefan@netops.com | Standard plan | 2025-04-28 14:47:52 |
|  4 | dummy    | dummy             | Standard plan | 2025-04-28 15:20:19 |
+----+----------+-------------------+---------------+---------------------+

```
</details>

You can also format the data as JSON:

```bash
opencli plan-usage --json
```

<details>
  <summary>Example output</summary>
  
```json
[
  {
    "id": "3",
    "username": "demo",
    "email": "stefan@netops.com",
    "plan_name": "Standard plan",
    "registered_date": "2025-04-28 14:47:52"
  }
]
[
  {
    "id": "4",
    "username": "dummy",
    "email": "dummy",
    "plan_name": "Standard plan",
    "registered_date": "2025-04-28 15:20:19"
  }
]
```
</details>


## Delete Plan

Delete a plan if no users are currently using it.

```bash
opencli plan-delete <PLAN_NAME> 
```

<details>
  <summary>Example output</summary>
  
```bash
# opencli plan-delete 'ubuntu_nginx_mysql'
Plan 'ubuntu_nginx_mysql' deleted successfully.
```
</details>

TIP: use `'` or `"` around the plan name if it contains spaces: `"plan name here"`.

`--json` flag can be passed to return the response as JSON.

<details>
  <summary>Example output</summary>

```bash
# opencli plan-delete 'ubuntu_nginx_mysql'  --json
{"message": "Plan 'ubuntu_nginx_mysql' deleted successfully."}
```
</details>


## Edit Plan

Change plan limits.

```bash
opencli plan-edit id=<ID> name"<TEXT>" description="<TEXT>" emails=<COUNT> ftp=<COUNT> domains=<COUNT> websites=<COUNT> disk=<COUNT> inodes=<COUNT> databases=<COUNT> cpu=<COUNT> ram=<COUNT> bandwidth=<COUNT> --debug
```

| Parameter        | Description                                           | Type      | Notes                              |
|-----------------|-------------------------------------------------------|----------|------------------------------------|
| `plan_id`       | ID of the plan                                        | Integer  | Required                          |
| `new_plan_name` | New name of the plan                                  | String   | Use quotes for multiple words     |
| `description`   | Plan description                                     | String   | Use quotes for multiple words     |
| `email_limit`   | Max number of email accounts                         | Integer  | 0 for unlimited                    |
| `ftp_limit`     | Max number of FTP accounts                           | Integer  | 0 for unlimited                    |
| `domains_limit` | Max number of domains                               | Integer  | 0 for unlimited                    |
| `websites_limit`| Max number of websites                              | Integer  | 0 for unlimited                    |
| `disk_limit`    | Disk space limit in GB                              | Integer  |                                    |
| `inodes_limit`  | Max number of inodes                                | Integer  | Minimum 250000                     |
| `db_limit`      | Max number of databases                             | Integer  | 0 for unlimited                    |
| `cpu`           | CPU core limit                                      | Integer  |                                    |
| `ram`           | RAM limit in GB                                     | Integer  |                                    |
| `bandwidth`     | Port speed in Mbit/s                                | Integer  |                                    |


<details>
  <summary>Example output</summary>

```bash
# opencli plan-edit 1 "sad_se_zove_ovako" "novi plan skroz" 0 0 0 0 10 500000 1 1 1 openpanel/nginx 500
```
</details>
