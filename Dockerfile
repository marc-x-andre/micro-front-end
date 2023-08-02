FROM node:lts-alpine as builder

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

COPY . .

RUN yarn install

RUN yarn build


FROM nginx:alpine as server

LABEL maintainer="Marc-Andre Daigneault <contact@marcxandre.dev>"

## Copy the custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder --chown=101:101 /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]