FROM node:20-alpine

USER node

WORKDIR /home/node/code

COPY --chown=node:node . .

RUN yarn install

CMD ["node", "index.js"]
