import { Field, Int, Float, ObjectType } from '@nestjs/graphql';
import { Discount } from '../type/discount.type';
import { Money } from '../type/money.type';

@ObjectType()
export class CartItemPricesInterface {
  @Field(type => [Discount], { nullable: true })
  discounts?: Discount[];

  @Field(type => Money, { nullable: true })
  price?: Money;

  @Field(type => Money, { nullable: true })
  row_total?: Money;

  @Field(type => Money, { nullable: true })
  row_total_including_tax?: Money;

  @Field(type => Money, { nullable: true })
  total_item_discount?: Money;

}