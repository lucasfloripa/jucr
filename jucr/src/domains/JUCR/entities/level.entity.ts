import { ObjectType, Field } from "@nestjs/graphql"

@ObjectType()
export class LevelEntity {
  @Field({ nullable: false })
  ID: number

  @Field({ nullable: true })
  Title: string

  @Field({ nullable: false })
  Comments: string

  @Field({ nullable: false })
  IsFastChargeCapable: boolean
} 