# Docker + Nginx + ReactJS + Django + PostgreSQL

This project serves as an example of a deployment frontend (ReactJS) and backend (Django) using docker and nginx.

## How to run

Make sure you have [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed and run

```shell
docker-compose up
```

To start docker without it taking over the command terminal, use the following (note, this iwll not display all the output, so you may not see error messages):
```shell
docker-compose up -d
```

To shut down docker after staring it with the -d command, run
```shell
docker-compose stop
```

Then check which image is running using `docker images` and run
```shell
docker run -p 8000:80 image_id sh entrypoint.sh
```

### How to destroy all stopped containers

This will force docker to rebuild these containers the next time you start docker

```shell
docker-compose rm
```

[Code example for my blog post](http://felipelinsmachado.com/connecting-django-reactjs-via-nginx-using-docker-containers/)
