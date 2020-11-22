FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /app

COPY . .

CMD [ "http-server", "." ]