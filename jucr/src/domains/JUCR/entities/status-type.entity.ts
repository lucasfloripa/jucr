import { ObjectType, Field } from "@nestjs/graphql"

@ObjectType()
export class StatusTypeEntity {
  @Field({ nullable: false, defaultValue: false })
  IsOperational: boolean

  @Field({ nullable: false, defaultValue: false })
  IsUserSelectable: boolean

  @Field({ nullable: false })
  ID: number

  @Field({ nullable: true })
  Title: string
}