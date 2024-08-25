## Nginx


### Install ModSecurity

You can install modsecurity by using:

```bash
opencli nginx-install_modsec
```

### Manage ModSecurity

To list ModSecurity configuration files with rules:
```bash
opencli nginx-modsec [--json]
```

To view all ModSecurity rule IDs:
```bash
opencli nginx-modsec --rules [--json]
```

To update and download latest ModSecurity rules:
```bash
opencli nginx-modsec --update
```

To view ModSecurity logs:
```bash
opencli nginx-modsec --logs
```
To search the logs for a domain name, IP address or rule ID, add hte search parameter after `--logs`:
```bash
opencli nginx-modsec --logs pejcic.rs
```

To view ModSecurity status and statistics for a domain name:
```bash
opencli nginx-modsec --domain <DOMAIN_NAME>
```
