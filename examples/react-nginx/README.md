##

```bash
docker run --mount type=bind,source="$(pwd)"/build,target=/usr/share/nginx/html -p 8080:80 nginx

docker run --mount type=bind,source="$(pwd)"/test-app/dist/test-app/,target=/usr/share/nginx/html -p 8080:80 nginx

```
