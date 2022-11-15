import 'dotenv/config';
import { JucrModule } from './domains/JUCR/modules'

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@elciess.ihcok.mongodb.net/jucr`),
    JucrModule
  ]
})

export class AppModule { }
