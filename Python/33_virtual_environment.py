# Virtual enviroment is a python environment where libraries, scripts are isolated from the rest of the environment or default.
# Virtual environment is very important while managing different packages.
# Virtual environment allows us to avoid installing python packages globally which could break system tools or other projects.
# It is a tool that is used to isolate specific python environment on a single machine, allowing us to work on multiple projects with different dependency and packages without conflicts.






# How to install virtual environment:
# Command:-    python -m venv <virtual environment name>




# How to activate virtual environment:
# Command:     <virtual environment name>/scripts/bin/activate




# How to de-activate virtual environment: 
# Command:     deactivate





# Some inportant command

# i.   pip freeze :- This command shows all the libraries, packages, modules that we have installed in our virtual environment along with their version.

# ii.  pip freeze > <file name.txt> :- This allows to create a new text file that will store all "pip freeze" information.

# iii. pip install -r <file name.txt> :- This command will install all the packages mentioned or specified in the txt file.

# iv.  pip install <package name>==<version number> :- This allows us to install the specific version of that module.

