FROM node:18-alpine3.17 as build

WORKDIR /app
COPY . /app

RUN yarn
RUN yarn build:release

FROM nginx:1.24.0-alpine

ADD nginx.conf /etc/nginx/nginx.conf
ADD gen_htpasswd /etc/nginx/

RUN apk update
RUN apk add openssl
RUN chmod -R 777 /etc/nginx/gen_htpasswd

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD [ "nginx", "-g" "daemon off;" ]