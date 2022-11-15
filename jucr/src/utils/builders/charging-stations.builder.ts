import { IChargingStation } from "../../domains/JUCR/interfaces";

export const chargingStationsBuilder = (data): IChargingStation[] => {
  let chargingStations: IChargingStation[] = [];
  data.forEach(obj => {
    chargingStations.push({
      OperatorInfo: obj?.OperatorInfo,
      AddressInfo: obj?.AddressInfo,
      Connections: obj?.Connections,
      StatusType: obj?.StatusType
    })
  })
  return chargingStations
}