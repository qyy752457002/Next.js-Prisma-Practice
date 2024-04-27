# Use the official lightweight Node.js 16 image.
# https://hub.docker.com/_/node
FROM node:21.1.0

RUN mkdir /usr/src/app

#copy all files from current directory to docker
COPY . /usr/src/app

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install production dependencies.
RUN npm install 

# Copy local code to the container image.
COPY . .

# Build the Next.js app.
RUN npm run build

# The default command to run when starting the container
CMD ["npm", "start"]
