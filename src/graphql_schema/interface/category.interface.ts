import { Field, Int, InterfaceType } from '@nestjs/graphql';
import { CmsBlock } from '../type/cms_block.type';
import { Breadcrumb } from '../type/breadcrumb.type';
import { CategoriesData } from '../type/categories_data.type';
import { CategoryProducts } from '../type/category_products.type';


@InterfaceType()
export abstract class CategoryInterface {
  @Field(type => [Breadcrumb], { nullable: true })
  breadcrumbs?: Breadcrumb[];

  @Field({ nullable: true })
  canonical_url?: string;

  @Field(type => CmsBlock, { nullable: true })
  cms_block?: CmsBlock;

  @Field(type => CmsBlock, { nullable: true })
  product_banner_block?: CmsBlock;

  @Field({ nullable: true })
  created_at?: string;

  @Field({ nullable: true })
  default_sort_by?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  display_mode?: string;

  @Field(type => Int, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  image?: string;

  @Field(type => Int, { nullable: true })
  include_in_menu?: number;

  @Field({ nullable: true })
  link_url?: string;

  @Field(type => Int, { nullable: true })
  level?: number;

  @Field({ nullable: true })
  meta_title?: string;

  @Field({ nullable: true })
  meta_keywords?: string;

  @Field({ nullable: true })
  meta_description?: string;

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

  products?: Promise<CategoryProducts>;

  @Field({ nullable: true })
  updated_at?: string;

  @Field({ nullable: true })
  url_key?: string;

  @Field({ nullable: true })
  url_path?: string;

  @Field({ nullable: true })
  url_suffix?: string;

  @Field({ nullable: true })
  is_anchor?: boolean;


  @Field({ nullable: true })
  navigation_menu_brands_header?: string;

  @Field({ nullable: true })
  navigation_menu_categories?: string;

  @Field({ nullable: true })
  navigation_menu_categories_header?: string;

  @Field(type => [CategoriesData], { nullable: true })
  navigation_menu_categories_content?: CategoriesData[];

  @Field(type => Int, { nullable: true })
  navigation_menu_cms_block?: number;

  @Field(type => CmsBlock, { nullable: true })
  navigation_menu_cms_block_content?: CmsBlock;

  @Field({ nullable: true })
  navigation_menu_cms_block_header?: string;
}
