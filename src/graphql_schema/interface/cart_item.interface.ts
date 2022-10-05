import { Field, Float, InterfaceType } from "@nestjs/graphql";
import { CartItemPrices } from "../type/cart_item_prices.type";
import { ProductInterface } from "./product.interface";
import { CustomField } from "../type/custom_field_item.type";

@InterfaceType()
export abstract class CartItemInterface {
  @Field({ nullable: true })
  breadcrumb?: string;

  @Field(type => CustomField, { nullable: true })
  custom_item?: CustomField;

  @Field({ nullable: true })
  id?: string;

  @Field(type => CartItemPrices, { nullable: true })
  prices?: CartItemPrices;

  @Field(type => ProductInterface, { nullable: true })
  product?: ProductInterface;

  @Field(type => Float, { nullable: true })
  quantity?: number;

  @Field({ nullable: true })
  related_item_id?: string;

  @Field({ nullable: true })
  rule_id?: string;

}
