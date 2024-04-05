# Official OpenPanel Docker images

## Apache

Description: The official Docker image for Apache enables OpenPanel users to utilize the Apache web server for website management. Apache natively supports .htaccess files, although restarting Apache is required to activate any modifications made through .htaccess.

- Download: https://hub.openpanel.co/_/ubuntu_22.04/apache.tar.gz
- Checksum: https://hub.openpanel.co/_/ubuntu_22.04/apache_info

Stack:
| Service/Tool |                 Purpose                |
|:------------:|:--------------------------------------:|
| Ubuntu 22    | Operating System                       |
| Apache2      | web server                             |
| MySQL        | database                               |
| PHP 8.2      | serving .php files                     |
| phpMyAdmin   | manage databases from GUI              |
| OpenSSH      | SSH access                             |
| NodeJS 18    | nodejs                                 |
| Python 3.9   | python                                 |
| PM2          | manager for python/nodejs applications |
| curl / wget  | downloading files                      |
| pwgen        | password generate                      |
| zip / unzip  | create/extract archives                |
| ttyd         | Web Terminal                           |
| screen       | background processes                   |
| cron         | run scheduled tasks                    |

----

## Nginx

Description: The official Docker image for Nginx provides OpenPanel users with the capability to manage websites using the Nginx web server. Unlike Apache, Nginx does not natively support .htaccess files. For configuration changes, directly editing the Nginx configuration files is necessary, and requires reloading Nginx.

- Download: https://hub.openpanel.co/_/ubuntu_22.04/nginx.tar.gz
- Checksum: https://hub.openpanel.co/_/ubuntu_22.04/nginx_info

Stack: 
| Service/Tool |                 Purpose                |
|:------------:|:--------------------------------------:|
| Ubuntu 22    | Operating System                       |
| Nginx        | web server                             |
| MySQL        | database                               |
| PHP 8.2      | serving .php files                     |
| phpMyAdmin   | manage databases from GUI              |
| OpenSSH      | SSH access                             |
| NodeJS 18    | nodejs                                 |
| Python 3.9   | python                                 |
| PM2          | manager for python/nodejs applications |
| curl / wget  | downloading files                      |
| pwgen        | password generate                      |
| zip / unzip  | create/extract archives                |
| ttyd         | Web Terminal                           |
| screen       | background processes                   |
| cron         | run scheduled tasks                    |


----

## LiteSpeed

SOON
