<div align="center">
  <img height="80" src="./img/docker-logo.jpg">
  <h1>Docker Command Line Workout 💪🏼</h1>

<span>Docker is cool.

This is the exercise to build your muscle memory for docker commands. Type them in the terminal like a pro. It makes you look good. It makes you feel good. It makes everybody feel good. 🥳

This is for building docker command muscle memory. If you know these commands by heart, you can be the one who is saving the day when the production is down or helping your colleagues with their docker issues.

I hope this helps you to be the docker hero🤟💀🤟

Feel free to reach out to me🤙 <br />

<a href="https://www.mydatahack.com" target="_blank">Blog</a> || <a href="https://github.com/aws-lambda-template-generator" target="_blank">Open Source Project</a> || <a href="https://thehondas.bandcamp.com/" target="_blank">Band Camp</a>

If you want to make a suggestion or contribute to this, feel free to pull the repo and make a pull request!

</span>
<br />
<h1>Topics🏷</h1>
<p><b><a href="#1">(1) Docker Commands</a></b></P>
<p><b><a href="#2">(2) Using Dockerfile</a></b></P>
<p><b><a href="#3">(3) Using docker-compose</a></b></P>
</div>
<br />

---

<span id="1"></span>

### (1) Docker Commands

---

<b>(1) Checking container stats</b>

- (1) Check which container is using how much CPU or Memory.
- (2) Check the currently installed docker system information.
- (3) Inspect the container called node.
- (4) Check how Docker image's layer composition has changed over time and how recently.
- (5) See processes running on a container.

<details><summary><b>Answer</b></summary>

```bash
# (1) It displays a live stream of container resource usage statistics
docker stats
# (2)
docker info
# (3)
docker inspect node
# (4)
docker history <container name, e.g. node>
# (5)
docker top <CONTAINER ID>
```

</details>

<b>(2) Streaming container log</b>

Stream container log in the terminal.

<details><summary><b>Answer</b></summary>
-f will allow you to stream the log.

```bash
docker logs -f <Container Name>
```

</details>

<b>(3) Listing containers</b>

List

- all the existing containers
- all the existing images
- all the running containers

<details><summary><b>Answer</b></summary>

```bash
docker container list --all

docker images -a
# or docker image ls

docker ps
```

</details>

<b>(4) Pruning containers in the local machine</b>

Remove the stopped container and all of the images, including unused or dangling images

<details><summary><b>Answer</b></summary>

```bash
docker system prune -a
```

</details>

<b>(5) Runs commands in an already-running container.</b>

Get into docker's container shell with interactive mode. Then exit.

<details><summary><b>Answer</b></summary>

`docker exec` will allow you to execute a command against a running container. This is different from `docker run` because `docker run` will start a new container whereas `docker exec` runs the command in an already-running container.

```bash
# -i: Interactive
# -t: Allocate a pseudo-TTY
docker exec -it <container-name> bash # this works most of the time

# some containers need to do it like this
docker exec -it <container-name>  /bin/sh  # e.g node alpine containers
docker exec -it <container-name>  /bin/bash

# then exit
exit
```

</details>

<b>(6) Mounting local file system and mapping port</b>

Mounting the current directly to the node container's `/code` directory, map port 3000 to the host and start the container in bash mode.

<details><summary><b>Answer</b></summary>

```bash
# we can use either volume or mount options.
docker run -it -v "$(pwd)":/code -p 3000:3000 node bash
docker run -it --mount type=bind,source="${PWD}",target=/code -p 3000:3000 node bash
```

</details>

---

<span id="2"></span>

### (2) Using Dockerfile

---

<b>(1) Build and run from Dockerfile</b>

Build a container with container name called my-app from the Dockerfile below with port mapping of 3000 to 3000. Then, restart the container.

```dockerfile
FROM node:12-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "/app/src/index.js"]
```

<details><summary><b>Answer</b></summary>

```bash
# Build the image
docker build -t my-app .

# Start the container with port mapped to 3000.
docker run -dp 3000:3000 my-app

# Stop the container
docker stop my-app

# Start the container
docker start my-app
```

</details>

<b>(2) Stop the container and remove</b>

Stop the existing container named my-app and remove it.

<details><summary><b>Answer</b></summary>

```bash
# -f will stop and remove the container
docker rm <container-id or name> -f

# Alternatively stop and remove
docker stop <container-id or name>
docker rm <container-id or name>
```

</details>

---

<span id="3"></span>

### (3) Using docker-compose

---

<b>(1) Starting all the existing containers</b>

Starting all the existing container created by docker-compose.

<details><summary><b>Answer</b></summary>

```bash
docker-compose start
```

</details>

<b>(2) Stop all the existing containers</b>

Stopping all the existing container created by docker-compose.

<details><summary><b>Answer</b></summary>

```bash
docker-compose stop
```

</details>

<b>(3) Rebuilding the containers</b>

After updating docker file or docker-compose file, rebuild the containers.

<details><summary><b>Answer</b></summary>

This will update the container and restart the container. It will take up the terminal process. If you do `ctrl` + `c`, it will stop all the containers.

```bash
docker-compose up --build
```

Of course, we can run container in a detached mode. This will keep all the container running.

```bash
docker-compose up --build -d
```

</details>

<b>(4) Building one container from a particular docker-compose file</b>

Build only `app` service from `docker-compose.ci.yml`

<details><summary><b>Answer</b></summary>

We can just add the service name as blow. -f is to specify which file. -d is in detached mode.

```bash
docker-compose -f docker-compose.ci.yml up app -d
```

</details>
