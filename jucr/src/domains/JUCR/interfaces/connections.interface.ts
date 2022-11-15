import { IConnectionType, ICurrentType, ILevel, IStatusType } from ".";

export interface IConnections {
  ID: number;
  ConnectionTypeID?: number;
  ConnectionType?: IConnectionType;
  Reference?: string;
  StatusTypeID?: number;
  StatusType?: IStatusType;
  LevelID?: number;
  Level?: ILevel;
  Amps?: number;
  Voltage?: number;
  PowerKW?: number;
  CurrentTypeID?: number;
  CurrentType?: ICurrentType;
  Quantity?: number;
  Comments?: string;
}