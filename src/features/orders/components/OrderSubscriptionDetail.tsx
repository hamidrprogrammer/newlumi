import React from 'react';
import styled from 'styled-components';
import { useGetOrderSubscriptionQuery } from '../hooks/useOrderQueries';
import { FiArrowLeft, FiEdit } from 'react-icons/fi';

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  padding: 12px 24px;
  border-radius: 12px;
`;

const BackButton = styled.button`
  background: none; border: none; cursor: pointer; display: flex;
  align-items: center; gap: 8px; font-weight: 500; font-size: 1rem;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

const HeaderTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

const Card = styled.div`
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem; font-weight: 600; margin-bottom: 16px;
  padding-bottom: 8px; border-bottom: 1px solid #E5E7EB;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 24px;
`;

const ProductItem = styled.div`
  padding: 16px 0;
  &:not(:last-child) { border-bottom: 1px solid #E5E7EB; }
`;

interface OrderSubscriptionDetailProps {
  subscriptionId: number;
  onBack: () => void;
}

export const OrderSubscriptionDetail: React.FC<OrderSubscriptionDetailProps> = ({ subscriptionId, onBack }) => {
  const { data: response, isLoading, isError, error } = useGetOrderSubscriptionQuery(subscriptionId);

  if (isLoading) return <p>Loading Subscription Details...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  
  const sub = response?.data;
  if (!sub) return <p>Subscription not found.</p>;

  return (
    <DetailWrapper data-aos="fade-in">
      <Header>
        <BackButton onClick={onBack}><FiArrowLeft /> Back to Orders</BackButton>
        <HeaderTitle>Subscription Details</HeaderTitle>
      </Header>
      
      <Card>
        <SectionTitle>Order Details</SectionTitle>
        <InfoGrid>
          <div><Label>Subscription ID</Label><Value>{sub.id}</Value></div>
          <div><Label>Number</Label><Value>{sub.id}</Value></div>
          <div><Label>Issued on</Label><Value>{new Date(sub.created_at).toLocaleDateString()}</Value></div>
          <div><Label>Status</Label><Value>{sub.payment_status}</Value></div>
        </InfoGrid>
      </Card>

      <Card>
        <SectionTitle>Product List</SectionTitle>
        {sub.positions.map(pos => (
          <ProductItem key={pos.id}>
            <Value>{pos.productVariation.name || 'Product'}</Value>
            <p>Article Number: {pos.productVariation.number}</p>
            <p>Quantity: {pos.quantity}</p>
            {/* Add other product details here */}
          </ProductItem>
        ))}
      </Card>

      <Grid>
        <Card>
          <SectionTitle>Billing Address</SectionTitle>
          <AddressDetails address={sub.contact_group_invoice} />
        </Card>
        <Card>
          <SectionTitle>Delivery Address</SectionTitle>
          <AddressDetails address={sub.contact_group_delivery} />
        </Card>
      </Grid>
      
      <Card>
        <SectionTitle>Overview</SectionTitle>
        <p>Total Products Net Value: ${sub.total_net_amount}</p>
        <p>Sub Total: ${sub.total_net_amount}</p>
        <p>Total Price: ${sub.total_gross_amount}</p>
        {/* Add other overview details here */}
      </Card>
    </DetailWrapper>
  );
};

// Helper components for detail page
const Label = styled.p`color: #6B7280; font-size: 0.9rem; margin: 0 0 4px 0;`;
const Value = styled.p`color: #111827; font-weight: 500; margin: 0;`;

const AddressDetails = ({ address }: { address: any }) => (
  address ? <>
    <Value>{address.full_name}</Value>
    <p>{address.address?.address1}</p>
    <p>{address.address?.postal_code} {address.address?.city}</p>
    <p>{address.address?.country?.name}</p>
  </> : <p>Address not available.</p>
);