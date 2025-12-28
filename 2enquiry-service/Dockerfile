FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install express
COPY . .
EXPOSE 4003
CMD ["node","index.js"]
