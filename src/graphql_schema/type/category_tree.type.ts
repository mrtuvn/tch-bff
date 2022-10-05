import { Field, Int, ObjectType, Args, ID } from '@nestjs/graphql';
import { CategoryInterface } from '../interface/category.interface';

import { CmsBlock } from '../type/cms_block.type';
import { Breadcrumb } from '../type/breadcrumb.type';
import { CategoryProducts } from '../type/category_products.type';
import { CategoriesData } from "./categories_data.type";


@ObjectType({
  implements: [CategoryInterface],
})
export class CategoryTree implements CategoryInterface {
  @Field(type => [Breadcrumb], { nullable: true })
  breadcrumbs?: Breadcrumb[];

  canonical_url?: string;

  @Field(type => CmsBlock, { nullable: true })
  cms_block?: CmsBlock;

  @Field(type => CmsBlock, { nullable: true })
  mobile_cms_block?: CmsBlock;

  @Field(type => String, { nullable: true })
  image?: string;

  @Field(type => String, { nullable: true })
  icon?: string;

  created_at?: string;
  default_sort_by?: string;
  description?: string;
  display_mode?: string;
  id?: number;
  include_in_menu?: number;
  level?: number;
  link_url?: string;
  name?: string;
  path_in_store?: string;
  path?: string;
  position?: number;
  product_count?: number;
  products?: Promise<CategoryProducts>;
  updated_at?: string;
  url_key?: string;
  url_path?: string;
  url_suffix?: string;

  @Field(type => CmsBlock, { nullable: true })
  navigation_menu_cms_block_content: CmsBlock;


  @Field(type => [CategoriesData], { nullable: true })
  navigation_menu_categories_content: [CategoriesData];

  meta_description: string;
  meta_keywords: string;
  meta_title: string;

  @Field(type => CmsBlock, { nullable: true })
  product_banner_block: CmsBlock;


  @Field(type => Int, { nullable: true })
  children_count?: number;

  @Field(type => [CategoryTree], { nullable: true })
  children?: CategoryTree[];

}
