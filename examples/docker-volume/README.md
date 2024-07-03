```bash
docker build --tag=incrementor .
docker run incrementor

# this will use the local volume
docker run --env DATA_PATH=/data/num.txt --mount type=volume,src=incrementor-data,target=/data incrementor
```
