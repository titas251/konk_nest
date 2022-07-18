FROM node:16 as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

CMD [ "npm",  "run", "start:dev" ]