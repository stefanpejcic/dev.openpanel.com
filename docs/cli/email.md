# Emails 

Starting from the [0.2.5](https://openpanel.com/docs/changelog/0.2.5/) version, [OpenPanel Enterprise edition](https://openpanel.com/beta/) includes a mailserver.

The following commands are available **for OpenPanel Enterprise** users:

## MailServer

Using the `opencli email-server` command you can install and manage the mailserver:

```bash
root@pejcic:~# opencli email-server
Usage:

opencli email-server status                           Show status
opencli email-server config                           Show configuration
opencli email-server install                          Install the email server  
opencli email-server start                            Start the email server
opencli email-server stop                             Stop the email server
opencli email-server restart                          Restart the email server
opencli email-server queue                            Show mail queue
opencli email-server flush                            Flush mail queue
opencli email-server view   <queue id>                Show mail by queue id
opencli email-server unhold <queue id> [<queue id>]   Release mail that was put "on hold" (marked with '!')
opencli email-server unhold ALL                       Release all mails that were put "on hold" (marked with '!')
opencli email-server delete <queue id> [<queue id>]   Delete mail from queue
opencli email-server delete ALL                       Delete all mails from queue
opencli email-server fail2ban [<ban|unban> <IP>]      Interact with fail2ban
opencli email-server fail2ban log                     Show fail2ban log
opencli email-server ports                            Show published ports
opencli email-server postconf                         Show postfix configuration
opencli email-server logs [-f]                        Show logs. Use -f to 'follow' the logs
opencli email-server login                            Run container shell
opencli email-server supervisor                       Interact with supervisorctl
opencli email-server update-check                     Check for container package updates
opencli email-server update-packages                  Update container packages
opencli email-server versions                         Show versions
```

### Install

To install mailserver:

```bash
opencli email-server install
```


### Start

To start the mailserver:

```bash
opencli email-server start
```


### Restart

To restart the mailserver:

```bash
opencli email-server restart
```


### Stop

To stop the mailserver:

```bash
opencli email-server stop
```


### Status

To view current mailserver status:

```bash
opencli email-server status
```

Example:
```bash
root@stefi:/usr/# opencli email-server status
Container:    Up 21 minutes (healthy)

Version:      v14.0.0


Packages:     Updates available

Ports:        25/tcp -> 0.0.0.0:25
              25/tcp -> [::]:25
              143/tcp -> 0.0.0.0:143
              143/tcp -> [::]:143
              465/tcp -> 0.0.0.0:465
              465/tcp -> [::]:465
              587/tcp -> 0.0.0.0:587
              587/tcp -> [::]:587
              993/tcp -> 0.0.0.0:993
              993/tcp -> [::]:993

Postfix:      Mail queue is empty

Supervisor:   amavis                           RUNNING   pid 910, uptime 0:20:23
              changedetector                   RUNNING   pid 949, uptime 0:20:23
              cron                             RUNNING   pid 803, uptime 0:20:25
              dovecot                          RUNNING   pid 813, uptime 0:20:25
              mailserver                       RUNNING   pid 8, uptime 0:21:06
              opendkim                         RUNNING   pid 848, uptime 0:20:24
              opendmarc                        RUNNING   pid 864, uptime 0:20:24
              postfix                          RUNNING   pid 876, uptime 0:20:24
              rsyslog                          RUNNING   pid 807, uptime 0:20:25
              update-check                     RUNNING   pid 822, uptime 0:20:24
              clamav                           STOPPED   Not started
              fail2ban                         STOPPED   Not started
              fetchmail                        STOPPED   Not started
              mta-sts-daemon                   STOPPED   Not started
              postgrey                         STOPPED   Not started
              postsrsd                         STOPPED   Not started
              rspamd                           STOPPED   Not started
              rspamd-redis                     STOPPED   Not started
              saslauthd_ldap                   STOPPED   Not started
              saslauthd_mysql                  STOPPED   Not started
              saslauthd_pam                    STOPPED   Not started
              saslauthd_rimap                  STOPPED   Not started
              saslauthd_shadow                 STOPPED   Not started
```




## Config

### Status

To view current mailserver status:

```bash
opencli email-server status
```

Example:
```bash
root@stefi:/usr/# opencli email-server status
Container:    Up 21 minutes (healthy)

Version:      v14.0.0


Packages:     Updates available

Ports:        25/tcp -> 0.0.0.0:25
              25/tcp -> [::]:25
              143/tcp -> 0.0.0.0:143
              143/tcp -> [::]:143
              465/tcp -> 0.0.0.0:465
              465/tcp -> [::]:465
              587/tcp -> 0.0.0.0:587
              587/tcp -> [::]:587
              993/tcp -> 0.0.0.0:993
              993/tcp -> [::]:993

Postfix:      Mail queue is empty

Supervisor:   amavis                           RUNNING   pid 910, uptime 0:20:23
              changedetector                   RUNNING   pid 949, uptime 0:20:23
              cron                             RUNNING   pid 803, uptime 0:20:25
              dovecot                          RUNNING   pid 813, uptime 0:20:25
              mailserver                       RUNNING   pid 8, uptime 0:21:06
              opendkim                         RUNNING   pid 848, uptime 0:20:24
              opendmarc                        RUNNING   pid 864, uptime 0:20:24
              postfix                          RUNNING   pid 876, uptime 0:20:24
              rsyslog                          RUNNING   pid 807, uptime 0:20:25
              update-check                     RUNNING   pid 822, uptime 0:20:24
              clamav                           STOPPED   Not started
              fail2ban                         STOPPED   Not started
              fetchmail                        STOPPED   Not started
              mta-sts-daemon                   STOPPED   Not started
              postgrey                         STOPPED   Not started
              postsrsd                         STOPPED   Not started
              rspamd                           STOPPED   Not started
              rspamd-redis                     STOPPED   Not started
              saslauthd_ldap                   STOPPED   Not started
              saslauthd_mysql                  STOPPED   Not started
              saslauthd_pam                    STOPPED   Not started
              saslauthd_rimap                  STOPPED   Not started
              saslauthd_shadow                 STOPPED   Not started
```



### Uninstall

To uninstall the mailserver:

```
opencli email-server uninstall
```




## Webmail

Choose Webmail software: [Roundcube](https://roundcube.net/), [SnappyMail](https://snappymail.eu/) or [Sogo](https://www.sogo.nu/)

```bash
opencli email-webmail <roundcube|snappymail|sogo>
```

Webmail is available on port `8080`.


## Emails

`opencli email-setup` command is used to create and manage email accounts.

To view a list of all available sub-commands:

```bash
opencli email-setup help
```

### List emails

To view a list of all email addresses on server:

```bash
opencli email-setup email list
```

### Create email

To create new email account:

```bash
opencli email-setup email add <EMAIL ADDRESS> [<PASSWORD>]
```

### Change password

To change password for email account:

```bash
opencli email-setup email update <EMAIL ADDRESS> [<PASSWORD>]
```

### Delete email

To delete an email account:

```bash
opencli email-setup email del [ OPTIONS... ] <EMAIL ADDRESS> [ <EMAIL ADDRESS>... ]
```


### Restrict email

To suspend sending or receving of emails for an email account:

```bash
opencli email-setup email restrict <add|del|list> <send|receive> [<EMAIL ADDRESS>]
```



## Aliases

The `opencli email-setup alias` command is used to manage email aliases:



### List Aliases

To list all email aliases:
```bash
opencli email-setup alias list
```

### Add Alias

To create a new email alias:
```bash
opencli email-setup alias add <EMAIL ADDRESS> <RECIPIENT>
```


### Delete Alias

To delete existing email alias:
```bash
opencli email-setup alias del <EMAIL ADDRESS> <RECIPIENT>
```

## Quotas

The `opencli email-setup quota` command is used to manage email quotas:

### Set Quota

To set quota for email account:

```bash
opencli email-setup quota set <EMAIL ADDRESS> [<QUOTA>]
opencli email-setup quota del <EMAIL ADDRESS>
```

### Remove Quota

To remove quota for email account:

```bash
opencli email-setup quota del <EMAIL ADDRESS>
```



## Dovecot Master

[Dovecot Master](https://doc.dovecot.org/2.3/configuration_manual/authentication/master_users/) accounts are used to auto-login from OpenPanel interface to any email address.

`opencli email-setup dovecot-master` 


### List Dovecot Master 

To list all dovecot-master accounts:

```bash
opencli email-setup dovecot-master list
```


### Add Dovecot Master 

To create a new dovecot-master account:

```bash
opencli email-setup dovecot-master add <USERNAME> [<PASSWORD>]
```

### Update Dovecot Master 

To chaneg password for existing dovecot-master account:

```bash
opencli email-setup dovecot-master update <USERNAME> [<PASSWORD>]
```

### Add Dovecot Master 

To delete an dovecot-master account:

```bash
opencli email-setup dovecot-master del [ OPTIONS... ] <USERNAME> [ <USERNAME>... ]
```





## DKIM

To manage DKIM use `opencli email-setup config` command:

### Setup DKIM

To setup DKIM:

```bash
opencli email-setup config dkim [ ARGUMENTS... ]
```

## Email Relay

To setup [email relay](https://en.wikipedia.org/wiki/Open_mail_relay) use `opencli email-setup relay` command:


### Add Auth

To add auth to email relay:

```bash
opencli email-setup relay add-auth <DOMAIN> <USERNAME> [<PASSWORD>]
```

### Add Domain

To add auth domain to email relay:

```bash
opencli email-setup relay add-domain <DOMAIN> <HOST> [<PORT>]
```

### Exclude Auth

To exclude auth from email relay:

```bash
opencli email-setup relay exclude-domain <DOMAIN>
```




## Fail2Ban

[Fail2Ban](https://github.com/fail2ban/fail2ban) is used for restricting and blocking access to email accounts.

To display available options:
```bash
opencli email-setup fail2ban 
```

### Ban IP

To ban IP address from accessing mail server:
```bash
opencli email-setup fail2ban ban <IP>
```

### UnBan IP

To unban IP address and allow it to access mail server:
```bash
opencli email-setup fail2ban unban <IP>
```

### View Log

To view the fail2ban log:
```bash
opencli email-setup fail2ban log
```


### View Status

To view the fail2ban status:
```bash
opencli email-setup fail2ban status
```

## Debug

For debugging emails the following commands are available:

### Fetchmail

[Fetchmail](https://www.fetchmail.info/fetchmail-man.html) is a powerful tool that can be used to debug email:

```bash
opencli email-setup debug fetchmail
```

### Login

To troubleshoot emaail address login:

```bash
opencli email-setup debug login <COMMANDS>
```

### Mail Logs

To view the mailserver logs:
```bash
opencli email-setup debug show-mail-logs
```
