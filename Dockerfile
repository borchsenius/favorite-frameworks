# The build instructions are taken from https://github.com/avatsaev/angular4-docker-example
### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:8.5.0-alpine as builder

COPY package.json package-lock.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /favorite-frameworks && cp -R ./node_modules ./favorite-frameworks

WORKDIR /favorite-frameworks

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
RUN $(npm bin)/ng build --prod --build-optimizer


### STAGE 2: Setup ###

FROM nginx:1.13.3-alpine

## Copy our default nginx config
COPY docker-build/nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /favorite-frameworks/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
