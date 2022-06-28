FROM node:18-alpine as base

WORKDIR /var/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN npx prisma generate

# Production step

FROM node:18-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /var/app

COPY package*.json ./

RUN npm install --production

COPY . .

COPY --from=base /var/app/dist ./dist

ENTRYPOINT ["nodemon", "/var/app/dist/server.js"]
