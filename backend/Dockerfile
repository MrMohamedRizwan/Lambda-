FROM node:21-alpine

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm","start"]