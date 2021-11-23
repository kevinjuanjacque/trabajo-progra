FROM node:14 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install -g typescript

RUN npm i

COPY ./backend .

RUN tsc

EXPOSE 8080/tcp

WORKDIR /home/node/frontend

COPY ./frontend .

RUN npm i

RUN npm run build

RUN mv ./build ../app/public

WORKDIR /home/node/app

FROM base as production

ENV NODE_PATH=./build

RUN npm run build