# References

[Complete Intro to Containers](https://btholt.github.io/complete-intro-to-containers/)

[6 docker-compose best practices for dev and prod](https://prod.releasehub.com/blog/6-docker-compose-best-practices-for-dev-and-prod)

Read more about [bind mounts](https://docs.docker.com/storage/bind-mounts/) and [volumes](https://docs.docker.com/storage/volumes/).

# Node js container

# Docker container for node.js

## (1) Isolating node_modules folder

### Approach 1

We need to isolate `node_module` from bind mount in docker-compose.

```yaml
volumes:
  - /node_dir/node_modules # isolate node_modules for compatible os
  - ./source:/node_dir/source
```

### Approach 2

volumes: We are including two types of mounts here:

The first is a bind mount that mounts our application code on the host to the /home/node/app directory on the container. This will facilitate rapid development, since any changes you make to your host code will be populated immediately in the container.
The second is a named volume, node_modules. When Docker runs the npm install instruction listed in the application Dockerfile, npm will create a new node_modules directory on the container that includes the packages required to run the application. The bind mount we just created will hide this newly created node_modules directory, however. Since node_modules on the host is empty, the bind will map an empty directory to the container, overriding the new node_modules directory and preventing our application from starting. The named node_modules volume solves this problem by persisting the contents of the /home/node/app/node_modules directory and mounting it to the container, hiding the bind.

```yaml
volumes:
  - .:/home/node/app
  - node_modules:/home/node/app/node_modules
```

## (2) Docker compose file example

```yaml
version: "3"

services:
  nodejs:
    build:
      context: .
      dockerfile: Dockerfile
    image: nodejs
    container_name: nodejs
    restart: unless-stopped
    env_file: .env
    environment:
      - MONGO_USERNAME=$MONGO_USERNAME
      - MONGO_PASSWORD=$MONGO_PASSWORD
      - MONGO_HOSTNAME=db
      - MONGO_PORT=$MONGO_PORT
      - MONGO_DB=$MONGO_DB
    ports:
      - "80:8080"
    volumes:
      - .:/home/node/app
      - node_modules:/home/node/app/node_modules
    networks:
      - app-network
    command: ./wait-for.sh db:27017 -- /home/node/app/node_modules/.bin/nodemon app.js
```

The nodejs service definition includes the following options:

- build: This defines the configuration options, including the context and dockerfile, that will be applied when Compose builds the application image. If you wanted to use an existing image from a registry like Docker Hub, you could use the image instruction instead, with information about your username, repository, and image tag.
  context: This defines the build context for the image build — in this case, the current project directory.
  dockerfile: This specifies the Dockerfile in your current project directory as the file Compose will use to build the application image. For more information about this file, please see How To Build a Node.js Application with Docker.

- image, container_name: These apply names to the image and container.
  restart: This defines the restart policy. The default is no, but we have set the container to restart unless it is stopped.

- env_file: This tells Compose that we would like to add environment variables from a file called .env, located in our build context.
- environment: Using this option allows you to add the Mongo connection settings you defined in the .env file. Note that we are not setting NODE_ENV to development, since this is Express’s default behavior if NODE_ENV is not set. When moving to production, you can set this to production to enable view caching and less verbose error messages. Also note that we have specified the db database container as the host, as discussed in Step 2.

- ports: This maps port 80 on the host to port 8080 on the container.

- volumes: We are including two types of mounts here:

1. The first is a bind mount that mounts our application code on the host to the /home/node/app directory on the container. This will facilitate rapid development, since any changes you make to your host code will be populated immediately in the container.

2. The second is a named volume, node_modules. When Docker runs the npm install instruction listed in the application Dockerfile, npm will create a new node_modules directory on the container that includes the packages required to run the application. The bind mount we just created will hide this newly created node_modules directory, however. Since node_modules on the host is empty, the bind will map an empty directory to the container, overriding the new node_modules directory and preventing our application from starting. The named node_modules volume solves this problem by persisting the contents of the /home/node/app/node_modules directory and mounting it to the container, hiding the bind.
