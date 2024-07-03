FROM node

USER node

WORKDIR /home/node/code

COPY  --chown=node:node . .

RUN yarn install --production --frozen-lockfile

CMD ["node", "index.js"]
