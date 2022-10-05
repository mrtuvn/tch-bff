import { Field, Float, ObjectType, Int } from "@nestjs/graphql";
import { OrderItem } from "./order_item.type";
import { OrderAddress } from "./order_address.type";
import { OrderCustomer } from "./order_customer.type";
import { Midtrans } from "./midtrans.type";
import { CcppCreditcard } from "./ccpp_credit_card.type";

@ObjectType()
export class Order {
  @Field(type => Int, { nullable: true })
  id?: number;

  @Field(types => CcppCreditcard, { nullable: true })
  ccpp_creditcard?: CcppCreditcard;

  @Field(type => Int, { nullable: true })
  entity_id?: number;

  @Field({ nullable: true })
  order_number?: string;

  @Field({ nullable: true })
  order_id?: string;

  @Field({ nullable: true })
  order_hash?: string;

  @Field(type => OrderCustomer, { nullable: true })
  customer: OrderCustomer;

  @Field(type => OrderAddress, { nullable: true })
  billing_address?: OrderAddress;

  @Field(type => [OrderItem], { nullable: true })
  items?: OrderItem[];

  @Field(type => Midtrans, { nullable: true })
  midtrans?: Midtrans;
}
