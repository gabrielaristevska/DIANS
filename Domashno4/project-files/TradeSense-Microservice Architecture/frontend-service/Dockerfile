# Use a Node.js image to build the application
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project and build the production files
COPY . .
RUN npm run build

# Use a lightweight web server to serve the static files
FROM nginx:stable-alpine

# Copy the built files to the NGINX HTML folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port for the frontend
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
