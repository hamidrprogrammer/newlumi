import { z } from 'zod';
import type {
  BasicContactGroupInfoSchema,
  OrderPositionSchema,
  OrderSubscriptionSchema,
  OrderSubscriptionResponseDataSchema,
  OrderSubscriptionListResponseSchema,
  GetOrderSubscriptionListParamsSchema,
  OrderSaleSchema,
  OrderSaleListResponseSchema,
  GetOrderSaleListParamsSchema,
  OrderSubscriptionDetailsSchema,
} from '../../zodSchemas/orderSchema';
import type { Currency, UserCountry as OrderCountry, UserAddress as OrderAddress } from './user'; // Reusing some base types

// Exporting granular types for better usability
export type BasicContactGroupInfo = z.infer<typeof BasicContactGroupInfoSchema>;
export type OrderPosition = z.infer<typeof OrderPositionSchema>;

// Order Subscription Types
export type OrderSubscription = z.infer<typeof OrderSubscriptionDetailsSchema>;
export type OrderSubscriptionResponseData = z.infer<typeof OrderSubscriptionDetailsSchema>;
export type OrderSubscriptionListResponse = z.infer<typeof OrderSubscriptionListResponseSchema>;
export type GetOrderSubscriptionListParams = z.infer<typeof GetOrderSubscriptionListParamsSchema>;

// Order Sale Types
export type OrderSale = z.infer<typeof OrderSaleSchema>;
export type OrderSaleListResponse = z.infer<typeof OrderSaleListResponseSchema>;
export type GetOrderSaleListParams = z.infer<typeof GetOrderSaleListParamsSchema>;

// Re-export relevant common types if needed by consuming code
export type { Currency, OrderCountry, OrderAddress };
