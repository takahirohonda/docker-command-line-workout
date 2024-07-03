FROM node:alpine

WORKDIR /build
COPY test-app/ ./
RUN npm ci
RUN npx nx build test-app

FROM nginx
COPY --from=0 /build/dist/test-app/ /usr/share/nginx/html