# Services


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

