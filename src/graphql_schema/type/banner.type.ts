import { Field, ObjectType, Int } from '@nestjs/graphql';
import { LinkType } from './link_type.type';

@ObjectType()
export class Banner {
  @Field({ nullable: true })
  caption?: string;

  @Field({ nullable: true })
  disabled?: Boolean;

  @Field({ nullable: true })
  file?: string;

  @Field({ nullable: true })
  filepath?: string;

  @Field(type => LinkType, { nullable: true })
  link?: LinkType;

  @Field({ nullable: true })
  linktype?: string;

  @Field({ nullable: true })
  mobile_image?: String;

  @Field({ nullable: true })
  mobile_image_path?: String;

  @Field({ nullable: true })
  newtab?: Boolean;

  @Field(type => Int, { nullable: true })
  position?: number;
}