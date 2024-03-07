# Services

OpenPanel uses the following services:

## Nginx

Nginx is used as a reverse proxy to redirect traffic from and to user websites in their docker containers.

Main configuration file:



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
