# OpenPanel Modules

## Introduction

OpenPanel utilizes modules, which are separate Python files that **cannot** be executed directly but only through the OpenPanel interface. These modules enrich the OpenPanel interface by introducing new pages or sections to the current template.

Modules are intended for adding functionality rather than just aesthetic modifications. For visual changes, please utilize [templates](/templates/) instead.

Modules offer additional features that administrators can enable or disable. Disabling a module immediately removes its associated menu item, search functionality, and page visibility.


## Example Module

In this example we will create a simple module to run command 'opencli files-fix_permissions <USER> <FOLDER>' and set appropiate user permissions in home directory.

First lets create a directory for our new app:

```bash
mkdir -p /root/fixperms
```

In this directory lets create fixperms.py and fixperms.html files

```bash
touch /root/fixperms/fixperms.py  /root/fixperms/fixperms.html
```

fixperms.py is the python code that will create /files/fix-permissions and on it display the HTMl code from fixperms.html




And now let's create the .html file.

Bootstrap5 elements are already loaded on templates and any custom code will be inherited. In this exmaple I will add a simple select where user can select their directory and a button to send the request to run the fixperms script.



thats it!

Now we just need to add files to the OpenPanel container and enable the newly created module.

Edit the `/root/docker-compose.yaml` file and under the section `openpanel:` look for 'volumes:'.

We need to make the .py file available in `/usr/local/panel/modules/` and .html inside `/usr/local/panel/templates/`

In the file, for volumes left side is where the file/directory is on the server and right after `:` is where it is in the OpenPanel container (`- /SERVER/PATH:/CONTAINER/PATH`) 

so we need to add in this example:

```bash
      - /root/fixperms/fixperms.py:/usr/local/panel/modules/fixperms.py
      - /root/fixperms/fixperms.html:/usr/local/panel/templates/fixperms.html
```

![openpanel fixperms example module](https://i.postimg.cc/Qt4t2z3x/2024-12-04-18-42.png)

-----

Now to let OpenPanel know about the new module by enabling it, simply edit `/etc/openpanel/openpanel/conf/openpanel.config` and under `enabled_modules=` add our new module as well (I added `fixperms,` ad the beginning) - module name is the same as.py file name but without the extension, so in our case `fixperms`

![openpanel fixperms example module](https://i.postimg.cc/SsvSTz6n/2024-12-04-18-43.png)

then restart the OpenPanel container in order to make the file visible and OpenPanel load the new module code:

```bash
cd /root && docker compose down openpanel && docker compose up -d openpanel
```

![openpanel fixperms example module](https://i.postimg.cc/mk9P7SvL/2024-12-04-18-44.png)

-----

Then open your panel interface and navigate to `/fix-perms` as that is the route we defined in python code where this module is avaialble.

![openpanel fixperms example module](https://i.postimg.cc/XqPrCzHD/2024-12-04-18-40.png)

