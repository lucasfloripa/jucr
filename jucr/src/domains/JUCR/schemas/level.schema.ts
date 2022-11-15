import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type LevelDocument = HydratedDocument<Level>;

@Schema()
export class Level {
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

  @Prop({ required: true })
  Comments: string

  @Prop({ required: true })
  IsFastChargeCapable: boolean
} 

export const LevelSchema = SchemaFactory.createForClass(Level);
