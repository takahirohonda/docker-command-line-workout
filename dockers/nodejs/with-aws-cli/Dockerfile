FROM ubuntu:latest
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install curl unzip -y
RUN   curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN   apt-get install -y nodejs
RUN   npm install -g yarn
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip -o awscliv2.zip
RUN ./aws/install
WORKDIR /app
COPY . .
RUN yarn install
CMD ["node", "index.js"]
