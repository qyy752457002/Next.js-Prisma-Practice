FROM node:21.1.0

# set docker working directory to /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to docker working directory
COPY ./package*.json .

# Install dependencies.
RUN npm install 

# copy rest of files from current directory to docker working directory
COPY . .

# Build the Next.js app.
RUN npm run build

# The default command to run when starting the container
CMD ["npm", "run", "start"]
