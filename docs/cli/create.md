
# Create custom CLI commands

To craft a custom OpenCLI command, understanding OpenPanel's directory structure and configuration files is crucial.

Here's how you can develop your own command:

1. **Script Creation**:
Develop a new Python script and save it in `/usr/local/admin/scripts/`. If your script is part of a series or fits an existing category, place it in the corresponding folder.
Ensure your script includes a [main](https://docs.python.org/3/library/__main__.html) function but omit the standard [if __name__ == "__main__"](https://stackoverflow.com/questions/419163/what-does-if-name-main-do) block. This omission prevents direct execution, allowing only OpenCLI to run it.

2. **Integrating with OpenCLI**:
Execute `opencli commands` to register your new script, making it recognizable and suggesting it within OpenCLI's autocomplete feature.

3. **Testing**:
Verify the functionality of your script by executing it through OpenCLI using the syntax `opencli foldername-file_name` or simply `opencli file_name`.


---

For those interested in contributing to the community, consider sharing your custom command.
This process involves ensuring your script is secure, documented, and accessible for others to use and potentially enhance.
