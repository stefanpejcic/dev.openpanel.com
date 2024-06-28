# Logs

OpenPanel generates the following logs:

| Log file | Description |
|----------|-------------|
|`/var/log/openpanel/user/access.log`|OpenPanel access log|
|`docker logs openpanel`|OpenPanel error log|
|`/var/log/openpanel/admin/access.log`|OpenAdmin access log|
|`/var/log/openpanel/admin/api.log`|OpenAdmin [API](/api/) log|
|`/var/log/openpanel/admin/login.log`|OpenAdmin Login log|
|`/var/log/openpanel/admin/notifications.log`|OpenAdmin notifications log|
|`/var/log/openpanel/admin/cron.log`|OpenAdmin Crons log|
|`/var/log/openpanel/admin/error.log`|OpenAdmin error log|

Services used by OpenPanel have the following logs:

| Log file | Description |
|----------|-------------|
|`/var/log/nginx/access.log`|Nginx access log|
|`/var/log/nginx/error.log`|Nginx error log|
|`docker logs openpanel_mysql`|MySQL error log|
|`journalctl -u named`|Named service logs|
|`/var/log/ufw.log`|UFW log|
|`docker logs $USERNAME`|Docker logs for user|

```
multitail /var/log/nginx/access.log -I /var/log/nginx/error.log
```
