import styled, { css } from 'styled-components';

interface WrapperProps {
  $property1?: boolean; // Using $ prefix for transient prop
  $hasDiv?: boolean;    // Using $ prefix for transient prop
}

export const Wrapper = styled.div<WrapperProps>`
  /* Base styles for BuyOptionDesign */
  /* These would be the intrinsic styles of the component */
  /* For demonstration, let's assume some padding and border */
  width: 375px; // Matches width from original .graphite for consistency
  height: 100%; // Matches height from original .graphite for consistency
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  border-radius: 12px;

  /* Example conditional styling based on props */
  ${props =>
    props.$hasDiv &&
    css`
      /* border-left: 5px solid #60c9da; // Example style when hasDiv is true */
      /* Add specific styles if 'hasDiv' means something visually */
    `}

  ${props =>
    props.$property1  && // Example variant
    css`
      color:rgb(255, 255, 255);
    `}
`;

export const CardWrapper = styled.div<{ $isActive?: boolean; $isDisabled?: boolean; }>`
  box-sizing: border-box;
  width: 100%;
  max-width: 370px;
  min-height: 96px;
  border-radius: 12px;
  padding: 20px 24px;
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')}; // تغییر cursor
  
  display: flex;
  flex-direction: column;
  gap: 14px;

  background-color: #FFFFFF;
  border: 2px solid ${({ theme, $isActive, $isDisabled }) => 
    $isDisabled ? theme.colors.textGrey : 
    $isActive ? theme.colors.primary : theme.colors.greyLight};
  
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  transition: all 0.25s ease-in-out;
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.6 : 1)}; // کم‌رنگ شدن در حالت غیرفعال

  ${({ $isDisabled }) => !$isDisabled && css`
    &:hover {
      border-color: ${({ theme }) => theme.colors.accent};
      transform: translateY(-4px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
    }
  `}

  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 0 3px ${theme.colors.primary.replace(')', ', 0.3)')};
      background-color: #F8FEFF;
    `}
`;
export const TextPrimary = styled.div`
  color: #1c1f23; /* From .text-wrapper-10 */
  font-size: 20px; /* From .text-wrapper-10 */
  font-weight: 600; /* From .text-wrapper-10 */
  line-height: 24px; /* From .text-wrapper-10 */
  white-space: nowrap; /* From .text-wrapper-10 */
`;

export const TextSecondary = styled.div<WrapperProps>`
  color: #a7b1b9; /* From .text-wrapper-13 */
  font-size: 18px; /* From .text-wrapper-13 */
  font-weight: 400; /* From .text-wrapper-13 */
  line-height: 21.6px; /* From .text-wrapper-13 */
  white-space: nowrap; /* From .text-wrapper-13 */
  width:100%;
   ${props =>
    props.$property1  && // Example variant
    css`
      color:rgb(255, 255, 255);
        font-size: 25px; /* From .text-wrapper-13 */

    `}
`;
export const Title = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 600;
  font-size: 1.25rem; /* 20px */
  color: ${({ theme }) => theme.colors.textDark};
`;

export const Price = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 600;
  font-size: 1.25rem; /* 20px */
  color: ${({ theme }) => theme.colors.primary};
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.greyLight};
  width: 100%;
  margin: 0;
`;

export const ShipmentDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ShipmentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ShipmentLabel = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 400;
  font-size: 0.9rem; /* 14px */
  color: ${({ theme }) => theme.colors.textGrey};
`;

export const ShipmentPrice = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 500;
  font-size: 0.9rem; /* 14px */
  color: ${({ theme }) => theme.colors.textDark};
`;
export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;