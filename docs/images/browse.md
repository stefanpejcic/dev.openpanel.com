# Official OpenPanel Docker images

## openpanel/apache

The official Docker image for Apache enables OpenPanel users to utilize the Apache web server for website management. Apache natively supports .htaccess files, although restarting Apache is required to activate any modifications made through .htaccess.

- Download: https://hub.docker.com/r/openpanel/apache

Technology Stack:
| Service/Tool |                 Purpose                |
|:------------:|:--------------------------------------:|
| Ubuntu 24    | Operating System                       |
| Apache2      | web server                             |
| MySQL        | database                               |
| PHP 8.2      | serving .php files                     |
| phpMyAdmin   | manage databases from GUI              |
| OpenSSH      | SSH access                             |
| NodeJS 18    | nodejs                                 |
| Python 3.9   | python                                 |
| curl / wget  | downloading files                      |
| pwgen        | password generate                      |
| zip / unzip  | create/extract archives                |
| ttyd         | Web Terminal                           |
| screen       | background processes                   |
| cron         | run scheduled tasks                    |

----

## openpanel/nginx

The official Docker image for Nginx provides OpenPanel users with the capability to manage websites using the Nginx web server. Unlike Apache, Nginx does not natively support .htaccess files. For configuration changes, directly editing the Nginx configuration files is necessary, and requires reloading Nginx.

- Download: https://hub.docker.com/r/openpanel/nginx


Technology Stack: 
| Service/Tool |                 Purpose                |
|:------------:|:--------------------------------------:|
| Ubuntu 24    | Operating System                       |
| Nginx        | web server                             |
| MySQL        | database                               |
| PHP 8.2      | serving .php files                     |
| phpMyAdmin   | manage databases from GUI              |
| OpenSSH      | SSH access                             |
| NodeJS 18    | nodejs                                 |
| Python 3.9   | python                                 |
| curl / wget  | downloading files                      |
| pwgen        | password generate                      |
| zip / unzip  | create/extract archives                |
| ttyd         | Web Terminal                           |
| screen       | background processes                   |
| cron         | run scheduled tasks                    |


----

## LiteSpeed

SOON
