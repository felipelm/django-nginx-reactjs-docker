# Docker + Nginx + ReactJS + Django + PostgreSQL

This project serves as an example of a deployment frontend (ReactJS) and backend (Django) using docker and nginx.

## How to run

Make sure you have [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed.

 Run:

```shell
docker-compose up
```

Then, in the browser, go to localhost:80 and you should see the application with a response from the backend.

When killing the server, be sure to cleanup your containers.

```shell
docker-compose down
```

If you want to make JS changes, you must login to the front end container and build the JS.
This is a temporary solution until we have hot-reloading setup for local development.
```shell
docker exec -it containerid /bin/bash
yarn build
```

## Notes on docker

To start docker without it taking over the command terminal, use the following (note, this iwll not display all the output, so you may not see error messages):
```shell
docker-compose up -d
```

To shut down docker after staring it with the -d command, run
```shell
docker-compose stop
```

To shut down and cleanup the networkl after staring it with the -d command, run
```shell
docker-compose down
```

Then check which image is running using `docker images` and run
```shell
docker run -p 8000:80 image_id sh entrypoint.sh
```

This will destory all stopped containers and force docker to rebuild these containers the next time you start docker

```shell
docker-compose rm
```
