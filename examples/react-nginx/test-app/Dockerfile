FROM node:latest
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:latest
COPY --from=0 /app/build /usr/share/nginx/html