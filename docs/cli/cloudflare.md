## Cloudflare only

Administrators can disable direct server access and only allow access via Cloudflare proxy. This setting affects all domains and users.

- Enable Cloudflare restrictions:
  ```bash
  opencli cloudflare --enable
  ```
- Disable Cloudflare restrictions:
  ```bash
  opencli cloudflare --disable
  ```

This feature will regularly update Cloudflare ip addresses to make sure new CF IP ranges are included.
