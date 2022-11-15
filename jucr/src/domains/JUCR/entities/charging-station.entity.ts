import { AddressInfoEntity, ConnectionsEntity, OperatorInfoEntity, StatusTypeEntity } from ".";

import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ChargingStationEntity {
  @Field(() => OperatorInfoEntity, { nullable: true })
  OperatorInfo: OperatorInfoEntity

  @Field(() => StatusTypeEntity, { nullable: true })
  StatusType: StatusTypeEntity

  @Field(() => AddressInfoEntity, { nullable: true })
  AddressInfo: AddressInfoEntity

  @Field(() => [ConnectionsEntity], { nullable: true })
  Connections: ConnectionsEntity[]
}