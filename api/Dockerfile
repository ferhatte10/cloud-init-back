FROM node:alpine

# Set the working directory within the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install project dependencies
RUN npm install

COPY . .

# Expose port 3000
EXPOSE 3000

# start the application
CMD ["npm","start"]