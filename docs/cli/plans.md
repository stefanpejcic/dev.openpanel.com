# Plans

Scripts for creating and editing hosting plans (packages).

## List Plans

To list all current hosting packages (plans) run:

```bash
opencli plan-list
```

Example output:
```bash
opencli plan-list
+----+---------------------+---------------------------------+---------------+----------------+-------------+-----------+------------+--------------+----------+------+------+------------------+-----------+--------------+
| id | name                | description                     | domains_limit | websites_limit | email_limit | ftp_limit | disk_limit | inodes_limit | db_limit | cpu  | ram  | docker_image     | bandwidth | storage_file |
+----+---------------------+---------------------------------+---------------+----------------+-------------+-----------+------------+--------------+----------+------+------+------------------+-----------+--------------+
|  1 | ubuntu_nginx_mysql  | Unlimited disk space and Nginx  |             0 |             10 |           0 |         0 | 10 GB      |      1000000 |        0 | 1    | 1g   | openpanel/nginx  |       100 | 0 GB         |
|  2 | ubuntu_apache_mysql | Unlimited disk space and Apache |             0 |             10 |           0 |         0 | 10 GB      |      1000000 |        0 | 1    | 1g   | openpanel/apache |       100 | 0 GB         |
+----+---------------------+---------------------------------+---------------+----------------+-------------+-----------+------------+--------------+----------+------+------+------------------+-----------+--------------+
```

You can also format the data as JSON:

```bash
opencli plan-list --json
```

## Create Plan

To create a new plan run the following command:

```bash
opencli plan-create 'name' 'description' email_limit ftp_limit domains_limit websites_limit disk_limit inodes_limit db_limit cpu ram docker_image bandwidth
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
| `docker_image` | Docker image name                                | String   |                                |
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

Example output:
```bash
opencli plan-usage
+----+----------+-------+----------------+---------------------+
| id | username | email | plan_name      | registered_date     |
+----+----------+-------+----------------+---------------------+
|  2 | rasa     | rasa  | cloud_4_apache | 2023-11-30 10:33:52 |
|  3 | aas      | sasa  | cloud_4_apache | 2023-11-30 12:01:49 |
+----+----------+-------+----------------+---------------------+
```

You can also format the data as JSON:

```bash
opencli plan-usage --json
```

## Delete Plan

Delete a plan if no users are currently using it.

```bash
opencli plan-delete <PLAN_NAME> 
```

Example:
```bash
root@stefan:~# opencli plan-delete 'ubuntu_nginx_mysql'
Plan 'ubuntu_nginx_mysql' and Docker network 'ubuntu_nginx_mysql' deleted successfully.
```

TIP: use `'` or `"` around the plan name if it contains spaces: `"plan name here"`.

`--json` flag can be passed to return the response as JSON:

```bash
root@stefan:~# opencli plan-delete 'ubuntu_nginx_mysql'  --json
{"message": "Plan 'ubuntu_nginx_mysql' and Docker network 'ubuntu_nginx_mysql' deleted successfully."}
```


## Edit Plan

Change plan limits.

```bash
opencli plan-edit  id= name="<NAME>" description="<DESCRIPTION>" emails=<EMAILS_LIMIT> ftp=<FTP_LIMIT> domains=<DOMAINS_LIMIT> websites=<WEBSITES_LIMIT> disk=<DISK_LIMIT> inodes=<INODES_LIMITS> databases=<DATABASES_LIMIT> cpu=<CPU_LIMIT> ram=<RAM_LIMIT> docker_image="<DOCKER_IMAGE>" bandwidth=<PORT_SPEED_LIMIT> storage="<STORAGE_FILE>" [--debug]
```

Example:
```bash
opencli plan-edit id=1 name="Pro Plan" description="A professional plan" emails=500 ftp=100 domains=10 websites=5 disk=50 inodes=1000000 databases=20 cpu=4 ram=1 docker_image="openpanel/nginx" bandwidth=100 storage="10" --debug
```

