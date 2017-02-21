FROM node:latest

RUN mkdir -p /opt/app

WORKDIR /opt/app

COPY . /opt/app

RUN npm install
RUN npm build

ENV PORT=4200

EXPOSE $PORT

CMD ["npm", "run", "prod"]
