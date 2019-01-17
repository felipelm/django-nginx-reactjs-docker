#!/bin/bash
# This works
docker-compose build
docker-compose run \
  --rm backend ./manage.py test
# This fails
#docker-compose run \
#  --rm frontend npm test