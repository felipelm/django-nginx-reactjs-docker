# Git Commands and Setup

This file is to document environmental setup and git commands

## Setup Dev Environment

### Install needed applications

Ensure that you have docker and docker-compose installed on your machine, as well as the rest of the Python stack.
 * GitBash
 * Python 3.6.7
   * https://www.python.org/downloads/release/python-367/ - Windows x86-64 executable installer
   * “Install now”
   * Bypass character count limit option
   * You should be able to open a Python 3.6 Desktop App and run lines of Python
 * Docker
 * Docker Compose
 * Visual Studios Code
   * Install
     * Download VS Code for Windows
     * Download location is default: C:\Users\cbrock\AppData\Local\Programs\Microsoft VS Code
     * Check “Create a desktop icon”
     * Click “Install”
   * Customize Tools and Languages - install language specific packages
     * Python by Microsoft
     * Docker by Microsoft
     * Django by Baptiste Darthenay
     * PostgreSQL by Chris Kolkman
     * React Redux ES6 Snippets by Timothy McLane
     * ESLint by Dirk Baeumer

### Pull Repo
Open git bash

Go to code repo
```shell
$ cd C:/_dev/code
```

Copy clone from repo using http option "https://github.com/code-for-canada/project-thundercat.git"
```shell
$ git clone https://github.com/code-for-canada/project-thundercat.git
```

Login to github when prompted


## Running the applications
To run the application
```shell
$ docker-compose up
```

Navigate to "localhost:80" to see spining lightning bolt and "localhost:80/api" to see "{"status": "I'm here"}"

## Common git commands

## Adding a new branch

To create a new branch, run the following command
```shell
$ git checkout -b <branch_name>
```

To push the local branch to origin, do one of the following:
Option 1:
```shell
$ git push origin <branch_name>
```

Option 2:
```shell
$ git push --set-upstream origin <branch_name>
```

### Merging a change
Do not merge into master fromt he command line. Only do so with a merge request that is reviewed by another developer