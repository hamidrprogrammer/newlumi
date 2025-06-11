import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useInfiniteOrderSubscriptionsQuery } from '../hooks/useOrderQueries';
import { GetOrderSubscriptionListParams } from '@/core/types/api/order';
import { OrderSubscriptionCard } from './OrderSubscriptionCard';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Header = styled.div`
  padding: 12px 24px;
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

const LoadMoreButton = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  margin: 16px auto;
  display: block;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

interface OrderSubscriptionListProps {
  onViewDetails: (id: number) => void;
}

export const OrderSubscriptionList: React.FC<OrderSubscriptionListProps> = ({ onViewDetails }) => {
  const listParams = useMemo((): Omit<GetOrderSubscriptionListParams, 'page'> => ({
    per_page: 5, // Fetch 5 items per page
    'orderBy[id]': 'DESC',
  }), []);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteOrderSubscriptionsQuery(listParams);

  if (status === 'pending') return <p>Loading subscriptions...</p>;
  if (status === 'error') return <p>An error has occurred: {error.message}</p>;
  
  return (
    <div data-aos="fade-up">
      <Header>
        <Title>My Order Subscriptions</Title>
      </Header>
      <ListContainer>
        {data.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.data.map(subscription => (
              <OrderSubscriptionCard
                key={subscription.id}
                subscription={subscription}
                onViewDetails={() => onViewDetails(subscription.id)}
              />
            ))}
          </React.Fragment>
        ))}
      </ListContainer>
      {hasNextPage && (
        <LoadMoreButton onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading more...' : 'Load More'}
        </LoadMoreButton>
      )}
    </div>
  );
};