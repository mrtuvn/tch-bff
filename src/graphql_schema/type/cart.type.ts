import { Field, Int, Float, ObjectType } from '@nestjs/graphql';
import { AppliedCoupon } from './applied_coupon.type';
import { AppliedGiftCard } from './applied_gift_card.type';
import { AppliedStoreCredit } from './applied_store_credit.type';
import { AvailablePaymentMethod } from './available_payment_method.type';
import { BillingCartAddress } from './billing_cart_address.type';
import { CartItemInterface } from '../interface/cart_item.interface';
import { CartPrices } from './cart_prices.type';
import { SelectedPaymentMethod } from './selected_payment_method.type';
import { ShippingCartAddress } from './shipping_cart_address.type';
import { ConfigurableCartItem } from './configurable_cart_item.type';
import { FulfillmentRecord } from "./fulfillment_record.type";
import { PickupCartAddress } from "./pickup_cart_address.type";
import { ShippingFee } from "./shipping_fee.type";
import { PickupLocation } from "./pickup_location.type";
import { CartItemsInterface } from "./cart_items_interface.type";
import { CouponInvalid } from "./coupon_invalid.type";
import { AppliedRedemptionRules } from "./applied_redemption_rule.type";

@ObjectType()
export class Cart {
  @Field(type => String, { nullable: true })
  id?: string;

  @Field(type => AppliedCoupon, { nullable: true })
  applied_coupon?: AppliedCoupon;

  @Field(type => [AppliedCoupon], { nullable: true })
  applied_coupons?: AppliedCoupon[];

  @Field(type => [AppliedGiftCard], { nullable: true })
  applied_gift_cards?: AppliedGiftCard[];

  @Field(type => [Int], { nullable: true })
  applied_manual_select_promotion?: number[];

  @Field(type => [AppliedRedemptionRules], { nullable: true })
  applied_redemption_rules?: AppliedRedemptionRules[];

  @Field(type => AppliedStoreCredit, { nullable: true })
  applied_store_credit?: AppliedStoreCredit;

  @Field(type => [AvailablePaymentMethod], { nullable: true })
  available_payment_methods?: AvailablePaymentMethod[];

  @Field(type => BillingCartAddress, { nullable: true })
  billing_address?: BillingCartAddress;

  @Field(type => [CouponInvalid], { nullable: true })
  coupons_invalid?: CouponInvalid[];

  @Field(type => Int, { nullable: true })
  count_items?: number;

  @Field({ nullable: true })
  email?: string;

  @Field(type => [FulfillmentRecord], { nullable: true })
  fulfillments?: FulfillmentRecord[];

  @Field(type => Boolean, { nullable: true })
  is_need_reload?: boolean;

  @Field(type => Boolean, { nullable: true })
  is_virtual?: boolean;

  @Field(type => [ConfigurableCartItem], { nullable: true })
  items?: CartItemInterface[];

  @Field(type => [ConfigurableCartItem], { nullable: true })
  items_has_problem?: CartItemInterface[];

  @Field(type => [CartItemsInterface], { nullable: true })
  mpoints?: CartItemsInterface[];

  @Field(type => [ConfigurableCartItem], { nullable: true })
  oos_items?: CartItemInterface[];

  @Field(type => [PickupCartAddress], { nullable: true })
  pickup_address?: PickupCartAddress[];

  @Field(type => [String], { nullable: true })
  prefer_method?: string[];

  @Field({ nullable: true })
  prefer_type?: string;

  @Field(type => CartPrices, { nullable: true })
  prices?: CartPrices;

  @Field(type => SelectedPaymentMethod, { nullable: true })
  selected_payment_method?: SelectedPaymentMethod;

  @Field(type => [ShippingCartAddress], { nullable: true })
  shipping_addresses?: ShippingCartAddress[];

  @Field(type => [ShippingFee], { nullable: true })
  shipping_fees?: ShippingFee[];

  @Field(type => PickupLocation, { nullable: true })
  store?: PickupLocation;

  @Field({ nullable: true })
  referral_code?: string;

  @Field({ nullable: true })
  referral_invalid?: boolean;

  @Field(type => Float, { nullable: true })
  total_quantity?: number;

  @Field(type => [String], { nullable: true })
  errors?: string[];
}