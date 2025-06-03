# Websites

Manage websites.

### List all websites

List all websites hosted on the server:

```bash
opencli websites-all
```

### List websites for user

List all websites owned by user:

```bash
opencli websites-user <USERNAME>
```

### Add websites for user

Scan user files and add WordPress installations:
```bash
opencli websites-scan <USERNAME>
```

use `-all` flag to run for all users:
```bash
opencli websites-scan -all
```


### Google Index

Get Google Index status for a single website:

```bash
opencli websites-google_indexed --domain <WEBSITE>
```

Example response:

```bash
# opencli websites-google_indexed --domain pcx3.com
{
  "timestamp": "2025-06-03 10:18:16",
  "domain": "pcx3.com",
  "indexed": true,
  "results_count": "1000"
}
```


Get Google Index status for all websites:

```bash
opencli websites-google_indexed
```


### PageSpeed

Get Google PageSpeed data for a single website:

```bash
opencli websites-pagespeed <WEBSITE>
```

Example:
```bash
opencli websites-pagespeed pejcic.rs/blog
```

Get Google PageSpeed data for all websites hosted on server:

```bash
opencli websites-pagespeed -all
```

> **Note:**  
> Since version **1.2.2**, users can provide their own [PageSpeed API key](https://developers.google.com/speed/docs/insights/v5/get-started) by creating a file named `pagespeed_api_key.txt` in their home directory at `/var/www/html/`.  
>  
> Administrators can also set a system-wide API key by creating the file `/etc/openpanel/openpanel/service/pagespeed.api` and placing the key inside.
