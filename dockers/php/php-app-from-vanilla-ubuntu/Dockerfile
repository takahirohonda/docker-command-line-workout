FROM ubuntu:20.04
RUN apt-get update && apt-get upgrade
RUN apt-get update \
    && apt -y install software-properties-common \
    && add-apt-repository ppa:ondrej/php 

RUN apt-get update \
    && apt-get install -y curl zip unzip \
            php7.4 php7.4-fpm \
            gettext-base sudo
RUN apt update
RUN apt install apache2
RUN ufw allow 'Apache'
EXPOSE 80
