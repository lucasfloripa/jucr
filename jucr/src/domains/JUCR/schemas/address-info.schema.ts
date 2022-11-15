import { ICountry } from "../interfaces"
import { Country } from './country.schema'

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type AddressInfoDocument = HydratedDocument<AddressInfo>;

@Schema()
export class AddressInfo {
  @Prop({
    type: String, default: function genUUID() {
      return uuidv4()
    }
  })
  _id: string

  @Prop({ required: true })
  ID: number

  @Prop({ default: '...' })
  AddressLine1?: string

  @Prop({ default: '...' })
  AddressLine2?: string

  @Prop()
  Town?: string

  @Prop()
  StateOrProvince?: string

  @Prop()
  PostCode?: string

  @Prop({ required: true })
  CountryID: number

  @Prop({ type: Country, required: true })
  Country: ICountry

  @Prop({ required: true, default: 0 })
  Latitude: number

  @Prop({ required: true, default: 0 })
  Longitude: number

  @Prop({ default: 'null' })
  ContactTelephone1?: string

  @Prop({ default: 'null' })
  ContactTelephone2?: string

  @Prop()
  ContactEmail?: string

  @Prop()
  AccessComents?: string

  @Prop({ default: null })
  RelatedURL?: string

  @Prop({ default: null })
  Distance?: number

  @Prop({ default: 1 })
  DistanceUnit?: number

  @Prop()
  Title?: string
}

export const AddressInfoSchema = SchemaFactory.createForClass(AddressInfo);