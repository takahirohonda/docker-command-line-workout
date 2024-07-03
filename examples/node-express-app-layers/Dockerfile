FROM node:20-alpine

USER node

WORKDIR /home/node/code

COPY --chown=node:node yarn.lock package.json ./

RUN yarn install --production --frozen-lockfile

COPY --chown=node:node . .

CMD ["node", "index.js"]
