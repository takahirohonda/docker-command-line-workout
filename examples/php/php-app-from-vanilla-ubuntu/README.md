# Creating Container to run PHP App from vanilla ubuntu image

Not quite working yet ...

Using Ubuntu image (https://hub.docker.com/_/ubuntu).

Could go wit latest, but specifying the number
```Dockerfile
FROM ubuntu:latest

FROM ubuntu:16.04
```

## Get started

Start docker and go to http://localhost:83

```bash
docker-compose up -d
```

## Reference

Runing this command doesn't work because PHP is not available for ubuntu 20.

```Dockerfile
RUN apt-get install php
```
