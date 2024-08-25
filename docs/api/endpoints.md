# Endpoints

## Users

The OpenPanel API provides a comprehensive set of endpoints for managing user accounts. Below are the operations available for user management.

### List accounts

```
curl -X GET http://PANEL:2087/api/users -H "Authorization: Bearer JWT_TOKEN_HERE"
```

### Create account

To create a new user account:

```
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

-----


## Plans



### List Plans

To retrieve a list of all available hosting plans:
```
curl -X GET http://PANEL:2087/api/plans -H "Authorization: Bearer JWT_TOKEN_HERE"
```

To retrieve information about a single hosting plan:
```
curl -X GET http://PANEL:2087/api/plans/<PLAN_ID> -H "Authorization: Bearer JWT_TOKEN_HERE"
```

## Services


### Services List

To view a list of all currently monitored services:
```
curl -X GET http://PANEL:2087/api/services -H "Authorization: Bearer JWT_TOKEN_HERE"
```

This reads the `/etc/openpanel/openadmin/config/services.json` file.

### Edit Services

To edit the list of minitored services:
```
curl -X PUT http://PANEL:2087/api/services -H "Authorization: Bearer JWT_TOKEN_HERE" -H "Content-Type: application/json" -d '{"service1": {"name": "Service One","status": "active"},"service2": {"name": "Service Two","status": "inactive"}}'
```
This will update the list of monitored services stored inside `/etc/openpanel/openadmin/config/services.json` file.

### Services Status

To check the status of all monitored services:
```
curl -X GET http://PANEL:2087/api/services/status -H "Authorization: Bearer JWT_TOKEN_HERE"
```


### Start Service

To start a specific service:
```
curl -X POST http://PANEL:2087/api/service/start/<service_name> -H "Authorization: Bearer JWT_TOKEN_HERE"
```

Replace `<service_name> with the actual name of the service you wish to start.


### Restart Service

To stop a specific service:
```
curl -X POST http://PANEL:2087/api/service/restart/<service_name> -H "Authorization: Bearer JWT_TOKEN_HERE"
```
Replace `<service_name> with the actual name of the service you wish to restart.


### Stop Service

To stop a specific service:
```
curl -X POST http://PANEL:2087/api/service/stop/<service_name> -H "Authorization: Bearer JWT_TOKEN_HERE"
```
Replace `<service_name> with the actual name of the service you wish to stop.


