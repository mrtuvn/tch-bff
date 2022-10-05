import { Field, Float, ObjectType, Int } from '@nestjs/graphql';
import { ConfigurableCartItemOption } from "./configurable_cart_item_option.type";
import { OrderItemWarranty } from "./order_item_warranty.type";

@ObjectType()
export class OrderItem {
  @Field(type => Int, { nullable: true })
  added_service_product_register: number;

  @Field({ nullable: true })
  base_original_price: number;

  @Field({ nullable: true })
  base_price: number;

  @Field({ nullable: true })
  brand_name: string;

  @Field(type => Boolean, { nullable: true })
  can_review?: boolean;

  @Field(type => [ConfigurableCartItemOption], { nullable: true })
  configurable_options: ConfigurableCartItemOption[];

  @Field({ nullable: true })
  gift_wrapping_text: string;

  @Field({ nullable: true })
  gift_wrapping_text_placeholder: string;

  @Field({ nullable: true })
  image: string;

  @Field(type => Int)
  item_id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  note_to_picker_text: string;

  @Field({ nullable: true })
  note_to_picker_text_placeholder: string;

  @Field({ nullable: true })
  original_price: number;

  @Field(type => Int, { nullable: true })
  parent_item_id: number;

  @Field({ nullable: true })
  price?: number;

  @Field({ nullable: true })
  price_incl_tax: number;

  @Field(type => Int)
  product_id: number;

  @Field({ nullable: true })
  product_options: string;

  @Field({ nullable: true })
  product_type: string;

  @Field(type => Int, { nullable: true })
  qty: number;

  @Field(type => Int, { nullable: true })
  qty_ordered: number;

  @Field(type => Int)
  row_total?: number;

  @Field({ nullable: true })
  row_total_incl_tax: number;

  @Field()
  sku: string;

  @Field({ nullable: true })
  url_key?: string;

  @Field({ nullable: true })
  weight: number;

  @Field({ nullable: true })
  display_uom: string;

  @Field({ nullable: true })
  related_item_id?: string;

  @Field({ nullable: true })
  related_sku?: string;

  @Field({ nullable: true })
  supplier_code?: string;

  @Field({ nullable: true })
  supplier_name?: string;

  @Field(type => OrderItemWarranty, { nullable: true })
  warranty?: OrderItemWarranty;

  @Field({ nullable: true })
  warranty_registration_url?: string;

  @Field({ nullable: true })
  warranty_rule_url?: string;
}