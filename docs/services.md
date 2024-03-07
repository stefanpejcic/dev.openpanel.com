# Services

OpenPanel uses the following services:

## Nginx

[Nginx](https://www.nginx.com/) is used as a reverse proxy to redirect traffic from and to user websites in their docker containers.

Nginx main configuration file location: `/etc/nginx/nginx.conf`

This file is generated at the time of OpenPanel installation and remains unchanged during updates, allowing for the addition of custom configurations without the risk of them being overwritten by subsequent updates.


The `/var/log/nginx/domlogs/` directory serves as the repository for access logs of all domains. Within this folder, each domain is allocated its own file for logging purposes. For instance, the access logs for the domain *pejcic.rs* are stored in the file named `/var/log/nginx/domlogs/pejcic.rs.log`.

The `/etc/nginx/sites-enabled/default`  file acts as the default configuration file, which restricts access to domains that are not hosted on the server. It is recommended not to modify this file.

Virtual host files for each domain are situated within the `/etc/nginx/sites-enabled/` directory. For example, the virtual host file for the domain *pejcic.rs* can be found at `/etc/nginx/sites-enabled/pejcic.rs.conf`.

`/etc/nginx/snippets/` directory is used to store configuration and templates for [Nginx error pages](https://github.com/denysvitali/nginx-error-pages).

Nginx service uses the following log files:
- error log: `/var/log/nginx/error.log`
- access log: `/var/log/nginx/access.log`

There is a known issue with the Nginx service on servers operating behind NAT (such as those on Azure, AWS, etc.) that do not have a public IP assigned directly to them, which can cause the Nginx service to fail to start. To circumvent this problem, the OpenPanel installation procedure includes a check for this scenario and, if necessary, [applies an additional configuration](https://stackoverflow.com/questions/3191509/nginx-error-99-cannot-assign-requested-address/13141104#13141104) as advised. This step ensures that Nginx can successfully start and operate even in environments where the server is behind NAT and lacks a public IP address.







## Docker

[Docker](https://www.docker.com/) is used to isolate user accounts and provide them a VPS-like experience.

During OpenPanel installation process, defualt storage driver for Docker is changed from *overlay2* to *devicemapper*.

Configuration file `/etc/docker/daemon.json` is not modified on update.

## MySQL

[MySQL](https://www.mysql.com/) is used as a database to store all user related information:

- Users
- Plans
- Domains
- Websites

During OpenPanel installation, MySQL is installed and configured to allow only local access.

Main configuration file `/etc/mysql/mysql.conf.d/mysqld.cnf` is not edited on update.

MySQL login information is stored in files:

- `/usr/local/admin/db.conf` - for OpenCLI
- `/usr/local/admin/config.json` - for OpenPanel

To use remote mysql database: https://community.openpanel.co/d/19-use-remote-mysql-server-for-openadmin

## SQLite

SQLite database is used by the OpenAdmin panel in order to completely separate the Admin and end-user interface.

Database file: `/usr/local/admin/scripts`

## Named

Named (BIND9) service is used for DNS.

## GoAccess

OpenPanel uses [GoAccess](https://goaccess.io/) to generate beautiful HTML reports from Nginx access logs for each domain.

GoAccess main configuration file: `/etc/goaccess/goaccess.conf`

OpenPanel also downloads [GeoIPLite2 City and Country](https://dev.maxmind.com/geoip/geolite2-free-geolocation-data) databases in order to display location info for each IP address in reports.

## ModSecurity

OpenPanel installation **does not** setup [ModSecurity](https://github.com/owasp-modsecurity/ModSecurity). Installation of ModSecurity is optional.


## UFW
[UncomplicatedFirewall (UFW)](https://wiki.ubuntu.com/UncomplicatedFirewall) is utilized by OpenPanel to manage access to users' services and websites. OpenPanel configures UFW to open only the necessary ports for each user.

Upon installation of OpenPanel, all access is initially blocked, with exceptions made for the following ports:
```
80/tcp for HTTP websites via Nginx
53 for DNS services using Named service
443/tcp for HTTPS websites via Nginx
2083/tcp as the default port for OpenPanel
2087/tcp as the default port for OpenAdmin
```

All other ports, **including the default SSH port 22, are blocked**. However, OpenPanel does whitelist the IP address of the admin user who installs OpenPanel, ensuring they retain access.

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

## ClamAV

[ClamAV](https://www.clamav.net/) is used to allow users to scan their websites for malicious files.


---

and two custom services:


## Panel

`panel` service is used by teh OpenPanel interface that allows users to manage their accounts.

OpenPanel is a [Flask](https://flask.palletsprojects.com/en/3.0.x/)-based application that uses [MySQL](#MySQL) to store user data and operates on the [Gunicorn](https://gunicorn.org/) web server. This configuration ensures that OpenPanel remains functional even if the Nginx service is down, thereby providing complete isolation between user websites and the admin panel.

## Admin

`admin` service is used by the OpenAdmin interface.

OpenAdmin is a [Flask](https://flask.palletsprojects.com/en/3.0.x/) application that utilizes [SQLite](https://www.sqlite.org/) for its database and runs on a separate Gunicorn instance. It operates independently from the OpenPanel and Nginx services.
