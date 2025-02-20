
# Structure

OpenPanel uses the following files and directories:

Configuration:
```
/etc/openpanel/
├── bind9/                    - Configuration for DNS service.
├── caddy/                    - Caddy webserver configuration and data.
├── clamav/                   - ClamAV service configuration.
├── docker/                   - Docker configuration.
├── ftp/                      - Settings and user data for FTP service.
├── goaccess/                 - Configuration for GoAccess reports.
├── mysql/                    - Database schema.
├── nginx/                    - Nginx webserver configuraton [DEPRECATED].
├── openadmin/                - Settings for the admin panel.
├── openpanel/                - Settings for the user panel.
├── php/                      - PHP blueprints.
├── services/                 - Services configuration files.
├── skeleton/                 - Files used for new user accounts.
├── ssh/                      - SSH configuration and motd.
└── varnish/                  - Varnish configuration - [DEPRECATED].
```

Default configuration can be viewed [here](https://github.com/stefanpejcic/OpenPanel-configuration).
