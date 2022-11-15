import { IAddressInfo, IConnections, IOperatorInfo, IStatusType } from "."

export interface IChargingStation {
  OperatorInfo?: IOperatorInfo
  StatusType?: IStatusType
  AddressInfo?: IAddressInfo
  Connections?: IConnections
}