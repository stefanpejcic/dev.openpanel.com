# Files


### Fix Permissions

The `fix_permissions` script can be used to fix permissions on user files inside their container.

It performs:

Website files:
- sets the owner of all files in `/var/www/html/` to the  www-data user.
- sets the group of all files in `/var/www/html/` to the www-data group.
- sets the permissions of all files to 644.
- sets the permissions of all directories to 755.

Website files:
- sets the owner of all files in `/var/www/html/` to the  www-data user.
- sets the group of all files in `/var/www/html/` to the www-data group.
- sets the permissions of all files to 644.
- sets the permissions of all directories to 755.

Emails:
- sets the owner of all files in `/var/mail/` to the  user.
- sets the permissions of all files to 644.
- sets the permissions of all directories to 755.


## Single folder

Fix permissions for specific folder for user:

```bash
opencli files-fix_permissions <USERNAME> <PATH>
```

**TIP:** add `--debug` flag to show verbose information on what is exaclty being done:
```bash
opencli files-fix_permissions <USERNAME> <PATH> --debug
```

Example:
```bash
opencli files-fix_permissions stefan stefan.pejcic.rs
```

## Single User
Fix permissions for all folders iniside user home directory (`/var/www/html/`):

```bash
opencli files-fix_permissions <USERNAME>
```

## All Users

Use the `--all` flag to change permissions for all active users:

```bash
opencli files-fix_permissions --all
```
