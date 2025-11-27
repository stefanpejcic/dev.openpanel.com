
# Admin

enable/disable the admin panel, reset password, add admin users, etc.

### Check Status

Check if admin panel is enabled or disabled and display link on which the OpenAdmin is accessibe:

```bash
opencli admin
```

Example:
```bash
# opencli admin
● OpenAdmin is running and is available on: https://server.openpanel.co:2087/
```

### Enable / Disable adminpanel

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


### Create new Reseller

To create new reseller accounts:

```bash
opencli admin new <username> <password> --reseller
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



## Notifications

`opencli admin notifications` allows you to change the notification preferences.

Settings are stored in `/etc/openpanel/openadmin/config/notifications.ini` file. However, it is recommended not to modify this file directly. Instead, it's best to utilize the opencli commands. This way, any changes made are immediately applied, and the admin service is automatically restarted only when necessary.

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
- attack
- limit
- update
- load
- swap
- cpu
- ram
- du


### View OpenAdmin logs

To multitail [all OpenAdmin logs](/logs.html):

```bash
opencli admin logs
```


To tail OpenAdmin error log:

```bash
opencli admin log
```





