import { Field, ObjectType, Int } from '@nestjs/graphql'

@ObjectType()
export class StoreView {
  @Field(type => Int, { nullable: true })
  id?: number;

  @Field(type => String)
  code: string;

  @Field(type => String)
  name: string;
}

