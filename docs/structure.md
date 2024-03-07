
# Structure

OpenPanel uses the following files and directories:

OpenPanel Directories:
```
/usr/local/admin/
├── core/                     - Users information and usage data
├── modules/                  - Python scripts for user panel
├── templates/                - HTML templates for the user panel
├── static/                   - CSS, JS and images for the user panel
├── conf/                     - Configuration files
├── screenshot_cache/         - Screenshots for user websites
├── pyarmor_runtime_000000/   - Encoded python files
├── __pycache__/              - Cached python files
├── ubabel.cfg                - Localization configuration
├── messages.pot              - Localization file
├── version                   - OpenPanel version
└── app.py                    - Main Python file for user panel
```

OpenAdmin Directories:
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
├── __pycache__/              - Cached python files
├── users.db                  - SQLite database with the admin users
├── db.cnf                    - MySQL login infomration for OpenCLI
├── config.json               - MySQL login information fur OpenPanel
└── app.py                    - Main Python file for admin panel
```
