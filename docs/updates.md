# Updates  

OpenPanel adheres to **Semantic Versioning** with a format of **MAJOR.MINOR.PATCH** (e.g., `0.6.5`). Each part of the version indicates:  
- **MAJOR**: Backward-incompatible changes.  
- **MINOR**: New backward-compatible functionality.  
- **PATCH**: Backward-compatible bug fixes.  

### Release Schedule  
OpenPanel updates are released at least once a month, except for urgent bug fixes or critical security patches. 

The [OpenPanel Roadmap](https://openpanel.com/roadmap) provides an overview of planned features and anticipated release dates for upcoming versions.

You can request new features or vote for proposed ones here: [roadmap.openpanel.com](https://roadmap.openpanel.com).

### Update Availability  
Updates for existing installations are made available **one week after a new version is released**. This delay ensures that new versions are thoroughly tested in production environments before being rolled out to existing users. During this period, the latest version is available only for new installations.  


### What is Updated  
The OpenPanel project consists of:  
- Two independent panels: **OpenPanel** and **OpenAdmin**.  
- Terminal commands: **OpenCLI**.  
- Multiple Docker images.  
- Related services: **FloatingIP**, **FileWatcher**.
- Configuration files that integrate these components.  

Files located in `/etc/openpanel/` are **never updated**.  

Panels, CLI, and services are updated only when necessary—specifically, when changes are made to that part of the system. For example, **OpenAdmin** will only be updated if the changelog indicates modifications specific to OpenAdmin. This approach minimizes interruptions and ensures stability.

### Updates Location  

Update files are hosted on the following platforms:  

- **DockerHub**: For OpenPanel and Docker images.  
- **GitHub**: For OpenAdmin, OpenCLI, custom scripts and configuration files.  

Ensure that your server has access to these services to successfully download updates.  

### Version check
Latest version available for update is published on [docker hub](https://hub.docker.com/r/openpanel/openpanel/tags).

### Changelog

[Our Changelog](https://openpanel.com/docs/changelog/intro/) has documented changes for each version and published date.
