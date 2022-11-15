import { AddressInfoEntity } from "."

import { ObjectType, Field } from "@nestjs/graphql"

@ObjectType()
export class OperatorInfoEntity {
  @Field({ nullable: true })
  WebSiteURL: string

  @Field({ nullable: true })
  Comments: string

  @Field({ nullable: true, defaultValue: null })
  PhonePrimaryContact: string

  @Field({ nullable: true, defaultValue: null })
  PhoneSecondaryContact: string

  @Field({ nullable: true, defaultValue: false })
  IsPrivateIndividual: boolean

  @Field({ nullable: true })
  AddressInfo: AddressInfoEntity

  @Field({ nullable: true })
  BookingUrl: string

  @Field({ nullable: true, defaultValue: '...' })
  ContactEmail: string

  @Field({ nullable: true })
  FaultReportEmail: string

  @Field({ nullable: true })
  IsRestrictedEdit: string

  @Field({ nullable: false })
  ID: number
  
  @Field({ nullable: true })
  Title: string
}