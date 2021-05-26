# Running wordpress on the containers.

## Running with Docker commands

No docker compose. Using docker command...

```bash
# (1) We need to initialise it with docker swarm
docker swarm init

# (2) Deploy it as a stack - the last argument is deploy name (mywordpress in this case).
docker stack deploy -c stack.yml mywordpress
```
