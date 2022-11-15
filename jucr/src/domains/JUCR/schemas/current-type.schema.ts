import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type CurrentTypeDocument = HydratedDocument<CurrentType>;

@Schema()
export class CurrentType {
  @Prop({
    type: String, default: function genUUID() {
      return uuidv4()
    }
  })
  _id: string
  
  @Prop({ required: true })
  ID: number

  @Prop()
  Title?: string
}

export const CurrentTypeSchema = SchemaFactory.createForClass(CurrentType);