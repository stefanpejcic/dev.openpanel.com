# Files


### Fix Permissions

The `fix_permissions` script can be used to fix permissions on user files.

It performs:
- sets the owner of all files in path to the user.
- sets the group of all files in path to the www-data group (apache/nginx webserver user).
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
Fix permissions for all folders iniside user home directory (/home/$username):

```bash
opencli files-fix_permissions <USERNAME>
```

## All Users

Use the `--all` flag to change permissions for all active users:

```bash
opencli files-fix_permissions --all
```



### Remount

This will stop docker container for user, mount their storage file to the home directory, then restart their docker contianer to show the home directory files within their container.

```bash
opencli files-remount
```
