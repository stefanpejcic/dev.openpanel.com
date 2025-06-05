# OpenPanel API

:::info
OpenPanel API is available only on [OpenPanel Enterprise edition](https://openpanel.com/beta/).
:::


## Login

### 🔐 Login without 2FA

```bash
curl -X POST https://OPENPANEL:2083/api/login \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"username": "testuser", "password": "your_password_here"}'
```

Example response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 🔐 Login with 2FA

Initial request:
```bash
curl -X POST https://OPENPANEL:2083/api/login \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"username": "testuser", "password": "your_password_here"}'
```

Example response:
```json
{
  "twofa_required": true,
  "user_id": 123
}
```

Submit 2FA code:
```bash
curl -X POST https://OPENPANEL:2083/api/login \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"username": "testuser", "password": "your_password_here", "twofa_code": "123456"}'
```

Example response:
```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "user_id": 123,
  "expires_in": 3600
}
```


## Domains

```bash
curl -X POST https://OPENPANEL:2083/api/domains \
  -H "Authorization: Bearer JWT_TOKEN_HERE"
```

Example response:
```json
{"cpu_limit":200,"custom_message":null,"db_limit":0,"db_usage":0,"domains":[{"docroot":"/var/www/html/pcx3.com","domain_id":4,"domain_url":"pcx3.com"}],"domains_limit":0,"email_count":0,"email_limit":0,"ftp_count":0,"ftp_limit":0,"how_to_guides":"yes","how_to_topics":[{"link":"https://openpanel.com/docs/panel/applications/wordpress#install-wordpress","title":"How to install WordPress"},{"link":"https://openpanel.com/docs/panel/applications/pm2#python-applications","title":"Publishing a Python Application"},{"link":"https://openpanel.com/docs/panel/advanced/server_settings#nginx--apache-settings","title":"How to edit Nginx / Apache configuration"},{"link":"https://openpanel.com/docs/panel/databases/#create-a-mysql-database","title":"How to create a new MySQL database"},{"link":"https://openpanel.com/docs/panel/advanced/cronjobs#add-a-cronjob","title":"How to add a Cronjob"},{"link":"https://openpanel.com/docs/panel/advanced/server_settings#server-time","title":"How to change server TimeZone"}],"ip_address":"95.217.216.36","knowledge_base_link":"https://openpanel.com/docs/panel/intro/?source=openpanel_server","last_ip":"82.117.216.242","locale":"en","maindomains":[{"domain_url":"pcx3.com","tld":"com"}],"ns1":"ns1.pejcic.rs","ns2":"ns2.pejcic.rs","ns3":"","ns4":"","subdomains":[],"title":"Dashboard","twofa_enabled":null,"twofa_nag":"False","user_features":["notifications","account","sessions","locale","favorites","varnish","docker","ftp","emails","mysql","remote_mysql","mysql_import","mysql_conf","php","php_options","php_ini","phpmyadmin","crons","backups","wordpress","website_builder","pm2","autoinstaller","disk_usage","inodes","usage","info","webserver_conf","waf","filemanager","fix_permissions","dns","redirects","domains","capitalize_domains","malware_scan","goaccess","process_manager","redis","memcached","elasticsearch","opensearch","temporary_links","login_history","twofa","activity","dashboard","helpers","websites","databases_size_info","screenshots","logout","errors","search"],"user_websites":[["pcx3.com","WordPress"],["pcx3.com/grapejs","SiteBuilder"]],"websites_limit":10}
```


