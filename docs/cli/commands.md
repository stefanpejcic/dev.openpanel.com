# OpenCLI


## Users

Manage users: Add, Delete, Suspend, Unsuspend, etc.

### List Users

To list all users, use the following command:

```bash
opencli user-list
```

Example output:
```bash
opencli user-list
+----+----------+-----------------+-----------------+---------------------+
| id | username | email           | plan_name       | registered_date     |
+----+----------+-----------------+-----------------+---------------------+
| 52 | stefan   | stefan          | cloud_4_nginx_3 | 2023-11-16 19:11:20 |
| 53 | petar    | petarc@petar.rs | cloud_8_nginx   | 2023-11-17 12:25:44 |
| 54 | rasa     | rasa@rasa.rs    | cloud_12_nginx  | 2023-11-17 15:09:28 |
+----+----------+-----------------+-----------------+---------------------+
```

You can also format the data as JSON:

```bash
opencli user-list --json
```

### Add User

To create a new user run the following command:

```bash
opencli user-add <USERNAME> <PASSWORD> <EMAIL> <PLAN_ID>
```

:::tip
Provide `random` as password to generate a strong random password.
:::

### Delete User

To delete a user and all his data run the following command:

```bash
opencli user-delete <USERNAME>
```

add `-y` flag to disable prompt.

:::warning
This action is irreversible and will permanently delete all user data.
:::

### Suspend User

To suspend (temporary disable access) to user, run the follwowing command:

```bash
opencli user-suspend <USERNAME>
```

### Unsuspend User

To unsuspend (enable access) to user, run the follwowing command:

```bash
opencli user-unsuspend <USERNAME>
```

### Rename User

To change a username run:
```bash
opencli user-rename <USERNAME> <NEW_USERNAME>
```

### Change Email

To change a email run:
```bash
opencli user-email <USERNAME> <NEW_EMAIL>
```

### Change Password

To reset the password for a OpenPanel user, you can use the `user-password` command:

```bash
opencli user-password <USERNAME> <NEW_PASSWORD> --ssh
```
Use the `--ssh` flag to also change the password for the SSH user in the container.

### Login as User

This command allows you to login as the root user inside any users container.
```bash
opencli user-login <USERNAME>
```

### Check / Disable 2FA

To disable **Two-Factor Authentication** for a user, run the following command:

```bash
opencli user-2fa <USERNAME> [disable]
```


### Assign / Remove IP to User

To assign free IP address to a user run the following command:

```bash
opencli user-ip <USERNAME> <IP_ADDRESS>
```

To assign IP address **that is currently used by another user** to this user, run the following command:


```bash
opencli user-ip <USERNAME> <IP_ADDRESS> --y
```


To remove dedicated IP address from a user run:

```bash
opencli user-ip <USERNAME> delete
```


### View login log
View up to last 20 successfull logins for the user.

```bash
opencli user-loginlog <USERNAME> [--json]
```

### REDIS
Check REDIS service status for user and enable/disable REDIS® service.

```bash
opencli user-redis [check|enable|disable] <USERNAME>
```

Example:
```bash
opencli user-redis check stefan

Memcached is not installed for user stefan.
```

### Memcached
Check Memcached service status for user and enable/disable Memcached service.

```bash
opencli user-memcached [check|enable|disable] <USERNAME>
```

Example:
```bash
opencli user-memcached enable stefan

Memcached enabled successfully for user stefan.
```


## Plans

Scripts for creating and editing hosting plans (packages).

### List Plans

To list all current hosting packages (plans) run:

```bash
opencli plan-list
```

Example output:
```bash
opencli plan-list
+----+-----------------+------------------------+---------------+----------------+------------+--------------+----------+------+------+-----------------+-----------+
| id | name            | description            | domains_limit | websites_limit | disk_limit | inodes_limit | db_limit | cpu  | ram  | docker_image    | bandwidth |
+----+-----------------+------------------------+---------------+----------------+------------+--------------+----------+------+------+-----------------+-----------+
|  1 | cloud_4_nginx   | 20gb space and Nginx   |             0 |             10 | 20 GB      |      1000000 |        0 | 4    | 4g   | dev_plan_nginx  |       100 |
|  2 | cloud_4_apache  | 20gb space and Apache  |             0 |             10 | 20 GB      |      1000000 |        0 | 4    | 4g   | dev_plan_apache |       100 |
|  3 | cloud_8_nginx   | 80gb space and Nginx   |             0 |             50 | 80 GB      |      2000000 |        0 | 8    | 8g   | dev_plan_nginx  |       200 |
|  4 | cloud_8_apache  | 80gb space and Apache  |             0 |             50 | 80 GB      |      2000000 |        0 | 8    | 8g   | dev_plan_apache |       200 |
+----+-----------------+------------------------+---------------+----------------+------------+--------------+----------+------+------+-----------------+-----------+
```

You can also format the data as JSON:

```bash
opencli plan-list --json
```

### Create Plan

To create a new plan run the following command:

```bash
opencli plan-create <NAME> <DESCRIPTION> <DOMAINS_LIMIT> <WEBSITES_LIMIT> <DISK_LIMIT> <INODES_LIMITS> <DATABASES_LIMIT> <CPU_LIMIT> <RAM_LIMIT> <DOCKER_IMAGE> <PORT_SPEED_LIMIT>
```

Example:
```bash
opencli plan-create cloud_8 "Custom plan with 8GB of RAM&CPU" 0 0 15 500000 0 8 8 nginx 200
```

### List Users on Plan

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

### Delete Plan

Delete a plan if no users are currently using it.

```bash
opencli plan-delete <PLAN_NAME> 
```

### Edit Plan

Change plan limits.

```bash
# 
```


## PHP

Manage users' PHP versions: list enabled, list available, change version, etc.

## Get version for a domain

To view the current PHP version used by a domain, run the following command:

```bash
opencli php-domain_php <DOMAIN-NAME>
```

Example:
```bash
# opencli php-domain_php pejcic.rs
Domain 'pejcic.rs' (owned by user: stefan) uses PHP version: php8.1
```

### Change version for a domain

To change a PHP version for a domain name run the `domain_php` script with `--update` flag::

```bash
opencli php-domain_php <DOMAIN-NAME> --update <PHP-VERSION>
```

Example:
```bash
# opencli php-domain_php pejcic.rs --update 8.3
Updating PHP version to: 8.3
Domain 'pejcic.rs' (owned by user: stefan) uses PHP version: php8.3
Updating PHP version in the Apache configuration file...
 * Reloading Apache httpd web server apache2
 *
Updated PHP version in the configuration file to 8.3
```

### List the default version

The default PHP version for a user determines which PHP version will be used for all domains that the user adds in the future. It does not change the PHP version for any existing domains.

To list the currently set default PHP version for a user, run the following command:

```bash
opencli php-default_php_version <USERNAME>
```

Example:
```bash
# opencli php-default_php_version stefan
Default PHP version for user 'stefan' is: php8.3
```

### Change the default version

To update the default PHP version for a user use the php-default_php_version with `--update` flag and provide the new PHP version.

```bash
opencli php-default_php_version <USERNAME> --update <VERSION>
```

Example:
```bash
# opencli php-default_php_version stefan --update 8.1
PHP version for user 'stefan' updated to: 8.1
```

### List installed versions

To list all installed PHP versions for a user, run the following command:

```bash
opencli php-enabled_php_versions <USERNAME>
```

Example:
```bash
# opencli php-enabled_php_versions stefan
php7.4
php8.1
php8.2
```

### List available versions

To get available (that can be installed) PHP versions for users' OS, run the following command:

```bash
opencli php-get_available_php_versions <USERNAME>
```

Example:
```bash
# opencli php-get_available_php_versions stefan
....
PHP versions for user stefan have been updated and stored in /home/stefan/etc/.panel/php/php_available_versions.json.
```

The script will by default update users' available PHP versions setting for the UI, optionally you can add `--show` flag to display the available versions.

```bash
opencli php-get_available_php_versions <USERNAME> --show
```

Example:
```bash
# opencli php-get_available_php_versions stefan --show
....
Available PHP versions for user stefan:
php8.1-fpm
php5.6-fpm
php7.0-fpm
php7.1-fpm
php7.2-fpm
php7.3-fpm
php7.4-fpm
php8.0-fpm
php8.2-fpm
php8.3-fpm
```

The `get_available_php_versions` script performs various actions:

- Runs `apt-get update` inside users contianer
- Lists available PHP versions from remote repositories
- Saves the list to `/php_available_versions.json` in user home directory
- optionally display the list

### Install a new version

To install a a new PHP version run the following command:

```bash
opencli php-install_php_version <USERNAME> <PHP-VERSION>
```

Example:
```bash
# opencli php-install_php_version stefan 8.2
Hit:1 https://ppa.launchpadcontent.net/ondrej/php/ubuntu jammy InRelease
Hit:2 http://security.ubuntu.com/ubuntu jammy-security InRelease
Hit:3 http://archive.ubuntu.com/ubuntu jammy InRelease
Hit:4 http://archive.ubuntu.com/ubuntu jammy-updates InRelease
Hit:5 http://archive.ubuntu.com/ubuntu jammy-backports InRelease
Reading package lists... Done
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  php8.1-cli php8.1-common php8.1-opcache php8.1-readline
Suggested packages:
  php-pear
The following NEW packages will be installed:
  php8.1-cli php8.1-common php8.1-fpm php8.1-opcache php8.1-readline
0 upgraded, 5 newly installed, 0 to remove and 5 not upgraded.
Need to get 4804 kB of archives.
After this operation, 21.1 MB of additional disk space will be used.
..
.
```

