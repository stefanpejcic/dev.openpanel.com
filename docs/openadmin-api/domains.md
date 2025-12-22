# Domains

Endpoints for managing user domains.

### List Domains

```bash
curl -X GET http://PANEL:2087/api/domains -H "Authorization: Bearer JWT_TOKEN_HERE"
```

### Add a Domain

```bash
curl -X POST http://localhost:2087/api/domains/new -H "Authorization: Bearer TOKEN_HERE" -H "Content-Type: application/json" -d '{"username":"current_user","domain":"DOMAIN_HERE","docroot":"/var/www/html/example.com"}'

*Docroot is optional and path must start with `/var/www/html/`.*

### Suspend a Domain

```bash
curl -X POST http://localhost:2087/api/domains/suspend/DOMAIN_HERE -H "Authorization: Bearer TOKEN_HERE"
```

### Unsuspend a Domain

```bash
curl -X POST http://localhost:2087/api/domains/unsuspend/DOMAIN_HERE -H "Authorization: Bearer TOKEN_HERE"
```

### Delete a Domain

```bash
curl -X POST http://localhost:2087/api/domains/delete/DOMAIN_HERE -H "Authorization: Bearer TOKEN_HERE"
```
