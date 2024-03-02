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

1. Obtain an API Key

To use the OpenPanel API, you first need to obtain an API key. This key will authenticate your requests and provide access to the API's features. To get your API key:

- Log in to your OpenAdmin account.
- Navigate to the API section in the dashboard.
- Click on the "Generate API Key" button.
- Copy the generated API key and keep it secure.

2. Make Your First Request

With your API key in hand, you're ready to make your first API call. We recommend starting with a simple request to fetch your user information. Use the following example, replacing YOUR_API_KEY with your actual API key.

```
curl -X GET "https://OPENADMIN:2087/api/v1/users/me" -H "Authorization: Bearer YOUR_API_KEY"
```
This request will return information about your user account, verifying that your API key is working correctly.

3. Explore the Documentation

Before diving deeper, take some time to explore the API documentation. Familiarize yourself with the available endpoints, data formats, and common parameters. Understanding these basics will help you effectively utilize the API for your needs.


4. Integrate with Your Application

Now that you're familiar with making requests and navigating the documentation, start integrating the API with your application. Experiment with different endpoints, and consider how you can automate tasks, enhance functionality, or streamline operations within your environment.



## Complete list of API Endpoints

The OpenPanel API offers a comprehensive set of endpoints that allow you to manage and configure various aspects of your hosting environment. Below is a complete list of available endpoints:

### User Management
`/api/v1/users` - Manage user accounts, including creation, deletion, and modification of user details.

### Plan Management
`/api/v1/plans` - Handle hosting plans, allowing for the creation, modification, and deletion of service plans.

### Backup Management
`/api/v1/backups` - Manage backups, offering options to create, restore, and delete backups of your hosting environment.

### Service Management
`/api/v1/services` - Control server services, including starting, stopping, and configuring web, database, and email services.

### Settings Management
`/api/v1/settings` - Configure global settings for the OpenPanel environment, including security settings, default configurations, and more.

### Notification Management
`/api/v1/notifications` - Manage notifications, enabling you to configure alerts for various events within your hosting environment.

### Administrative Functions
`/api/v1/admin` - Access administrative functions, such as system updates, user role management, and logging.

Each endpoint is designed to be RESTful, supporting standard HTTP methods (GET, POST, PUT, DELETE) to perform actions. For detailed information about the parameters, request and response formats, and specific functionalities of each endpoint, refer to the corresponding sections of the API documentation.


## Creating a Custom Endpoint

After developing your endpoint, you need to register it with OpenPanel. This involves adding your endpoint to the OpenPanel API configuration, specifying the request method, and mapping the endpoint to your code.

- Open the OpenPanel API configuration file, typically located in `/etc/openpanel/api.conf`.
- Add a new entry under the custom_endpoints section, specifying the method, route (URL path), and the path to your script.

For example, to add a POST endpoint /api/v1/custom/myendpoint, you would add the following:
```
custom_endpoints:
  - method: POST
  route: /api/v1/custom/myendpoint
  script: /path/to/your/script
```
