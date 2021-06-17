


## (1) Error while removing network - network <network> has active endpoints

```bash
> docker-compose remove # or even try to remove network docker network rm prisma-mysql-ts_default

Error response from daemon: error while removing network: network prisma-mysql-ts_default id 8cb293cdd1ab567c3a69549359c9b8f706a88d0b4130cc245b81719398e6ba6f has active endpoints

# The answer is to use --remove-orphans flag
> docker-compose down --remove-orphans

# It works!!!
```

## (2) no space left on device

Use `docker system prune`

The command will remove:
  - all stopped containers
  - all networks not used by at least one container
  - all dangling images
  - all dangling build cache

Based on the blog post: https://net2.com/how-to-fix-docker-error-no-space-left-on-device/
