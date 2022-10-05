import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class CategoriesData {
  @Field(type => Int, { nullable: true })
  category_id?: number;

  @Field(type => Int, { nullable: true })
  display?: number;

  @Field({ nullable: true })
  content?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  url_key?: string;

  @Field({ nullable: true })
  url_path?: string;

  @Field({ nullable: true })
  url_suffix?: string;

  @Field({ nullable: true })
  link_url?: string;
}
