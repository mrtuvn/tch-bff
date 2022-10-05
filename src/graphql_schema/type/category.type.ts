import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CategoryInterface } from '../interface/category.interface';

import { CmsBlock } from './cms_block.type';
import { Breadcrumb } from './breadcrumb.type';
import { CategoryProducts } from './category_products.type';


@ObjectType({})
export class Category {
  @Field(type => [Breadcrumb], { nullable: true })
  breadcrumbs?: Breadcrumb[];

  @Field({ nullable: true })
  canonical_url?: string;

  @Field(type => CmsBlock, { nullable: true })
  cms_block?: CmsBlock;

  @Field({ nullable: true })
  created_at?: string;

  @Field({ nullable: true })
  default_sort_by?: string;

  @Field({ nullable: true })
  description?: string;

  @Field(type => Int, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  link_url?: string;

  @Field(type => Int, { nullable: true })
  level?: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  path_in_store?: string;

  @Field({ nullable: true })
  path?: string;

  @Field(type => Int, { nullable: true })
  position?: number;

  @Field(type => Int, { nullable: true })
  product_count?: number;

  // products?: Promise<CategoryProducts>;

  @Field({ nullable: true })
  updated_at?: string;

  @Field({ nullable: true })
  url_key?: string;

  @Field({ nullable: true })
  url_path?: string;
}
