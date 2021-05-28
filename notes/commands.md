
```bash
docker-compose exec app bin/console doc:mig:mig

docker-compose -f docker-compose-apache.yml exec app bin/console doctrine:migrations:migrate
```

# Examples of workout idea

```bash
# (1) Run ubuntu in interactive mode
docker run -it ubuntu bash

# (2) How many containers do we have (No of container running, stopped, paused and No of images)
docker info

# (3) Rename container (container name is defined with -t tag when we build it. Tag is synonymous with name.)
docker rename old_name new_name

# (4) Getting whole bunch of useful info about container - e.g. find network ip address
docker inspect container_name | less

# (5) Find all the networks currently associated with docker host
docker network ls

# (6) Create a network interface
docker network create new_network
docker inspect new_network | less # shows driver values of the network

# (7) Associate network with a container
docker network connect network_name container_name
docker inspect container_name | less # we can now see the container is connected to both network interface (the one comes as default and the one associated) -> this means we can get 2 IP addresses and we can ping both by inspecting the value.
```
