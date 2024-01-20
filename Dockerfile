
FROM  node:20-alpine3.17

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm","run","dev"]

FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/

WORKDIR /usr/app

COPY . .

EXPOSE 80 
