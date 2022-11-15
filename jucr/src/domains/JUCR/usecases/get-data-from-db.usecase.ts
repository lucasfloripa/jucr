import { IChargingStation } from "../interfaces";
import { ChargingStationDocument } from "../schemas/charging-station.schema";

import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class GetDataFromDbUC {
  constructor(@InjectModel('charging-stations') private charginStationModel: Model<ChargingStationDocument>) { }
    
  async getData(): Promise<IChargingStation[]> {
    try {
      return await this.charginStationModel.find()
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}