import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Money {
  @Field({ nullable: true })
  currency?: string;

  @Field(type => Float, { nullable: true })
  value?: number;
}