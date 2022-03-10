#stage 1
FROM node:16-alpine3.14 as node

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /usr/local/app/dist/weatherui /usr/share/nginx/html