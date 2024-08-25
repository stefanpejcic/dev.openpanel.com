# API

Welcome to the OpenPanel API documentation!

:::info
OpenPanel API is available only on [OpenPanel Enterprise edition](https://openpanel.com/beta/).
:::

## Introduction

OpenPanel, known for revolutionizing the web hosting industry with its unparalleled flexibility and robust security features, now extends its capabilities through a comprehensive API. This API enables developers, system administrators, and tech enthusiasts to automate, customize, and integrate OpenPanel functionalities seamlessly with their systems and applications.

The OpenPanel API is designed with both simplicity and power in mind, providing a broad range of endpoints that cover everything from user account management and server configuration to security settings and resource monitoring. Whether you're looking to automate routine tasks, deploy complex hosting environments, or integrate OpenPanel with other services, our API offers the tools you need to get the job done efficiently and effectively.


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



## Best Practices

Here are some technical recommendations and insights to ensure that your use of the OpenPanel API is efficient, secure, and reliable:

### General Recommendations

- **Use HTTPS**: Always use HTTPS to ensure that the data between your application and the OpenPanel API is encrypted.
- **Handle Errors Gracefully**: Implement robust error handling to manage API request failures or unexpected responses gracefully.
- **Pagination**: For endpoints that return lists (e.g., List Users, List Plans), implement pagination to manage large datasets efficiently.
- **Rate Limiting**: Be mindful of rate limits to avoid being throttled or blocked by your WAF. Implement retry mechanisms with exponential backoff for errors.
- **Versioning**: Pay attention to the API version you are using (/api/v1/ in this case) and monitor for any version updates or deprecations.

### Security Recommendations

- **Authentication**: Ensure that API keys or authentication tokens are securely stored and not exposed in public repositories or client-side code.
- **Input Validation**: Validate all inputs to prevent injection attacks or malformed data from being processed.
- **Secure Passwords**: Encourage the use of strong, complex passwords. Consider implementing password strength checks at the point of user creation or password change.

### Performance Recommendations

- **Caching**: Implement caching for data that does not change frequently to reduce the number of API calls and improve the performance of your application.
- **Selective Data Retrieval**: Only request the data you need. If the API supports it, use query parameters to filter data or limit the fields returned by the API.
- **Concurrent Requests**: For bulk operations or when retrieving data from multiple endpoints, consider making concurrent requests where feasible and appropriate.


### Monitoring and Logging

- **API Usage Monitoring**: Monitor your API usage to identify trends, detect anomalies, and optimize resource utilization.
- **Access Logs**: Maintain access logs for auditing and troubleshooting purposes. Pay special attention to failed authentication attempts or unauthorized access attempts.
- **Notification Management**: Utilize the notifications endpoint to manage and respond to system-generated notifications efficiently.

### Updates and Community

- **Stay Updated**: Follow our [changelog](https://openpanel.com/docs/changelog/intro/) to stay informed about new features, bug fixes, and security updates.
- **Community Engagement**: Engage with the OpenPanel community through [forums](https://community.openpanel.com/), or [discord](https://discord.openpanel.com) to share insights, ask questions, and stay connected with other developers.
