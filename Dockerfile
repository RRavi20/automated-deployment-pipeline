FROM node:18-alpine
WORKDIR /app

# Ensure this is lowercase 'p'
COPY package*.json ./

RUN npm install 

COPY . .

CMD ["npm", "start"]