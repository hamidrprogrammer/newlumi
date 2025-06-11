import { httpClient, type RequestOptions } from '../../../core/httpClient/httpClient';
import {
  OrderSubscriptionResponseDataSchema,
  OrderSubscriptionListResponseSchema,
  GetOrderSubscriptionListParamsSchema,
  OrderSaleListResponseSchema,
  GetOrderSaleListParamsSchema,
} from '../../../core/zodSchemas/orderSchema';
import type {
  OrderSubscriptionResponseData,
  OrderSubscriptionListResponse,
  GetOrderSubscriptionListParams,
  OrderSaleListResponse,
  GetOrderSaleListParams,
} from '../../../core/types/api/order';

const API_BASE_URL = 'https://api.lumivitaeglobal.com/api'; // Should be in an env file

/**
 * Fetches a single order subscription by its ID.
 * @param subscriptionId - The ID of the order subscription.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to the order subscription details.
 */
export async function getOrderSubscription(
  subscriptionId: string | number,
  requestOptions?: RequestOptions
): Promise<OrderSubscriptionResponseData> {
  const url = `${API_BASE_URL}/order-subscriptions/${subscriptionId}`;
  // Assuming the API wraps single resource in { data: ... }
  return httpClient(url, requestOptions, OrderSubscriptionResponseDataSchema);
}

/**
 * Fetches a list of order subscriptions for the current user.
 * @param params - Query parameters for pagination, sorting, and filtering.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to a paginated list of order subscriptions.
 */
export async function listOrderSubscriptions(
  params?: GetOrderSubscriptionListParams,
  requestOptions?: RequestOptions
): Promise<OrderSubscriptionListResponse> {
  const queryParams = new URLSearchParams();
  if (params) {
    const validatedParams = GetOrderSubscriptionListParamsSchema.parse(params);
    if (validatedParams.page) queryParams.set('page', String(validatedParams.page));
    if (validatedParams.per_page) queryParams.set('per_page', String(validatedParams.per_page));
    if (validatedParams['orderBy[id]']) queryParams.set('orderBy[id]', validatedParams['orderBy[id]']);
    if (validatedParams.status) queryParams.set('status', validatedParams.status);
  }
  const url = `${API_BASE_URL}/order-subscriptions${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
  return httpClient(url, requestOptions, OrderSubscriptionListResponseSchema);
}

/**
 * Fetches a list of order sales for the current user.
 * @param params - Query parameters for pagination, sorting, and filtering.
 * @param requestOptions - Optional fetch request options.
 * @returns A promise resolving to a paginated list of order sales.
 */
export async function listOrderSales(
  params?: GetOrderSaleListParams,
  requestOptions?: RequestOptions
): Promise<OrderSaleListResponse> {
  const queryParams = new URLSearchParams();
  if (params) {
    const validatedParams = GetOrderSaleListParamsSchema.parse(params);
    if (validatedParams.page) queryParams.set('page', String(validatedParams.page));
    if (validatedParams.per_page) queryParams.set('per_page', String(validatedParams.per_page));
    if (validatedParams['orderBy[id]']) queryParams.set('orderBy[id]', validatedParams['orderBy[id]']);
    if (validatedParams.status) queryParams.set('status', validatedParams.status);
    if (validatedParams.payment_status) queryParams.set('payment_status', validatedParams.payment_status);
  }
  const url = `${API_BASE_URL}/order-sales/list${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
  return httpClient(url, requestOptions, OrderSaleListResponseSchema);
}
