
# Structure

OpenPanel uses the following files and directories:

Configuration:
```
/etc/openpanel/
├── bind9/                    - DNS configuration files and templates 
├── docker/                   - Docker configuration
├── goaccess/                 - Configuration for Domain Access Reports
├── mysql/                    - MySQL login information and backups
├── nginx/                    - Nginx configurtion and domain templates
├── openadmin/                - Configuration files for OpenAdmin service
├── openpanel/                - Configuration files for OpenPanel
├── skeleton/                 - Files that are used for new users
├── ssh/                      - SSH configuration
└── ufw/                      - Firewall configuration
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
