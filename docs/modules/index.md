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
- favorites
- notifications

These modules are part of the standard OpenPanel installation but can be deactivated by the administrator.

## Custom Modules

To develop a custom module, follow these steps:

1. Craft a new Python file that imports core modules and incorporates your specific code.
2. If your module introduces a custom page to the interface, create a template for it within the templates directory. Additionally, integrate links to this new page in the search JSON and the appropriate sidebar template location.
3. Integrate your new module into the main `app.py` file.
4. Insert the module's name into the `enabled_modules` list within the configuration file.
5. Restart the OpenPanel service to immediately apply the changes.


## Example Module

In this example we will create a simple module to run command 'opencli files-fix_permissions <USER> <FOLDER>' and set appropiate user permissions in home directory.

First lets create a directory for our new app:

```
mkdir -p /root/fixperms
```

In this directory lets create fixperms.py and fixperms.html files

```
touch /root/fixperms/fixperms.py  /root/fixperms/fixperms.html
```

fixperms.py is the python code that will create /files/fix-permissions and on it display the HTMl code from fixperms.html


```python

# fixperms.py

# this is needed for translations
from flask_babel import Babel, _ # https://python-babel.github.io/flask-babel/

# this is needed for the flask application as we will use Path, OS and subprocess to run commands
from flask import Flask, render_template, request, g, session, flash
import os
import subprocess
import requests
from pathlib import Path

# this is needed for openpanel to register the module
from app import app
from app import login_required_route, query_email_by_id, query_username_by_id, gravatar_url, avatar_type


# this is the actual code!

@app.route('/fix-perms', methods=['GET', 'POST'])
@login_required_route
def fix_perms():
    current_route = "/fix-permissions"
    user_id = session['user_id']
    current_email = query_email_by_id(user_id)
    gravatar_image_url = gravatar_url(current_email)
    current_username = query_username_by_id(user_id)
    base_directory = f'/home/{current_username}/'

    if request.method == 'POST':
        base_directory = Path(f'/home/{current_username}').resolve()
        fix_directory = Path(request.form.get('directory')).resolve()

        if not fix_directory.is_relative_to(base_directory):
            return _("Invalid fix_directory"), 400

        # Run subprocess command to fix permissions
        subprocess_command = f"opencli files-fix_permissions {current_username} {fix_directory}"
        subprocess.run(subprocess_command, shell=True)
        flash(_('Success.'), "success")
    
    directories = [directory for directory, _, _ in os.walk(base_directory)]
    return render_template('fix_permissions.html',
                            title=_('Fix Permissions'),
                            current_username=current_username,
                            gravatar_image_url=gravatar_image_url,
                            current_route=current_route,
                            directories=directories,
                            avatar_type=avatar_type)
```


And now let's create the .html file.

Bootstrap5 elements are already loaded on templates and any custom code will be inherited. In this exmaple I will add a simple select where user can select their directory and a button to send the request to run the fixperms script.

```html
{% extends 'base.html' %}

{% block content %}
    <p>{{ _('Fix and reset permissions for files and folders.') }}</p>

    <div class="container">
        <div class="col-auto">
            <label class="directory-select-label" for="directory-select">{{ _('Choose a directory') }}</label><br>
            <div class="input-group">
                <input type="text" id="directory-select" class="form-control" list="directory-options">
                <datalist id="directory-options">
                    {% for directory in directories %}
                        <option value="{{ directory }}">
                    {% endfor %}
                </datalist>
                <span class="input-group-btn">
                    <button id="start-scan-btn" class="btn btn-primary" tabindex="-1">{{ _('Fix Permissions') }}</button>

                    <!-- Fixing Spinner Button (Initially hidden) -->
                    <button id="scanning-btn" class="btn btn-primary" tabindex="-1" type="button" style="display: none;" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        {{ _('Working...') }}
                    </button>
                </span>
            </div>
        </div>

        <!-- Fix Complete Message (Initially hidden) -->
        <div id="scan-complete-message" class="alert alert-success mt-3 mb-3" style="display: none;">
            {{ _('Permissions are fixed!') }}
        </div>

    </div>

<script>
    // Function to show the scan complete message
    function showScanCompleteMessage() {
        document.getElementById('scan-complete-message').style.display = 'block';
    }

    // Function to initiate the scan when the "Start Scan" button is clicked
    document.getElementById('start-scan-btn').addEventListener('click', function () {
        // Hide the "Start Scan" button and show the scanning spinner button
        document.getElementById('start-scan-btn').style.display = 'none';
        document.getElementById('scanning-btn').style.display = 'inline-block';

        // Get the selected directory from the dropdown
        const selectedDirectory = document.getElementById('directory-select').value;

        const toast = toaster({
            body: 'Process started',
            className: 'border-0 text-white bg-primary',
        });

        document.getElementById('scan-complete-message').style.display = 'none';

        // Send the selected directory to the server for scanning
    fetch(`/fix-perms`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `directory=${encodeURIComponent(selectedDirectory)}`,
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('{{ _("Network response was not ok") }}');
            }
            return response.text(); // Change to response.text() to read the response body
        })
        .then(data => {
            // Process the response data if needed
            console.log(data);

            // Show scan complete message
            showScanCompleteMessage();
        })
        .catch(error => {
            console.error('Fixing permissions failed:', error);

            // Display an error message
            const toast = toaster({
                body: '{{ _("Fixing permissions failed") }}',
                className: 'border-0 text-white bg-error',
            });
        })
        .finally(() => {
            // Display a success message
            const toast = toaster({
                body: '{{ _("Complete") }}',
                className: 'border-0 text-white bg-success',
            });

            // Hide the scanning spinner button and show the "Start Scan" button
            document.getElementById('scanning-btn').style.display = 'none';
            document.getElementById('start-scan-btn').style.display = 'block';
        });
    });
</script>

{% endblock %}

```


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

Now to let OpenPanel know about the new module by enabling it, simply edit `/etc/openpanel/openpanel/conf/openpanel.config` and under `enabled_modules=` add our new moduel as well - module name is the same as.py file name but without the extension, so in our case `fixperms`


then restart the OpenPanel container in order to make the file visible and OpenPanel load the new module code:

```bash
cd /root && docker compose down openpanel && docker compose up -d openpanel
```

Then open your panel interface and navigate to `/fix-perms` as that is the route we defined in python code where this module is avaialble.

![openpanel fixperms example module](https://i.postimg.cc/XqPrCzHD/2024-12-04-18-40.png)

that's it!
