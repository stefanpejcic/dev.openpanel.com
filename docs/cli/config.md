# Config

`opencli config` allows you to change the configuration of the user interface and set defaults for new accounts.

Settings are stored in `/etc/openpanel/openpanel/conf/openpanel.config` file. However, it is recommended not to modify this file directly. Instead, it's best to utilize the `config` script. This way, any changes made are immediately applied, and the  panel service is automatically restarted only when necessary.


Example:
```bash
################################### NOTICE ####################################
#                                                                             #
# Manually modifying this file is not recommended!                            #
#                                                                             #
# You should use the interface in OpenAdmin > Settings                        #
# or 'opencli config update' command                                          #
# for applying changes to these settings.                                     #
#                                                                             #
# https://dev.openpanel.com/cli/config.html                                   #
#                                                                             #
###############################################################################

[DEFAULT]
brand_name=
logo=
force_domain=
port=2083
ssl=no
openpanel_proxy=
ns1=
ns2=
ns3=
ns4=
email=
logout_url=
enabled_modules=enabled_modules=dns,notifications,favorites,phpmyadmin,temporary_links,ssh,crons,backups,wordpress,flarum,pm2,disk_usage,inodes,usage,terminal,services,webserver,fix_permissions,process_manager,ip_blocker,redis,memcached,login_history,activity,twofa,domains,domains_visitors,malware_scan,elasticsearch

[USERS]
login_ratelimit=5
login_blocklimit=20
session_duration=30
session_lifetime=300
password_reset=no
weakpass=yes
twofa_nag=yes
how_to_guides=yes
avatar_type=gravatar
max_login_records=20
activity_items_per_page=25
resource_usage_charts_mode=two
resource_usage_items_per_page=100
resource_usage_retention=100
acccess_logs_per_page=1000
domains_per_page=100

[PHP]
default_php_version=8.2

[LOGS]
logrotate_enable=yes
logrotate_size_limit=100M
logrotate_retention=10
logrotate_keep_days=30

[STATS]
goaccess_enable=yes
goaccess_schedule=monthly
goaccess_email=no
goaccess_keep_days=365


[PANEL]
autoupdate=on
autopatch=on
api=off
dev_mode=off
demo_mode=off
template=
admin_template=
basic_auth=no
basic_auth_username=
basic_auth_password=
screenshots=http://screenshots-api.openpanel.com/screenshot
temporary_links=https://preview.openpanel.org/index.php


[SMTP]
mail_server=
mail_port=465
mail_use_tls=False
mail_use_ssl=True
mail_username=
mail_password=
mail_default_sender=
mail_security_token=78bd237db2da

[DOCKER]
max_ram=90
max_cpu=95


[SECURITY]
backups_encryption_key=


[LICENSE]
key=
```


## Get

The `get` parameter allows you to view current settings.

```bash
opencli config get <OPTION>
```

Example:

```bash
# opencli config get force_domain
srv.openpanel.co
```

## Update

The `update` parameter allows you to change the settings.


```bash
opencli config update <OPTION> <NEW-VALUE>
```

Example:
```bash
opencli config update force_domain nesto.rs
Updated force_domain to nesto.rs
```

:::info
To apply the new settings panel service needs to be restarted.
:::

## Options

Currently available configuration options:

### logo

`logo` allows you to set a url for image *(suggested dimensions are 80x200px) that will be displayed to users on:

- logo on every page
- logo displayed on the login page
- footer logo used in emails

```bash
logo=https://http.cat/images/100.jpg
```

### brand_name

`brand_name` allows you to brand the OpenPanel name that users see in their user panel with your custom brand name.

This brand name is displayed in the following positions:
- on top left when logo is not provided
- in the page title
- in the footer text on every page
  

```bash
brand_name=pcx3.com
```

### max_login_records

`max_login_records` determines how many records are kept for every users login history page. Default value, if empty is 20.

```bash
max_login_records=20
```

### default_php_version

`default_php_version` sets the PHP version used for new accounts. Default value is 8.3

```bash
default_php_version=8.3
```


### domains_per_page

Set number of domains to show per page for the user, default value is 100.

```bash
domains_per_page=100
```

### acccess_logs_per_page

Set number of lines to show per page from the domains activity log.

```bash
acccess_logs_per_page=1000
```

### resource_usage_items_per_page

Set number of rows to display per page on the 'Resource Usage History' page.

```bash
resource_usage_items_per_page=100
```

### resource_usage_retention

Set number of records to keep for each user, default value is 100.

```bash
resource_usage_retention=100
```

### resource_usage_charts_mode
`resource_usage_charts_mode` allows you to set the number of charts displayed on users _Historical Resource Usage_ page.


- _one_ - displays a single chart for both CPU and RAM usage.
- _two_ (Default) - displays two charts: one for CPU and another for RAM. 
- _none_ - displays no charts.

```bash
resource_usage_charts_mode=two
```

### login_ratelimit

The `login_ratelimit` parameter allows you to specify the maximum number of failed login attempts per minute for each IP address accessing the OpenPanel interface. The default setting is `5`.

```bash
login_ratelimit=5
```

### login_blocklimit

The `login_blocklimit` parameter allows you to specify the maximum number of failed login attempts per IP before it is temporary blocked for one hour. The default setting is `20`.

```bash
login_blocklimit=20
```


### session_lifetime

The `session_lifetime` parameter allows you to specify the number of minutes that user session is valid after they login. If there are no user interactions during this period then the session espires. The default setting is `300`.

```bash
session_lifetime=300
```


### session_duration

The `session_duration` parameter allows you to specify the number of minutes that session is extended for after the `session_lifetime` setting based on user interactions. The default setting is `30`.

```bash
session_duration=30
```


### weakpass

`weakpass` enables you to check passwords against the [weakpass.com](https://weakpass.com/wordlist) dictionaries and prevent the use of weak passwords. By default, it is set to 'yes,' allowing weak passwords to be used.

```bash
weakpass=yes
```

### password_reset

`password_reset` allows you to enable or disable the password reset functionality for the login page. By default password reset is disabled.

```bash
password_reset=yes
```

### avatar_type

`avatar_type` allows you to set the type of images used for users profile pictures in the users panel.


Available options:

- _gravatar_ - displays the gravatar picture associated with the email address of the user.
- _letter_ - displays a CSS generated icon using the users first letter of the username.
- _icon_ - displays a placeholder bootstrap icon representing the user.

```bash
avatar_type=gravatar
```

### logout_url

`logout_url` allows administrators to define the destination to which users should be redirected after they log out. The default setting directs them to the `/login` page.

```bash
logout_url=https://google.com
```

### activity_items_per_page

`activity_items_per_page` allows administrators to define the default number of displayed items on the `/activity` page, the value defaults to 25.

```bash
activity_items_per_page=50
```

### force_domain

`force_domain` enables you to specify a mandatory domain name for accessing the user panel. If a user attempts to visit the panel using any other domain, such as "their-domain.com:2083", they will be automatically redirected to "your-domain.com:2083." This feature utilizes the `port` option to ensure the enforcement of the specified port value as well.


```bash
force_domain=openpanel.co
```

### port

The `port` setting enables you to define a custom port for the panel's operation. By default, the panel uses port **2083**, but you have the flexibility to set it to any desired port.
It's crucial to ensure that the chosen port is open in your firewall configuration. 

```bash
port=2083
```

:::info
After adjusting the port, it's necessary to restart the panel service to apply the new port configuration.
:::


### ssl

The `ssl` setting when enabled will force both the OpenPanel and AdminPanel to use SSL for the hostname and redirect traffic to https. This setting is by default disabled but will be automatically enabled if [opencli ssl-hostname](#hostname) succeeded in generating an SSL for the hostname during OpenPanel installation.

```bash
ssl=no
```

### openpanel_proxy

The `openpanel_proxy` setting allows you to set a custom /something that will allow users to access their openpanel interface using their domain names. For example: 'panel' will make any domain, example: 'example.com/panel' redirect to the OpenPanel.

```bash
openpanel_proxy=open_sesame
```

### nameservers

The `ns1` `ns2` `ns3` `ns4` options allow you to set nameservers that will be used in dns zone files for newly added domains, and displayed to users on their panel dashboard.
Nameservers should be added in pairs, ns1 and ns2, ns3 and ns4.

```bash
ns1=ns1.openpanel.co
ns2=ns2.openpanel.co
ns3=ns3.openpanel.co
ns4=ns4.openpanel.co
```

### enabled_modules

In OpenPanel version 0.1.5, we implemented the Modules feature, which, by default, loads only the essential modules. Administrators also have the option to selectively disable modules they do not require.

Currently, the following modules are optional and can be disabled by the Administrator:
```bash
enabled_modules=phpmyadmin,ssh,crons,backups,wordpress,pm2,disk_usage,inodes,usage,terminal,services,webserver,fix_permissions,malware_scan,process_manager,ip_blocker,redis,memcached,elasticsearch,login_history,activity
```

### autopatch

The `autopatch` option allows Administrator to automatically update OpenPanel to minor versions.

| Autopatch    | Update to minor version  | Update to major version  |
| -------- | ------- | ------- |
| yes | 1.0.2 will be updated to 1.0.3 | 1.0.2 will **NOT** be updated to 2.0.0 |
| no | 1.0.2 will **NOT** be updated to 1.0.3 | 1.0.2 will **NOT** be updated to 2.0.0 |

```bash
autopatch=yes
```

### autoupdate

The `autoupdate` option allows Aministrator to enable or disable automatic updates.

| Autoupdate    | Update to minor version  | Update to major version  |
| -------- | ------- | ------- |
| yes | 1.0.2 will **NOT** be updated to 1.0.3 | 1.0.2 will be updated to 2.0.0 |
| no | 1.0.2 will **NOT** be updated to 1.0.3 | 1.0.2 will **NOT** be updated to 2.0.0 |

```bash
autoupdate=yes
```


### twofa_nag

The `twofa_nag` option allows Administrator to set if 2FA nag should be displayed to users on their dashboard page.


```bash
twofa_nag=yes
```

### how_to_guides

The `how_to_guides` option allows Aministrator to enable or disable the How-to guides section from users dashboards.


```bash
how_to_guides=yes
```
If configured as "yes", the system will initially attempt to access a JSON file containing your custom how-to guides. In the event that the file is not available, articles from https://openpanel.co/docs/panel/dashboard/#how-to-guides will be shown instead.


### api

The `api` option allows Aministrator to enable or disable the API functionality.

Default value is Off

### dev_mode

The `dev_mode` option allows Aministrator to view more verbose information in both OpenPanel and OpenAdmin, as well as their log files.

- verbose logging for API requests
- disables minified responses for both interfaces (HTML, JS, CSS and JSON)
- uses latest CDN for tailwindcss, alpinejs and flowbite

Default value is Off

### demo_mode

The `demo_mode` option allows Aministrator lock both OpenPanel and OpenAdmin UI in read-only mode, allowing users to login and view data, but not to make any changes.

Default value is Off

### max_ram

The `max_ram` option allows Aministrator to set maximum % of available RAM that can be used by Docker service. [More information](https://openpanel.co/docs/changelog/0.1.8/#docker-resources)

```bash
max_ram=90
```

### max_cpu

The `max_cpu` option allows Aministrator to set maximum % of available CPU that can be used by Docker service. [More information](https://openpanel.co/docs/changelog/0.1.8/#docker-resources)

```bash
max_cpu=95
```



### screenshots

The `screenshots` option allows Aministrator to set a custom screenshots api to be used for generating website screenshots. 

- If 'local' is defined then screenshots will be generated locally on the server.
- If left empty, [default is our remote api](http://screenshots-api.openpanel.com/screenshot)
- To define custom screenshots api add it's url as value.

```bash
screenshots=http://screenshots-api.openpanel.com/screenshot
```



### temporary_links

The `temporary_links` option allows Aministrator to set a custom domain name to be used to generate temporary sub-domains for WP installations. [More information](https://openpanel.co/docs/changelog/0.1.8/#docker-resources)

```bash
temporary_links=https://preview.openpanel.org/index.php
```
