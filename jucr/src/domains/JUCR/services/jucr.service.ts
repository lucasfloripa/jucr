import { GetDataFromApiUC, GetDataFromDbUC, UpdateDataDbUC } from '../usecases'
import { IChargingStation } from '../interfaces';
import { PullStationsResponse } from '../entities';

import { Injectable } from "@nestjs/common";

@Injectable()
export class JucrService {
  constructor(
    private readonly getDataFromApiUC: GetDataFromApiUC,
    private readonly updateDataDbUC: UpdateDataDbUC,
    private readonly getDataFromDbUC: GetDataFromDbUC
  ) { }

  async pullCurrentChargingStationFromApi(): Promise<PullStationsResponse> {
    const openChargeMapData = await this.getDataFromApiUC.getData()
    if (openChargeMapData) {
      await this.updateDataDbUC.updateData(openChargeMapData)
      return { success: true }
    } else {
      return { success: false }
    }
  }

  async getChargingStationFromDb(): Promise<IChargingStation[]> {
    return await this.getDataFromDbUC.getData()
  }
}