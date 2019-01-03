# Pull base image from https://hub.docker.com/_/python/
FROM python:3.6-slim

# Set environment varibles
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
RUN mkdir /backend
WORKDIR /backend


# Install dependencies
ADD requirements.txt /backend/
RUN pip install -r requirements.txt

# Copy project
ADD . /backend/

EXPOSE 8000
