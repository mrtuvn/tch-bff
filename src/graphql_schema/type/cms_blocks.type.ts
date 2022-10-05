import { Field, ObjectType } from '@nestjs/graphql';
import { CmsBlock } from './cms_block.type';

@ObjectType()
export class CmsBlocks {
  @Field(type => [CmsBlock], { nullable: true })
  items?: CmsBlock[]  
}