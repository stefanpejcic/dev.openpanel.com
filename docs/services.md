# Services

OpenPanel uses the following services:

## Nginx

Nginx is used as a reverse proxy to redirect traffic from and to user websites in their docker containers.

Nginx main configuration file location: `/etc/nginx/nginx.conf`

This file is generated at the time of OpenPanel installation and remains unchanged during updates, allowing for the addition of custom configurations without the risk of them being overwritten by subsequent updates.


The `/var/log/nginx/domlogs/` directory serves as the repository for access logs of all domains. Within this folder, each domain is allocated its own file for logging purposes. For instance, the access logs for the domain *pejcic.rs* are stored in the file named `/var/log/nginx/domlogs/pejcic.rs.log`.

The `/etc/nginx/sites-enabled/default`  file acts as the default configuration file, which restricts access to domains that are not hosted on the server. It is recommended not to modify this file.

Virtual host files for each domain are situated within the `/etc/nginx/sites-enabled/` directory. For example, the virtual host file for the domain *pejcic.rs* can be found at `/etc/nginx/sites-enabled/pejcic.rs.conf`.

`/etc/nginx/snippets/` directory is used to store configuration and templates for [Nginx error pages](https://github.com/denysvitali/nginx-error-pages).

Nginx service uses the following log files:
- error log: `/var/log/nginx/error.log`
- access log: `/var/log/nginx/access.log`















## Docker

Docker is used to isolate user accounts and provide them a VPS-like experience.




## MySQL

MySQL is used as a database to store all user related information:

- Users
- Plans
- Domains
- Websites

## SQLite

SQLite database is used by the OpenAdmin panel in order to completely separate the Admin and end-user interface.

## Named

Named (BIND9) service is used for DNS.

## ClamAV

ClamAV is used to allow users to scan their websites for malicious files.


---

and two custom services:


## Panel

`panel` service is used by teh OpenPanel interface that allows users to manage their accounts.

## Admin

`admin` service is used by the OpenAdmin interface.
