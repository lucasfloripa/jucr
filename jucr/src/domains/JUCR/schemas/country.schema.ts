import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type CountryDocument = HydratedDocument<Country>;

@Schema()
export class Country {
  @Prop({
    type: String, default: function genUUID() {
      return uuidv4()
    }
  })
  _id: string
  
  @Prop({ required: true, default: 0 })
  ID: number

  @Prop({ required: true, default: '...' })
  ISOCode: string

  @Prop({ required: true, default: '...' })
  ContinentCode: string

  @Prop({ default: '...' })
  Title?: string
}

export const CountrySchema = SchemaFactory.createForClass(Country);