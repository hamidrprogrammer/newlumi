import { z } from 'zod';

// Common Schemas (likely to be moved to a common file later, but included here for completeness of this feature)
export const MetaLinkSchema = z.object({
  url: z.string().nullable(),
  label: z.string(),
  active: z.boolean(),
});

export const PaginationLinksSchema = z.object({
  first: z.string().url().nullable(),
  last: z.string().url().nullable(),
  prev: z.string().url().nullable(),
  next: z.string().url().nullable(),
});

export const MetaSchema = z.object({
  current_page: z.number(),
  from: z.number().nullable(),
  last_page: z.number(),
  links: z.array(MetaLinkSchema),
  path: z.string().url(),
  per_page: z.number(),
  to: z.number().nullable(),
  total: z.number(),
});

// Schemas for Product Categories Tree
export const ProductCategorySchema = z.object({
  id: z.number(),
  partner_id: z.number().nullable(),
  file_id: z.number().nullable(),
  subdomain_id: z.number().nullable(),
  parent_id: z.number().nullable(),
  left_tree: z.number(),
  right_tree: z.number(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  slug: z.string(),
  sort: z.number().nullable(),
  show_in_website: z.boolean(),
  show_in_header: z.boolean(),
  deleted_at: z.string().datetime().nullable(),
  only_partner: z.number(), // Assuming 0 or 1, could be boolean
  color: z.string().nullable(),
  cover_file_id: z.number().nullable(),
  name: z.string(),
  file: z.unknown().nullable(), // Or a specific file schema if defined
  cover_file: z.unknown().nullable(), // Or a specific file schema if defined
});

// Recursive schema for children
export type ProductCategoryType = z.infer<typeof ProductCategorySchema> & {
  children: ProductCategoryType[];
};
export const ProductCategoryTreeSchema: z.ZodType<ProductCategoryType> = ProductCategorySchema.extend({
  children: z.lazy(() => ProductCategoryTreeSchema.array()),
});

export const ProductCategoriesTreeResponseSchema = z.object({
  data: z.array(ProductCategoryTreeSchema),
});

export const GetProductCategoriesTreeParamsSchema = z.object({
  'orderBy[sort]': z.enum(['ASC', 'DESC']).optional(), // Based on 'orderBy[sort]=DESC'
});


// Schemas for Product Variations
export const AttributeTypeOptionSchema = z.object({
  id: z.number(),
  attribute_type_id: z.number(),
  file_id: z.number().nullable(),
  sort: z.number().nullable(),
  file_path: z.string().nullable(),
  value: z.string(),
});

export const AttributeTypeSchema = z.object({
  id: z.number(),
  slug: z.string(),
  name: z.string(),
  title: z.string().nullable(),
  position: z.number().nullable(),
  picture_connectable: z.boolean(),
  selectable_type: z.string(), // e.g., "dropdown", "box"
});

export const AttributeSchema = z.object({
  id: z.number(),
  visible: z.boolean(),
  is_auto_generated: z.boolean(),
  value: z.string(),
  attribute_type_id: z.number(),
  attribute_type_option_id: z.number(),
  product_variation_id: z.number(),
  attributeType: AttributeTypeSchema,
  attributeTypeOption: AttributeTypeOptionSchema,
});

export const ProductInfoSchema = z.object({
  price_visible: z.boolean(),
  id: z.number(),
  name: z.string(),
  file: z.string().url(),
});

export const SalePriceSchema = z.object({
  unit_price: z.number().nullable(),
  value: z.number(),
  gross_value: z.number(),
  gross_value_string: z.string(),
  gross_value_string_template: z.string(),
  value_string: z.string(),
  value_string_template: z.string(),
  iso3: z.string(),
  user_discount: z.number(),
  user_discount_string: z.string(),
  user_discount_string_template: z.string(),
  value_after_discount: z.number(),
  value_after_discount_string: z.string(),
  value_after_discount_string_template: z.string(),
  gross_value_after_discount: z.number(),
  gross_value_after_discount_string: z.string(),
  gross_value_after_discount_string_template: z.string(),
  vat_percent: z.number(),
});

export const TransportationSchema = z.object({
  value: z.number(),
  vat_percent: z.number(),
  gross_value: z.number(),
  iso3: z.string(),
});

export const AvailabilitySchema = z.object({
  id: z.number(),
  name: z.string(),
  average_days: z.number(),
  file_id: z.number(),
  file: z.string().url(),
});

export const ProductVariationFileSchema = z.object({
  id: z.number(),
  type: z.string(), // "image"
  title: z.string(),
  link: z.string().url(),
  content_hash: z.string(),
  file: z.string().url(),
  file_self_id: z.number(),
});

export const ShippingProfileIconResourceSchema = z.object({
  id: z.number(),
  extension: z.string(),
  enabled: z.boolean(),
  name: z.string(),
  type: z.string(), // "public"
  root_file: z.object({
    id: z.number(),
    path: z.string().url(),
    size: z.number(),
    mime_type: z.string(),
  }),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export const ShippingProfileSchema = z.object({
  id: z.number(),
  type: z.string(), // "post"
  name: z.string(), // "DHL Express"
  is_active: z.boolean(),
  icon_id: z.number(),
  Icon: z.string().url(), // Note: API response has "Icon" with capital I
  iconResource: ShippingProfileIconResourceSchema,
});
export const SubscriptionSchema = z.object({
  id: z.number().nullable().optional(),
  interval_days: z.number().nullable().optional(),
  free_on_first_time: z.boolean().nullable().optional(),
  number_of_discount_periods: z.number().nullable().optional(),
  unit_price: z.number().nullable().optional(),
  value: z.number().nullable().optional(),
  value_string: z.string().nullable().optional(),
  value_string_template: z.string().nullable().optional(),
  gross_value: z.number().nullable().optional(),
  gross_value_string: z.string().nullable().optional(),
  gross_value_string_template: z.string().nullable().optional(),
  iso3: z.string().nullable().optional(),
  user_discount: z.number().nullable().optional(),
  user_discount_string: z.string().nullable().optional(),
  user_discount_string_template: z.string().nullable().optional(),
  value_after_discount: z.number().nullable().optional(),
  value_after_discount_string: z.string().nullable().optional(),
  value_after_discount_string_template: z.string().nullable().optional(),
  gross_value_after_discount: z.number().nullable().optional(),
  gross_value_after_discount_string: z.string().nullable().optional(),
  gross_value_after_discount_string_template: z.string().nullable().optional(),
  vat_percent: z.number().nullable().optional(),
});

export const ProductVariationSchema = z.object({
id: z.number().optional(), // ← means: not required, but must be a number if present
  number: z.string(),
  slug: z.string().nullable(),
volume: z.string().nullable().optional(),
  is_active: z.boolean(),
  is_wallet_coin_product: z.boolean(),
quantity: z.preprocess(val => String(val), z.string()),
  // maximum_sale_for_each_user: z.number().nullable(),
  // max_order_quantity: z.number().optional(),
  // min_order_quantity: z.number().optional(),
  type: z.string().optional(), // "single"
  average_rating: z.number().optional(),
  review_count: z.number().optional(),
  name: z.string(),
  attributes: z.array(AttributeSchema),
  product: ProductInfoSchema,
  unit: z.unknown().nullable(), // Define if structure is known
  description: z.string(),
  preview_text: z.string(),
  technical_data: z.string(),
  meta_description: z.string().nullable(),
  meta_keywords: z.string().nullable(),
  sale_price: SalePriceSchema,
  subscriptionPrices:  z.array(SubscriptionSchema), // Define if structure is known
  transportation: TransportationSchema,
  availability: AvailabilitySchema,
  productCategories: z.array(z.unknown()), // Define if structure is known, likely ProductCategorySchema
  crossSellingVariations: z.array(z.unknown()), // Define if structure is known
  multiProductVariations: z.array(z.unknown()), // Define if structure is known
  productVariationFiles: z.array(ProductVariationFileSchema).nullable().optional(),
  shippingProfiles: z.array(ShippingProfileSchema).nullable().optional(),
  userVariationPrices: z.array(z.unknown()), // Define if structure is known
});
export type ProductVariation = z.infer<typeof ProductVariationSchema>;

export const ProductVariationsResponseSchema = z.object({
  data: z.array(ProductVariationSchema),
  links: PaginationLinksSchema.optional(), // Optional for single product fetch
  meta: MetaSchema.optional(), // Optional for single product fetch
});

export const GetProductVariationsParamsSchema = z.object({
  // productId is a path param, handled separately in the query function
  countryId: z.union([z.string(), z.number()]).transform(val => String(val)),
});

export const ListProductVariationsParamsSchema = z.object({
  isArchive: z.boolean().optional(),
  deliveryContactGroupId: z.union([z.string(), z.number()]).transform(val => String(val)).optional(),
  countryId: z.union([z.string(), z.number()]).transform(val => String(val)),
  ids: z.array(z.union([z.string(), z.number()])).optional(),
  // Add other potential query params like page, per_page, orderBy if needed for this specific list endpoint
  page: z.number().optional(),
  per_page: z.number().optional(),
  'orderBy[column]': z.string().optional(), // Example for generic sorting
  'orderBy[direction]': z.enum(['asc', 'desc']).optional(),
});

// Assuming the list endpoint returns a paginated list of product variations
export const ListProductVariationsResponseSchema = z.object({
  data: z.array(ProductVariationSchema),
  links: PaginationLinksSchema,
  meta: MetaSchema,
});
