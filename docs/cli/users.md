# Users

Manage users: Add, Delete, Suspend, Unsuspend, etc.

### List Users

To list all users, use the following command:

```bash
opencli user-list
```

Example output:
```bash
opencli user-list
+----+-----------+---------------------------------+-----------------------+-----------+---------+---------------------+
| id | username  | email                           | plan_name             | server    | owner   | registered_date     |
+----+-----------+---------------------------------+-----------------------+-----------+---------+---------------------+
|  1 | pejcic    | stefan@pejcic.rs                | Nesto trece           | pejcic    | NULL    | 2025-02-19 11:32:05 |
|  2 | nesto     | stefan@netops.com               | Cloud Web Starter     | nesto     | NULL    | 2025-02-19 11:33:28 |
|  5 | jecmenica | jecmenica@jecmenica.rs          | Nginx MySQL Basic     | jecmenica | NULL    | 2025-02-19 14:20:50 |
|  8 | ajde      | ajde                            | LiteSpeed Nginx Boost | ajde      | NULL    | 2025-02-20 09:11:23 |
|  9 | fctuzc3n  | fctuzc3n                        | Nginx MySQL Basic     | fctuzc3n  | pavlaka | 2025-02-20 18:50:07 |
+----+-----------+---------------------------------+-----------------------+-----------+---------+---------------------+
```

You can also format the data as JSON:

```bash
opencli user-list --json
```

To display only user count:

```bash
opencli user-list --total
```
or:

```bash
opencli user-list --total --json
```

#### List users over Quota


```bash
opencli user-list --over_quota
```

Example output:
```bash
opencli user-list --over_quota

                        Block limits                File limits
User            used    soft    hard  grace    used  soft  hard  grace
----------------------------------------------------------------------
api       +- 6228924 5120000 5120000   none   73320 1000000 1000000  
```

#### List all users Quotas


```bash
opencli user-list --quota
```

Example output:
```bash
opencli user-list --quota

                        Block limits                File limits
User            used    soft    hard  grace    used  soft  hard  grace
----------------------------------------------------------------------
api       +- 6228924 5120000 5120000   none   73320 1000000 1000000       
root@baze:/# bash  a --quota
                        Block limits                File limits
User            used    soft    hard  grace    used  soft  hard  grace
----------------------------------------------------------------------
root      -- 15657452       0       0         333161     0     0       
dnsmasq   --      88       0       0             10     0     0       
api       +- 6228924 5120000 5120000   none   73320 1000000 1000000       
dbonly    -- 1317260 5120000 5120000          22140 1000000 1000000       
```

### Add User

```
opencli user-add <USERNAME> <PASSWORD|generate> <EMAIL> "<PLAN_NAME>" [--send-email] [--debug] [--reseller=<RESELLER_USERNAME>] [--server=<IP_ADDRESS>]  [--key=<SSH_KEY_PATH>]
```

To create a new user run the following command:

```bash
opencli user-add <USERNAME> <PASSWORD> <EMAIL> <PLAN_NAME>
```

Example:
```bash
opencli user-add stefan pejcic324 stefan@pejcic.rs 'Default Plan Nginx'
```


:::tip
Provide `random` as password to generate a strong random password.
:::


To send email to the email address for the user with login credentials, pass the `--send-email` flag.


#### Create user on Slave server

To create a new user on another server:

1. Create ssk key pair and establish ssh connection from master to the slave server.
2. Run the following command:

```bash
opencli user-add <USERNAME> <PASSWORD> <EMAIL> "<PLAN_NAME>" --server=<IP_ADDRESS> --key=<SSH_KEY_PATH>
```


Example:
```bash
opencli user-add stefan pejcic324 stefan@pejcic.rs 'Default Plan Nginx' --server=11.54.64.71 --key=/root/some_key.rsa
```

#### Create user for Reseller


```bash
opencli user-add <USERNAME> <PASSWORD> <EMAIL> "<PLAN_NAME>" --reseller=<RESELLER_USERNAME>
```

Example:
```bash
opencli user-add stefan pejcic324 stefan@pejcic.rs 'Default Plan Nginx' --reseller=pejcic
```

### Transfer User

To transfer user account to another server:

```bash
opencli user-transfer --account <OPENPANEL_USER> --host <DESTINATION_IP> --username <OPENPANEL_USERNAME> --password <DESTINATION_SSH_PASSWORD> --port 22
```

add `--live-transfer` flag to suspend account after the transfer, and forward DNS to the new server.

### Delete User

To delete a user and all his data run the following command:

```bash
opencli user-delete <USERNAME>
```

add `-y` flag to disable prompt.

:::warning
This action is irreversible and will permanently delete all user data.
:::

To delete all users and all their data use the `--all` flag:

```bash
opencli user-delete --all
```

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

## Login as User

This command allows you to generate an auto-login link for any OpenPanel user.

```bash
opencli user-login <USERNAME>
```

example:
```bash
# opencli user-login demouser --open
https://demo.openpanel.org:2083/login_autologin?admin_token=RMWvZK1cdeRkZQJGVQv682qby9XIPr&username=demouser
```

To invalidate an existing token for a user:
```bash
opencli user-login <USERNAME> --delete
```

To open the link in a browser:
```bash
opencli user-login <USERNAME> --open
```

### Change Plan

Command: `opencli user-change_plan` allows you to change plan for a user.

```bash
opencli user-change_plan <username> "<new_plan_name>"
```

### Quota

Command: `opencli user-quota` enforces and recalculates disk and inodes for specific or all users.

```bash
opencli user-quota <username|--all>
```

### Resources

Command: `opencli user-resources` lists a user's active services, allows editing of their CPU and RAM limits, and can start or stop the services.

```bash
Usage: opencli user-resources <context> [options]

Options:
  --json                         Output result in JSON format.
  --update_cpu=<value>           Update CPU allocation (global or per service).
  --update_ram=<value>           Update RAM allocation (global or per service).
  --service=<service>            Specify the service name to update.
  --activate=<service>           Start the specified service.
  --deactivate=<service>         Stop the specified service.
  --force                        Force image pull before activation.
  --debug                        Display raw output of docker-compsoe commands.

Example:
  opencli user-resources stefan --json
  opencli user-resources stefan --service=apache --update_cpu=1.5
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


### Check

Check files and security for a user:

```bash
opencli user-check <USERNAME>
```

Example report:

```bash
root@test:/usr/local/# opencli user-check mozda
===== Checking user: mozda =====
---- Docker Daemon Security ----
[INFO] Running for user: mozda
[WARN] Inter-container communication on default bridge is allowed
[WARN] Docker logging level is not set to 'info' ('default')
[PASS] Docker is not allowed to modify iptables
[PASS] Not using deprecated aufs storage driver
[WARN] TLS authentication for Docker daemon is NOT configured
[PASS] Docker daemon is NOT listening on TCP socket
[PASS] Experimental features are NOT enabled
[PASS] Rootless context is configured
[PASS] Containers can not get new privileges
[PASS] Google DNS resolvers are configured

---- System and User Files ----
[PASS] /home/mozda/docker-data is configured for docker data.
[PASS] home.mozda.bin.rootlesskit file exists.
[PASS] .env file exists.
[PASS] docker-compose.yml file exists.
[PASS] backup.env file exists.
[PASS] crons.ini file exists.
[PASS] custom.cnf file exists.
[PASS] default.vcl file exists.
[PASS] httpd.conf file exists.
[PASS] nginx.conf file exists.
[PASS] openresty.conf file exists.
[PASS] pma.php file exists.
[PASS] Disk usage is below quota (3.80 GB used of 4.88 GB).
[PASS] Inode usage is below quota (113350 used of 1000000).
[INFO] Checking files ownership for user: mozda (UID: 1004, GID: 1004)
[WARN] File '/home/mozda/docker-data/overlay2/25af867389efa6af7eb6120dceef0bb601796ab469af0c9c4c798671594be432/diff/var/www/html' is owned by UID:100032 instead of UID:1004
[FAIL] Some docker files in /home/mozda/docker-data/ are not owned by UID:1004

---- Container Security Checks ----
[INFO] Found 2 running container(s)
---- Container: openresty ----
[PASS] openresty: Container running from OpenPanel
[PASS] openresty: Container name matches compose service name: openresty
[PASS] openresty: Container is running
[PASS] openresty: Container is running as root
[PASS] openresty: Using specific tag for image: openresty/openresty:bullseye-fat
[WARN] openresty: No HEALTHCHECK configured
[WARN] openresty: SELinux options not set
[WARN] openresty: --no-new-privileges restriction not set
[PASS] openresty: No extra Linux capabilities added
[PASS] openresty: Privileged mode is disabled
[WARN] openresty: Bind mounts under /home/ or /etc/openpanel/
[PASS] openresty: Docker socket is NOT mounted
[PASS] openresty: sshd is NOT running inside container
[PASS] openresty: Using OpenPanel network (mozda_www)
[PASS] openresty: All ports are bound to 127.0.0.1
[PASS] openresty: Memory usage is limited to .50 GB
[PASS] openresty: CPU usage is limited to .50 CPUs
[PASS] openresty: PID cgroup limit is set (100)
[WARN] openresty: Root filesystem is NOT read-only
[PASS] openresty: Host devices are NOT exposed
[WARN] openresty: Default ulimit is used
---- Container: php-fpm-8.2 ----
[PASS] php-fpm-8.2: Container running from OpenPanel
[PASS] php-fpm-8.2: Container name matches compose service name: php-fpm-8.2
[PASS] php-fpm-8.2: Container is running
[PASS] php-fpm-8.2: Container is running as root
[WARN] php-fpm-8.2: No HEALTHCHECK configured
[WARN] php-fpm-8.2: SELinux options not set
[WARN] php-fpm-8.2: --no-new-privileges restriction not set
[PASS] php-fpm-8.2: No extra Linux capabilities added
[PASS] php-fpm-8.2: Privileged mode is disabled
[WARN] php-fpm-8.2: Bind mounts under /home/ or /etc/openpanel/
[PASS] php-fpm-8.2: Docker socket is NOT mounted
[PASS] php-fpm-8.2: sshd is NOT running inside container
[PASS] php-fpm-8.2: Using OpenPanel network (mozda_db)
[PASS] php-fpm-8.2: No exposed ports
[PASS] php-fpm-8.2: Memory usage is limited to .25 GB
[PASS] php-fpm-8.2: CPU usage is limited to .12 CPUs
[PASS] php-fpm-8.2: PID cgroup limit is set (100)
[WARN] php-fpm-8.2: Root filesystem is NOT read-only
[PASS] php-fpm-8.2: Host devices are NOT exposed
[WARN] php-fpm-8.2: Default ulimit is used

===== Audit Summary =====
Total checks performed: 70
✅ Passed: 50
❌ Failed: 1
⚠️  Warnings: 16
ℹ️  Info: 3

⚠️  Critical issues found! Please review and address failed checks.

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

### Varnish
Check Varnish Caching status for user and enable/disable Varnish service.

```bash
opencli user-varnish <USERNAME> [enable|disable|status]
```


Enable Varnish:
```bash
opencli user-varnish <USERNAME> enable 
```

Disable Varnish:
```bash
opencli user-varnish <USERNAME> disable 
```

Check status:
```bash
opencli user-varnish <USERNAME> status
```

Check short status (returns *Current status: on/off*):
```bash
opencli user-varnish <USERNAME>
```


