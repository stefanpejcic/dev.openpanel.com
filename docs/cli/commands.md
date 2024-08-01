# OpenCLI


OpenCLI keeps history of used commands and allows you to view last and top 5 used commands:
```
# opencli

Usage: opencli <COMMAND> [additional_arguments]

Suggested commands:
  opencli faq                       Display frequently asked questions and answers.
  opencli commands                  List all available OpenCLI commands and their usage.

Recently used commands:
  opencli docker-collect_stats
  opencli faq
  opencli update
  opencli update_check
  opencli user-add

Most commonly used commands:
  opencli admin
  opencli docker-collect_stats
  opencli faq
  opencli update
  opencli update_check
```


## FAQ 
`opencli faq` diisplays most frequently asked questions:

![opencli faq command output](https://i.postimg.cc/k5k7VkQX/image.png)


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

### View disk usage for user

To list real-time disk and inodes usage for a user:

```bash
opencli user-disk <USERNAME> <summary|detail|path> [--json]
```

Example usage:

- Disk usage summary for user:
  ```bash
  # opencli user-disk proba summary
  
  -------------- disk usage --------------
  - 564M	/home/proba
  - 864M	/var/lib/docker/devicemapper/mnt/ac28d2b066f5ffcacf4510b042623f6a3c196bd4f5fb9e842063c5325e4d0184
  ```
  
  ```bash
  # opencli user-disk proba summary --json
  
  {"home_directory_usage": "564564", "docker_container_usage": "883864", "home_path": "/home/proba", "docker_path": "/var/lib/docker/devicemapper/mnt/ac28d2b066f5ffcacf4510b042623f6a3c196bd4f5fb9e842063c5325e4d0184"}
  ```

- Detailed disk usage report for user:
  ```bash
  # opencli user-disk proba detail
  ------------- home directory -------------
  - home directory:        /home/proba
  - mountpoint:            /home/proba
  - bytes used:            61440
  - bytes total:           10375548928
  - bytes limit:           true
  - inodes used:           20
  - inodes total:          1000960
  ---------------- container ---------------
  - container directory:   /var/lib/docker/devicemapper/mnt/ac28d2b066f5ffcacf4510b042623f6a3c196bd4f5fb9e842063c5325e4d0184
  - bytes used:            1025388544
  - bytes total:           10726932480
  - inodes used:           20905
  - inodes total:          5242880
  - storage driver:        devicemapper
  ```
  
  ```bash
  # opencli user-disk proba detail --json
  
  {
    "user": "proba",
    "home": {
      "path": "/home/proba",
      "bytes_used": "61440",
      "bytes_total": "10375548928",
      "bytes_limit": true,
      "inodes_used": "20",
      "inodes_total": "1000960"
    },
    "container": {
      "path": "/var/lib/docker/devicemapper/mnt/ac28d2b066f5ffcacf4510b042623f6a3c196bd4f5fb9e842063c5325e4d0184",
      "storage_driver": "devicemapper",
      "bytes_used": "1025388544",
      "bytes_total": "10726932480",
      "inodes_used": "20905",
      "inodes_total": "5242880"
    }
  }
  ```

- Paths for user:
  ```bash
  # opencli user-disk proba path
  
  -------------- paths --------------
  - home_directory=/home/proba
  - docker_container_path=/var/lib/docker/devicemapper/mnt/ac28d2b066f5ffcacf4510b042623f6a3c196bd4f5fb9e842063c5325e4d0184
  ```
  
  ```bash
  # opencli user-disk proba path --json
  
  {"home_directory": "/home/proba","docker_container_path": "/var/lib/docker/devicemapper/mnt/ac28d2b066f5ffcacf4510b042623f6a3c196bd4f5fb9e842063c5325e4d0184"}
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

### Get version for a domain

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


### Enable ioncube loader

To enable ioncube loader php extension on all installed PHP versions for users' OS, run the following command:

```bash
opencli php-ioncube <USERNAME>
```

## SSL

Generate and manage SSL certificates for user domains and server hostname.


### Check SSL for all domains owned by user

This command allows you to check the SSL status of all user domains in Certbot and updates the ssl/.domain_status file of the user/s.

To check and generate SSL for all domains owned by a specific user:

```bash
opencli ssl-user <username> --generate
```

To check and generate SSL for all domains owned by a all users:

```bash
opencli ssl-user --all --generate
```


To simply recreate the .ssl file used to display SSL status and expiry date on [SSL Certificates page](https://openpanel.co/docs/panel/domains/SSL/) in OpenPanel:

for all users:
```bash
opencli ssl-user --all
```

for specific user:
```bash
opencli ssl-user <username>
```

Example:
```bash
# opencli ssl-user stefan
panel.pejcic.rs:  2024-02-20 08:24:00+00:00 (VALID: 89 days)
example.com: None
```




### Check SSL for server hostname

By default when OpenPanel is installed, it will run the 'opencli ssl-hostname' and try to generate SSL for the server hostname, if succeeds, it will set the OpenPanel and AdminPanel to use the SSL and redirect all domains:2083 to the https://hostname.tld:2083 and https://hostname.tld:2087 

If you change the hostname and want the OpenPanel to use the new domain name, you can manually at any time run the following command to generate SSL for the new hostname and force it for OpenPanel: 

```bash
opencli ssl-hostname
```

Example:
```bash
opencli ssl-hostname
No SSL certificate found for server.openpanel.co. Proceeding to generate a new certificate...
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Account registered.
Requesting a certificate for server.openpanel.co

Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/server.openpanel.co/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/server.openpanel.co/privkey.pem
This certificate expires on 2024-02-18.
These files will be updated when the certificate renews.
Certbot has set up a scheduled task to automatically renew this certificate in the background.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
 * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
 * Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
ssl is now enabled and force_domain value in /usr/local/panel/conf/panel.config is set to 'server.openpanel.co'.
Restarting the panel services to apply the newly generated SSL and force domain server.openpanel.co.

- OpenPanel  is now available on: https://server.openpanel.co:2083
- AdminPanel is now available on: https://server.openpanel.co:2087
```


## Domains

Manage domains: Add, Delete, detect, etc.

### List user domains

To list all domains owned by a user run the following command:


```bash
opencli domains-user <USERNAME>
```

Example:
```bash
# opencli domains-user stefan
panel.pejcic.rs
example.openpanel.co
```

### List all domains

To list all domains owned by all users run the following command:


```bash
opencli domains-all
```

Example:
```bash
# opencli domains-all
panel.pejcic.rs
example.openpanel.co
example.net
...
```

### Check who owns a domain name

To check which user owns a domain name run the following command:

```bash
opencli domains-whoowns <DOMAIN-NAME>
```

Example:
```bash
opencli domains-whoowns pejcic.rs
Owner of 'pejcic.rs': stefan
```

The `whoowns` script searches the database in order to determine which username added a domain.


### Add Domain to User

To add a domain name for user:

```bash
opencli domains-add <USERNAME> <DOMAIN>
```

Example:
```bash
opencli domains-add stefan pejcic.rs
```

Note: this command will add a domain for user regardless of their domains limit.


### DNSSEC

Command `opencli domains-dnssec` allows administrators to enable DNSSEC, re-sign the zone and view DS records for domains.

:::info
Please note that this feature is still experimental and there is still no UI for it in OpenPanel interface.
:::

- to enable dnssec for example.net :
  ```
  opencli domains-dnssec example.com
  ```

- to update the zone after publishing new records:
  ```
  opencli domains-dnssec example.com --update
  ```

- to check if domain has dnssec enabled and view DS records:
  ```
  opencli domains-dnssec example.com --check
  ```

### Parse domain access logs

To parse domain (Nginx) access logs and generate static reports for users domains accessible from `Domains > Access Logs` run the script:

```bash
opencli domains-stats [USERNAME]
```

Example:
```bash
opencli domains-stats stefan
Processing user: stefan
Processed domain pejcic.rs for user stefan
Processed domain openpanel.co for user stefan
```

To parse (Nginx) access logs for all active users and their domains run the script without username:

```bash
opencli domains-stats
```

### Enable modsecurity

To enable modsecurity for all domains owned by a specific user:

```bash
opencli domains-enable_modsec [USERNAME]
```

To enable modsecurity on all domains for all active users:

```bash
opencli domains-enable_modsec
```

## Apache / Nginx

Scripts for managing users webserver: Nginx or Apache


### Get users webserver

To list users current webserver run the following command:

```bash
opencli webserver-get_webserver_for_user <USERNAME>
```

Example:
```bash
# opencli webserver-get_webserver_for_user stefan
Web Server for user stefan: apache
```

The script will by default display cached information from the users `server_config.yml` file, optionally you can add `--update` flag to check the current webserver in the container and update the file.

Example:
```bash
# opencli webserver-get_webserver_for_user stefan --update
Web Server for user stefan updated to: apache
```

### Fix Permissions

The `fixperms` script can be used to fix permissions on user files.

It performs:
- sets the owner of all files inside /home/$username to the user.
- sets the permissions of .php files to 755.
- sets the permissions of .cgi and .pl files to 755.
- sets the permissions of .log files to 640.
- changes the ownership of all directories to match the user.
- sets the permissions of all directories to 755.

```bash
opencli webserver-fixperms <USERNAME>
```

You can pass the `--all` flag to change permissions for all users:

```bash
opencli webserver-fixperms --all
```

### Install ModSecurity

You can install modsecurity by using:

```bash
opencli nginx-install_modsec
```

### Manage ModSecurity

To list ModSecurity configuration files with rules:
```bash
opencli nginx-modsec [--json]
```

To view all ModSecurity rule IDs:
```bash
opencli nginx-modsec --rules [--json]
```

To update and download latest ModSecurity rules:
```bash
opencli nginx-modsec --update
```

To view ModSecurity logs:
```bash
opencli nginx-modsec --logs
```
To search the logs for a domain name, IP address or rule ID, add hte search parameter after `--logs`:
```bash
opencli nginx-modsec --logs pejcic.rs
```

To view ModSecurity status and statistics for a domain name:
```bash
opencli nginx-modsec --domain <DOMAIN_NAME>
```


## Admin

enable/disable the admin panel, reset password, add admin users, etc.

### Check Status

Check if AdminPanel is enabled or disabled and display link on which the AdminPanel is accessibe:

```bash
opencli admin
```

Example:
```bash
# opencli admin
● AdminPanel is running and is available on: https://server.openpanel.co:2087/
```

### Enable / Disable AdminPanel

OpenAdmin can run in headless mode, that is to say without a front-end UI. This can further save on memory requirements and keep your server secure.

To disable access to the OpenAdmin panel:

```bash
opencli admin off
```

To enable access to the OpenAdmin panel:

```bash
opencli admin on
```
### List Admin users

To view all admin accounts:

```bash
opencli admin list
```

### Create new Admin

To create new admin accounts:

```bash
opencli admin new <username> <password>
```
### Reset Admin Password

To reset the password for an admin user:

```bash
opencli admin password <username> <new_password>
```

### Rename Admin User

To rename an existing admin user:

```bash
opencli admin rename <old_username> <new_username>
```

### Suspend Admin User

To suspend an existing admin user:

```bash
opencli admin suspend <username>
```

### Unsuspend Admin User

To unsuspend an existing admin user:

```bash
opencli admin unsuspend <username>
```

### Delete Admin User

To rename an existing admin user:

```bash
opencli admin delete <username>
```

:::info
Note: User with 'admin' role can not be deleted.
:::


### Cloudflare only

Administrators can disable direct server access and only allow access via Cloudflare proxy. This setting affects all domains and users.

- Enable Cloudflare restrictions:
  ```bash
  opencli cloudflare --enable
  ```
- Disable Cloudflare restrictions:
  ```bash
  opencli cloudflare --disable
  ```

This feature will regularly update Cloudflare ip addresses to make sure new CF IP ranges are included.

### IPset Blacklists

Administrators can easily add blacklists to block IP addresses from known malicious sources.

- Download new IP addresses for all enabled blocklists:
  ```bash
  opencli blacklist --fetch
  ```
- Update all ipsets rules and reload UFW service:
  ```bash
  opencli blacklist --update_ufw
  ```
- Add a new blacklist:
  ```bash
  opencli blacklist --add-blacklist name=<name> url=<url>
  ```
- Enable a blacklist:
  ```bash
  opencli blacklist --enable-blacklist=<name>
  ```
- Disable a blacklist:
  ```bash
  opencli blacklist --disable-blacklist=<name>
  ```
- Delete a blacklist:
  ```bash
  opencli blacklist --delete-blacklist=<name>
  ```


### Firewall Reset

This command will delete existing firewall rules and reopen ports for OpenPanel servisec and users. It works with both UFW and CSF.

```
opencli firewall-reset
```

### Sentinel

Sentinel is an AI-powered service that autonomously monitors your server, makes decisions, and sends alerts to the notifications center and emails.

Using the command you can check current system health and get suggestions on improving configuration:

```bash
opencli sentinel
```

![sentinel openpanel cli](https://i.postimg.cc/kg56D2x2/sentinel-openpaenl.png)

### Notifications

`opencli admin notifications` allows you to change the notification preferences.

Settings are stored in `/usr/local/admin/service/notifications.ini` file. However, it is recommended not to modify this file directly. Instead, it's best to utilize the opencli commands. This way, any changes made are immediately applied, and the admin service is automatically restarted only when necessary.

#### Get

The `get` parameter allows you to view current notification settings.

```bash
opencli admin notifications get <OPTION>
```

Example:

```bash
# opencli admin notifications get reboot
yes
```

#### Update

The `update` parameter allows you to change the notification settings.


```bash
opencli admin notifications update <OPTION> <NEW-VALUE>
```

Example:
```bash
opencli admin notifications update load 10
Updated load to 10
```

#### Options

Currently available options for notifications are:

- reboot
- backups
- attack
- limit
- update
- load
- cpu
- ram
- du

### Check server info

To check current server info you can use the following command:

```bash
opencli report 
```

To make the report public and share it when asking for support:
```bash
opencli report --public
```


## Backups

Manage backup jobs, destiantions, exclude lists, restore, etc.

### Backup Jobs

To list all current backup jobs run command:
```bash
opencli backup-job list
```
#### Create a job
```bash
opencli backup-job create
```
#### Edit backup job
```bash
opencli backup-job edit
```
#### Run backup job
```bash
opencli backup-run <ID> --force-run
```
#### Delete backup job
```bash
opencli backup-job delete <ID>
```

### Destination

To list all current destinations run command:

```bash
opencli backup-destination list
```

Example output:
```bash
Available destination IDs:
2143
2145
2142
2144
2141
```

#### Add Destination

To create a new destination run the following command:

```bash
opencli backup-destination create <HOSTNAME> <PASSWORD_FOR_KEY_FILE> <PORT> <USER> <PATH_TO_SSH_KEY_FILE> <STORAGE_PERCENTAGE>
```
Example:
```bash
opencli backup-destination create 15.19.90.29 strongpass 22 root /root/.ssh/id_rsa 85
```

#### Edit Destination

To edit destination configuration run the following command:

```bash
opencli backup-destination edit <ID> <HOSTNAME> <PASSWORD_FOR_KEY_FILE> <PORT> <USER> <PATH_TO_SSH_KEY_FILE> <STORAGE_PERCENTAGE>
```
Example:
```bash
opencli backup-destination edit 241 15.19.90.29 strongpass 22 root /root/.ssh/id_rsa 85

Destination  ID: '241' edited successfully!
Previous destination configuration:
{
  "hostname": "18.19.90.29",
  "password": "pass222",
  "ssh_port": 22,
  "ssh_user": "new_ssh_user",
  "ssh_key_path": "/root/.ssh/id_rsa",
  "storage_limit": "100"
}
New destination configuration:
{
  "hostname": "15.19.90.29",
  "password": "strongpass",
  "ssh_port": 22,
  "ssh_user": "root",
  "ssh_key_path": "/root/.ssh/id_rsa",
  "storage_limit": "85"
}
```

#### Delete Destination

To delete a destination run the following command:

```bash
opencli backup-destination delete <ID>
```

:::tip
Destination can not be deleted if it is used by any backup job.
:::


### Validate Destination

To validate a destination run the following command:

```bash
opencli backup-destination validate <ID>
```

Command will test;

- if ssh key exists and its permissions
- ssh connection to the destination server
- check if destination folder exists
- check permissions and owner for destination folder
- check available disk space on destination and compare it with storage limit 


Examples:

```bash
opencli backup-destination validate 2144
Validating SSH connection with the destination, running command: 'ssh -i /root/.ssh/id_rsa root@18.19.90.29 -p 22'
SSH connection successful.
Destination directory /root/backup on the remote server is owned by root user.
Disk usage on remote destination is over the storage limit (70%) for /root/backup. Backups jobs will not run!

```

```bash
opencli backup-destination validate 2145
Validating SSH connection with the destination, running command: 'ssh -i /root/.ssh/id_rsa root@18.19.90.29 -p 22'
SSH connection successful.
Destination directory /root/backup on the remote server is owned by root user.
Disk space on remote destination is below the storage limit (85%) for /root/backup. Backups can run without a problem.
```


```bash
opencli backup-destination validate 1
Validating SSH connection with the destination, running command: 'ssh -i /root/.ssh/id_rsa root@18.19.90.29 -p 202'
ssh: connect to host 18.19.90.29 port 202: Connection refused
Validation failed! SSH connection failed or timed out.
SSH Connection Status: 255
```


### Restore


#### Full Account restore
To restore user files from a backup run command:

```bash
opencli backup-restore <DATE> <USER> --all
```

#### Partial restore
To restore only specific files from a backup, specify what to restore instead of the `--all` flag:

```bash
opencli backup-restore <DATE> <USER> [-files --entrypoint --nginx-conf --mysql-conf --mysql-data --php-versions --crontab --user-data --core-users --stats-users --apache-ssl-conf --domain-access-reports --ssh --timezone]
```

Available options:
- `--all` - restores all user files.
- `--files` - restores home directory
- `--entrypoint` - restore services and their status
- `--apache-conf` - restore Apache configuration
- `--nginx-conf` - restore Nginx configuration
- `--mysql-conf` - restore MySQL configuration
- `--mysql-data` - restore MySQL databases and users
- `--php-versions` - restore php versions and their php.ini files
- `--crontab` - restore cronjobs
- `--user-data` - restore user password, email address, 2fa settings, preferences..
- `--core-users` - restore OpenPanel data for the user account
- `--stats-users` - restore resource usage statistics for the account
- `--apache-ssl-conf` - restore VirtualHosts and SSL certificates
- `--domain-access-reports` - restore html reports for domain visitors
- `--ssh` - restore SSH users and passwords
- `--timezone` - restore timezone setting


### List Backups for user

`opencli backup-list` allows you to view available backups for a single user.

```bash
opencli backup-list <USERNAME> [--json]
```


### View backup details

`opencli backup-details` allows you to view information about a specific user backup.

```bash
opencli backup-list <USERNAME> <BACKUP_JOB_ID> <DATE> [--json]
```

Example:
```bash
root@server:/# openpanel backup-details nesto 2 20240131170700

backup_job_id=2
destination_id=1
destination_directory=20240131170700
start_time=Wed Jan 31 17:07:52 UTC 2024
end_time=Wed Jan 31 17:09:35 UTC 2024
total_exec_time=103
contains=Full Backup
status=Completed
```



### Index

`opencli backup-index` allows you to re-index backups from a remote destination and make them available for users.

```bash
opencli backup-index <ID>
```

Example:
```bash
opencli backup-index 21

Indexing backups for 5 users from destination: 18.19.90.29 and directory: /root/backup
Processing user stefan (1/5)
Indexed 6 backups for user stefan.
Processing user demo (2/5)
Indexed 6 backups for user demo.
Processing user demo123 (3/5)
Indexed 6 backups for user demo123.
Processing user pera (4/5)
Indexed 5 backups for user pera.
Processing user nesto (5/5)
Indexed 5 backups for user nesto.
Index complete, found a total of 28 backups for all 5 users.
```


### Check

`opencli backup-check` checks process id for any running jobs and terminates the backupjob if process is not running.

```bash
opencli backup-check
```


### Logs

#### List Logs

#### View Log File

#### Delete Log File


### Scheduler

`opencli backup-scheduler` command is executed daily to schedule new backup jobs and ensure they are carried out on time.

Example:
```bash
opencli backup-scheduler --debug

0 1 * * SUN opencli backup-run 2  --entrypoint --files --mysql_conf
0 1 * * * opencli backup-run 3 --conf
```


### Config

`opencli backup-config` allows you to change general backup settings that affect all backup jobs and destinations.



#### Get

The `get` parameter allows you to view current backup settings.

```bash
opencli backup-config get <OPTION>
```

Example:
```bash
# opencli backup-config get time_format
24
```

#### Update

The `update` parameter allows you to change backuo settings.


```bash
opencli backup-config update <OPTION> <NEW-VALUE>
```

Example:
```bash
opencli backup-config update time_format 12
Updated time_format to 12
```

#### Options

Currently available backup configuration options:

- debug (yes|no)
- error_report (yes|no)
- workplace_dir (path)
- downloads_dir (path)
- delete_orphan_backups (days)
- days_to_keep_logs (days)
- time_format (12|24)
- avg_load_limit (number)
- concurent_jobs (number)
- backup_restore_ttl (number)
- cpu_limit (number)
- io_read_limit (number)
- io_write_limit (number)
- enable_notification (yes|no)
- email_notification (yes|no)
- send_emails_to (email)
- notify_on_every_job (yes|no)
- notify_on_failed_backups (yes|no)
- notify_on_no_backups (yes|no)
- notify_if_no_backups_after (days)




## Docker

Manage Docker settings.

### Collect Stats

To collect docker resource usage information (cpu, ram, i/o) for all users:
```bash
opencli docker-collect_stats
```

#### Limits

Set global docker limits (ram and cpu) for all containers combined.

```bash
opencli docker-limits [--apply | --read]
```

#### Update Images

Download [official docker images](/images/browse.html) for OpenPanel:

```bash
opencli docker-update_images
```

#### Usage Stats Cleanup

Rotate resource usage logs for all users according to the [resource_usage_retention](#resource-usage-retention) setting.

```bash
opencli docker-usage_stats_cleanup
```



## License

`opencli license` command is used to set a license key for [OpenPanel Enterprise](https://openpanel.co/product/openpanel-premium-control-panel/), verify it, display information and delete the key to downgrade to Community edition.


View available options:
```bash
opencli license
```

Adding a license key:
```bash
opencli license <KEY>
```

View license key:
```bash
opencli license key
```

View license information:
```bash
opencli license info
```
Delete license key:
```bash
opencli license delete
```

## Locale

List or install new locale(s) for OpenPanel interface:

- List all available locales:
  ```bash
  opencli locale
  ```
- Installing single locale:
  ```bash
  opencli locale sr-sr
  ```
- Installing multiple locales at once:
  ```bash
  opencli locale sr-sr tr-tr
  ```

## Config

`opencli config` allows you to change the configuration of the user interface and set defaults for new accounts.

Settings are stored in `/usr/local/panel/conf/panel.config` file. However, it is recommended not to modify this file directly. Instead, it's best to utilize the `config` script. This way, any changes made are immediately applied, and the  panel service is automatically restarted only when necessary.


Example:
```bash
############################## NOTICE #########################################
#                                                                             #
# Manually modifying this file is not recommended!                            #
#                                                                             #
# You should use the interface in Admin Panel > Server Configuration          #
# for applying changes to these settings.                                     #
#                                                                             #
# https://openpanel.co/docs/admin/scripts/openpanel_config               #
#                                                                             #
###############################################################################

[DEFAULT]
brand_name=
logo=
force_domain=
port=2083
ssl=no
openpanel_proxy=
ns1=
ns2=
ns3=
ns4=
logout_url=
enabled_modules=phpmyadmin,ssh,crons,backups,wordpress,pm2,disk_usage,inodes,usage,terminal,services,webserver,fix_permissions,malware_scan,process_manager,ip_blocker,redis,memcached,elasticsearch,login_history,activity

[USERS]
password_reset=no
twofa_nag=yes
how_to_guides=yes
sidebar_color=dark
avatar_type=gravatar
max_login_records=20
activity_items_per_page=25
resource_usage_charts_mode=two
resource_usage_items_per_page=100
resource_usage_retention=100
acccess_logs_per_page=1000
domains_per_page=100

[PHP]
default_php_version=8.2

[PANEL]
autoupdate=on
autopatch=on
api=off
dev_mode=off

[DOCKER]
max_ram=90
max_cpu=95


```


### Get

The `get` parameter allows you to view current settings.

```bash
opencli config get <OPTION>
```

Example:

```bash
# opencli config get force_domain
srv.openpanel.co
```

### Update

The `update` parameter allows you to change the settings.


```bash
opencli config update <OPTION> <NEW-VALUE>
```

Example:
```bash
opencli config update force_domain nesto.rs
Updated force_domain to nesto.rs
```

:::info
To apply the new settings panel service needs to be restarted.
:::

### Options

Currently available configuration options:

#### logo

`logo` allows you to set a url for image *(suggested dimensions are 80x200px) that will be displayed to users on:

- logo on every page
- logo displayed on the login page
- footer logo used in emails

```bash
logo=https://http.cat/images/100.jpg
```

#### brand_name

`brand_name` allows you to brand the OpenPanel name that users see in their user panel with your custom brand name.

This brand name is displayed in the following positions:
- on top left when logo is not provided
- in the page title
- in the footer text on every page
  

```bash
brand_name=pcx3.com
```

#### max_login_records

`max_login_records` determines how many records are kept for every users login history page. Default value, if empty is 20.

```bash
max_login_records=20
```

#### default_php_version

`default_php_version` sets the PHP version used for new accounts. Default value is 8.3

```bash
default_php_version=8.3
```


#### domains_per_page

Set number of domains to show per page for the user, default value is 100.

```bash
domains_per_page=100
```

#### acccess_logs_per_page

Set number of lines to show per page from the domains activity log.

```bash
acccess_logs_per_page=1000
```

#### resource_usage_items_per_page

Set number of rows to display per page on the 'Resource Usage History' page.

```bash
resource_usage_items_per_page=100
```

#### resource_usage_retention

Set number of records to keep for each user, default value is 100.

```bash
resource_usage_retention=100
```

#### resource_usage_charts_mode
`resource_usage_charts_mode` allows you to set the number of charts displayed on users _Historical Resource Usage_ page.


- _one_ - displays a single chart for both CPU and RAM usage.
- _two_ (Default) - displays two charts: one for CPU and another for RAM. 
- _none_ - displays no charts.

```bash
resource_usage_charts_mode=two
```

#### sidebar_color

`sidebar_color` allows you to set a custom color scheme for the sidebar.


Available options are:

- dark
- prime
- light

```bash
sidebar_color=prime
```

#### password_reset

`password_reset` allows you to enable or disable the password reset functionality for the login page. By default password reset is disabled.

```bash
password_reset=yes
```

#### avatar_type

`avatar_type` allows you to set the type of images used for users profile pictures in the users panel.


Available options:

- _gravatar_ - displays the gravatar picture associated with the email address of the user.
- _letter_ - displays a CSS generated icon using the users first letter of the username.
- _icon_ - displays a placeholder bootstrap icon representing the user.

```bash
avatar_type=gravatar
```

#### logout_url

`logout_url` allows administrators to define the destination to which users should be redirected after they log out. The default setting directs them to the `/login` page.

```bash
logout_url=https://google.com
```

#### activity_items_per_page

`activity_items_per_page` allows administrators to define the default number of displayed items on the `/activity` page, the value defaults to 25.

```bash
activity_items_per_page=50
```

#### force_domain

`force_domain` enables you to specify a mandatory domain name for accessing the user panel. If a user attempts to visit the panel using any other domain, such as "their-domain.com:2083", they will be automatically redirected to "your-domain.com:2083." This feature utilizes the `port` option to ensure the enforcement of the specified port value as well.


```bash
force_domain=openpanel.co
```

#### port

The `port` setting enables you to define a custom port for the panel's operation. By default, the panel uses port **2083**, but you have the flexibility to set it to any desired port.
It's crucial to ensure that the chosen port is open in your firewall configuration. 

```bash
port=2083
```

:::info
After adjusting the port, it's necessary to restart the panel service to apply the new port configuration.
:::


#### ssl

The `ssl` setting when enabled will force both the OpenPanel and AdminPanel to use SSL for the hostname and redirect traffic to https. This setting is by default disabled but will be automatically enabled if [opencli ssl-hostname](#hostname) succeeded in generating an SSL for the hostname during OpenPanel installation.

```bash
ssl=no
```

#### openpanel_proxy

The `openpanel_proxy` setting allows you to set a custom /something that will allow users to access their openpanel interface using their domain names. For example: 'panel' will make any domain, example: 'example.com/panel' redirect to the OpenPanel.

```bash
openpanel_proxy=open_sesame
```

#### nameservers

The `ns1` `ns2` `ns3` `ns4` options allow you to set nameservers that will be used in dns zone files for newly added domains, and displayed to users on their panel dashboard.
Nameservers should be added in pairs, ns1 and ns2, ns3 and ns4.

```bash
ns1=ns1.openpanel.co
ns2=ns2.openpanel.co
ns3=ns3.openpanel.co
ns4=ns4.openpanel.co
```

#### enabled_modules

In OpenPanel version 0.1.5, we implemented the Modules feature, which, by default, loads only the essential modules. Administrators also have the option to selectively disable modules they do not require.

Currently, the following modules are optional and can be disabled by the Administrator:
```bash
enabled_modules=phpmyadmin,ssh,crons,backups,wordpress,pm2,disk_usage,inodes,usage,terminal,services,webserver,fix_permissions,malware_scan,process_manager,ip_blocker,redis,memcached,elasticsearch,login_history,activity
```

#### autopatch

The `autopatch` option allows Administrator to automatically update OpenPanel to minor versions.

| Autopatch    | Update to minor version  | Update to major version  |
| -------- | ------- | ------- |
| yes | 1.0.2 will be updated to 1.0.3 | 1.0.2 will **NOT** be updated to 2.0.0 |
| no | 1.0.2 will **NOT** be updated to 1.0.3 | 1.0.2 will **NOT** be updated to 2.0.0 |

```bash
autopatch=yes
```

#### autoupdate

The `autoupdate` option allows Aministrator to enable or disable automatic updates.

| Autoupdate    | Update to minor version  | Update to major version  |
| -------- | ------- | ------- |
| yes | 1.0.2 will **NOT** be updated to 1.0.3 | 1.0.2 will be updated to 2.0.0 |
| no | 1.0.2 will **NOT** be updated to 1.0.3 | 1.0.2 will **NOT** be updated to 2.0.0 |

```bash
autoupdate=yes
```


#### twofa_nag

The `twofa_nag` option allows Administrator to set if 2FA nag should be displayed to users on their dashboard page.


```bash
twofa_nag=yes
```

#### how_to_guides

The `how_to_guides` option allows Aministrator to enable or disable the How-to guides section from users dashboards.


```bash
how_to_guides=yes
```
If configured as "yes", the system will initially attempt to access a JSON file containing your custom how-to guides. In the event that the file is not available, articles from https://openpanel.co/docs/panel/dashboard/#how-to-guides will be shown instead.


#### api

The `api` option allows Aministrator to enable or disable the API functionality.

Default value is Off

#### dev_mode

The `dev_mode` option allows Aministrator to disable minified responses for OpenAdmin (HTML, JS, CSS and JSON).

Default value is Off

#### max_ram

The `max_ram` option allows Aministrator to set maximum % of available RAM that can be used by Docker service. [More information](https://openpanel.co/docs/changelog/0.1.8/#docker-resources)

```bash
max_ram=90
```

#### max_cpu

The `max_cpu` option allows Aministrator to set maximum % of available CPU that can be used by Docker service. [More information](https://openpanel.co/docs/changelog/0.1.8/#docker-resources)

```bash
max_cpu=95
```
