import { useQuery, type UseQueryOptions, type QueryKey, useInfiniteQuery, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import {
  getOrderSubscription,
  listOrderSubscriptions,
  listOrderSales,
} from '../services/orderApi';
import type {
  OrderSubscriptionResponseData,
  OrderSubscriptionListResponse,
  GetOrderSubscriptionListParams,
  OrderSaleListResponse,
  GetOrderSaleListParams,
  OrderSubscription, // For select example
} from '../../../core/types/api/order';
import type { ApiError } from '../../../core/httpClient/httpClient';

// Query Keys Factory
// Query Keys Factory (remains the same)
export const orderQueryKeys = {
  all: ['orders'] as const,
  subscriptions: () => [...orderQueryKeys.all, 'subscriptions'] as const,
  subscriptionDetail: (subscriptionId: string | number) =>
    [...orderQueryKeys.subscriptions(), 'detail', subscriptionId] as const,
  subscriptionList: (params?: GetOrderSubscriptionListParams) =>
    [...orderQueryKeys.subscriptions(), 'list', params ?? {}] as const,

  sales: () => [...orderQueryKeys.all, 'sales'] as const,
  saleList: (params?: GetOrderSaleListParams) =>
    [...orderQueryKeys.sales(), 'list', params ?? {}] as const,
};

/**
 * Hook to fetch a single order subscription.
 */
export function useGetOrderSubscriptionQuery(
  subscriptionId: string | number,
  options?: Omit<UseQueryOptions<OrderSubscriptionResponseData, ApiError, OrderSubscriptionResponseData, QueryKey>, 'queryKey' | 'queryFn' | 'enabled'>
) {
  return useQuery<OrderSubscriptionResponseData, ApiError, OrderSubscriptionResponseData, QueryKey>({
    queryKey: orderQueryKeys.subscriptionDetail(subscriptionId),
    queryFn: ({ signal }) => getOrderSubscription(subscriptionId, { signal }),
    enabled: !!subscriptionId,
    ...options,
  });
}

/**
 * Hook to fetch a list of order subscriptions.
 */
export function useListOrderSubscriptionsQuery(
  params?: GetOrderSubscriptionListParams,
  options?: Omit<UseQueryOptions<OrderSubscriptionListResponse, ApiError, OrderSubscriptionListResponse, QueryKey>, 'queryKey' | 'queryFn'>
) {
  return useQuery<OrderSubscriptionListResponse, ApiError, OrderSubscriptionListResponse, QueryKey>({
    queryKey: orderQueryKeys.subscriptionList(params),
    queryFn: ({ signal }) => listOrderSubscriptions(params, { signal }),
    ...options,
  });
}

/**
 * Hook to fetch a list of order sales.
 */
export function useListOrderSalesQuery(
  params?: GetOrderSaleListParams,
  options?: Omit<UseQueryOptions<OrderSaleListResponse, ApiError, OrderSaleListResponse, QueryKey>, 'queryKey' | 'queryFn'>
) {
  return useQuery<OrderSaleListResponse, ApiError, OrderSaleListResponse, QueryKey>({
    queryKey: orderQueryKeys.saleList(params),
    queryFn: ({ signal }) => listOrderSales(params, { signal }),
    ...options,
  });
}

/**
 * Example of using select with useGetOrderSubscriptionQuery to get only the status
 */
export function useGetOrderSubscriptionStatus(
  subscriptionId: string | number,
  options?: Omit<UseQueryOptions<OrderSubscriptionResponseData, ApiError, string | undefined, QueryKey>, 'queryKey' | 'queryFn' | 'enabled' | 'select'>
) {
    return useQuery<OrderSubscriptionResponseData, ApiError, string | undefined, QueryKey>({
        queryKey: orderQueryKeys.subscriptionDetail(subscriptionId),
        queryFn: ({ signal }) => getOrderSubscription(subscriptionId, { signal }),
        enabled: !!subscriptionId,
        select: (data) => data.data?.status,
        ...options,
    });
}
export function useInfiniteOrderSubscriptionsQuery(
  params: Omit<GetOrderSubscriptionListParams, 'page'>,
  // Correctly define the TPageParam as 'number' in the options type
  options?: Omit<
    UseInfiniteQueryOptions<
      OrderSubscriptionListResponse,
      ApiError,
      InfiniteData<OrderSubscriptionListResponse>,
      QueryKey,
      number // <-- The fix is here: Explicitly type TPageParam as number
    >,
    'queryKey' | 'queryFn' | 'initialPageParam' | 'getNextPageParam'
  >
) {
  return useInfiniteQuery({
    queryKey: ['orderSubscriptions', 'infinite', params],
    // The context for pageParam is now correctly typed
    queryFn: ({ pageParam }) => listOrderSubscriptions({ ...params, page: pageParam }),
    initialPageParam: 1, // Start fetching from page 1
    getNextPageParam: (lastPage) => {
      if (lastPage.meta && lastPage.meta.current_page < lastPage.meta.last_page) {
        return lastPage.meta.current_page + 1;
      }
      return undefined; // No more pages available
    },
    ...options,
  });
}