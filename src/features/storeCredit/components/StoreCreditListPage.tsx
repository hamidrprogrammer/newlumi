// ge/new project/features/storeCredit/components/StoreCreditListPage.tsx
'use client';

import React from 'react';
import { useListCouponsQuery } from '@/features/coupons/hooks/useCouponQueries';
import * as S from './StoreCreditListPage.styles';
import { StoreCreditCard } from './StoreCreditCard';

export const StoreCreditListPage: React.FC = () => {
  const { data, isLoading, isError } = useListCouponsQuery({ page: 1, per_page: 100 });

  if (isLoading) return <p>Loading credits...</p>;
  if (isError) return <p>Could not load store credits.</p>;

  // Filter for coupons that are store credits
  const storeCredits = data?.data.filter(coupon => 
    coupon.name && coupon.name.toLowerCase().startsWith('store credit')
  ) ?? [];

  return (
    <S.Wrapper>
      {storeCredits.length > 0 ? (
        <S.CreditsGrid>
          {storeCredits.map((credit) => (
            <StoreCreditCard key={credit.id} credit={credit} />
          ))}
        </S.CreditsGrid>
      ) : (
        <S.EmptyState>You have no store credits at the moment.</S.EmptyState>
      )}
    </S.Wrapper>
  );
};