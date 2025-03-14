# Build stage
FROM node:lts-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run prebuild
RUN npm run build

# Production stage
FROM node:lts-alpine AS production-stage
WORKDIR /app
COPY --from=build-stage /app/next.config.ts ./
COPY --from=build-stage /app/public ./public
COPY --from=build-stage /app/.next ./.next
COPY --from=build-stage /app/package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

EXPOSE 1945
CMD ["npm", "start"]
