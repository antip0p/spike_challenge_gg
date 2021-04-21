# build the sapper app
FROM node:15-stretch as build

RUN apt-get update && apt-get install -y --no-install-recommends build-essential python3

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM node:15-stretch-slim

WORKDIR /app

COPY --from=build /app .

EXPOSE 3000
CMD ["node", "__sapper__/build"]
