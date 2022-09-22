FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install the application's dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i

# Copy in the source code
COPY . .

#RUN mkdir -p node_modules/.vite && chmod -R 777 node_modules/.vite
#RUN chown -R node /usr/src/app/node_modules

# Don't use root user
USER node

# Expose port
EXPOSE 5173

# Build app

CMD ["npm","run","build"]
