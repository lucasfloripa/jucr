FROM node:16
ENV API_KEY=ff82541f-c8d1-4507-be67-bd07e3259c4e
WORKDIR /usr/src/jucr
COPY ./package.json .
RUN npm install --only=prod
COPY ./dist ./dist
CMD npm run start:prod