
# Structure

OpenPanel uses the following files and directories:

## OpenPanel

```
/usr/local/panel/
├── core/
│   └── users
├── modules/
│   └── includes
├── templates/
│   ├── Layout.vue
│   └── 404.vue
├── static/
│   ├── index.styl
│   └── palette.styl
├── translations/
│   ├── dev.html
│   └── ssr.html
├── app.py
├── pyarmor
└── version
```


# OpenAdmin 


```
/usr/local/admin/
├── core/                     - Password hashing module
├── scripts/                  - OpenCLI
├── modules/                  - Python scripts for admin panel
├── templates/                - HTML templates for the admin panel
├── static/                   - CSS, JS and images for the admin panel
├── backups/                  - Backup configuration files and logs
├── conf/                     - Custom configuration added by user
├── logs/                     - Logs for the Notifications Center
├── pyarmor_runtime_000000/   - Encoded python files
├── users.db                  - SQLite database with the admin users
├── db.cnf                    - MySQL login infomration for OpenCLI
├── config.json               - MySQL login information fur OpenPanel
└── app.py                    - Main Python file for amdin panel
```
