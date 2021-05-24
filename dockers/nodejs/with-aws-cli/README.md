## Getting started

Just run the command below

```bash
docker-compose up --build -d
```

Interactive mode

```bash
# Build command with docker
docker build -t node-alpine-14 .
docker run -d --name node-alpine-14 -p 5000:5000

# run as interactive mode
docker exec -it node10-awscli-test /bin/sh
```

## Troubleshooting

I'm not sure if aws cli works on alpine (https://github.com/aws/aws-cli/issues/4685)

With Dockerfile below, once the container is up and running, `aws` command is not registerd once you execute it inside the container. Then, when I tried to install aws cli, I'm getting error below...

```text
./aws/install
./aws/install: line 78: /aws/dist/aws: not found
Found preexisting AWS CLI installation: /usr/local/aws-cli/v2/current. Please rerun install script with --update flag.
/ # ./aws/install --update
./aws/install: line 78: /aws/dist/aws: not found
Found same AWS CLI version: /usr/local/aws-cli/v2/. Skipping install.
/ # aws --version
/bin/sh: aws: not found
```

```Dockerfile
FROM node:14-alpine
RUN apk update && apk add \
  curl \
  unzip
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip -o awscliv2.zip
RUN ./aws/install
WORKDIR /app
COPY . .
RUN yarn install
CMD ["node", "index.js"]
```
