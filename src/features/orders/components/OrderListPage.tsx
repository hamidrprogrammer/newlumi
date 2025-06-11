// File: ge/new project/features/orders/components/OrderListPage.tsx
'use client';

import React, { useState } from 'react';
import { useListOrderSalesQuery } from '../hooks/useOrderQueries';
import { OrderCard } from './OrderCard';
// import { Pagination } from '@/lib/shared/components/pagination';

export const OrderListPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useListOrderSalesQuery({ 
    page, 
    per_page: 12, 
    'orderBy[id]': 'DESC' 
  });

  if (isLoading) return <p>Loading orders...</p>;
  if (isError) return <p>Could not retrieve your orders.</p>;

  return (
    <div>
      {data?.data.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}

      {/* {data?.meta && data.meta.last_page > 1 && (
        <Pagination
          currentPage={data.meta.current_page}
          totalPages={data.meta.last_page}
          onPageChange={setPage}
        />
      )} */}
    </div>
  );
};