From php:8.1.18-apache-bullseye
RUN apt -y update && apt -y upgrade && apt -y install nodejs npm
WORKDIR /var/www/html
CMD git clone https://github.com/MSchablinger/BeanScene && cd ./BeanScene/frontend && npm install && npm run serve
EXPOSE 80
EXPOSE 8080
