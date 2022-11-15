import { ObjectType, Field } from "@nestjs/graphql"

@ObjectType()
export class ConnectionTypeEntity {
  @Field({ nullable: true, defaultValue: null })
  FormalName: string

  @Field({ nullable: true, defaultValue: false })
  isDiscontinued: boolean

  @Field({ nullable: true, defaultValue: false })
  IsObsolete: boolean

  @Field({ nullable: true })
  ID: number

  @Field({ nullable: true })
  Title: string
}