import { IAddressInfo, IConnections, IOperatorInfo, IStatusType } from "../interfaces";
import { AddressInfoSchema } from './address-info.schema'
import { ConnectionsSchema } from './connectios.schema'
import { OperatorInfoSchema } from './operator-info.schema'
import { StatusTypeSchema } from './status-type.schema'

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type ChargingStationDocument = HydratedDocument<ChargingStation>;

@Schema()
export class ChargingStation {
  @Prop({
    type: String, default: function genUUID() {
      return uuidv4()
    }
  })
  _id: string

  @Prop({ type: OperatorInfoSchema })
  OperatorInfo?: IOperatorInfo

  @Prop({ type: StatusTypeSchema })
  StatusType?: IStatusType

  @Prop({ type: AddressInfoSchema })
  AddressInfo?: IAddressInfo

  @Prop({ type: [ConnectionsSchema] })
  Connections?: IConnections[]
}

export const ChargingStationSchema = SchemaFactory.createForClass(ChargingStation);