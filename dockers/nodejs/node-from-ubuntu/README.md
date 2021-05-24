# Building Node.js container from Ubuntu base image

Using `ubuntu:20.04` (see ubuntu versions: https://hub.docker.com/_/ubuntu/) to create a docker image with nodejs (https://hub.docker.com/repository/docker/mdhdocker/ubuntu-node). Then use it to start an express app.

## 1. Get started

```bash
docker-compose up -d
docker-compose up --build -d
```

## 1. Build an image and push to repository

```bash
# Build the container
docker build -t mdh ./createImg/Dockerfile
# Login to the docker hub
docker login
# Push
docker push mdhdocker/ubuntu-node:14

# Update the tag (in the future)
docker push mdhdocker/ubuntu-node:<new tagname>
```
