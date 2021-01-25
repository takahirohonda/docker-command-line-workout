FROM amazon/aws-cli
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
