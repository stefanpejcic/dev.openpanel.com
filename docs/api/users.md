# Users

The OpenPanel API provides a comprehensive set of endpoints for managing user accounts. Below are the operations available for user management.

### List accounts

```bash
curl -X GET http://PANEL:2087/api/users -H "Authorization: Bearer JWT_TOKEN_HERE"
```

### Create account

To create a new user account:

```bash
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer JWT_TOKEN_HERE" -d '{"email": "EMAIL_HERE", "username": "USERNAME_HERE", "password": "PASSWORD_HERE", "plan_name": "PLAN_NAME_HERE"}' http://PANEL:2087/api/users
```


Example: 
```bash
curl -X POST "http://64.23.205.3:2087/api/users" -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGcBns" -H "Content-Type: application/json" -d '{"username":"stefan","password":"s32dsasaq","email":"stefan@pejcic.rs","plan_name":"default_plan_nginx"}'
```
Example response:
```bash
{
  "response": {
    "message": "Successfully added user stefan password: s32dsasaq"
  },
  "success": true
}
```

### Suspend account

```bash
curl -X PATCH -H "Content-Type: application/json" -H "Authorization: Bearer JWT_TOKEN_HERE" -d '{"action": "suspend"}' http://PANEL:2087/api/users/USERNAME_HERE
```

### Unsuspend account

```bash
curl -X PATCH -H "Content-Type: application/json" -H "Authorization: Bearer JWT_TOKEN_HERE" -d '{"action": "unsuspend"}' http://PANEL:2087/api/users/USERNAME_HERE
```

### Delete account

```bash
curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer JWT_TOKEN_HERE" http://PANEL:2087/api/users/USERNAME_HERE
```

### Change password

```bash
curl -X PATCH -H "Content-Type: application/json" -H "Authorization: Bearer JWT_TOKEN_HERE" -d '{"password": "NEW_PASSWORD_HERE"}' http://PANEL:2087/api/users/USERNAME_HERE
```

### Change plan

```bash
curl -X PUT -H "Content-Type: application/json" -H "Authorization: Bearer JWT_TOKEN_HERE" -d '{"plan_name": "PLAN_NAME_HERE"}' http://PANEL:2087/api/users/USERNAME_HERE
```

### Autologin

```bash
curl -X CONNECT -H "Content-Type: application/json" -H "Authorization: Bearer JWT_TOKEN_HERE" http://PANEL:2087/api/users/USERNAME_HERE
```

### IPs

List users with dedicated IP addresses:

```bash
curl -X GET -H "Authorization: Bearer JWT_TOKEN_HERE" http://PANEL:2087/api/ips
```

