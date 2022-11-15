# JUCR Backend Test

## About the test it self
  Hi! First of all thank you for the opportunity given to me to take this test. I Learn alot here doing this! Thank you very much!
  
  About the test ...

  I started to see more about NestJS and GraphQL a month ago in the new microservices at my current job. So I believe I did what I expected about it. Mongo I've used a lot in my career so it's not a problem for me.

  Federated was something I had heard about, but I implemented it for the first time here.

  Relay pagination had never heard of it. I know the concept of cursor pagination, but I've never seen it that way. So, I dindt apply.

  I dont have much experience with Docker. Unfortunately, in the jobs I've been through to date, my focus has always been much more on code than on infrastructure. I made a simple dockerfile for the gateway and a docker-compose for the service.

  I did the unit tests on the service. I have a lot of experience doing this in an environment outside of GraphQL. I didn't do the E2E involving Federated.

  In the end I could do more. I want do more, but I need to know more. In my portfolio I still haven't had so many opportunities to use more tools, but I believe I have what it takes to learn and do a good job here in JUCR.

  In this link https://github.com/lucasfloripa/elciess.ms.sign-up you can see what am I able to writing good code, fallowing SOLID, GitFlow, TDD, DDD and some design patterns. 
  
  TNKS!

  Lucas.

  ## Implemented

  - [x] NestJS
  - [x] GraphQL
  - [x] Federated GraphQL Gateway
  - [x] Docker Image Service
  - [ ] Docker Image Data
  - [x] MongoDB
  - [x] Pull the data from API
  - [x] Update database when needed
  - [ ] Relay-Style Pagination
  - [x] Unit tests
  - [ ] E2E tests
  - [ ] Command docker-compose


## Instructions
  1. go to jucr folder

    - npm i
    - npm run start

  2. go to gateway folder

    - npm i
    - npm run start

## Resource
  - http://localhost:3002/graphql

## GraphQL
  - query getChargingStations = get all charging stations from db
  - mutation pullCurrentChargingStations = pull all current charging stations from API