import { ObjectType, Field } from "@nestjs/graphql"

@ObjectType()
export class CurrentTypeEntity {
  @Field({ nullable: false })
  ID: number

  @Field({ nullable: true })
  Title: string
}