# PHP

Manage users' PHP versions: list enabled, list available, change version, etc.

### Get version for a domain

To view the current PHP version used by a domain, run the following command:

```bash
opencli php-domain <DOMAIN-NAME>
```

Example:
```bash
# opencli php-domain pejcic.rs
Domain 'pejcic.rs' (owned by user: stefan) uses PHP version: php8.1
```

### Change version for a domain

To change a PHP version for a domain name run the `domain` script with `--update` flag::

```bash
opencli php-domain <DOMAIN-NAME> --update <PHP-VERSION>
```

Example:
```bash
# opencli php-domain pejcic.rs --update 8.3
Updating PHP version to: 8.3
Domain 'pejcic.rs' (owned by user: stefan) uses PHP version: php8.3
Updating PHP version in the Apache configuration file...
 * Reloading Apache httpd web server apache2
 *
Updated PHP version in the configuration file to 8.3
```

### View default version

The default PHP version for a user determines which PHP version will be used for all domains that the user adds in the future. It does not change the PHP version for any existing domains.

To list the currently set default PHP version for a user, run the following command:

```bash
opencli php-default <USERNAME>
```

Example:
```bash
# opencli php-default stefan
Default PHP version for user 'stefan' is: php8.3
```

### Change the default version

To update the default PHP version for a user use the php-default with `--update` flag and provide the new PHP version.

```bash
opencli php-default <USERNAME> --update <VERSION>
```

Example:
```bash
# opencli php-default stefan --update 8.1
PHP version for user 'stefan' updated to: 8.1
```

### List installed versions

To list all installed PHP versions for a user, run the following command:

```bash
opencli php-installed_versions <USERNAME>
```



Example:
```bash
# opencli php-installed_versions stefan
php7.4
php8.1
php8.2
```

### List available versions

To get available (that can be installed) PHP versions for users' container, run the following command:

```bash
opencli php-available_versions <USERNAME>
```

Example:
```bash
# opencli php-available_versions stefan
....
PHP versions for user stefan have been updated and stored in /home/stefan/etc/.panel/php/php_available_versions.json.
```

The script will by default update users' available PHP versions setting for the UI, optionally you can add `--show` flag to display the available versions.

```bash
opencli php-available_versions <USERNAME> --show
```

Example:
```bash
# opencli php-available_versions stefan --show
....
Available PHP versions for user stefan:
php8.1-fpm
php5.6-fpm
php7.0-fpm
php7.1-fpm
php7.2-fpm
php7.3-fpm
php7.4-fpm
php8.0-fpm
php8.2-fpm
php8.3-fpm
```

The `available_versions` script performs various actions:

- Runs `apt-get update` inside users container
- Lists available PHP versions from remote repositories
- Saves the list to `/php_available_versions.json` in user home directory
- optionally display the listf

### Install a new version

To install a a new PHP version run the following command:

```bash
opencli php-install <USERNAME> <PHP-VERSION>
```

Example:
```bash
# opencli php-install stefan 8.2
Hit:1 https://ppa.launchpadcontent.net/ondrej/php/ubuntu jammy InRelease
Hit:2 http://security.ubuntu.com/ubuntu jammy-security InRelease
Hit:3 http://archive.ubuntu.com/ubuntu jammy InRelease
Hit:4 http://archive.ubuntu.com/ubuntu jammy-updates InRelease
Hit:5 http://archive.ubuntu.com/ubuntu jammy-backports InRelease
Reading package lists... Done
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  php8.1-cli php8.1-common php8.1-opcache php8.1-readline
Suggested packages:
  php-pear
The following NEW packages will be installed:
  php8.1-cli php8.1-common php8.1-fpm php8.1-opcache php8.1-readline
0 upgraded, 5 newly installed, 0 to remove and 5 not upgraded.
Need to get 4804 kB of archives.
After this operation, 21.1 MB of additional disk space will be used.
..
.
```

- You can specify php extensions to be installed by editing the [`/etc/openpanel/php/extensions.txt` file](https://github.com/stefanpejcic/openpanel-configuration/blob/main/php/extensions.txt)
- You can specify limits in php.ini file to be set by editing the [`/etc/openpanel/php/ini.txt` file](https://github.com/stefanpejcic/openpanel-configuration/blob/main/php/ini.txt)

### PHP.INI

View or update current setting value from php.ini file for user:

```bash
opencli php-ini <username> <action> <setting> [value]
```


- You can [specify a custom link from which to download files](https://openpanel.com/docs/articles/user-experience/install-older-ioncube-loader-extensions/), by creating a file `/etc/openpanel/php/ioncube.txt` and setting link in it.
