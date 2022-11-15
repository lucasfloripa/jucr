import { ChargingStationDocument } from "../schemas/charging-station.schema";
import { IChargingStation } from "../interfaces";

import { Model } from "mongoose";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class UpdateDataDbUC {
  constructor(@InjectModel('charging-stations') private chargingStationModel: Model<ChargingStationDocument>) { }

  async updateData(data: IChargingStation[]): Promise<void> {
    try {
      const oldData = await this.chargingStationModel.collection.find().toArray()

      if (oldData.length !== data.length) {
        await this.chargingStationModel.collection.drop()
        await this.chargingStationModel.create(data)
      }

    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}