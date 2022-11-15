FROM node:14
WORKDIR /usr/src/jucr
COPY ./package.json .
RUN npm install
COPY ./dist ./dist
CMD npm run start