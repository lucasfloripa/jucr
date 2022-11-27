import 'dotenv/config';
import { JucrModule } from './domains/JUCR/modules'

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://mongo:27017/jucr`),
    JucrModule
  ]
})

export class AppModule { }
