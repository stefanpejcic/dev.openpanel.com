# Docker Images

## Introduction

OpenPanel utilizes custom Docker images as the foundation for the hosting plans assigned to users.

Currently, OpenPanel includes two default images:

- [`openpanel_nginx`](/images/browse.html#Nginx)
- [`openpanel_apache`](/images/browse.html#Apache)

Additionally, you can craft custom Docker images tailored with specific MySQL/MariaDB versions, various PHP versions and extensions, or bespoke commands like composer or WPCLI.

## Creating an Image

To build a custom Docker image for OpenPanel, start by downloading the Dockerfile for openpane/nginx image:

```
wget -qO- https://download-directory.github.io/?url=https://github.com/stefanpejcic/OpenPanel/tree/main/docker/nginx | unzip -d openpanel_nginx_docker -
```
Navigate to the directory and list its contents:
```
cd /openpanel_nginx_docker && ls -la
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

