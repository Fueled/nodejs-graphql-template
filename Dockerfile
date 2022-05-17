FROM node:16 as base

WORKDIR /var/app

COPY package*.json ./

RUN npm install

COPY . .

# Generate the prisma client in the docker OS
RUN npx prisma generate

# Production step

FROM base as production

ENV NODE_PATH=./dist
RUN npm run build

ENTRYPOINT [ "nodemon", "/var/app/src/server.ts" ]