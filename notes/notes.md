# Notes

## 1. `COPY` vs `ADD` in Dockerfile

he two commands `COPY` and `ADD` do very similar things with a few key differences. `ADD` can also accept, in addition to local files, URLs to download things off the Internet and it will also automatically unzip any tar files it downloads or adds. `COPY` will just copy local files. Use `COPY` unless you need to unzip something or are downloading something.

## 2. `EXPOSE`

`EXPOSE <port number>` maps the container port to a random port on the host computer. Don't use it because we can map port with `-p`.

## 3. Layers

```Dockerfile
FROM node:12-stretch

USER node

RUN mkdir /home/node/code

WORKDIR /home/node/code

COPY --chown=node:node package-lock.json package.json ./

RUN npm ci

COPY --chown=node:node . .

CMD ["node", "index.js"]
```
