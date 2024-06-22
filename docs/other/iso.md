# Hosting Providers

## How to create OpenPanel iso image

This info is for Server providers like Cloud, VPS or Dedicated servers to create fast image deployment servers with OpenPanel.

Creating OpenPanel iso image is easy, here are the steps:

- install and configure OpenPanel
- power off the server
- create an image of the server

Since you had configured the server with Hostname, and Email you will need to make that change after the image deployment.

Hostanem can be set when running the image, but other settings need to be changed manually:

Exmple to set the new hostname to be used by OpenPanel and issue SSL:
```bash
opencli config update force_domain FQDN_HERE
opencli hostname-ssl
```


You should also consider changing the mysql root password and update it in /etc/my.cnf

