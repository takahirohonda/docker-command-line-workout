
```bash
docker-compose exec app bin/console doc:mig:mig

docker-compose -f docker-compose-apache.yml exec app bin/console doctrine:migrations:migrate
```
