# Services

OpenPanel uses the following services:

## Nginx

[Nginx](https://www.nginx.com/) is used as a reverse proxy to redirect traffic from and to user websites in their docker containers.




| File              | Location      | Description      |
|----------------------|-----------|-----------|
| Nginx main configuration file | `/etc/openpanel/nginx/nginx.conf` | This file is generated at the time of OpenPanel installation and remains unchanged during updates, allowing for the addition of custom configurations without the risk of them being overwritten by subsequent updates. |
| Nginx access logs | `/var/log/nginx/domlogs/` | This directory holds access logs of all domains. Within this folder, each domain is allocated its own file for logging purposes. For instance, the access logs for the domain *pejcic.rs* are stored in the file named `/var/log/nginx/domlogs/pejcic.rs.log`. |
| Template for new domains | `/etc/openpanel/nginx/vhosts/default.conf` | The [template](https://github.com/stefanpejcic/openpanel-configuration/blob/main/nginx/vhosts/default.conf) used for new domains: restricts access to domains that are not hosted on the server. It is recommended not to modify this file. |
| Vhost for existing domains | `/etc/nginx/sites-enabled/` | Virtual host files for each domain are situated within the `/etc/nginx/sites-enabled/` directory. For example, the virtual host file for the domain *pejcic.rs* can be found at `/etc/nginx/sites-enabled/pejcic.rs.conf`. |
| /openpanel /openadmin and /webmail redirects | `/etc/openpanel/nginx/vhosts/openpanel_proxy.conf` | [This file](https://github.com/stefanpejcic/openpanel-configuration/blob/main/nginx/vhosts/openpanel_proxy.conf) allows users to access `/webmail` and `/openpanel` from their domains. This can be changed by the Administrator from *OpenAdmin > General Settings* |
| IP blocking per domain | `/etc/openpanel/openpanel/core/users/<USERNAME>/domains/<DOMAIN_NAME>-block_ips.conf` | Each domain has a configuration file where user can block IP addresses per domain: `/etc/openpanel/openpanel/core/users/<USERNAME>/domains/<DOMAIN_NAME>-block_ips.conf`. |
| Error pages | `/etc/openpanel/nginx/error_pages` | This directory is used to store configuration and templates for [Nginx error pages](https://github.com/denysvitali/nginx-error-pages). |
| Error pages | `/etc/openpanel/nginx/error_pages` | This directory is used to store configuration and templates for [Nginx error pages](https://github.com/denysvitali/nginx-error-pages). |
| Nginx error log | `/var/log/nginx/error.log` | Default error log file for nginx service. |
| Nginx access log | `/var/log/nginx/access.log` | Default access log file for doamins that are not hosted on server. |




## Docker

[Docker](https://www.docker.com/) is used to isolate user accounts and provide them a VPS-like experience.

During OpenPanel installation process, defualt storage driver for Docker is set to either [*overlay2*](https://github.com/stefanpejcic/openpanel-configuration/blob/main/docker/overlay2/daemon.json) or [*devicemapper*](https://github.com/stefanpejcic/openpanel-configuration/blob/main/docker/devicemapper/daemon.json).

Difference between devicemapper and overlay2 docker storage engines:

|  | devicemapper  | overlay2  |
|---|---|---|
|  Disk limits | Allows you to set disk limits per user  |  Does not allow disk limits per user |
|  Speed | slower creation speed and startup on server restart  | faster account creation and server startup  |
|  Resizing | possible to downgrade account disk size  | disk size can not bw downgraded  |
|  Recommended | for shared hosting servers with 10+ users  | for VPS where you manage all users  |

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


MySQL login information is stored in file: `/etc/openpanel/mysql/db.conf`. This file is used by the OpenAdmin and OpenPanel services. This file is also symlinked to the `/etc/my.cnf` that is used when running mysql commands on the terminal or OpenCLI.

## SQLite

SQLite database is used by the OpenAdmin panel in order to completely separate the Admin and end-user interface.

Database file: `/etc/openpanel/openadmin/users.db`

## Named

[Named (BIND9)](https://www.isc.org/bind/) service is used for DNS.

Administrators can set custom nameservers on *OpenAdmin > OpenPanel Settings* to be used for OpenPanel websites.

[ default named.conf.options` configuration file](https://github.com/stefanpejcic/openpanel-configuration/blob/main/bind9/named.conf.options)


## GoAccess

OpenPanel uses [GoAccess](https://goaccess.io/) to generate beautiful HTML reports from Nginx access logs for each domain.

Starting with OpenPanel version 0.1.7, goaccess is no more installed on the server. Instead, it's executed within Docker containers when required to parse domain access logs.

OpenPanel also downloads [GeoIPLite2 City and Country](https://dev.maxmind.com/geoip/geolite2-free-geolocation-data) databases in order to display location info for each IP address in reports.

To customize these reports edit the [/etc/openpanel/goaccess/goaccess.conf](https://github.com/stefanpejcic/openpanel-configuration/blob/main/goaccess/goaccess.conf) file.

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

[openpanel/openpanel](https://hub.docker.com/r/openpanel/openpanel) docker image is used to provide access to the OpenPanel interface that allows users to manage their accounts.

OpenPanel is a [Flask](https://flask.palletsprojects.com/en/3.0.x/)-based application that uses [MySQL](#MySQL) to store user data and operates on the [Gunicorn](https://gunicorn.org/) web server. This configuration ensures that OpenPanel remains functional even if the Nginx service is down, thereby providing complete isolation between user websites and the admin panel.

OpenPanel operates in production mode by default, logging only [errors and access logs](/logs.html). For developers needing more detailed logs for troubleshooting or development purposes, it is possible to switch to a more verbose logging mode by stopping the OpenPanel service and running the Flask application directly with specific commands.

To temporarily stop the OpenPanel service for this purpose, use the following command:
`docker stop openpanel`

## OpenAdmin

`admin` service is used by the OpenAdmin interface.

OpenAdmin is a [Flask](https://flask.palletsprojects.com/en/3.0.x/) application that utilizes [SQLite](https://www.sqlite.org/) for its database and runs on a separate Gunicorn instance. It operates independently from the OpenPanel and Nginx services.


