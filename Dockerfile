# Use a Node image to build the Angular app
FROM node:18 AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source files
COPY . .

# Build the application in production mode
RUN npm run build -- --configuration production

# Use an Nginx image to serve the built app
FROM nginx:stable-alpine
COPY --from=build /app/dist/pinna-costa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]