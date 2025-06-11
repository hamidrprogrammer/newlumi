import { z } from 'zod';
import { UserCountrySchema, CurrencySchema, UserAddressSchema as UserProfileAddressSchema } from './userSchema'; // Reusing some schemas

// Common Schemas (assuming these would be in a shared location or already defined)
const MetaLinkSchema = z.object({
  url: z.string().url().nullable(),
  label: z.string(),
  active: z.boolean(),
});

const PaginationLinksSchema = z.object({
  first: z.string().url().nullable(),
  last: z.string().url().nullable(),
  prev: z.string().url().nullable(),
  next: z.string().url().nullable(),
});

const MetaSchema = z.object({
  current_page: z.number(),
  from: z.number().nullable(),
  last_page: z.number(),
  links: z.array(MetaLinkSchema),
  path: z.string().url(),
  per_page: z.number(),
  to: z.number().nullable(),
  total: z.number(),
});

// Simplified Contact Group Info for embedding in orders
// A more detailed one exists in userSchema (UserInvoiceContactGroupSchema)
// This is for cases where only basic info is needed.
export const BasicContactGroupInfoSchema = z.object({
  id: z.number(),
  first_name: z.string().nullable(),
  last_name: z.string().nullable(),
  company_name: z.string().nullable(),
  full_name: z.string().optional(), // Often derived
  address: UserProfileAddressSchema.pick({ // Pick only essential address fields
    address1: true,
    city: true,
    postal_code: true,
    country: UserCountrySchema.pick({ name: true, iso2: true }).optional(), // Further simplify country
  }).optional().nullable(),
});

// Order Position (common for subscriptions and sales)
export const OrderPositionSchema = z.object({
  id: z.number(),
  product_variation_id: z.number(),
  product_variation_name: z.string().optional(), // Name might not always be present
  product_variation_sku: z.string().optional(), // SKU or number
  quantity: z.number(),
  price_per_unit_net: z.number().optional(),
  price_per_unit_gross: z.number(),
  total_price_net: z.number().optional(),
  total_price_gross: z.number(),
  vat_percent: z.number().optional(),
  // Add other common fields like discounts, etc. if applicable
});



const PersonSchema = z.object({
  id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  gender: z.string(),
  full_name: z.string(),
  company_name: z.string(),
  created_by: z.any(),
});

const UserSchema = z.object({
  id: z.number(),
  invoice_contact_group_id: z.any(),
  sponsor_id: z.any(),
  avatar: z.any(),
  content_hash: z.any(),
  username: z.any(),
  telephone_number: z.any(),
  email: z.string().email(),
  discount_ratio: z.any(),
  person: PersonSchema,
});

const OrderStatusTranslateSchema = z.object({
  order_status_id: z.number(),
  locale: z.string(),
  name: z.string(),
});

const OrderStatusSchema = z.object({
  id: z.number(),
  number: z.number(),
  color: z.string(),
  slug: z.string(),
  name: z.string(),
  translate: z.array(OrderStatusTranslateSchema),
});

const DataSchema = z.object({
  mode: z.string(),
  sandbox_merchant_code: z.string(),
  sandbox_api_key: z.string(),
  sandbox_client_key: z.string(),
  sandbox_webhook_hmac: z.string(),
});

const RootFileSchema = z.object({
  id: z.number(),
  path: z.string().url(),
  size: z.number(),
  mime_type: z.string(),
});

const FileSchema = z.object({
  id: z.number(),
  extension: z.string(),
  enabled: z.boolean(),
  name: z.string(),
  type: z.string(),
  root_file: RootFileSchema,
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

const PaymentMethodTranslateSchema = z.object({
  payment_method_id: z.number(),
  locale: z.string(),
  name: z.string(),
});

const PaymentMethodSchema = z.object({
  id: z.number(),
  payment_method_type_id: z.number(),
  price_value: z.any(),
  price_id: z.any(),
  file_id: z.number(),
  is_default: z.number(),
  is_active: z.boolean(),
  is_embedded: z.boolean(),
  company_id: z.number(),
  payment_cost: z.number(),
  payment_percent: z.number(),
  sort: z.number(),
  _data: DataSchema,
  name: z.string(),
  is_link_generatable: z.boolean(),
  file_path: z.string().url(),
  translate: z.array(PaymentMethodTranslateSchema),
  file: FileSchema,
});

export const OrderSubscriptionSchema = z.object({
  id: z.number(),
  number: z.string(),
  payment_status: z.string(),
  order_date: z.string().datetime(),
  time_period: z.any(),
  created_at: z.string().datetime(),
  expires_at: z.string().datetime().nullable(),
  last_order_sale_date: z.string().datetime(),
  next_order_sale_date: z.string().datetime().nullable().optional(),
  adyen_payment_method: z.string(),
  last_order_delivery_date: z.any(),
  total_gross_amount_string: z.string(),
  total_gross_amount_string_template: z.string(),
  total_gross_amount: z.number(),
  total_net_amount_string: z.string(),
  total_net_amount_string_template: z.string(),
  total_net_amount: z.number(),
  total_vat_amount_string: z.string(),
  user: UserSchema,
  orderStatus: OrderStatusSchema,
  paymentMethod: PaymentMethodSchema,
});




export const OrderSubscriptionListResponseSchema = z.object({
  data: z.array(OrderSubscriptionSchema),
 
});


export const GetOrderSubscriptionListParamsSchema = z.object({
  page: z.number().int().positive().optional(),
  per_page: z.number().int().positive().optional(),
  'orderBy[id]': z.enum(['ASC', 'DESC']).optional(),
  status: z.string().optional(), // Example filter
  // Add other potential filter/sort params if known
});

// Order Sale Schemas


export const GetOrderSaleListParamsSchema = z.object({
  page: z.number().int().positive().optional(),
  per_page: z.number().int().positive().optional(),
  'orderBy[id]': z.enum(['ASC', 'DESC']).optional(),
  status: z.string().optional(),
  payment_status: z.string().optional(),
  // Add other potential filter/sort params if known
});

const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  number: z.string(),
  maximum_sale_for_each_user: z.any(),
  is_active: z.boolean(),
  price_visible: z.boolean(),
  default_vat: z.number(),
  auto_active_net_stock: z.boolean(),
  auto_deactive_net_stock: z.boolean(),
  max_order_quantity: z.any(),
  min_order_quantity: z.number(),
  interval_order_quantity: z.any(),
  release_date: z.string().datetime(),
  available_until: z.any(),
  file_id: z.number(),
  sort: z.any(),
  slug: z.string(),
  file: z.string().url(),
  productCategories: z.array(z.unknown()),
  partner: z.any(),
  main_variation_id: z.number(),
});

const ProductVariationFileSchema = z.object({
  id: z.number().optional().nullable(),
  type: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  link: z.string().url().optional().nullable(),
  content_hash: z.string().optional().nullable(),
  sort: z.any().optional().nullable(),
  file: z.string().url().optional().nullable(),
  file_self_id: z.number().optional().nullable(),
});

const ProductVariationSchema = z.object({
  id: z.number().optional().nullable(),
  sale_forecast: z.any().optional().nullable(),
  number: z.string().optional().nullable(),
  is_main: z.boolean().optional().nullable(),
  only_partner: z.boolean().optional().nullable(),
  is_active: z.boolean().optional().nullable(),
  is_dangerous_goods: z.boolean().optional().nullable(),
  is_wallet_coin_product: z.boolean().optional().nullable(),
  slug: z.any().optional().nullable(),
  has_serial_number: z.boolean().optional().nullable(),
  inherit: z.boolean().optional().nullable(),
  quantity: z.string().optional().nullable(),
  maximum_sale_for_each_user: z.any().optional().nullable(),
  max_order_quantity: z.any().optional().nullable(),
  min_order_quantity: z.number().optional().nullable(),
  release_date: z.string().datetime().optional().nullable(),
  available_until: z.any().optional().nullable(),
  auto_active_net_stock: z.boolean().optional().nullable(),
  auto_deactivate_net_stock: z.boolean().optional().nullable(),
  type: z.string().optional().nullable(),
  average_rating: z.number().optional().nullable(),
  by_exist_product: z.any().optional().nullable(),
  review_count: z.number().optional().nullable(),
  point: z.any().optional().nullable(),
  weight: z.any().optional().nullable(),
  unit_id: z.any().optional().nullable(),
  availability_id: z.number().optional().nullable(),
  vat: z.number().optional().nullable(),
  free_for_customer: z.number().optional().nullable(),
  free_for_partner: z.number().optional().nullable(),
  free_for_customer_value: z.number().optional().nullable(),
  free_for_partner_value: z.number().optional().nullable(),
  can_be_bought_once: z.number().optional().nullable(),
  voucherable: z.number().optional().nullable(),
  voucherable_for_partner: z.number().optional().nullable(),
  max_free_products: z.number().optional().nullable(),
  name: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  preview_text: z.string().optional().nullable(),
  technical_data: z.string().optional().nullable(),
  meta_description: z.any().optional().nullable(),
  meta_keywords: z.any().optional().nullable(),
  free_logistics_for_customer: z.boolean().optional().nullable(),
  free_logistics_for_partner: z.boolean().optional().nullable(),
  product: ProductSchema.optional().nullable(),
  productVariationFiles: z.array(ProductVariationFileSchema).optional().nullable(),
});

const OrderPositionTypeTranslateSchema = z.object({
  order_position_type_id: z.number(),
  locale: z.string(),
  name: z.string(),
});

const OrderPositionTypeSchema = z.object({
  id: z.number(),
  slug: z.string(),
  name: z.string(),
  translate: z.array(OrderPositionTypeTranslateSchema),
});

const VatSchema = z.object({
  id: z.number(),
  country_id: z.number(),
  number: z.string().nullable(),
  valid_from: z.string().datetime(),
  value: z.number(),
});

const PositionSchema = z.object({
  id: z.number().optional(),
  order_position_type_id: z.number().nullable().optional(),
  product_variation_id: z.number().nullable().optional(),
  quantity: z.number().nullable().optional(),
  price_value: z.number().nullable().optional(),
  interval_days: z.number().nullable().optional(),
  last_order_sale_date: z.string().datetime().nullable().optional(),
  next_order_sale_date: z.any().nullable().optional(),
  description: z.any().nullable().optional(),
  sort: z.number().nullable().optional(),
  past_periods_count: z.number().nullable().optional(),
  discount: z.number().nullable().optional(),
  discount_point: z.number().nullable().optional(),
  number_of_discount_periods: z.number().nullable().optional(),
  ext_position_number: z.any().nullable().optional(),
  vat_id: z.number().nullable().optional(),
  vat_value: z.number().nullable().optional(),
  order_subscription_id: z.number().nullable().optional(),
  net_price: z.number().nullable().optional(),
  gross_price: z.number().nullable().optional(),
  customer_reference: z.any().nullable().optional(),
  estimate_delivery_date: z.any().nullable().optional(),
  data_current: z.any().nullable().optional(),
  gross_amount: z.number().nullable().optional(),
  net_amount: z.number().nullable().optional(),
  vat_amount: z.number().nullable().optional(),
  point: z.number().nullable().optional(),
  created_at: z.string().datetime().nullable().optional(),
  updated_at: z.string().datetime().nullable().optional(),
  single_gross_amount: z.number().nullable().optional(),
  parent_id: z.any().nullable().optional(),
  productVariation: ProductVariationSchema.nullable().optional(),
  orderPositionType: OrderPositionTypeSchema.nullable().optional(),
  vat: VatSchema.nullable().optional(),
  orderPositionMlmDetail: z.any().nullable().optional(),
});

const CurrencyTranslateSchema = z.object({
  currency_id: z.number(),
  locale: z.string(),
  name: z.string(),
});

const CurrencySchema = z.object({
  name: z.string(),
  id: z.number(),
  ratio: z.number(),
  is_default: z.boolean(),
  symbol: z.string(),
  iso3: z.string(),
  is_active: z.boolean(),
  translate: z.array(CurrencyTranslateSchema),
});
export const OrderSaleSchema = z.object({
  id: z.number(),
  order_number: z.string().optional(), // Might not always be present or could be same as id
  payment_status: z.string(), // e.g., "pending", "paid", "failed"
  payment_method_id: z.number().nullable().optional(),
  payment_method_name: z.string().nullable().optional(),
  shipping_profile_id: z.number().nullable().optional(),
  shipping_profile_name: z.string().nullable().optional(),
  tracking_number: z.string().nullable().optional(),
  currency: CurrencySchema.pick({ iso3: true, symbol: true }).optional(),
  total_gross_amount: z.number(),
  total_net_amount: z.number().optional(),
  total_vat_amount: z.number().optional(),
  shipping_cost_gross: z.number().optional(),
  shipping_cost_net: z.number().optional(),
  discount_amount_gross: z.number().optional(),
  order_date: z.string().datetime(),
  orderStatus:z.object({
  name: z.string(),
  color: z.string(),

}),
  invoice_contact_group: BasicContactGroupInfoSchema.nullable().optional(),
  delivery_contact_group: BasicContactGroupInfoSchema.nullable().optional(),
  // invoice_url: z.string().url().nullable().optional(),
  // delivery_note_url: z.string().url().nullable().optional(),
});

export const OrderSaleListResponseSchema = z.object({
  data: z.array(OrderSaleSchema),
  links: PaginationLinksSchema,
  meta: MetaSchema,
});
const LanguageSchema = z.object({
  id: z.number(),
  title: z.string(),
  locale: z.string(),
  is_ltr: z.boolean(),
  is_default: z.boolean(),
  is_active: z.boolean(),
});

const CountryVatSchema = z.object({
    id: z.number(),
    country_id: z.number(),
    number: z.string().nullable(),
    valid_from: z.string().datetime().nullable(),
    value: z.number(),
})

const CountryTranslateSchema = z.object({
    country_id: z.number(),
    locale: z.string(),
    name: z.string(),
});

const CountrySchema = z.object({
  id: z.number(),
  name: z.string(),
  default_vat: z.number(),
  default_warranty_days: z.number(),
  max_tax_free_trade: z.number().nullable(),
  max_small_business_trade: z.any(),
  is_eeu: z.boolean(),
  iso2: z.string(),
  iso3: z.string(),
  is_active: z.boolean(),
  is_default: z.boolean(),
  timezone: z.any(),
  duty_percentage_of_goods: z.number(),
  duty_method: z.string(),
  currency: CurrencySchema,
  vats: z.array(CountryVatSchema),
  translate: z.array(CountryTranslateSchema),
});

// const PartnerDataSchema = z.object({
//   upline: z.array(z.unknown()),
//   is_active_for_bonus: z.string(),
//   active_for_bonus_expire_date: z.string(),
//   dashboard: z.object({
//     points_goal: z.number(),
//   }),
//   us_tax_information: z.object({
//     first_name: z.string(),
//     last_name: z.string(),
//     phone_number: z.string(),
//     registration_type: z.string(),
//     certify: z.boolean(),
//     digital_signature_full_name: z.string(),
//     date: z.string().datetime(),
//     company_name: z.string(),
//     "employer_identification_number_(EIN)": z.string(),
//     entity_type: z.string(),
//     address: z.string(),
//     contact_group_id: z.number(),
//   }),
//   us_bank_account: z.object({
//     account_name: z.string(),
//     account_number: z.any(),
//     routing_number: z.string(),
//     bank_name: z.string(),
//   }),
// });

// const PartnerSchema = z.object({
//   id: z.number(),
//   user_id: z.number(),
//   sale_forecast: z.number(),
//   parent_id: z.any(),
//   left_tree: z.number(),
//   right_tree: z.number(),
//   mobile: z.string(),
//   bank_name: z.string(),
//   iban: z.string(),
//   swift: z.string(),
//   receive_vat_responsible: z.boolean(),
//   send_vat_responsible: z.boolean(),
//   active_auto_bonus: z.boolean(),
//   active_training_bonus: z.boolean(),
//   receive_commission: z.boolean(),
//   can_buy: z.boolean(),
//   over_personal_turnover: z.boolean(),
//   created_at: z.string().datetime(),
//   updated_at: z.string().datetime(),
//   is_active: z.boolean(),
//   is_approved: z.boolean(),
//   public_findable: z.boolean(),
//   country_id: z.number(),
//   logo_id: z.any(),
//   company_id: z.number(),
//   coach_id: z.any(),
//   is_coach: z.boolean(),
//   coach_percentage: z.number(),
//   quit_at: z.any(),
//   receive_incentive_bonus: z.boolean(),
//   is_promotional_article_active: z.boolean(),
//   is_full_legals_responsible: z.boolean(),
//   has_info_service: z.boolean(),
//   fullname: z.string(),
//   _data: PartnerDataSchema,
//   sponsors_count: z.number(),
//   partners_count: z.number(),
//   coachs_count: z.number(),
//   logo_path: z.any(),
//   subdomains_count: z.any(),
//   total_time_coaching: z.string(),
// });

// const PersonSchema = z.object({
//   id: z.number(),
//   first_name: z.string(),
//   last_name: z.string(),
//   gender: z.string(),
//   full_name: z.string(),
//   company_name: z.string(),
//   created_by: z.any(),
// });

// const RoleSchema = z.object({
//   id: z.number(),
//   title: z.string(),
//   company_visibility: z.boolean(),
//   owner_visibility: z.boolean(),
//   slug: z.string(),
// });

// const UserSchema = z.object({
//   id: z.number(),
//   avatar: z.string().url(),
//   content_hash: z.string(),
//   verified: z.boolean(),
//   username: z.string(),
//   telephone_number: z.string(),
//   email: z.string().email(),
//   discount_ratio: z.number(),
//   roles: z.array(RoleSchema),
//   walletBalance: z.string(),
//   payment_method_id: z.number(),
//   is_vat_valid: z.number(),
//   communication_by_letter: z.boolean(),
//   vat_number: z.string(),
//   tax_number: z.string(),
//   credit_limit: z.string(),
//   eori_number: z.string(),
//   use_gln_indocuments: z.any(),
//   default_shipping_method_id: z.any(),
//   default_payment_terms_id: z.any(),
//   file_id: z.number(),
//   point: z.any(),
//   is_active: z.boolean(),
//   _data: z.object({ invoice_express_client_id: z.number() }),
//   birth_date: z.string(),
//   created_at: z.string().datetime(),
//   updated_at: z.string().datetime(),
//   invoice_contact_group_id: z.number(),
//   flag_id: z.any(),
//   dunning_level_id: z.any(),
//   able_to_see_downline: z.any(),
//   old_id: z.any(),
//   sponsor_id: z.any(),
//   old_sponsor_id: z.any(),
//   career_step_id: z.number(),
//   customer_step_id: z.any(),
//   two_factor_enable: z.boolean(),
//   newsletter_active: z.boolean(),
//   partner_id: z.number(),
//   language: LanguageSchema,
//   country: CountrySchema,
//   partner: PartnerSchema,
//   person: PersonSchema,
//   shippingMethod: z.any(),
// });

const ContactGroupTranslateSchema = z.object({
  contact_group_id: z.number(),
  locale: z.string(),
  title: z.string(),
});

const AddressSchema = z.object({
  id: z.number(),
  city: z.string(),
  state: z.string(),
  state_id: z.number(),
  address1: z.string(),
  address2: z.any(),
  address3: z.any(),
  address4: z.any(),
  latitude: z.string(),
  longitude: z.string(),
  postal_code: z.string(),
  house_number: z.any(),
  additional: z.any(),
  post_identity: z.any(),
  title: z.string(),
  pack_station_number: z.any(),
  is_pack_station: z.boolean(),
  gln_number: z.any(),
  is_post_office: z.boolean(),
  address_complete: z.string(),
  country: CountrySchema,
});

const PhoneSchema = z.object({
  id: z.number(),
  type: z.string(),
  number: z.string(),
});

const InvoiceContactGroupSchema = z.object({
  id: z.number().optional().nullable(),
  title: z.string().optional().nullable(),
  user_id: z.number().optional().nullable(),
  country_id: z.number().optional().nullable(),
  first_name: z.string().optional().nullable(),
  last_name: z.string().optional().nullable(),
  full_name: z.string().optional().nullable(),
  gender: z.any().optional().nullable(),
  company_name: z.string().optional().nullable(),
  is_archive: z.boolean().optional().nullable(),
  translate: z.array(ContactGroupTranslateSchema).optional().nullable(),
  websites: z.array(z.unknown()).optional().nullable(),
  address: AddressSchema.optional().nullable(),
  country: CountrySchema.optional().nullable(),
  phones: z.array(PhoneSchema).optional().nullable(),
  emails: z.array(z.unknown()).optional().nullable(),
});

// const OrderStatusTranslateSchema = z.object({
//     order_status_id: z.number(),
//     locale: z.string(),
//     name: z.string(),
// });

// const OrderStatusSchema = z.object({
//   id: z.number(),
//   number: z.number(),
//   color: z.string(),
//   slug: z.string(),
//   name: z.string(),
//   translate: z.array(OrderStatusTranslateSchema),
// });

// const PaymentMethodTypeSchema = z.object({
//   id: z.number(),
//   title: z.string(),
//   data: z.record(z.string()),
//   is_active: z.boolean(),
// });

// const PaymentMethodTranslateSchema = z.object({
//     payment_method_id: z.number(),
//     locale: z.string(),
//     name: z.string(),
// });

// const RootFileSchema = z.object({
//     id: z.number(),
//     path: z.string().url(),
//     size: z.number(),
//     mime_type: z.string(),
// });

// const FileSchema = z.object({
//     id: z.number(),
//     extension: z.string(),
//     enabled: z.boolean(),
//     name: z.string(),
//     type: z.string(),
//     root_file: RootFileSchema,
//     created_at: z.string().datetime(),
//     updated_at: z.string().datetime(),
// });

// const PaymentMethodSchema = z.object({
//   id: z.number(),
//   payment_method_type_id: z.number(),
//   price_value: z.any(),
//   price_id: z.any(),
//   file_id: z.number(),
//   is_default: z.number(),
//   is_active: z.boolean(),
//   is_embedded: z.boolean(),
//   company_id: z.number(),
//   payment_cost: z.number(),
//   payment_percent: z.number(),
//   sort: z.number(),
//   _data: z.object({
//     mode: z.string(),
//     sandbox_merchant_code: z.string(),
//     sandbox_api_key: z.string(),
//     sandbox_client_key: z.string(),
//     sandbox_webhook_hmac: z.string(),
//   }),
//   name: z.string(),
//   is_link_generatable: z.boolean(),
//   file_path: z.string().url(),
//   paymentMethodType: PaymentMethodTypeSchema,
//   translate: z.array(PaymentMethodTranslateSchema),
//   file: FileSchema,
// });

const CompanySchema = z.object({
  id: z.number(),
  name: z.string(),
  is_active: z.boolean(),
  is_default: z.boolean(),
  is_main: z.boolean(),
  contact_group_id: z.number(),
  tax_number: z.any(),
  iban: z.any(),
  swift: z.any(),
  chief_name: z.any(),
  bank_name: z.any(),
  bic: z.string(),
  vat_number: z.any(),
  logo_path: z.string().url(),
  content_hash: z.string(),
});

const OrderSubscriptionDetailsDataSchema = z.object({
  id: z.number(),
  owner_id: z.any(),
  user_id: z.number(),
  number: z.string(),
  payment_status: z.string(),
  customer_reference: z.any(),
  order_status_id: z.number(),
  payment_method_id: z.number(),
  payment_term_id: z.any(),
  description: z.any(),
  order_date: z.string().datetime(),
  early_payment_discount_days: z.any(),
  early_payment_discount_percentage: z.any(),
  language_id: z.number(),
  shipping_profile_id: z.any(),
  partner_id: z.any(),
  time_period: z.any(),
  total_gross_amount: z.number(),
  total_net_amount: z.number(),
  total_vat_amount: z.number(),
  gross_shipping_cost: z.number(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  expires_at: z.any().optional(),
  factor: z.string(),
  ip: z.any(),
  total_price: z.number(),
  last_order_sale_date: z.string().datetime(),
  next_order_sale_date: z.any().optional(),
  is_editable: z.boolean(),
  subdomain_id: z.any(),
  referrer_id: z.any(),
  early_payment_discount: z.number(),
  early_payment_date: z.any(),
  company_id: z.number(),
  customer_full_name: z.string(),
  last_order_delivery_date: z.any(),
  positions: z.array(PositionSchema),
  currency: CurrencySchema,
  user: UserSchema,
  invoiceContactGroup: InvoiceContactGroupSchema,
  deliveryContactGroup: InvoiceContactGroupSchema, // Reusing InvoiceContactGroupSchema as they are identical
  orderComments: z.any(),
  paymentTerm: z.any(),
  orderStatus: OrderStatusSchema,
  paymentMethod: PaymentMethodSchema,
  language: LanguageSchema,
  owner: z.any(),
  shippingProfile: z.any(),
  referrer: z.any(),
  subdomain: z.any(),
  company: CompanySchema,
  flags: z.array(z.unknown()),
  subscriptions_confirmation_document_link: z.any(),
  subscriptions_confirmation_cancellation_document_link: z.any(),
  total_qv: z.number(),
  total_provision_price: z.number(),
  total_provision_price_discount: z.number(),
  price_percentage_discount: z.array(z.unknown()),
});

export const OrderSubscriptionDetailsSchema = z.object({
  data: OrderSubscriptionDetailsDataSchema,
});
export const OrderSubscriptionResponseDataSchema = z.object({
    data: OrderSubscriptionDetailsDataSchema
});