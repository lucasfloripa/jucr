import { CountryEntity } from "."

import { ObjectType, Field } from "@nestjs/graphql"

@ObjectType()
export class AddressInfoEntity {
  @Field({ nullable: false })
  ID: number

  @Field({ nullable: true, defaultValue: '...' })
  AddressLine1: string

  @Field({ nullable: true, defaultValue: '...' })
  AddressLine2: string

  @Field({ nullable: true })
  Town: string

  @Field({ nullable: true })
  StateOrProvince: string

  @Field({ nullable: true })
  PostCode: string

  @Field({ nullable: false })
  CountryID: number

  @Field(() => CountryEntity, { nullable: false })
  Country: CountryEntity

  @Field({ nullable: false, defaultValue: 0 })
  Latitude: number

  @Field({ nullable: false, defaultValue: 0 })
  Longitude: number

  @Field({ nullable: true, defaultValue: 'null' })
  ContactTelephone1: string

  @Field({ nullable: true, defaultValue: 'null' })
  ContactTelephone2: string

  @Field({ nullable: true })
  ContactEmail: string

  @Field({ nullable: true })
  AccessComents: string

  @Field({ nullable: true, defaultValue: null })
  RelatedURL: string

  @Field({ nullable: true, defaultValue: null })
  Distance: number

  @Field({ nullable: true, defaultValue: 1 })
  DistanceUnit: number

  @Field({ nullable: true })
  Title: string
}