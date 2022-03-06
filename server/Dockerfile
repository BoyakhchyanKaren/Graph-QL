FROM node:14.18

WORKDIR /work

COPY package*.json ./

RUN npm install

COPY . .

CMD npm start