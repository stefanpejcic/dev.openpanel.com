
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


## User Files

All files for a user are stored in their /home directory: `/home/$docker_context/`:

```
/home/stefan/
├── docker-compose.yml        - Contains all services that user can run.
├── .env                      - Contains ports, resource limits and passwrods for services.
├── httpd.conf                - main configuration that is used IF user runs Apache webserver.
├── nginx.conf                - main configuration that is used IF user runs Nginx webserver.
├── openresty.conf            - main configuration that is used IF user runs OpenResty webserver.
├── openlitespeed.conf        - main configuration that is used IF user runs OpenLitespeed webserver.
├── default.vcl               - Varnish Configuration that is used if Varnish cache is enabled for user.
├── php.ini/                  - PHP.INI files hat user can edit via 'OpenPanel > PHP > PHP.INI Editor' page.
├── crons.ini                 - Cron jobs that user can edit via 'OpenPanel > Cron Jobs' page.
├── backup.env                - Backup configuration that user can edit via 'OpenPanel > Files > Backups' page.
├── my.cnf                    - MySQL root user logins that are used for ALL actions from the OpenPanel UI.
├── custom.cnf                - MySQL Configuration that user can edit via 'OpenPanel > MySQL > Configuration' page.
├── postgre_custom.conf       - PostgreSQL Configuration that user can edit via 'OpenPanel > PostgreSQL > Configuration' page.
├── pma.php                   - used to allow auto-login to phpMyAdmin from OpenPanel UI.
├── docker-data/              - All docker files: containers, images, volumes..
│   └── volumes/ 
│       ├── $context_html_data/             - Website files (/var/www/html/ in 'OpenPanel > File Manager' page).
│       ├── $context_mysql_data/            - MySQL storage (all databases).
│       ├── $context_mysql_dumps/           - MySQL /tmp folder used for dumps.
│       ├── $context_pg_data/               - PostgreSQL storage (all databases).
│       └── $context_webserver_data/        - VirtualHosts files for domains.
├── .config/                  - systemd service files.
├── .docker/                  - Docker service files.
├── bin/                      - service files.
├── sockets/                  - sockets for running services.
└── .bashrc                   - Sets path and docker host.
```
-rw-r--r--  1 stefantestira stefantestira 30655 Mar 24 19:57 postgre_custom.conf
drwxrwxrwx  6 stefantestira stefantestira  4096 Mar 24 19:57 sockets/
