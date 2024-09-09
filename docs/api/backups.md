# Backups

### Settings

View or edit general backups settings:



To view current settings:

```bash
curl -X GET http://localhost:2087/api/backups/settings -H "Authorization: Bearer YOUR_JWT_TOKEN"
```


To update settings:

```bash
curl -X POST http://localhost:2087/api/backups/settings \
-H "Authorization: Bearer YOUR_JWT_TOKEN" \
-d "debug=yes" \
-d "error_report=yes" \
-d "workplace_dir=/var/new_backups" \
-d "downloads_dir=/var/new_downloads" \
-d "delete_orphan_backups=45" \
-d "days_to_keep_logs=90" \
-d "time_format=12" \
-d "avg_load_limit=10" \
-d "concurent_jobs=15" \
-d "backup_restore_ttl=2880" \
-d "cpu_limit=80" \
-d "io_read_limit=150" \
-d "io_write_limit=150" \
-d "enable_notification=yes" \
-d "email_notification=yes" \
-d "send_emails_to=alerts@example.com" \
-d "notify_on_every_job=yes" \
-d "notify_on_failed_backups=yes" \
-d "notify_on_no_backups=yes" \
-d "notify_if_no_backups_after=5"
```
NOTE: all options are required.
