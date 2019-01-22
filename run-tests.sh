#!/bin/bash
# Constants to add colour to text
BLUE='\033[0;34m'
NC='\033[0m' # No Color
# Build docker (can comment out if already built)
docker-compose build
# Test the backened
printf "**** ${BLUE}Begin backend tests${NC} ***\n"
docker-compose run \
  --rm backend ./manage.py test
printf "**** Complete backend tests ***\n"
# Test the frontend
printf "**** ${BLUE}Begin frontend tests${NC} ***\n"
docker-compose run \
  --rm frontend npm test -- --watch
printf "**** Complete frontend tests ***\n"
