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

### Login as User

This command allows you to login as the root user inside any users container.

To list all users and select user to login:

```bash
opencli user-login
```

To login directly as a specific user:

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

