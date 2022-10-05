import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Breadcrumb {
  @Field(type => Int, { nullable: true })
  category_id?: number;

  @Field(type => Int, { nullable: true })
  category_level?: number;

  @Field({ nullable: true })
  category_name?: string;

  @Field({ nullable: true })
  category_url_key?: string;

  @Field({ nullable: true })
  category_url_path?: string;

  @Field({ nullable: true })
  category_link_url?: string;
}