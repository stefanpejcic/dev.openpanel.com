# Logs

OpenPanel generates the following logs:

| Log file | Description |
|----------|-------------|
|`/var/log/openpanel/user/access.log`|OpenPanel access log|
|`docker logs openpanel`|OpenPanel error log|
|`/var/log/openpanel/admin/access.log`|OpenAdmin access log|
|`/var/log/openpanel/admin/api.log`|OpenAdmin [API](/api/) log|
|`/var/log/openpanel/admin/login.log`|OpenAdmin Successful Logins|
|`/var/log/openpanel/admin/failed_login.log`|OpenAdmin Failed & Blocked Logins|
|`/var/log/openpanel/user/failed_login.log`|OpenPanel Failed & Blocked Logins|
|`/var/log/openpanel/admin/notifications.log`|OpenAdmin notifications|
|`/var/log/openpanel/admin/cron.log`|OpenAdmin Crons log|
|`/var/log/openpanel/admin/error.log`|OpenAdmin error log|


:::info
By default, logging for OpenPanel, OpenAdmin, and the API is minimal in production. Administrators can [enable dev_mode](/cli/config.html#dev-mode) during development to generate more detailed logs and keep the panel code unminified.
:::


Services used by OpenPanel have the following logs:

| Log file | Description |
|----------|-------------|
|`/var/log/nginx/access.log`|Nginx access log|
|`/var/log/nginx/error.log`|Nginx error log|
|`docker logs openpanel_mysql`|MySQL error log|
|`docker logs openpanel_dns`|DNS service logs|
|`docker logs $USERNAME`|Docker logs for user|


Logs can be viewed from the [OpenAdmin > Services > Log Viewer](https://openpanel.com/docs/admin/services/log_viewer/) and Administrators can even [add custom log files to OpenAdmin Log Viewer](https://openpanel.com/docs/admin/services/log_viewer/#how-to-add-more-files-to-openadmin-log-viewer).

