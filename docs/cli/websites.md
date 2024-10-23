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
