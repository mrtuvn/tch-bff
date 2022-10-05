import { Field, ObjectType, Int } from '@nestjs/graphql';
import { CmsBlockImageContent } from 'src/graphql_schema/type/cms_block_image_content.type';
import { BlockContentArticle } from "./cms_content_article.type";

@ObjectType()
export class CmsBlock {
  @Field(type => Int, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  block_alignment?: string;

  @Field({ nullable: true })
  block_display_show_more_text?: boolean;

  @Field({ nullable: true })
  block_manual_scrolling?: boolean;

  @Field({ nullable: true })
  block_auto_scrolling?: boolean;

  @Field(type => Int, { nullable: true })
  block_auto_scrolling_delay?: number;

  @Field({ nullable: true })
  block_background_color?: string;

  @Field({ nullable: true })
  block_loop_scrolling?: string;

  @Field(type => Int, { nullable: true })
  block_margin_left?: number;

  @Field(type => Int, { nullable: true })
  block_margin_right?: number;

  @Field(type => Int, { nullable: true })
  block_margin_top?: number;

  @Field(type => Int, { nullable: true })
  block_margin_bottom?: number;

  @Field(type => Int, { nullable: true })
  block_max_number_of_items?: number;

  @Field({ nullable: true })
  block_repeat_layout?: boolean;

  @Field({ nullable: true })
  block_type?: string;

  @Field({ nullable: true })
  block_show_more_text?: string;

  @Field({ nullable: true })
  block_show_more_image?: string;

  @Field({ nullable: true })
  block_show_more_url?: string;

  @Field({ nullable: true })
  block_show_remaining_qty?: boolean;

  @Field({ nullable: true })
  block_show_share?: boolean;

  @Field({ nullable: true })
  block_show_savings?: boolean;

  @Field({ nullable: true })
  block_show_price?: boolean;

  @Field({ nullable: true })
  block_show_brand?: boolean;

  @Field({ nullable: true })
  block_show_reviews?: boolean;

  @Field({ nullable: true })
  block_show_labels?: boolean;

  @Field({ nullable: true })
  block_show_default_image?: boolean;

  @Field({ nullable: true })
  block_default_image?: string;

  @Field({ nullable: true })
  block_header_text?: string;

  @Field({ nullable: true })
  block_header_image?: string;

  @Field({ nullable: true })
  block_short_description?: string;

  @Field({ nullable: true })
  block_long_description?: string;

  @Field(type => [BlockContentArticle], { nullable: true })
  block_content_articles?: BlockContentArticle[];

  @Field({ nullable: true })
  content?: string;

  @Field(type => Int, { nullable: true })
  content_template_id?: number;

  @Field({ nullable: true })
  content_template_code?: string;

  @Field({ nullable: true })
  identifier?: string;

  @Field({ nullable: true })
  loop_scrolling?: boolean;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  content_type?: string;

  @Field({ nullable: true })
  block_templates?: string;

  @Field(type => [CmsBlockImageContent], { nullable: true })
  content_image?: CmsBlockImageContent[];

  @Field(type => Int, { nullable: true })
  width_ratio?: number;

  @Field(type => Int, { nullable: true })
  height_ratio?: number;
}
