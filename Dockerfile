FROM node:20.15.1-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --production

COPY . .

FROM node:20.15.1-alpine

WORKDIR /app

COPY --from=build /app .

EXPOSE 3000

CMD ["node", "src/app.js"]
