FROM node:12.18-alpine

WORKDIR /user

COPY ./user/package.json package.json
COPY ./user/package-lock.json package-lock.json

RUN npm install

COPY ./user .

CMD npm start