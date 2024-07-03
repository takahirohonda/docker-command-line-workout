# Layers and cache

Docker knows which instruction to run according to the change when we rebuild the container.

```bash
 => [internal] load build definition from Dockerfile                                                                      0.0s
 => => transferring dockerfile: 253B                                                                                      0.0s
 => [internal] load .dockerignore                                                                                         0.0s
 => => transferring context: 34B                                                                                          0.0s
 => [internal] load metadata for docker.io/library/node:20-alpine                                                         1.1s
 => [1/5] FROM docker.io/library/node:20-alpine@sha256:df01469346db2bf1cfc1f7261aeab86b2960efa840fe2bd46d83ff339f463665   0.0s
 => [internal] load build context                                                                                         0.0s
 => => transferring context: 441B                                                                                         0.0s
 => CACHED [2/5] WORKDIR /home/node/code                                                                                  0.0s
 => CACHED [3/5] COPY --chown=node:node yarn.lock package.json ./                                                         0.0s
 => [4/5] RUN yarn install --production --frozen-lockfile                                                                 7.0s
 => [5/5] COPY --chown=node:node . .                                                                                      0.3s
 => exporting to image                                                                                                    0.9s
 => => exporting layers                                                                                                   0.8s
 => => writing image sha256:dde4b9172b4c8b5a4e544df1f1ad007db34af8606adb4128dbaf95192de56766                              0.0s
 => => naming to docker.io/library/express:1
```

2nd time after updating `index.js`

```bash
 => [internal] load build definition from Dockerfile                                                                      0.0s
 => => transferring dockerfile: 37B                                                                                       0.0s
 => [internal] load .dockerignore                                                                                         0.0s
 => => transferring context: 34B                                                                                          0.0s
 => [internal] load metadata for docker.io/library/node:20-alpine                                                         0.9s
 => [internal] load build context                                                                                         0.0s
 => => transferring context: 484B                                                                                         0.0s
 => [1/5] FROM docker.io/library/node:20-alpine@sha256:df01469346db2bf1cfc1f7261aeab86b2960efa840fe2bd46d83ff339f463665   0.0s
 => CACHED [2/5] WORKDIR /home/node/code                                                                                  0.0s
 => CACHED [3/5] COPY --chown=node:node yarn.lock package.json ./                                                         0.0s
 => CACHED [4/5] RUN yarn install --production --frozen-lockfile                                                          0.0s
 => [5/5] COPY --chown=node:node . .                                                                                      0.0s
 => exporting to image                                                                                                    0.0s
 => => exporting layers                                                                                                   0.0s
 => => writing image sha256:67cd4c4132c206e27804fd8973fe711cfe23d4024ae2342d4670d39a0d05e1ae                              0.0s
 => => naming to docker.io/library/express:1
```

Try after adding one more dependencies. Docker knows that `package.json` has been updated, so it runs the installation again.

```bash
 => [internal] load build definition from Dockerfile                                                                      0.0s
 => => transferring dockerfile: 37B                                                                                       0.0s
 => [internal] load .dockerignore                                                                                         0.0s
 => => transferring context: 34B                                                                                          0.0s
 => [internal] load metadata for docker.io/library/node:20-alpine                                                         2.4s
 => [1/5] FROM docker.io/library/node:20-alpine@sha256:df01469346db2bf1cfc1f7261aeab86b2960efa840fe2bd46d83ff339f463665   0.0s
 => [internal] load build context                                                                                         0.0s
 => => transferring context: 22.90kB                                                                                      0.0s
 => CACHED [2/5] WORKDIR /home/node/code                                                                                  0.0s
 => [3/5] COPY --chown=node:node yarn.lock package.json ./                                                                0.0s
 => [4/5] RUN yarn install --production --frozen-lockfile                                                                13.8s
 => [5/5] COPY --chown=node:node . .                                                                                      0.3s
 => exporting to image                                                                                                    0.6s
 => => exporting layers                                                                                                   0.5s
 => => writing image sha256:ec45ddff4c2a26bc8b1ac3181e36a5134ad76d9e903d649a9a1cb229d15df008                              0.0s
 => => naming to docker.io/library/express:1
```

Rebuild again with an update in `index.js`. It uses the cached layer for installation.

```bash
 => [internal] load build definition from Dockerfile                                                                      0.0s
 => => transferring dockerfile: 37B                                                                                       0.0s
 => [internal] load .dockerignore                                                                                         0.0s
 => => transferring context: 34B                                                                                          0.0s
 => [internal] load metadata for docker.io/library/node:20-alpine                                                         1.0s
 => [internal] load build context                                                                                         0.0s
 => => transferring context: 6.71kB                                                                                       0.0s
 => [1/5] FROM docker.io/library/node:20-alpine@sha256:df01469346db2bf1cfc1f7261aeab86b2960efa840fe2bd46d83ff339f463665   0.0s
 => CACHED [2/5] WORKDIR /home/node/code                                                                                  0.0s
 => CACHED [3/5] COPY --chown=node:node yarn.lock package.json ./                                                         0.0s
 => CACHED [4/5] RUN yarn install --production --frozen-lockfile                                                          0.0s
 => [5/5] COPY --chown=node:node . .                                                                                      0.0s
 => exporting to image                                                                                                    0.0s
 => => exporting layers                                                                                                   0.0s
 => => writing image sha256:9069e9388033d6c45009a869fc7e017b41b72093c49504acd8ec52b8e401af9c                              0.0s
 => => naming to docker.io/library/express:1                                                                              0.0s
```
