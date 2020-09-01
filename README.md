<div align="center">
  <img height="80" src="./img/docker-logo.jpg">
  <h1>Docker Command Line Workout 💪🏼</h1>

<span>Docker is cool. 

This is the execise to build your muscle memory for docker commands. Type them in the terminal like a pro. It makes you look good. It makes you feel good. It makes everybody feel good. 🥳

This is for building docker command muscle memory. If you know these commands by heart, you can be the one who is saving the day when the production is down or helping your colleagues with their docker issues. 

I hope this helps you to be the docker hero🤟💀🤟

Feel free to reach out to me🤙 <br />

<a href="https://www.mydatahack.com" target="_blank">Blog</a> || <a href="https://github.com/aws-lambda-template-generator" target="_blank">Open Source Project</a> || <a href="https://thehondas.bandcamp.com/" target="_blank">Band Camp</a>

If you want to make a suggestion or contribute to this, feel free to pull the repo and make a pull request!

</span>
<br />
<h1>Topics🏷</h1>
<p><b><a href="#1">(1) Trouble shooting the container</a></b></P>
<p><b><a href="#2">(2) Building cotainers</a></b></P>
<p><b><a href="#3">(3) Docker compose</a></b></P>
</div>
<br />

---
<span id="1"></span>
### (1) TROUBLESHOOTING
---

<b>(1) Checking container stats</b>

Check which container is using how much CPU or Memory.

<details><summary><b>Answer</b></summary>
docker stats displays a live stream of container resource usage statistics

```bash
docker stats
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

---
<span id="2"></span>
### (2) BUILDING CONTAINERS
---

---
<span id="3"></span>
### (3) DOCKER-COMPOSE
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

This will update the container and restart the container. It will take up the terminal process. If you do ctrl + c, it will stop all the containers.
```bash
docker-compose up --build
```

Of course, we can run container in a detached mode. This will keep all the container running.
```bash
docker-compose up --build -d
```
</details>