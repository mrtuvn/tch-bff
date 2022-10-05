import { Field, Int, Float, InterfaceType } from "@nestjs/graphql";
import { Category } from "../type/category.type";
import { CategoryInterface } from "./category.interface";
import { ComplexTextValue } from "../type/complex_text_value.type";
import { ProductImage } from "../type/product_image.type";
import { MediaGalleryInterface } from "./media_gallery.interface";
import { MediaGallery } from "../type/media_gallery.type";
import { MediaGalleryEntry } from "../type/media_gallery_entry.type";
import { ProductPrices } from "../type/product_prices.type";
import { PriceRange } from "../type/price_range.type";
import { TierPrice } from "../type/tier_price.type";
import { ProductLinksInterface } from "./product_links.interface";
import { ProductCampaigns } from "../type/product_campaigns.type";
import { ProductLinks } from "../type/product_links.type";
import { ProductStockStatus } from "../enum/product_stock_status.enum";
import { ProductTierPrices } from "../type/product_tier_prices.type";
import { UrlRewrite } from "../type/url_rewrite.type";
import { Website } from "../type/website.type";
import { ProductLabel } from "../type/product_label.type";
import { ProductReviews } from "../type/product_reviews.type";
import { Brand } from "../type/brand.type";
import { CartLabel } from "../type/cart_label.type";
import { ProductTab } from "../type/product_tab.type";
import { CustomAttribute } from "../type/custom_attribute.type";
import { Warranty } from "../type/warranty.type";
import { ProductSuppliers } from "../type/product_suppliers.type";

@InterfaceType({
  resolveType(product) {
    // console.log('ProductInterface', product);
    if (product.configurable_options) {
      return "ConfigurableProduct";
    }
    if (product.downloadable_product_links) {
      return "DownloadableProduct";
    }
    if (product.dynamic_price) {
      return "BundleProduct";
    }
    return "SimpleProduct";
  }
})
export abstract class ProductInterface {

  @Field({ nullable: true })
  msrp?: number;

  @Field(type => Int, { nullable: true })
  attribute_set_id?: number;

  @Field(type => Brand, { nullable: true })
  brand?: Brand;

  @Field({ nullable: true })
  canonical_url?: string;

  @Field(type => [CategoryInterface], { nullable: true })
  categories?: CategoryInterface[];

  @Field(type => [CategoryInterface], { nullable: true })
  categories_en?: CategoryInterface[];

  @Field(type => [ProductCampaigns], { nullable: true })
  campaigns?: ProductCampaigns[];

  @Field({ nullable: true })
  country_of_manufacture?: string;

  @Field({ nullable: true })
  created_at?: string;

  @Field(type => [ProductInterface], { nullable: true })
  crosssell_products?: ProductInterface[];

  @Field(type => Int, { nullable: true })
  category_breadcrumb?: number;

  @Field(type => [CustomAttribute], { nullable: true })
  custom_attributes?: CustomAttribute[];

  @Field(type => [ProductTab], { nullable: true })
  custom_tabs?: ProductTab[];

  @Field(type => ComplexTextValue, { nullable: true })
  description?: ComplexTextValue;

  @Field({ nullable: true })
  s_display_uom?: string;

  @Field({ nullable: true })
  gift_message_available?: string;

  @Field({ nullable: true })
  gift_wrapping_available?: boolean;

  @Field(type => Int, { nullable: true })
  id?: number;

  @Field(type => ProductImage, { nullable: true })
  image?: ProductImage;

  @Field(type => ProductImage, { nullable: true })
  second_image?: ProductImage;

  @Field({ nullable: true })
  productbrands?: string;

  @Field({ nullable: true })
  is_member_price?: boolean;

  @Field({ nullable: true })
  is_returnable?: string;

  @Field(type => Category, { nullable: true })
  main_category?: Category;

  @Field(type => Category, { nullable: true })
  main_category_en?: Category;

  @Field(type => Int, { nullable: true })
  manufacturer?: number;

  @Field(type => Int, { nullable: true })
  max_qty?: number;

  @Field(type => Int, { nullable: true })
  min_qty?: number;

  @Field(type => [MediaGallery], { nullable: true })
  media_gallery?: MediaGallery[];

  @Field(type => [MediaGalleryEntry], { nullable: true })
  media_gallery_entries?: MediaGalleryEntry[];

  @Field({ nullable: true })
  meta_description?: string;

  @Field({ nullable: true })
  meta_keyword?: string;

  @Field({ nullable: true })
  meta_title?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  new_from_date?: string;

  @Field({ nullable: true })
  new_to_date?: string;

  @Field(type => Float, { nullable: true })
  only_x_left_in_stock?: number;

  @Field({ nullable: true })
  options_container?: string;

  @Field(type => ProductPrices, { nullable: true })
  price?: ProductPrices;

  @Field(type => PriceRange, { nullable: true })
  price_range?: PriceRange;

  @Field(type => [TierPrice], { nullable: true })
  price_tiers?: TierPrice[];

  @Field(type => [ProductLinks], { nullable: true })
  product_links?: ProductLinks[];

  @Field(type => [String], { nullable: true })
  product_tags?: String[];

  @Field(type => Float, { nullable: true })
  rating_summary?: number;

  @Field(type => [ProductInterface], { nullable: true })
  related_products?: ProductInterface[];

  @Field(type => Int, { nullable: true })
  review_count?: number;

  @Field(type => Int, { nullable: true })
  recommended_count?: number;

  @Field(type => Int, { nullable: true })
  recommended_percent?: number;

  @Field(type => ProductReviews, { nullable: true })
  reviews?: Promise<ProductReviews>;

  @Field(type => ComplexTextValue, { nullable: true })
  short_description?: ComplexTextValue;

  @Field({ nullable: true })
  sku?: string;

  @Field({ nullable: true })
  s_added_service_product_register?: boolean;

  @Field({ nullable: true })
  s_allow_note_to_picker?: boolean;

  @Field({ nullable: true })
  s_ean?: string;

  @Field({ nullable: true })
  s_gift_wrapping_placeholder?: string;

  @Field({ nullable: true })
  s_note_to_picker_placeholder?: string;

  @Field(type => ProductImage, { nullable: true })
  small_image?: ProductImage;

  @Field({ nullable: true })
  special_from_date?: string;

  @Field(type => Float, { nullable: true })
  special_price?: number;

  @Field({ nullable: true })
  special_to_date?: string;

  // @Field(type => ProductStockStatus, {nullable: true})
  // stock_status?: ProductStockStatus
  @Field({ nullable: true })
  stock_status?: string;

  @Field(type => ProductSuppliers, { nullable: true })
  supplier?: ProductSuppliers;

  @Field({ nullable: true })
  swatch_image?: string;

  @Field(type => Int, { nullable: true })
  tax_class_id?: number;

  @Field(type => ProductImage, { nullable: true })
  thumbnail?: ProductImage;

  @Field(type => Float, { nullable: true })
  tier_price?: number;

  @Field(type => [ProductTierPrices], { nullable: true })
  thumbtier_pricesnail?: ProductTierPrices[];

  @Field({ nullable: true })
  type_id?: string;

  @Field({ nullable: true })
  updated_at?: string;

  @Field(type => [ProductInterface], { nullable: true })
  upsell_products?: ProductInterface[];

  @Field({ nullable: true })
  url_key?: string;

  @Field({ nullable: true })
  url_path?: string;

  @Field({ nullable: true })
  url_suffix?: string;

  @Field(type => [UrlRewrite], { nullable: true })
  url_rewrites?: UrlRewrite[];

  @Field({ nullable: true })
  s_unit_divider?: string;

  @Field(type => [Website], { nullable: true })
  websites?: Website[];

  @Field(type => [ProductLabel], { nullable: true })
  labels?: ProductLabel[];

  @Field(type => [CartLabel], { nullable: true })
  product_cart_label?: CartLabel[];

  @Field({ nullable: true })
  x_left?: number;

  @Field({ nullable: true })
  have_size_chart?: Boolean;

  @Field({ nullable: true })
  size_chart_url?: String;

  @Field(type => [Warranty], { nullable: true })
  warranty?: Warranty[];
}
