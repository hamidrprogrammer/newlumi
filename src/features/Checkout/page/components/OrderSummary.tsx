// src/components/OrderSummary.tsx

import React from 'react';
import styled, { css } from 'styled-components';
import { Card } from './Layout';
import { CheckoutButton } from './CheckoutButton';
import { usePriceCalculations } from '@/core/hooks/usePriceCalculations'; // هوک جدید را ایمپورت کنید
import { useAuthStore } from '@/features/auth/stores/authStore';

export const CheckoutPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 40px;
  background-color: #FBFFFF;
  font-family: 'Outfit', sans-serif;
  color: #072C3D;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Left Column
export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 800px;
`;

// Right Column (Sidebar)
export const Sidebar = styled.aside`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
`;

// Generic Card for Sections
export const SectionCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #EAEAEA;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  position: relative; // For absolute icons
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #072C3D;
  margin: 0 0 15px 0;
`;

// Address Cards
export const AddressRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const AddressCard = styled(SectionCard)``;

export const AddressDetails = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin: 0 0 20px 0;
`;

export const ChangeAddressButton = styled.button`
  background-color: #EAF9F9;
  color: #075985;
  border: 1px solid #D1EAF1;
  border-radius: 6px;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #D1EAF1;
  }
`;

export const EditIcon = styled.span`
  &::before {
    content: '✎'; // Simple pencil icon
    font-size: 16px;
  }
`;

// Highlighted Text (e.g., Shipping Service)
export const HighlightText = styled.span`
  color: #1C1F23;
  font-weight: 500;
`;

// Accordion-like Header
export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const AccordionIcon = styled.span`
  font-size: 12px;
  color: #555;
`;

// Inputs and Buttons
export const InputRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  padding: 12px;
  border: 1px solid #EAEAEA;
  border-radius: 6px;
  font-size: 16px;
`;

export const ProceedButton = styled.button`
  background-color: #D1D5DB;
  color: #4B5563;
  border: none;
  padding: 0 20px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const InputIcon = styled.span`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #EF4444;
  cursor: pointer;
`;

// Text Area
export const StyledTextArea = styled.textarea`
    width: 100%;
    padding: 12px;
    border: 1px solid #EAEAEA;
    border-radius: 6px;
    font-size: 16px;
    resize: vertical;
`;

export const TextAreaIcon = styled.span`
    position: absolute;
    right: 15px;
    bottom: 15px;
    color: #9CA3AF;
`;

// Shopping Cart Section
export const ShoppingCartSection = styled.div`
    margin-top: 20px;
`;

export const SectionTitle = styled.h2`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
`;

export const CartItemCard = styled(SectionCard)`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const CartItemImage = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 6px;
    object-fit: cover;
`;

export const CartItemInfo = styled.div`
    flex-grow: 1;
`;

export const CartItemName = styled.h4`
    font-size: 16px;
    font-weight: 600;
    margin: 0;
`;

export const CartItemArticle = styled.p`
    font-size: 14px;
    color: #6B7280;
    margin: 4px 0;
`;

export const CartItemQuantity = styled.p`
    font-size: 14px;
    color: #1F2937;
    margin: 0;
`;

export const CartItemPrice = styled.p`
    font-size: 18px;
    font-weight: 600;
`;

// Sidebar - Overview Card
export const OverviewCard = styled(SectionCard)``;

export const OverviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const BackToCartLink = styled.a`
  font-size: 14px;
  color: #0ea5e9;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const PriceRow = styled.div<{ isTotal?: boolean }>`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin-bottom: 12px;
  color: ${({ isTotal }) => (isTotal ? '#1C1F23' : '#555')};
  font-weight: ${({ isTotal }) => (isTotal ? 'bold' : 'normal')};
  
  span:last-child {
    font-weight: 500;
    color: #1C1F23;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #EAEAEA;
  margin: 15px 0;
`;

export const TaxInfo = styled.p`
  font-size: 12px;
  color: #9CA3AF;
  text-align: right;
  margin-top: -8px;
  margin-bottom: 20px;
`;

export const CheckoutNowButton = styled.button`
  width: 100%;
  background-color: #072C3D;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 100px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const TermsText = styled.p`
  font-size: 12px;
  color: #6B7280;
  line-height: 1.5;
  text-align: center;
  margin-top: 15px;
`;
const SummaryContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SummaryTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSizes.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Row = styled.div<{ isTotal?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  
  ${({ isTotal, theme }) => isTotal && css`
    font-size: ${theme.typography.fontSizes.lg};
    font-weight: ${theme.typography.fontWeights.bold};
    color: ${theme.colors.primaryDark};
    margin-top: ${theme.spacing.sm};
    padding-top: ${theme.spacing.md};
    border-top: 1px solid ${theme.colors.greyLight};
  `}
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.textGrey};
`;

const Value = styled.span`
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
`;

interface SummaryRowProps {
  label: string;
  value: string;
  isTotal?: boolean;
}

const SummaryRow: React.FC<SummaryRowProps> = ({ label, value, isTotal = false }) => (
  <Row isTotal={isTotal}>
    <Label>{isTotal ? label : label}</Label>
    <Value>{value}</Value>
  </Row>
);

interface OrderSummaryProps {
  onCheckout: () => void;
}


// gmni/features/Checkout/page/components/OrderSummary.tsx



// ... (بقیه styled-components)

export const OrderSummary: React.FC<OrderSummaryProps> = ({ onCheckout }) => {
    const userProfile = useAuthStore(state => state.user);
    
    // از هوک جدید برای گرفتن تمام قیمت‌ها استفاده کنید
    const { 
      totalPrice, 
      shippingPrice, 
      couponPrice, 
      totalPayment,
      totalNetPrice 
    } = usePriceCalculations({
      walletBalance: userProfile?.walletBalance ? parseFloat(userProfile.walletBalance) : 0,
      deliveryContactGroupId: 56
    });

  return (
    <SummaryContainer>
      <SummaryTitle>Order Overview</SummaryTitle>
      <SummaryRow label="Subtotal" value={totalPrice.string} />
      <SummaryRow label="Shipping" value={shippingPrice.string} />
      {couponPrice.number > 0 && (
          <SummaryRow label="Coupon Discount" value={`- ${couponPrice.string}`} />
      )}
       <SummaryRow label="VAT (included)" value={totalNetPrice.string} />
      <SummaryRow label="Total Price" value={totalPayment.string} isTotal={true}  />
      <CheckoutButton onClick={onCheckout}>Checkout Now</CheckoutButton>
        <TermsText>
                By pressing this button you'll agree with
                Term of Conditions, Right of Withdrawal &
                Data protection declaration
            </TermsText>
    </SummaryContainer>
  );
};