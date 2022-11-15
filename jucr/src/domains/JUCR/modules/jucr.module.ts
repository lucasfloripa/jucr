import { JucrResolver } from '../resolvers'
import { JucrService } from '../services'
import { GetDataFromApiUC, GetDataFromDbUC, UpdateDataDbUC } from '../usecases'
import { ChargingStationSchema } from '../schemas/charging-station.schema';

import { Module } from '@nestjs/common';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo'
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: true
    }),
    MongooseModule.forFeature([
      { name: 'charging-stations', schema: ChargingStationSchema }
    ]),
  ],
  providers: [
    JucrResolver,
    JucrService,
    GetDataFromApiUC,
    UpdateDataDbUC,
    GetDataFromDbUC
  ],
})
export class JucrModule { }