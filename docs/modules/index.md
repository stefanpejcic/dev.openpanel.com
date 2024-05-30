# OpenPanel Modules

## Introduction

OpenPanel utilizes modules, which are separate Python files that **cannot** be executed directly but only through the OpenPanel interface. These modules enrich the OpenPanel interface by introducing new pages or sections to the current template.

Modules are intended for adding functionality rather than just aesthetic modifications. For visual changes, please utilize [templates](/templates/) instead.

Modules offer additional features that administrators can enable or disable. Disabling a module immediately removes its associated menu item, search functionality, and page visibility.

## Official Modules

OpenPanel currently includes the following official modules:

- phpmyadmin
- ssh
- dns
- ftp
- crons
- backups
- wordpress
- pm2
- disk_usage
- inodes
- usage
- terminal
- services
- webserver
- fix_permissions
- malware_scan
- process_manager
- ip_blocker
- redis
- memcached
- elasticsearch
- login_history
- activity

These modules are part of the standard OpenPanel installation but can be deactivated by the administrator.

## Custom Modules

To develop a custom module, follow these steps:

1. Craft a new Python file that imports core modules and incorporates your specific code.
2. If your module introduces a custom page to the interface, create a template for it within the templates directory. Additionally, integrate links to this new page in the search JSON and the appropriate sidebar template location.
3. Integrate your new module into the main `app.py` file.
4. Insert the module's name into the `enabled_modules` list within the configuration file.
5. Restart the OpenPanel service to immediately apply the changes.

## Example Module

COMING SOON
