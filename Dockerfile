FROM node:latest

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY . /usr/app

RUN npm install --no-optional
RUN npm run build

ENV PORT=4200

EXPOSE $PORT

CMD ["npm", "run", "prod"]
