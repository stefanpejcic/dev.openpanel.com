# Config

`opencli config` allows you to change the configuration of the user interface and set defaults for new accounts.

Settings are stored in `/etc/openpanel/openpanel/conf/openpanel.config` file. However, it is recommended not to modify this file directly. Instead, it's best to utilize the `config` script. This way, any changes made are immediately applied, and the  panel service is automatically restarted only when necessary.


## Get
The `get` parameter allows you to view current settings.
```bash
opencli config get <OPTION>
```

Example:
```bash
# opencli config get api
off
```

## Update
The `update` parameter allows you to change the settings.
```bash
opencli config update <OPTION> <NEW-VALUE>
```

Example:
```bash
opencli config update api on nesto.rs
Updated api to on
```

:::info
To apply the new settings, OpenPanel UI willl be restarted if needed.
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

### domain_log_per_page

Set number of lines (table rows) to display per page on *Domains > Access Logs* and *Advanced > WAF Logs*. Default value is 500.

```bash
domain_log_per_page=500
```

### domain_log_max_for_show_all

Set maximum number of lines (table rows) to display **when user selects *show_all* option** on *Domains > Access Logs* and *Advanced > WAF Logs*. Default value is 10000.

```bash
domain_log_max_for_show_all=10000
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

### found_a_bug_link
When set to 'yes', a *Found a bug? Let us know* link appears in the bottom-right corner of all pages in the OpenPanel and OpenAdmin UI, allowing users to report issues directly on GitHub.

```bash
found_a_bug_link=yes
```

### ip_county_flag
When set to 'yes', a *Cuntry Code Flag* icon appears in the Dashboard page for last login IP address.
```bash
ip_county_flag=yes
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

### activity_lines_retention

`activity_lines_retention` allows administrators to define the default number of lines to keep for each user `/activity` log. The value defaults to 1500.

```bash
activity_lines_retention=1500
```

### nameservers

The `ns1` `ns2` `ns3` `ns4` options allow you to set nameservers that will be used in dns zone files for newly added domains, and displayed to users on their panel dashboard.
Nameservers should be added in pairs, ns1 and ns2, ns3 and ns4.

```bash
ns1=ns1.openpanel.com
ns2=ns2.openpanel.com
ns3=ns3.openpanel.com
ns4=ns4.openpanel.com
```

### enabled_modules

In OpenPanel version 0.1.5, we implemented the Modules feature, which, by default, loads only the essential modules. Administrators also have the option to selectively disable modules they do not require.


### logrotate_enable
Enable or disable **logrotate** for system logs: webserver, DNS, OpenPanel, FTP, MailServer, etc.
```bash
logrotate_enable=yes
```

* **yes** → Log rotation is active for supported services.
* **no** → Logs will grow indefinitely unless manually managed.

### `logrotate_size_limit`
Set the maximum log file size (in MB) before rotation occurs. Once a log file exceeds this size, it will be rotated automatically.

```bash
logrotate_size_limit=100
```

### `logrotate_retention`
Define the number of rotated log files to keep. Once the limit is reached, the oldest files are deleted.
```bash
logrotate_retention=10
```

* Example: If set to `10`, the system will keep 10 old log archives per log file.
* Helps control disk usage.

---

### `logrotate_keep_days`
Specify how many days rotated logs should be retained before deletion.
```bash
logrotate_keep_days=30
```

* Example: Setting to `30` means rotated logs older than 30 days will be removed.
* Works alongside `logrotate_retention` — whichever limit is hit first will trigger deletion.


### `goaccess_enable`

Enable or disable **GoAccess** web log analytics.

```bash
goaccess_enable=yes
```

* **yes** → GoAccess will process web server logs to generate analytics reports.
* **no** → Analytics will be disabled.

### `goaccess_schedule`

Set how often GoAccess reports should be generated.

```bash
goaccess_schedule=monthly
```

* Supported values: `daily`, `weekly`, `monthly`.
* Determines the frequency of log analysis and report generation.


### `goaccess_email`

Control whether GoAccess reports are emailed automatically.

```bash
goaccess_email=no
```

* **yes** → Reports are sent via email to the configured recipient.
* **no** → Reports are generated but not emailed.


### `goaccess_keep_days`

Specify how long GoAccess reports are retained before deletion.

```bash
goaccess_keep_days=365
```

* Example: `365` means reports older than one year will be removed automatically.
* Helps manage disk space while keeping historical analytics.



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
If configured as "yes", the system will initially attempt to access a JSON file containing your custom how-to guides. In the event that the file is not available, articles from https://openpanel.com/docs/panel/dashboard/#how-to-guides will be shown instead.


### api

The `api` option allows the **Administrator** to enable or disable API functionality. The default value is `off`.

* **on** → API access is enabled.
* **off** → API access is disabled.

**Check current status**:
```bash
opencli config get how_to_guides
```

**Enable API**:
```bash
opencli config update how_to_guides on
```

**Disable API (default)**:
```bash
opencli config update how_to_guides off
```

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

The `max_ram` option allows Aministrator to set maximum % of available RAM that can be used by Docker service. [More information](https://openpanel.com/docs/changelog/0.1.8/#docker-resources)

```bash
max_ram=90
```

### max_cpu

The `max_cpu` option allows Aministrator to set maximum % of available CPU that can be used by Docker service. [More information](https://openpanel.com/docs/changelog/0.1.8/#docker-resources)

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

The `temporary_links` option allows Aministrator to set a custom domain name to be used to generate temporary sub-domains for WP installations. [More information](https://openpanel.com/docs/changelog/0.1.8/#docker-resources)

```bash
temporary_links=https://preview.openpanel.org/index.php
```
