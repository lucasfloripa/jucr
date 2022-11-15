import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type StatusTypeDocument = HydratedDocument<StatusType>;

@Schema()
export class StatusType {
  @Prop({
    type: String, default: function genUUID() {
      return uuidv4()
    }
  })
  _id: string
  
  @Prop({ required: true, defaultValue: false })
  IsOperational: boolean

  @Prop({ required: true, defaultValue: false })
  IsUserSelectable: boolean

  @Prop({ required: true })
  ID: number

  @Prop()
  Title?: string
}

export const StatusTypeSchema = SchemaFactory.createForClass(StatusType);