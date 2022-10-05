import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProductInterface } from '../interface/product.interface';
import { SearchResultPageInfo } from './search_result_page_info.type';

@ObjectType()
export class CategoryProducts {
  @Field(type => [ProductInterface], { nullable: true })
  items?: ProductInterface[];

  @Field(type => SearchResultPageInfo, { nullable: true })
  page_info?: SearchResultPageInfo;

  @Field(type => Int, { nullable: true })
  total_count?: number;
}