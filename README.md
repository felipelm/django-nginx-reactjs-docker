# Docker + nginx + ReactJS + Django

This project serves as an example of a deployment frontend (ReactJS) and backend (Django) using docker and nginx.

## How to run

Make sure you have [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed and run

```shell
docker-compose up
```

Then check which image is running using `docker images` and run
```shell
docker run -p 8000:80 image_id sh entrypoint.sh
```

[Code example for my blog post](http://felipelinsmachado.com/connecting-django-reactjs-via-nginx-using-docker-containers/)