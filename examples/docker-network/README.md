# docker network

```bash
# create a network
docker network create --driver=bridge app-net

# Start a mongo db container with name as db
docker run -d --network=app-net -p 27017:27017 --name=db --rm mongo:3
# Start another container with mongo client and connect to host=db
docker run -it --network=app-net --rm mongo:3 mongo --host db
```

run the app

```bash
docker build --tag=my-app-with-mongo .
docker run -p 3000:3000 --network=app-net --env MONGO_CONNECTION_STRING=mongodb://db:27017 my-app-with-mongo
```

Using name and connecting to the same network is achieved by using `link` in `docker-compose`

```yml
version: "3"
services:
  web:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/home/node/code
      - /home/node/code/node_modules
    links:
      - db
    environment:
      MONGO_CONNECTION_STRING: mongodb://db:27017
  db:
    image: mongo:3
```
