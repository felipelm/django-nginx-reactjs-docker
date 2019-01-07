#Git Commands and Setup

This file is to document regularly used git commands and environmental setup

## Setup Dev Environment

Open git bash

Go to code repo
```shell
$ cd C:/_dev/code
```

Copy clone from repo using http option "https://github.com/code-for-canada/project-thundercat.git"
```shell
$ git clone https://github.com/code-for-canada/project-thundercat.git
```

Login when prompted

Edit backend/entrypoint.sh and frontend/entrypoint.sh
Replace all \r\n with \n to prevent errors (docker interpets \r as a directory not a carriage return)
It will not run correctly without this (we are looking at long term solutions)


## Common git commands

To push upstearm (add a new branch)
```shell
$ git checkout -b <branch_name>
```

Option 1
```shell
$ git push origin <branch_name>
```

Option 2
```shell
$ git push --set-upstream origin <branch_name>
```