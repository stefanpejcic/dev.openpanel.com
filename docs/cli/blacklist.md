
### IPset Blacklists

Administrators can easily add blacklists to block IP addresses from known malicious sources.

- Download new IP addresses for all enabled blocklists:
  ```bash
  opencli blacklist --fetch
  ```
- Update all ipsets rules and reload UFW service:
  ```bash
  opencli blacklist --update_ufw
  ```
- Add a new blacklist:
  ```bash
  opencli blacklist --add-blacklist name=<name> url=<url>
  ```
- Enable a blacklist:
  ```bash
  opencli blacklist --enable-blacklist=<name>
  ```
- Disable a blacklist:
  ```bash
  opencli blacklist --disable-blacklist=<name>
  ```
- Delete a blacklist:
  ```bash
  opencli blacklist --delete-blacklist=<name>
  ```

