# Docker Images

## Introduction

OpenPanel utilizes custom Docker images as the foundation for the hosting plans assigned to users.

Currently, OpenPanel includes two default images:

- [`openpanel_nginx`](/images/browse.html#Nginx)
- [`openpanel_apache`](/images/browse.html#Apache)

Additionally, you can craft custom Docker images tailored with specific MySQL/MariaDB versions, various PHP versions and extensions, or bespoke commands like composer or WPCLI.

## Creating an Image

To develop a custom Docker image for OpenPanel, start by copying the example image template provided for building custom images:

```
cp -r /usr/local/panel/DOCKER/images/example /usr/local/panel/DOCKER/images/YOUR_IMAGE_NAME_HERE
```
Navigate to the directory and list its contents:
```
cd /usr/local/panel/DOCKER/images/YOUR_IMAGE_NAME_HERE && ls -la
```

You will find the following files:
- `Dockerfile` - This file defines the software stack of the image.
- `entrypoint.sh` - Used by OpenPanel to monitor users' services status and versions, such as tracking the random IP of users' Docker containers, status of Redis/Memcached services, PHP versions installed, etc. This file is essential and should not be modified.
- `my.cnf` - A MySQL service configuration file for customizing MySQL limits and settings.
- `pma.php` - A configuration file for phpMyAdmin to enable passwordless login from OpenPanel to phpMyAdmin.

Feel free to add any additional files and folders you wish to include for your users. Then, modify the Dockerfile to incorporate (copy) these files as needed.

After crafting the Dockerfile, the next step is to build the image from it, enabling its use for new plans and user accounts.

To build the image, navigate to the folder where the Dockerfile was modified and execute:
```
docker build . -t NAME_OF_IMAGE_HERE
```

This process can take up to 15 minutes, depending on the complexity of the stack, so running it in a screen session is advisable.

Should any errors arise during the build process, address the indicated issues and initiate the build process again.

Following a successful build, [create a new hosting plan](https://openpanel.co/docs/admin/plans/hosting_plans/#create-a-plan) and set the newly built image for that plan.


## Example Image

Ubuntu 22 Docker image optimized for WordPress: Nginx, MySQL 8, PHP 8.3, phpMyAdmin, WP-CLI.

```bash
FROM ubuntu:22.04

ENV TZ=UTC
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y software-properties-common && \
    add-apt-repository ppa:ondrej/php && \
    apt-get update && \
    apt-get install --no-install-recommends -y \
        screen \
        nginx \
        mysql-server \
        php8.2-fpm \
        php8.2-mysql \
        php8.2-curl \
        php8.2-gd \
        php8.2-mbstring \
        php8.2-xml \
        php8.2-xmlrpc \
        php8.2-soap \
        php8.2-intl \
        php8.2-zip \
        php8.2-bcmath \
        php8.2-calendar \
        php8.2-exif \
        php8.2-ftp \
        php8.2-ldap \
        php8.2-sockets \
        php8.2-sysvmsg \
        php8.2-sysvsem \
        php8.2-sysvshm \
        php8.2-tidy \
        php8.2-uuid \
        php8.2-opcache \
        php8.2-redis \
        php8.2-memcached \
        php8.2-imagick \
        curl \
        pwgen \
        zip \
        unzip \
        wget \
        cron \
        phpmyadmin \
        php-mbstring \
        apt-get clean && \
        apt-get autoremove -y && \
        rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

########## MySQL ##########
COPY mysqld.cnf /etc/mysql/mysql.conf.d/
RUN chmod a+rwx /run/mysqld

########## PORTS ##########
EXPOSE 22 80 3306 7681 8080

########## NGINX ##########
RUN sed -i \
    -e 's/# server_names_hash_bucket_size 64;/server_names_hash_bucket_size 64;/' \
    -e 's/# worker_connections 768;/worker_connections 10000;/' \
    /etc/nginx/nginx.conf
    
########## PHPMYADMIN ##########
RUN sed -i \
    -e 's/^upload_max_filesize = .*/upload_max_filesize = 1024M/' \
    -e 's/^max_input_time = .*/max_input_time = 600/' \
    -e 's/^memory_limit = .*/memory_limit = -1/' \
    -e 's/^post_max_size = .*/post_max_size = 1024M/' \
    -e 's/^max_execution_time = .*/max_execution_time = 600/' \
    /etc/php/8.2/cli/php.ini

COPY config.inc.php /etc/phpmyadmin/
COPY pma.php /usr/share/phpmyadmin/pma.php

########## PHP-FPM ##########
# 8.3
RUN sed -i \
    -e 's/^upload_max_filesize = .*/upload_max_filesize = 1024M/' \
    -e 's/^max_input_time = .*/max_input_time = 600/' \
    -e 's/^memory_limit = .*/memory_limit = -1/' \
    -e 's/^post_max_size = .*/post_max_size = 1024M/' \
    -e 's/^max_execution_time = .*/max_execution_time = 600/' \
    -e 's/^opcache.enable= .*/opcache.enable=1/' \
    /etc/php/8.3/fpm/php.ini

########## WP-CLI ##########
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && \
    chmod +x wp-cli.phar && \
    mv wp-cli.phar /usr/local/bin/wp

########## cleanup ##########
RUN rm -rf /var/cache/apk/* /tmp/* /var/tmp/*

########## docker run entrypoint  ##########
COPY entrypoint.sh /etc/entrypoint.sh
RUN chmod +x /etc/entrypoint.sh
CMD ["/bin/sh", "-c", "/etc/entrypoint.sh ; tail -f /dev/null"]
```
