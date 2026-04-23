# Use official lightweight Node.js image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package files first (for better layer caching)
COPY app/package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy the rest of the application source
COPY app/ .

# Expose the port the app runs on
EXPOSE 3000

# Health check — tells Docker and CI/CD if the container is healthy
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

# Command to start the application
CMD ["node", "server.js"]
