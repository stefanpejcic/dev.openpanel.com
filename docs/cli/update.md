# Update 

`opencli update` command is used to check if new update is available and to update.

Check if update is available:
```bash
opencli update --check
```

Start update immediately if `autoupdate` or `autopatch` is enabled:
```bash
opencli update
```

Start update immediately, regardless of `autoupdate` or `autopatch` setting:
```bash
opencli update --force
```

Update only OpenAdmin:
```bash
opencli update --admin
```

Update only OpenCLI:
```bash
opencli update --cli
```
