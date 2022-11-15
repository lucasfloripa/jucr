import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type ConnectionTypeDocument = HydratedDocument<ConnectionType>;

@Schema()
export class ConnectionType {
  @Prop({
    type: String, default: function genUUID() {
      return uuidv4()
    }
  })
  _id: string

  @Prop({ default: null })
  FormalName?: string

  @Prop({ default: false })
  isDiscontinued?: boolean

  @Prop({ default: false })
  IsObsolete?: boolean

  @Prop()
  ID?: number

  @Prop()
  Title?: string
}

export const ConnectionTypeSchema = SchemaFactory.createForClass(ConnectionType);