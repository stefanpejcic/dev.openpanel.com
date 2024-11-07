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
example.openpanel.co
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
example.openpanel.co
example.net
...
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

Note: this command will add a domain for user regardless of their domains limit.


## Delete Domain

To remove domain from user and delete all associated data:
```bash
opencli domains-delete <DOMAIN>
```

This will delete: websites, DNS zone, email accounts, proxy configuration, Let's Encrypt SSL, Ngin/Apache configuration, access logs, blocked IPs per domain, ModSecurity setting for domain.

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

To parse domain (Nginx) access logs and generate static reports for users domains accessible from `Domains > Access Logs` run the script:

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

To parse (Nginx) access logs for all active users and their domains run the script without username:

```bash
opencli domains-stats
```

## Enable modsecurity

To enable modsecurity for all domains owned by a specific user:

```bash
opencli domains-enable_modsec [USERNAME]
```

To enable modsecurity on all domains for all active users:

```bash
opencli domains-enable_modsec
```
