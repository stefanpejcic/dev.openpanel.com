# Domains

Manage domains: Add, Delete, detect, etc.

## List user domains

To list all domains owned by a user run the following command:

```bash
opencli domains-user <USERNAME>
```

<details>
  <summary>Example output</summary>

```bash
# opencli domains-user stefan
panel.pejcic.rs
example.openpanel.com
```
</details>


To view document root, pass the `--docroot` flag, to view php versions pass the `--php_versions` flag.

<details>
  <summary>Example output</summary>

```bash
# opencli domains-user stefan --docroot --php_version
panel.pejcic.rs	/var/www/html/pejcic.rs/panel	8.2
example.openpanel.com	/var/www/html/example.openpanel.com	5.6
```
</details>

## List all domains

To list all domains owned by all users run the following command:

```bash
opencli domains-all
```

<details>
  <summary>Example output</summary>

```bash
# opencli domains-all
panel.pejcic.rs
example.openpanel.com
```
</details>

To view document root, pass the `--docroot` flag, to view php versions pass the `--php_versions` flag.

<details>
  <summary>Example output</summary>

```bash
# opencli domains-all --docroot --php_version
panel.pejcic.rs	/var/www/html/pejcic.rs/panel	8.2
example.openpanel.com	/var/www/html/example.openpanel.com	5.6
```
</details>

## Edit domains

To edit via  terminal domain's docroot files or the domains's VirtualHosts file:

`cd` into the docroot for a domain:
```bash
opencli domains-edit <DOMAIN_NAME>
```

Edit VirtualHosts file for a domain (opens nano, and restarts user's webserver after saving):
```bash
opencli domains-edit <DOMAIN_NAME> --ws
```

## SSL

`opencli domains-ssl` command will display current ssl settings for a domain, display certificate files or switch from autossl to custom certificate.

```bash
 opencli domains-ssl <DOMAIN>                 - Display command examples for this domain.
 opencli domains-ssl <DOMAIN> status          - Display current status for the domain.
 opencli domains-ssl <DOMAIN> info            - Display certificate files.
 opencli domains-ssl <DOMAIN> logs [1000|-f]  - View caddy SSL-related logs for the domain.
 opencli domains-ssl <DOMAIN> custom cert key - Swith to custom ssl for the domain.
 opencli domains-ssl <DOMAIN> auto            - Swith back to autossl for the domain.
```

### examples

View command usage examples for a domain:

```bash
opencli domains-ssl <DOMAIN>
```

<details>
  <summary>Example output</summary>

```bash
root@srv54:~# opencli domains-ssl pcelarstvopejcic.com
Usage examples for domain pcelarstvopejcic.com:

- Check current SSL status for domain (AutoSSL, CustomSSL or No SSL):
  opencli domains-ssl pcelarstvopejcic.com status
- Display fullchain and key files for the domain:
  opencli domains-ssl pcelarstvopejcic.com info
- Set AutoSSL for the domain (default):
  opencli domains-ssl pcelarstvopejcic.com auto
- Add custom certificate for the domain:
  opencli domains-ssl pcelarstvopejcic.com custom /var/www/html/fullchain.pem /var/www/html/key.pem
- View SSL-related lines for the domain from Caddy logs:
  opencli domains-ssl pcelarstvopejcic.com logs
```

</details>


### status
Display current status for domain (AutoSSL, Custom or No SSL):

```bash
opencli domains-ssl <DOMAIN> status
```

<details>
  <summary>Example output</summary>
  
```bash
root@srv54:~# opencli domains-ssl pcelarstvopejcic.com status
AutoSSL
```

</details>

### info
Display fullchain and key for domain certificate:

```bash
opencli domains-ssl <DOMAIN> info
```

<details>
  <summary>Example output</summary>

```bash
root@srv54:~# opencli domains-ssl pcelarstvopejcic.com info
-----BEGIN CERTIFICATE-----
MIIDmzCCAyKgAwIBAgISBmHEsLgWFMdotAwbJBo+9L0VMAoGCCqGSM49BAMDMDIx
CzAJBgNVBAYTAlVTMRYw..............x9GsowAA
AZtWLgBSAAgAAAUAKzg8XAQDAEYwRAIgPxbs8KcweBO4ghg0XK3teYFSQo/x7xN/
4rTo4qQZN/8CIGGIgrOCOWBwsvtLCVycVywRi/lnUOCsl+uCSJN4aQJVMAoGCCqG
SM49BAMDA2cAMGQCMFPzjiN2t0JlZNmO9jb4k0enhhHgUPnbvGUhiA7/2JQ3mYSx
aQP20PZ0kNAC4e8l0AIwUNOxk/oW3xyKixiw+o0T9lItwI+kqua4NwCr9c0oYR+n
ePhIBRiFYF3MGWl6f8e1
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
MIIEVzCCAj+gAwIBAgIRAKp18eYrjwoiCWbTi7/UuqEwDQYJKoZIhvcNAQELBQAw
TzELMAkGA1UEBhMCVVMxKTAnBgNVBAoTIEludGVybmV0IFNlY3VyaXR5IFJlc2Vh
cmNoIEdyb3VwMRUwEwYDVQQDEwxJU1JHIFJvb3QgWDEwHhcNMjQwMzEzMDAwMDAw
WhcNMjcwMzEyMjM1OTU5WjAyMQswCQYDVQQGEwJVUzEWMBQGA1UEChMNTGV0J3Mg
RW5jcnlwdDELMAkGA1UEAxMCRTcwdjAQBgcqhkjOPQIBBgUrgQQAIgNiAARB6AST
CFh/vjcwDMCgQer+VtqEkz7JANurZxLP+U9TCeioL6sp5Z8VRvRbYk4P1INBmbef
QHJFHCxcSjKmwtvGBWp................bqne3uZ2q1GyPFJ
YRmT7/OXpmOH/FVLtwS+8ng1cAmpCujPwteJZNcDG0sF2n/sc0+SQf49fdyUK0ty
+VUwFj9tmWxyR/M=
-----END CERTIFICATE-----
-----BEGIN EC PRIVATE KEY-----
MHcCAQEEIE1QvitCk3OxAV.............JLxELjKRdC6SIInOyN+yc4o4VP
bJnB0V8........mgIqqgQ==
-----END EC PRIVATE KEY-----

```

</details>

### auto
Swith to autossl for a domain (default):

```bash
opencli domains-ssl <DOMAIN> auto
```

<details>
  <summary>Example output</summary>

```bash
root@srv54:~# opencli domains-ssl pcelarstvopejcic.com auto
Updated pcelarstvopejcic.com to use AutoSSL.
```

</details>

### custom
Set custom SSL to be used for a domain:

```bash
opencli domains-ssl <DOMAIN> custom path/to/fullchain.pem path/to/key.pem
```

<details>
  <summary>Example output</summary>

```bash
root@srv54:~# opencli domains-ssl pcelarstvopejcic.com custom /var/www/html/fullchain.pem /var/www/html/key.pem
Updated pcelarstvopejcic.com to use custom SSL.
```

</details>

### logs
Display SSL-related entries in cadyd log for the domain:

```bash
opencli domains-ssl <DOMAIN> logs
```

<details>
  <summary>Example output</summary>

```bash
root@srv54:~# opencli domains-ssl pcelarstvopejcic.com logs 10000
Showing SSL-related log lines for pcelarstvopejcic.com
-------------------------------------------------------
{"level":"warn","ts":1771498281.5536706,"logger":"tls","msg":"stapling OCSP","error":"no OCSP stapling for [pcelarstvopejcic.com]: no OCSP server specified in certificate","identifiers":["pcelarstvopejcic.com"]}
{"level":"info","ts":1771567582.1398098,"logger":"tls.on_demand","msg":"updated ACME renewal information","identifiers":["pcelarstvopejcic.com"],"server_name":"pcelarstvopejcic.com","cert_hash":"4ff3c89d8a5904714756448b7c6d62c91dbeb0c3a40317af91d1f24f428c2bfe","ari_unique_id":"rkie3IcdRKBv2qLlYHQEeMKcAIA.BmHEsLgWFMdotAwbJBo-9L0V","cert_expiry":1774449902,"selected_time":1771888562,"next_update":1771590559.132008,"explanation_url":""}

```

</details>

You can also:
- Show a specific number of log lines (e.g., 1000):
   ```bash
   opencli domains-ssl <DOMAIN_NAME> logs 1000
   ```
- Tail logs live to see new entries in real-time:
   ```bash
   opencli domains-ssl <DOMAIN_NAME> logs -f
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

<details>
  <summary>Example output</summary>

```bash
opencli domains-whoowns pejcic.rs
Owner of 'pejcic.rs': stefan
```
</details>

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

<details>
  <summary>Example output</summary>

```bash
opencli domains-stats stefan
Processing user: stefan
Processed domain pejcic.rs for user stefan
Processed domain openpanel.co for user stefan
```
</details>

To parse (Caddy) access logs for all active users and their domains run the script without username:

```bash
opencli domains-stats
```

## Varnish

Check Varnish status for domain, enable/disable Varnish caching.

```bash
opencli domains-varnish <DOMAIN-NAME> [on|off] [--short]
```

Enable Varnish Caching for domain:
```bash
opencli domains-varnish <DOMAIN-NAME> on
```

Disable Varnish Caching for domain:
```bash
opencli domains-varnish <DOMAIN-NAME> off
```
