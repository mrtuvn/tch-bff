import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LinkType {
  @Field({ nullable: true })
  path?: string;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  url?: string;
}