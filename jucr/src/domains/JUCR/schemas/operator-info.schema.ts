import { IAddressInfo } from "../interfaces"
import { AddressInfo } from './address-info.schema'

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type OperatorInfoDocument = HydratedDocument<OperatorInfo>;

@Schema()
export class OperatorInfo {
  @Prop({
    type: String, default: function genUUID() {
      return uuidv4()
    }
  })
  _id: string
  
  @Prop()
  WebSiteURL?: string

  @Prop()
  Comments?: string

  @Prop({ default: null })
  PhonePrimaryContact?: string

  @Prop({ default: null })
  PhoneSecondaryContact?: string

  @Prop({ default: false })
  IsPrivateIndividual?: boolean

  @Prop({ type: AddressInfo })
  AddressInfo?: IAddressInfo

  @Prop()
  BookingUrl?: string

  @Prop({ default: '...' })
  ContactEmail?: string

  @Prop()
  FaultReportEmail?: string

  @Prop()
  IsRestrictedEdit?: string

  @Prop({ required: true })
  ID: number

  @Prop()
  Title?: string
}

export const OperatorInfoSchema = SchemaFactory.createForClass(OperatorInfo);