import { ChargingStationEntity, PullStationsResponse } from '../entities'
import { IChargingStation } from '../interfaces';
import { JucrService } from '../services'

import { Mutation, Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class JucrResolver {
  constructor(
    private readonly jucrService: JucrService
  ) { }

  @Query(() => [ChargingStationEntity])
  async getChargingStations(): Promise<IChargingStation[]> {
    return await this.jucrService.getChargingStationFromDb()
  }

  @Mutation(() => PullStationsResponse)
  async pullCurrentChargingStations(): Promise<PullStationsResponse> {
    return await this.jucrService.pullCurrentChargingStationFromApi()
  }
}