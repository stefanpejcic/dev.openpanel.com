# Services

OpenPanel uses the following services:

## Nginx

[Nginx](https://www.nginx.com/) is used as a reverse proxy to redirect traffic from and to user websites in their docker containers.

Nginx main configuration file location: `/etc/nginx/nginx.conf`

This file is generated at the time of OpenPanel installation and remains unchanged during updates, allowing for the addition of custom configurations without the risk of them being overwritten by subsequent updates.


The `/var/log/nginx/domlogs/` directory serves as the repository for access logs of all domains. Within this folder, each domain is allocated its own file for logging purposes. For instance, the access logs for the domain *pejcic.rs* are stored in the file named `/var/log/nginx/domlogs/pejcic.rs.log`.

The `/etc/nginx/sites-enabled/default`  file acts as the default configuration file, which restricts access to domains that are not hosted on the server. It is recommended not to modify this file.

default vhost file template:
```
server {
    listen IP_HERE:80;
    server_name _;
    return 444;
    # https://http.cat/status/444
}
```


Virtual host files for each domain are situated within the `/etc/nginx/sites-enabled/` directory. For example, the virtual host file for the domain *pejcic.rs* can be found at `/etc/nginx/sites-enabled/pejcic.rs.conf`.

VrutalHosts template for domains:
```
server {
    listen <LISTEN_IP>;
    server_name <DOMAIN_NAME>;

    # if modsecurity is installed
    modsecurity on;
    modsecurity_rules_file /etc/nginx/modsec/main.conf;

    include snippets/error_pages.conf;
    access_log /var/log/nginx/domlogs/<DOMAIN_NAME>.log;
    include /usr/local/panel/core/users/<USERNAME>/domains/<DOMAIN_NAME>-block_ips.conf;


    location / {
        proxy_pass http://<IP>;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # openpanel
    include /usr/local/panel/templates/vhosts/openpanel_proxy.conf;
}
```

OpenPanel is available to all users on their-domain.com`/openpanel`
```
# openpanel
location /openpanel {
    proxy_pass https://127.0.0.1:2083;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

This can be changed by the Administrator from *OpenAdmin > General Settings*

`/etc/nginx/snippets/` directory is used to store configuration and templates for [Nginx error pages](https://github.com/denysvitali/nginx-error-pages).

Each domain has a configuration file where user can block IP addresses per domain: `/usr/local/panel/core/users/<USERNAME>/domains/<DOMAIN_NAME>-block_ips.conf`.

Nginx service uses the following log files:
- error log: `/var/log/nginx/error.log`
- access log: `/var/log/nginx/access.log`

There is a known issue with the Nginx service on servers operating behind NAT (such as those on Azure, AWS, etc.) that do not have a public IP assigned directly to them, which can cause the Nginx service to fail to start. To circumvent this problem, the OpenPanel installation procedure includes a check for this scenario and, if necessary, [applies an additional configuration](https://stackoverflow.com/questions/3191509/nginx-error-99-cannot-assign-requested-address/13141104#13141104) as advised. This step ensures that Nginx can successfully start and operate even in environments where the server is behind NAT and lacks a public IP address.







## Docker

[Docker](https://www.docker.com/) is used to isolate user accounts and provide them a VPS-like experience.

During OpenPanel installation process, defualt storage driver for Docker is changed from *overlay2* to *devicemapper*.

Configuration file `/etc/docker/daemon.json` is not modified on update.

## MySQL

:::info
Starting 0.1.7 OpenPanel uses MySQL docker container and data is stored inside `openpanel_mysql_data` volume. [Info](https://openpanel.co/docs/changelog/0.1.7/#containerized-services)
:::

[MySQL](https://www.mysql.com/) is used as a database to store all user related information:

- Users
- Plans
- Domains
- Websites

During OpenPanel installation, MySQL is installed and configured to allow only local access.

Main configuration file `/etc/mysql/mysql.conf.d/mysqld.cnf` is not edited on update.

Default MySQL configuration file:
```
[mysqld]

user            = mysql
bind-address            = 127.0.0.1
mysqlx-bind-address     = 127.0.0.1
key_buffer_size         = 160M
max_allowed_packet      = 32M
thread_stack            = 256K
myisam-recover-options  = BACKUP
table_open_cache       = 4000
interactive_timeout=15
wait_timeout=10

log_error = /var/log/mysql/error.log
max_binlog_size   = 100M
```

MySQL login information is stored in files:

- `/usr/local/admin/db.conf` - for OpenCLI
- `/usr/local/admin/config.json` - for OpenPanel




To use remote mysql database: https://community.openpanel.co/d/19-use-remote-mysql-server-for-openadmin

## SQLite

SQLite database is used by the OpenAdmin panel in order to completely separate the Admin and end-user interface.

Database file: `/usr/local/admin/scripts`

## Named

[Named (BIND9)](https://www.isc.org/bind/) service is used for DNS.

Administrators can set custom nameservers on *OpenAdmin > OpenPanel Settings* to be used for OpenPanel websites.

`named.conf.options` configuration file:
```
acl trusted {
                localhost;
                192.168.1.0/24;
                172.0.0.0/8;
                   };

options {
        directory "/var/cache/bind";

        recursion yes;
        allow-recursion { trusted; };

        forwarders {
        8.8.8.8;
        8.8.4.4;
                   };

        dnssec-validation auto;
        listen-on-v6 { any; };
        };
```


## GoAccess

OpenPanel uses [GoAccess](https://goaccess.io/) to generate beautiful HTML reports from Nginx access logs for each domain.

Starting with OpenPanel version 0.1.7, goaccess is no more installed on the server. Instead, it's executed within Docker containers when required to parse domain access logs.

OpenPanel also downloads [GeoIPLite2 City and Country](https://dev.maxmind.com/geoip/geolite2-free-geolocation-data) databases in order to display location info for each IP address in reports.

## ModSecurity

OpenPanel installation **does not** setup [ModSecurity](https://github.com/owasp-modsecurity/ModSecurity). Installation of ModSecurity is optional.

## Certbot

OpenPanel employs [Certbot](https://certbot.eff.org/), a free, open-source software tool, for generating, renewing, and configuring Let's Encrypt SSL certificates for all domains added by users. This integration facilitates the secure encryption of web traffic by providing and managing SSL/TLS certificates for websites hosted on the panel, ensuring that all communications between the server and its visitors are securely encrypted.

## UFW
[UncomplicatedFirewall (UFW)](https://wiki.ubuntu.com/UncomplicatedFirewall) is utilized by OpenPanel to manage access to users' services and websites. OpenPanel configures UFW to open only the necessary ports for each user.

Upon installation of OpenPanel, all access is initially blocked, with exceptions made for the following ports:
```
22/tcp                    # for SSH
80/tcp                    # for HTTP websites via Nginx
53                        # for DNS services using Named service
443/tcp                   # for HTTPS websites via Nginx
2083/tcp                  # as the default port for OpenPanel
2087/tcp                  # as the default port for OpenAdmin
```

On installation, OpenPanel whitelists the IP address of the admin user who installs OpenPanel, ensuring they retain access.

For each user created, OpenPanel configures UFW to open necessary random ports for their specific services, such as remote MySQL access, SSH, and phpMyAdmin. This ensures users have the required access while maintaining security by not using standard ports for these services.

Here's an example of random ports opened for a user, each accompanied by a comment for identification:

Example random ports opened for a user:
```
32772/tcp                  ALLOW       Anywhere                   # stefan
32770/tcp                  ALLOW       Anywhere                   # stefan
32769/tcp                  ALLOW       Anywhere                   # stefan
32768/tcp                  ALLOW       Anywhere                   # stefan
```

These ports are uniquely assigned and are indicated in the firewall settings with a comment (e.g., # stefan) to identify the specific user they are associated with.

If you are using external firewall, open the following port range:
```
32768:60999               # Docker range
```

NOTE: If you have other docker containers not run by OpenPanel, be cautious when opening the docker range, as it will expose those containers as well.

## OpenPanel

`panel` service is used by the OpenPanel interface that allows users to manage their accounts.

OpenPanel is a [Flask](https://flask.palletsprojects.com/en/3.0.x/)-based application that uses [MySQL](#MySQL) to store user data and operates on the [Gunicorn](https://gunicorn.org/) web server. This configuration ensures that OpenPanel remains functional even if the Nginx service is down, thereby providing complete isolation between user websites and the admin panel.

OpenPanel operates in production mode by default, logging only [errors and access logs](/logs.html). For developers needing more detailed logs for troubleshooting or development purposes, it is possible to switch to a more verbose logging mode by stopping the OpenPanel service and running the Flask application directly with specific commands.

To temporarily stop the OpenPanel service for this purpose, use the following command:
`service panel stop`

Then, to start the Flask application:

- For OpenPanel accessible via an IP address (without using a domain name), navigate to the OpenPanel directory and run the Flask application with the following command to listen on all network interfaces (0.0.0.0) on port 2083 (or another port if you have customized this setting):
`cd /usr/local/panel && flask run --host=0.0.0.0 -p 2083`
- For OpenPanel accessible via a domain name, you need to specify the SSL certificate and key to securely serve over HTTPS. Make sure to replace `server.openpanel.co` with your domain name for the panel and adjust the port number (`2083` by default) if you have changed it. Navigate to the OpenPanel directory and run the Flask application with the following command:
`cd /usr/local/panel && flask run --host=0.0.0.0 -p 2083 --cert=/etc/letsencrypt/live/server.openpanel.co/fullchain.pem --key=/etc/letsencrypt/live/server.openpanel.co/privkey.pem`

This approach allows developers to see real-time logs directly in the console, providing a more detailed insight into the application's operations, which can be invaluable for debugging or during development. Remember to restart the OpenPanel service with `service panel start` after completing your log analysis or development work to return to the standard, production-ready environment.


## OpenAdmin

`admin` service is used by the OpenAdmin interface.

OpenAdmin is a [Flask](https://flask.palletsprojects.com/en/3.0.x/) application that utilizes [SQLite](https://www.sqlite.org/) for its database and runs on a separate Gunicorn instance. It operates independently from the OpenPanel and Nginx services.
