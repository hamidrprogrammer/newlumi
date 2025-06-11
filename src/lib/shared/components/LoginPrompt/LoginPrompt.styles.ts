import { CheckoutButton } from '@/features/Checkout/page/components/CheckoutButton';
import { Card } from '@/features/Checkout/page/components/Layout';
import styled from 'styled-components';


export const PromptContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh; /* Adjust height to take up significant space */
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const PromptCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  max-width: 550px;
  width: 100%;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const IconWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.accent};
  font-size: 4rem; // Large and noticeable icon
  line-height: 1;
`;

export const PromptTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const PromptMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  color: ${({ theme }) => theme.colors.textGrey};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
  max-width: 400px;
`;

export const LoginButton = styled(CheckoutButton)`
  /* Inherits styles from the existing CheckoutButton */
  min-width: 220px;
  padding: 12px 30px;
`;
