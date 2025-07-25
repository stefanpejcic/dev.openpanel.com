# Domains

Manage domains: Add, Delete, detect, etc.

## List user domains

To list all domains owned by a user run the following command:

```bash
opencli domains-user <USERNAME>
```

Example:
```bash
# opencli domains-user stefan
panel.pejcic.rs
example.openpanel.com
```

To view document root, pass the `--docroot` flag, to view php versions pass the `--php_versions` flag, example:

```bash
# opencli domains-user stefan --docroot --php_version
panel.pejcic.rs	/var/www/html/pejcic.rs/panel	8.2
example.openpanel.com	/var/www/html/example.openpanel.com	5.6
```

## List all domains

To list all domains owned by all users run the following command:

```bash
opencli domains-all
```

Example:
```bash
# opencli domains-all
panel.pejcic.rs
example.openpanel.com
...
```

To view document root, pass the `--docroot` flag, to view php versions pass the `--php_versions` flag, example:

```bash
# opencli domains-all --docroot --php_version
panel.pejcic.rs	/var/www/html/pejcic.rs/panel	8.2
example.openpanel.com	/var/www/html/example.openpanel.com	5.6
```

## SSL

`opencli domains-ssl` command will display current ssl settings for a domain, display certificate files or switch from autossl to custom certificate.

```bash
 opencli domains-ssl <DOMAIN>                 - Display command examples for this domain.
 opencli domains-ssl <DOMAIN> status          - Display current status for the domain.
 opencli domains-ssl <DOMAIN> info            - Display certificate files.
 opencli domains-ssl <DOMAIN> custom cert key - Swith to custom ssl for the domain.
 opencli domains-ssl <DOMAIN> auto            - Swith back to autossl for the domain.
```

### status

Display current status for domain (AutoSSL, Custom or No SSL):


```bash
opencli domains-ssl <DOMAIN> status
```

### info

Display fullchain and key for domain certificate:

```bash
opencli domains-ssl <DOMAIN> info
```

### auto

Swith to autossl for a domain (default):

```bash
opencli domains-ssl <DOMAIN> auto
```


### custom

Set custom SSL to be used for a domain:


```bash
opencli domains-ssl <DOMAIN> custom path/to/fullchain.pem path/to/key.pem
```


## DNS

The `opencli domains-dns` command is used for everything dns related:

```bash
 opencli domains-dns reconfig               - Load new DNS zones into bind server.
 opencli domains-dns check <DOMAIN>         - Check and validate dns zone for a domain.
 opencli domains-dns reload <DOMAIN>        - Reload DNS zone for a single domain.
 opencli domains-dns show <DOMAIN>          - Display DNS zone for a single domain.
 opencli domains-dns list                   - List all domains with DNS zones on the server.
 opencli domains-dns delete <DOMAIN>        - Delete DNS zone for a domain.
 opencli domains-dns create <DOMAIN>        - Create DNS zone for a domain.
 opencli domains-dns default <DOMAIN>       - Restore default DNS zone for a domain.
 opencli domains-dns count                  - Display total number of DNS zones present on the server.
 opencli domains-dns config                 - Check main bind configuration file for syntax errros.
 opencli domains-dns start                  - Start the DNS server.
 opencli domains-dns restart                - Soft restart of bind9 docker container.
 opencli domains-dns hard-restart           - Hard restart: terminates container and start again.
 opencli domains-dns stop                   - Stop the DNS server.

```


### reconfig

To load new dns zones into the bind server:
```bash
 opencli domains-dns reconfig
```  


### Check
To check and validate dns zone for a domain:
```bash
 opencli domains-dns check <DOMAIN>
```

### Reload

Reload DNS zone for a single domain:
```bash
 opencli domains-dns reload <DOMAIN>
```

### Show
Display dns zone records for a domain:
```bash
 opencli domains-dns show <DOMAIN>
```

### List
List all DNS zones on the server:
```bash
 opencli domains-dns list
```

### Delete
Delete DNS zone for a domain:
```bash
 opencli domains-dns delete <DOMAIN>
```

### Create
Create DNS zone for a domain:
```bash
 opencli domains-dns create <DOMAIN>
```

### Default
Delete existing DNS zone and create default DNS zone for a domain:
```bash
 opencli domains-dns default <DOMAIN> -y
```

### Count 
Display total number of DNS zones present on the server:
```bash
 opencli domains-dns count
```

### Config
Check main bind configuration file for syntax errros:
```bash
 opencli domains-dns config
```

### Start
Start the DNS server:
```bash
 opencli domains-dns start
```

### Restart
Soft restart of bind9 docker container:
```bash
 opencli domains-dns restart
```

### Hard Restart
Hard restart - terminates container and start again:
```bash
 opencli domains-dns hard-restart
```

### Stop
Stop the DNS server:
```bash
 opencli domains-dns stop
```


## Check who owns a domain name

To check which user owns a domain name run the following command:

```bash
opencli domains-whoowns <DOMAIN-NAME>
```

Example:
```bash
opencli domains-whoowns pejcic.rs
Owner of 'pejcic.rs': stefan
```

The `whoowns` script searches the database in order to determine which username added a domain.


## Add Domain to User

To add a domain name for user:

```bash
opencli domains-add <DOMAIN> <USERNAME>
```

Example:
```bash
opencli domains-add pejcic.rs stefan
```

To add a domain with custom document root:
```bash
opencli domains-add pejcic.rs stefan --docroot /var/ww/html/path
```

To get more verbose information when adding a domain pass the `--debug` flag.

Note: the command `opencli domains-add` will add a domain for user regardless of their domains limit.

## Add .onion domain to user

To import a Tor (.onion) domain name for user:

```bash
opencli domains-add <DOMAIN> <USERNAME> --hs_ed25519_public_key /path/to/key  --hs_ed25519_secret_key /path/to/key
```

Example:
```bash
opencli domains-add pejcic.rs stefan --hs_ed25519_public_key /var/ww/html/hs_ed25519_public_key  --hs_ed25519_secret_key /var/ww/html/hs_ed25519_secret_key
```

## Suspend Domain

Suspended domains will display [suspended_website.html](https://github.com/stefanpejcic/openpanel-configuration/blob/main/nginx/suspended_website.html) template. 

All other services such as DNS and email remain active for the domain.

To suspend a domain:
```bash
opencli domains-suspend <DOMAIN>
```

## Unsuspend Domain

Unsuspended domains will display user content. To unsuspend a domain:

```bash
opencli domains-unsuspend <DOMAIN>
```

## Delete Domain

To remove domain from user and delete all associated data:
```bash
opencli domains-delete <DOMAIN>
```

This will delete: websites, DNS zone, email accounts, proxy configuration, Let's Encrypt SSL, Ngin/Apache configuration, access logs, blocked IPs per domain, WAF setting for domain.

## DNSSEC

Command `opencli domains-dnssec` allows administrators to enable DNSSEC, re-sign the zone and view DS records for domains.

:::info
Please note that this feature is still experimental and there is still no UI for it in OpenPanel interface.
:::

- to enable dnssec for example.net :
  ```
  opencli domains-dnssec example.com
  ```

- to update the zone after publishing new records:
  ```
  opencli domains-dnssec example.com --update
  ```

- to check if domain has dnssec enabled and view DS records:
  ```
  opencli domains-dnssec example.com --check
  ```

## Update Nameservers

To change nameservers in a single dns zone:
```bash
opencli domains-update_ns <DOMAIN_NAME>
```

To change nameservers for all dns zones on the server:
```bash
opencli domains-update_ns --all
```


## Parse domain access logs

To parse domain (Caddy) access logs and generate static reports for users domains accessible from `Domains > Access Logs` run the script:

```bash
opencli domains-stats [USERNAME]
```

Example:
```bash
opencli domains-stats stefan
Processing user: stefan
Processed domain pejcic.rs for user stefan
Processed domain openpanel.co for user stefan
```

To parse (Caddy) access logs for all active users and their domains run the script without username:

```bash
opencli domains-stats
```
