
## Files


### Fix Permissions

The `fix_permissions` script can be used to fix permissions on user files.

It performs:
- sets the owner of all files inside /home/$username to the user.
- sets the permissions of .php files to 755.
- sets the permissions of .cgi and .pl files to 755.
- sets the permissions of .log files to 640.
- changes the ownership of all directories to match the user.
- sets the permissions of all directories to 755.

```bash
opencli files-fix_permissions <USERNAME>
```

You can pass the `--all` flag to change permissions for all users:

```bash
opencli files-fix_permissions --all
```

### Remount

Mount every home directory of users. This is done automaticatlly but can also be triggered when needed. Make sure to restart that docker container afterwards to apply changes.

```bash
opencli files-remount
```
