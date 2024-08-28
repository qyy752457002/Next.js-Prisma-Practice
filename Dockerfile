FROM node:21.1.0

# establish directory /usr/src/app
RUN mkdir /usr/src/app

# set docker working directory to /usr/src/app
WORKDIR /usr/src/app

# copy all files from current directory to docker working directory
COPY . .

# Install dependencies.
RUN npm install 

# Build the Next.js app.
RUN npm run build

# The default command to run when starting the container
CMD ["npm", "run", "start"]
