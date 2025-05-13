# Customize

OpenPanel is renowned for its modularity, allowing you to customize numerous aspects. 


## Custom Code

To add custom code to OpenPanel, simply edit the coresponding file and afterwards restart openpanel docker container:

```bash
docker restart openpanel
```


### Custom CSS

To add custom CSS code to the OpenPanel interface, edit the file `/etc/openpanel/openpanel/custom_code/custom.css`.

```bash
nano /etc/openpanel/openpanel/custom_code/custom.css
```

### Custom JS

To add custom JavaScript code to the OpenPanel interface, edit the file `/etc/openpanel/openpanel/custom_code/custom.js`.

```bash
nano /etc/openpanel/openpanel/custom_code/custom.js
```

### Code in Header

To insert custom code within the `<head>` tag of the OpenPanel interface, modify the content of the file located at `/etc/openpanel/openpanel/custom_code/in_header.html` and include your custom code within it.

```bash
nano /etc/openpanel/openpanel/custom_code/in_header.html
```

### Code in Footer

To insert custom code within the `<footer>` tag of the OpenPanel interface, modify the content of the file located at `/etc/openpanel/openpanel/custom_code/in_footer.html` and include your custom code within it.

```bash
nano /etc/openpanel/openpanel/custom_code/in_footer.html
```

### After installation

To execute custom code following the installation of OpenPanel, place your custom script on the server. When initiating the OpenPanel installation process, use the `--post_install=` flag and specify the path to your script within it.
Example:

```bash
 --post_install=/root/my_custom_script.sh
```

### After update

To execute custom code following the update of OpenPanel, create a custom bash script:

```bash
/root/openpanel_run_after_update
```

## Pre-fill **OpenAdmin > Plans > New** form

![screenshot](/prefill_plan_form.png)


To pre-fill data into the new plan form, simply create a new file:

```
/etc/openpanel/openadmin/config/new_plan_template
```

and set the data to be used:

```
{
  "name": "Starter Plan",
  "description": "Basic starter plan for new users.",
  "docker_image": "apache",
  "domains": 5,
  "websites": 3,
  "databases": 2,
  "ram": 2,
  "cpu": 1,
  "port_speed": 100,
  "disk_limit_for_docker": 10,
  "inodes_for_storage_file": 500000,
  "disk_limit_for_storage_file": 20
}

```


## Hooks

OpenPanel supports hooks that run bash scripts before or after running opencli commands.

To create a hook, first create a new directory: `/etc/openpanel/openpanel/hooks/` and inside create a file based on the desired command:

- `pre_` prefix for script to run **before** a command.
- `post_` prefix for a script to run **after** executing an opencli command.

Example, to run a custom script before the user creation process (opencli *user-add*) you would create a new file:
```bash
pre_user-add.sh
```

another example, script that executes after adding a domain (opencli *domains-add*) you would create file:
```bash
post_domains-add.sh
```

any command-line attributes passed to opencli script will also be to your custom scripts.



## Domain Restriction
Administrators can restrict the usage of specific domains by creating the file `/etc/openpanel/openpanel/conf/domain_restriction.txt` and adding one domain per line.

Example:

```bash
facebook.com
openpanel.com
pejcic.rs
openpanel.org
demo.openpanel.org
```


----

For more examples please follow this guide: [Customizing OpenPanel Interface (Branding and White-Label)](https://openpanel.com/docs/articles/dev-experience/customizing-openpanel-user-interface/)
