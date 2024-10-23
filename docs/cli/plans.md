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
opencli plan-edit  id= name="<NAME>" description="<DESCRIPTION>" emails=<EMAILS_LIMIT> ftp=<FTP_LIMIT> domains=<DOMAINS_LIMIT> websites=<WEBSITES_LIMIT> disk=<DISK_LIMIT> inodes=<INODES_LIMITS> databases=<DATABASES_LIMIT> cpu=<CPU_LIMIT> ram=<RAM_LIMIT> docker_image="<DOCKER_IMAGE>" bandwidth=<PORT_SPEED_LIMIT> storage="<STORAGE_FILE>" [--debug]
```

Example:
```bash
opencli plan-edit id=1 name="Pro Plan" description="A professional plan" emails=500 ftp=100 domains=10 websites=5 disk=50 inodes=1000000 databases=20 cpu=4 ram=1 docker_image="openpanel/nginx" bandwidth=100 storage="10" --debug
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

## Edit Plan

Change plan limits.

```bash
opencli plan-edit plan_id new_plan_name new_description new_email_limit new_ftp_limit new_domains_limit new_websites_limit new_disk_limit new_inodes_limit new_db_limit new_cpu new_ram new_docker_image new_bandwidth new_storage_file
```
