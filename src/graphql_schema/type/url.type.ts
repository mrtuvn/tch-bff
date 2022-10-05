import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Url {
  @Field({ nullable: true })
  url?: string;

  @Field({ nullable: true })
  lang?: string;
}