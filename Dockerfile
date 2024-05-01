# Stage 1: Build the React application
FROM node:21-slim AS build
WORKDIR /app

ARG REACT_APP_PSEUDOBANK_URL
ENV REACT_APP_PSEUDOBANK_URL=$REACT_APP_PSEUDOBANK_URL

COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

# Stage 2: Serve the build using nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
