import { ConnectionTypeEntity, CurrentTypeEntity, LevelEntity, StatusTypeEntity } from "."

import { ObjectType, Field } from "@nestjs/graphql"

@ObjectType()
export class ConnectionsEntity {
  @Field({ nullable: false })
  ID: number

  @Field({ nullable: true })
  ConnectionTypeID: number

  @Field(() => ConnectionTypeEntity, { nullable: true })
  ConnectionType: ConnectionTypeEntity

  @Field({ nullable: true })
  Reference: string

  @Field({ nullable: true, defaultValue: 0 })
  StatusTypeID: number

  @Field(() => StatusTypeEntity, { nullable: false })
  StatusType: StatusTypeEntity

  @Field({ nullable: true })
  LevelID: number

  @Field(() => LevelEntity, { nullable: true })
  Level: LevelEntity

  @Field({ nullable: true, defaultValue: null })
  Amps: number 

  @Field({ nullable: true, defaultValue: null })
  Voltage: number

  @Field({ nullable: true, defaultValue: null })
  PowerKW: number

  @Field({ nullable: true, defaultValue: null })
  CurrentTypeID: number
  
  @Field(() => CurrentTypeEntity, { nullable: true })
  CurrentType: CurrentTypeEntity

  @Field({ nullable: true, defaultValue: null })
  Quantity: number

  @Field({ nullable: true })
  Comments: string
}