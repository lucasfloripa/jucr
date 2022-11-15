import { ObjectType, Field } from "@nestjs/graphql"

@ObjectType()
export class CountryEntity {
  @Field({ nullable: false, defaultValue: 0 })
  ID: number

  @Field({ nullable: false, defaultValue: '...' })
  ISOCode: string

  @Field({ nullable: false, defaultValue: '...' })
  ContinentCode: string

  @Field({ nullable: true, defaultValue: '...' })
  Title: string
}
