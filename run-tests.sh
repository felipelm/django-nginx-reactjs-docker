#!/bin/bash
# Build docker (can comment out if already built)
docker-compose build
# Test the backened
docker-compose run \
  --rm backend ./manage.py test
# Test the frontend
docker-compose run \
  --rm frontend npm test
