FROM node:8.6
RUN mkdir /angular
WORKDIR /angular

COPY package.json .
COPY package-lock.json .


RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "start"]
