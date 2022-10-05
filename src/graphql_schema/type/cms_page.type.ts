import { Field, ObjectType, Int } from '@nestjs/graphql';
import { CmsBlock } from './cms_block.type';
import { CmsPageBlockContent } from "./cms_page_block_content.typs";

@ObjectType()
export class CmsPage {
  @Field(type => Int, { nullable: true })
  id?: number;

  @Field(type => [CmsPageBlockContent], { nullable: true })
  blocks?: CmsPageBlockContent[];

  @Field({ nullable: true })
  content?: string;

  @Field(type => [String], { nullable: true })
  contents?: string[];

  @Field({ nullable: true })
  content_type?: string;

  @Field({ nullable: true })
  page_templates?: string;

  @Field({ nullable: true })
  content_heading?: string;

  @Field({ nullable: true })
  identifier?: string;

  @Field({ nullable: true })
  meta_description?: string;

  @Field({ nullable: true })
  meta_keywords?: string;

  @Field({ nullable: true })
  meta_title?: string;

  @Field({ nullable: true })
  page_layout?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  url_key?: string;
}
