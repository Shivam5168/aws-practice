# Use Node base image
FROM node:18-alpine AS builder

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Copy source code
COPY . .

# Install dependencies
RUN npm install --omit=dev && npm cache clean --force


# -------- Stage 2: Runtime (Distroless) --------
FROM node:18-alpine AS final

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 3000

# Start app
CMD [ "node", "index.js" ]