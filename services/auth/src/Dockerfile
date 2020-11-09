FROM node:12.18-alpine

WORKDIR /auth

COPY ./auth/package.json package.json
COPY ./auth/package-lock.json package-lock.json

RUN npm install

COPY ./auth .

CMD npm start