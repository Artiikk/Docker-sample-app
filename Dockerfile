# We create a docker image from Dockerfile (Dockerfile - instructions for future image)
FROM node

# The WORKDIR instruction sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it in the Dockerfile. 
# If the WORKDIR doesn’t exist, it will be created even if it’s not used in any subsequent Dockerfile instruction.
# ... you should use WORKDIR instead of proliferating instructions like RUN cd … && do-something, which are hard to read, troubleshoot, and maintain.
WORKDIR /app

# using cached values before installing the packages
# if package.json was not changed - using values from the older version
COPY package.json /app
# command for building the image
RUN npm install

# Copy all files from the place where the Dockerfile is to the root folder of future image folder
# COPY . /app (without WORKDIR)
COPY . .

# defining port with a default value when -e is not set
ENV PORT 3000
# use this port
EXPOSE $PORT

VOLUME ["logs:/app/data"]

# each time when starting the image
CMD ["node", "index.js"]