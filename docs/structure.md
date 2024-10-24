
# Structure

OpenPanel uses the following files and directories:

Configuration:
```
/etc/openpanel/
├── bind9/                    - DNS configuration files and templates 
├── docker/                   - Docker configuration
├── ftp/                      - vsftpd configuration
├── goaccess/                 - Configuration for Domain Access Reports
├── mysql/                    - MySQL login information and backups
├── nginx/                    - Nginx configurtion and domain templates
├── openadmin/                - OpenAdmin files: users, backups, settings
├── openpanel/                - OpenPanel files: settings and user data
├── php/                      - Configuration files for PHP versions/ini
├── services/                 - Various services
├── skeleton/                 - Files that are used for new users
├── ssh/                      - SSH configuration
└── varnish/                  - Varnish Caching configuration
```

OpenAdmin Directories:
```
/usr/local/admin/
├── core/                     - Password hashing module
├── scripts/                  - OpenCLI scripts
├── modules/                  - Python scripts for admin panel
├── templates/                - HTML templates for the admin panel
├── static/                   - CSS, JS and images for the admin panel
├── pyarmor_runtime_000000/   - Encoded python files
├── __pycache__/              - Cached python files
└── app.py                    - Main Python file for admin panel
```


