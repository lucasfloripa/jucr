import { ObjectType, Field } from "@nestjs/graphql"

@ObjectType()
export class PullStationsResponse {
  @Field({ nullable: false })
  success: boolean
} 