# Docker Toolbox Setup

This document outlines additional setup steps that need to be taken in order to set up the environment when using Docker Toolbox rather than Docker for Windows.

DockerToolbox is for older Mac and Windows systems that do not meet the requirements for Docker for Mac or Docker for Windows.

This includes:
 * Any 32 bit OS
 * Windows 7 (all versions)
 * Windows 10 Home
 * Mac hardware prior to 2010
 * macOS El Capitain prior to version 10.11
 * Virtual Box prior to version 4.3.30
 * Any system with less than 4GB of Ram.

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