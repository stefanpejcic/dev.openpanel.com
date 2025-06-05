# OpenPanel API

:::info
OpenPanel API is available only on [OpenPanel Enterprise edition](https://openpanel.com/beta/).
:::


## Login

### 🔐 Login without 2FA

```
curl -X POST https://OPENPANEL:2083/api/login \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"username": "testuser", "password": "your_password_here"}'
```

### 🔐 Login with 2FA (Two-Step)

Initial request:
```
curl -X POST https://OPENPANEL:2083/api/login \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"username": "testuser", "password": "your_password_here"}'
```

Example response:
```
{
  "twofa_required": true,
  "user_id": 123
}
```

Submit 2FA code:
```
curl -X POST https://OPENPANEL:2083/api/login \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"username": "testuser", "password": "your_password_here", "twofa_code": "123456"}'
```

Example response:
```
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "user_id": 123,
  "expires_in": 3600
}
```
