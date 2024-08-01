# API

Welcome to the OpenPanel API documentation!

## Introduction

OpenPanel, known for revolutionizing the web hosting industry with its unparalleled flexibility and robust security features, now extends its capabilities through a comprehensive API. This API enables developers, system administrators, and tech enthusiasts to automate, customize, and integrate OpenPanel functionalities seamlessly with their systems and applications.

The OpenPanel API is designed with both simplicity and power in mind, providing a broad range of endpoints that cover everything from user account management and server configuration to security settings and resource monitoring. Whether you're looking to automate routine tasks, deploy complex hosting environments, or integrate OpenPanel with other services, our API offers the tools you need to get the job done efficiently and effectively.


## RESTful

The OpenPanel API is RESTful, making it easy to integrate with existing tools and workflows. It supports a wide range of programming languages and frameworks, ensuring you can work in the environment that's best for you. Comprehensive documentation, quick start guides, and detailed examples are provided to help you get started quickly and make the most out of your OpenPanel experience.

Whether you're managing a single website or an entire fleet of servers, the OpenPanel API empowers you to streamline operations, enhance security, and deliver a superior hosting experience. Start exploring the endless possibilities with the OpenPanel API today!

## Getting started with the API

This section will guide you through the initial steps needed to start using the OpenPanel API, ensuring a smooth setup and integration process. By following these steps, you will be able to authenticate, make your first request, and understand the basic principles of interacting with our endpoints.

1. Enable API access

   First make sure that API access is enabled on your server by going to `OpenAdmin > API` or by running `opencli config get api` from the terminal:
   ![enable_api](https://i.postimg.cc/L6vwMQ4t/image.png)
   If API is not enabled, click on the "Enable API access" button or from terminal run `opencli config update api on`.
   We recommend creating new Administrator user for API, to create a new user navigate to *OpenAdmin > OpenAdmin Settings* and create new admin user, or from terminal run: `opencli admin new USERNAME_HERE PASSWORD_HERE`

3. Generate JWT token
   
   OpenPanel uses JWT tokens which means that you need to send your username and password once to generate a JWT token, after that the token can be reused for future requests.
   To generate a token, send POST request to the /api/ enpoint with your admin username and password. Example:
   ```bash
   curl -X POST "http://PANEL_ADDRESS:2087/api/" -H "Content-Type: application/json" -d '{"username":"stefan","password":"megamind728"}'
   ```
   In the response you will receive the JWT token to be used in future api calls. example response:
   ```bash
   {
   "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaC.....PvCboDVHkJ1rTerBns"
   }
   ```

4. Send API requests with the access token

   We can use /api/whoami enpoint to verify that our token is valid:
   ```bash
   curl -X GET "http://64.23.205.3:2087/api/whoami" -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2U...kJ1rTerBns"
   ```
   example response:
   ```bash
   {
   "logged_in_as": "stefan"
   }
   ```
  This request will return information about your admin account, verifying that your API key is working correctly.


## Complete list of API Endpoints

The OpenPanel API offers a comprehensive set of endpoints that allow you to manage and configure various aspects of your hosting environment. Below is a complete list of available endpoints:

### User Management
`/api/users` - Manage user accounts, including creation, deletion, and modification of user details.


#### List accounts

```bash
curl -X GET http://PANEL:2087/api/users -H "Authorization: Bearer JWT_TOKEN_HERE"
```

#### Create account

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

#### Suspend account

```bash
curl -X PATCH -H "Content-Type: application/json" -H "Authorization: Bearer JWT_TOKEN_HERE" -d '{"action": "suspend"}' http://PANEL:2087/api/users/USERNAME_HERE
```

#### Unsuspend account

```bash
curl -X PATCH -H "Content-Type: application/json" -H "Authorization: Bearer JWT_TOKEN_HERE" -d '{"action": "unsuspend"}' http://PANEL:2087/api/users/USERNAME_HERE
```

#### Delete account

```bash
curl -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer JWT_TOKEN_HERE" http://PANEL:2087/api/users/USERNAME_HERE
```

#### Change password

```bash
curl -X PATCH -H "Content-Type: application/json" -H "Authorization: Bearer JWT_TOKEN_HERE" -d '{"password": "NEW_PASSWORD_HERE"}' http://PANEL:2087/api/users/USERNAME_HERE
```

#### Change plan

```bash
curl -X PUT -H "Content-Type: application/json" -H "Authorization: Bearer JWT_TOKEN_HERE" -d '{"plan_name": "PLAN_NAME_HERE"}' http://PANEL:2087/api/users/USERNAME_HERE
```

#### Autologin

```bash
curl -X CONNECT -H "Content-Type: application/json" -H "Authorization: Bearer JWT_TOKEN_HERE" http://PANEL:2087/api/users/USERNAME_HERE
```


:::danger
THE FOLLOWING API ENDPOINTS ARE STILL EXPERIMENTAL AND NOT SUITABLE FOR PRODUCTION USE.
:::


### Plan Management
`/api/plans` - Handle hosting plans, allowing for the creation, modification, and deletion of service plans.

### Backup Management
`/api/backups` - Manage backups, offering options to create, restore, and delete backups of your hosting environment.

### Service Management
`/api/services` - Control server services, including starting, stopping, and configuring web, database, and email services.

### Settings Management
`/api/settings` - Configure global settings for the OpenPanel environment, including security settings, default configurations, and more.

### Notification Management
`/api/notifications` - Manage notifications, enabling you to configure alerts for various events within your hosting environment.

### Administrative Functions
`/api/admin` - Access administrative functions, such as system updates, user role management, and logging.

