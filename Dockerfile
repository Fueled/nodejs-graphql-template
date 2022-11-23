# Build step

FROM node:18-alpine as builder

WORKDIR /var/app

COPY . .

RUN npm install --production=false
RUN npx prisma generate
RUN npm run build

# Production step

FROM node:18-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /var/app

COPY --from=builder /var/app/.env ./.env
COPY --from=builder /var/app/package.json ./package.json
COPY --from=builder /var/app/package-lock.json ./package-lock.json
COPY --from=builder /var/app/node_modules ./node_modules
COPY --from=builder /var/app/prisma ./prisma
COPY --from=builder /var/app/dist ./dist

RUN npm prune --production

EXPOSE ${HTTP_PORT:-8000}

ENTRYPOINT ["sh", "-c" "npm run start"]
