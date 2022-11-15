import { IConnectionType, ICurrentType, ILevel, IStatusType } from "../interfaces"
import { ConnectionType } from './connection-type.schema'
import { CurrentType } from './current-type.schema'
import { Level } from './level.schema'
import { StatusType } from './status-type.schema'

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type ConnectionsDocument = HydratedDocument<Connections>;

@Schema()
export class Connections {
  @Prop({
    type: String, default: function genUUID() {
      return uuidv4()
    }
  })
  _id: string
  
  @Prop({ required: true })
  ID: number

  @Prop()
  ConnectionTypeID?: number

  @Prop({ type: ConnectionType })
  ConnectionType?: IConnectionType

  @Prop()
  Reference?: string

  @Prop({ default: 0 })
  StatusTypeID?: number

  @Prop({ type: StatusType })
  StatusType: IStatusType

  @Prop()
  LevelID?: number

  @Prop({ type: Level })
  Level?: ILevel

  @Prop({ default: null })
  Amps?: number

  @Prop({ default: null })
  Voltage?: number

  @Prop({ default: null })
  PowerKW?: number

  @Prop({ default: null })
  CurrentTypeID?: number

  @Prop({ type: CurrentType })
  CurrentType?: ICurrentType

  @Prop({ default: null })
  Quantity?: number

  @Prop()
  Comments?: string
}

export const ConnectionsSchema = SchemaFactory.createForClass(Connections);