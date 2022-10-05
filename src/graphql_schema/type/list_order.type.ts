import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Fulfillment } from "./fulfillment.type";
import { OrderItem } from "./order_item.type";

@ObjectType()
export class ListOrder {
  @Field({ nullable: true })
  created_at: string;

  @Field({ nullable: true })
  cancel_allowed: number;

  @Field(type => [Fulfillment], { nullable: true })
  fulfillment: Fulfillment[];

  @Field({ nullable: true })
  grand_total: number;

  @Field(types => Int, { nullable: true })
  id: number;

  @Field(types => [OrderItem], { nullable: true })
  order_items: OrderItem[];

  @Field()
  order_number: string;

  @Field({ nullable: true })
  payment_method?: string;

  @Field({ nullable: true })
  payment_method_title?: string;

  @Field({ nullable: true })
  shipping_incl_tax: number;

  @Field({ nullable: true })
  status: string;

  @Field({ nullable: true })
  source: string;

  @Field({ nullable: true })
  referral_code: string;

  @Field({ nullable: true })
  so_redemption_amount: string;

  @Field({ nullable: true })
  so_redemption_points: string;

  @Field({ nullable: true })
  redemption_points_rule_label: string;
}