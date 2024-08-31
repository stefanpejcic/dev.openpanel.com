# Emails 

Starting from the [0.2.5](https://openpanel.com/docs/changelog/0.2.5/) version, [OpenPanel Enterprise edition](https://openpanel.com/beta/) includes a mailserver.

The following commands are available **for OpenPanel Enterprise** users:

```bash
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

## MailServer

Using the `opencli email-server` command you can install and manage the mailserver:

```
opencli email-server <install|start|restart|stop|uninstall>
```

### Install mailserver


To install mailserver:

```
opencli email-server install
```


### Start mailserver

To start the mailserver:

```
opencli email-server start
```


### Restart mailserver

To restart the mailserver:

```
opencli email-server restart
```


### Stop mailserver

To stop the mailserver:

```
opencli email-server stop
```


### Uninstall mailserver

To uninstall the mailserver:

```
opencli email-server uninstall
```




## Webmail

Choose Webmail software: [Roundcube](https://roundcube.net/), [SnappyMail](https://snappymail.eu/) or [Sogo](https://www.sogo.nu/)

```
opencli email-webmail <roundcube|snappymail|sogo>
```

Webmail is available on port `8080`.


## Emails

`opencli email-setup` command is used to create and manage email accounts.

To view a list of all available sub-commands:

```
opencli email-setup help
```

### List emails

To view a list of all email addresses on server:

```
opencli email-setup email list
```

### Create email

To create new email account:

```
opencli email-setup email add <EMAIL ADDRESS> [<PASSWORD>]
```

### Change password

To change password for email account:

```
opencli email-setup email update <EMAIL ADDRESS> [<PASSWORD>]
```

### Delete email

To delete an email account:

```
opencli email-setup email del [ OPTIONS... ] <EMAIL ADDRESS> [ <EMAIL ADDRESS>... ]
```


### Restrict email

To suspend sending or receving of emails for an email account:

```
opencli email-setup email restrict <add|del|list> <send|receive> [<EMAIL ADDRESS>]
```



## Aliases

The `opencli email-setup alias` command is used to manage email aliases:



### List Aliases

To list all email aliases:
```
opencli email-setup alias list
```

### Add Alias

To create a new email alias:
```
opencli email-setup alias add <EMAIL ADDRESS> <RECIPIENT>
```


### Delete Alias

To delete existing email alias:
```
opencli email-setup alias del <EMAIL ADDRESS> <RECIPIENT>
```

## Quotas

The `opencli email-setup quota` command is used to manage email quotas:

### Set Quota

To set quota for email account:

```
opencli email-setup quota set <EMAIL ADDRESS> [<QUOTA>]
opencli email-setup quota del <EMAIL ADDRESS>
```

### Remove Quota

To remove quota for email account:

```
opencli email-setup quota del <EMAIL ADDRESS>
```



## Dovecot Master

[Dovecot Master](https://doc.dovecot.org/2.3/configuration_manual/authentication/master_users/) accounts are used to auto-login from OpenPanel interface to any email address.

`opencli email-setup dovecot-master` 


### List Dovecot Master 

To list all dovecot-master accounts:

```
opencli email-setup dovecot-master list
```


### Add Dovecot Master 

To create a new dovecot-master account:

```
opencli email-setup dovecot-master add <USERNAME> [<PASSWORD>]
```

### Update Dovecot Master 

To chaneg password for existing dovecot-master account:

```
opencli email-setup dovecot-master update <USERNAME> [<PASSWORD>]
```

### Add Dovecot Master 

To delete an dovecot-master account:

```
opencli email-setup dovecot-master del [ OPTIONS... ] <USERNAME> [ <USERNAME>... ]
```





## DKIM

To manage DKIM use `opencli email-setup config` command:

### Setup DKIM

To setup DKIM:

```
opencli email-setup config dkim [ ARGUMENTS... ]
```

## Email Relay

To setup [email relay](https://en.wikipedia.org/wiki/Open_mail_relay) use `opencli email-setup relay` command:


### Add Auth

To add auth to email relay:

```
opencli email-setup relay add-auth <DOMAIN> <USERNAME> [<PASSWORD>]
```

### Add Domain

To add auth domain to email relay:

```
opencli email-setup relay add-domain <DOMAIN> <HOST> [<PORT>]
```

### Exclude Auth

To exclude auth from email relay:

```
opencli email-setup relay exclude-domain <DOMAIN>
```




## Fail2Ban

[Fail2Ban](https://github.com/fail2ban/fail2ban) is used for restricting and blocking access to email accounts.

To display available options:
```
opencli email-setup fail2ban 
```

### Ban IP

To ban IP address from accessing mail server:
```
opencli email-setup fail2ban ban <IP>
```

### UnBan IP

To unban IP address and allow it to access mail server:
```
opencli email-setup fail2ban unban <IP>
```

### View Log

To view the fail2ban log:
```
opencli email-setup fail2ban log
```


### View Status

To view the fail2ban status:
```
opencli email-setup fail2ban status
```

## Debug

For debugging emails the following commands are available:

### Fetchmail

[Fetchmail](https://www.fetchmail.info/fetchmail-man.html) is a powerful tool that can be used to debug email:

```
opencli email-setup debug fetchmail
```

### Login

To troubleshoot emaail address login:

```
opencli email-setup debug login <COMMANDS>
```

### Mail Logs

To view the mailserver logs:
```
opencli email-setup debug show-mail-logs
```
