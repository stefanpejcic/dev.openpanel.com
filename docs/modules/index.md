# Modularity

OpenPanel supports **modules** and **plugins** to extend its functionality.

* **Modules** are built-in (core) components that come with OpenPanel.
* **Plugins** are third-party add-ons that can be installed to expand functionality.

## Modules

Modules enhance the OpenPanel interface by adding new pages, sections, or features to the existing template.

* Administrators can enable or disable modules at any time.
* When disabled, the module’s menu item, search integration, and page visibility are immediately removed.

👉 View the full list of OpenPanel core modules here: [OpenPanel Core Modules](https://github.com/stefanpejcic/openpanel-configuration/blob/main/openadmin/config/features.json)

### Managing Modules

* **Global control:** Admins can enable/disable modules from
  **OpenAdmin → Settings → Modules**.
* **Per hosting plan:** Admins can manage module availability per plan via
  **OpenAdmin → Hosting Plans → Module Manager**.

## Plugins

Plugins extend OpenPanel by adding **new functionality** (not just visual changes).
For layout or design customization, please use [templates](/templates/) instead.

### Example Plugin

For a practical guide, see: [Custom Plugins Example](https://openpanel.com/docs/articles/dev-experience/custom-plugins#example)

Example plugins:

- [traceroute](https://github.com/stefanpejcic/traceroute)
- [dns-visualizer](https://github.com/stefanpejcic/dns-visualizer)
