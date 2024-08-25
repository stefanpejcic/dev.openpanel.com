# Plans

### List Plans

To retrieve a list of all available hosting plans:
```
curl -X GET http://PANEL:2087/api/plans -H "Authorization: Bearer JWT_TOKEN_HERE"
```

To retrieve information about a single hosting plan:
```
curl -X GET http://PANEL:2087/api/plans/<PLAN_ID> -H "Authorization: Bearer JWT_TOKEN_HERE"
```