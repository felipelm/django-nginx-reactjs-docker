# Docker Toolbox Setup

This document outlines additional setup steps that need to be taken in order to set up the environment when using Docker Toolbox rather than Docker for Windows.

## Virtual Box configuration

From https://stackoverflow.com/questions/42866013/docker-toolbox-localhost-not-working
* Click the appropriate machine (probably the one labeled "default")
* Settings
* Network > Adapter 1 > Advanced > Port Forwarding
* Click "+" to add a new Rule
* Set Host Port 8080 & Guest Port 8080; be sure to leave Host IP and Guest IP empty

## Accessing the webpage

```shell
$ docker-compose up -d
```

Replace 'http://localhost' with 'http://192.168.99.100/' in any url.



Note: you may need to run the following one time:

```shell
docker run -p 8080:8080 nginx
```