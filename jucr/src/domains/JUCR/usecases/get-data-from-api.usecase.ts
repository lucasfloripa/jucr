import { instanceOfAxios } from "../../../config/set-axios.config";
import { IChargingStation } from "../interfaces";
import { chargingStationsBuilder } from "../../../utils/builders";

import { Injectable, InternalServerErrorException } from "@nestjs/common";

@Injectable()
export class GetDataFromApiUC {
  async getData(): Promise<IChargingStation[]> {
    try {
      const request = await instanceOfAxios.get(`https://api.openchargemap.io/v3/poi?key=${process.env.API_KEY}`)
      return chargingStationsBuilder(request.data)
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}