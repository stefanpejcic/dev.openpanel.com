# Domains

Manage domains: Add, Delete, detect, etc.

### List user domains

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

### List all domains

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

### Check who owns a domain name

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


### Add Domain to User

To add a domain name for user:

```bash
opencli domains-add <USERNAME> <DOMAIN>
```

Example:
```bash
opencli domains-add stefan pejcic.rs
```

Note: this command will add a domain for user regardless of their domains limit.


### DNSSEC

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

### Parse domain access logs

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

### Enable modsecurity

To enable modsecurity for all domains owned by a specific user:

```bash
opencli domains-enable_modsec [USERNAME]
```

To enable modsecurity on all domains for all active users:

```bash
opencli domains-enable_modsec
```
