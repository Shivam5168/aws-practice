# Use Node base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port (can be overridden by env)
EXPOSE 3000

# Start app
CMD ["node", "index.js"]