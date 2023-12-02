FROM node:18-alpine3.17

WORKDIR /app

COPY ["package.json", "./"]

RUN npm install --force

COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]