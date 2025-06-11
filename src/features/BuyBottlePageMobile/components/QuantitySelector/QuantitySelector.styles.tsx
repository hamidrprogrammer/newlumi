// src/components/QuantitySelector/QuantitySelector.styles.tsx
import { pxToRem } from '@/core/theme/theme';
import styled from 'styled-components';

export const SelectorWrapper = styled.div`
  /* Group 18: width: 75px; height: 76px; left: 250px; top: 10px (relative to parent card) */
  /* This was the container for quantity in the design. */
  /* Rectangle 37: background: #E8E8EA; border-radius: 10px; */
  width: ${pxToRem(85)}; // Slightly wider to accommodate larger buttons if needed
  height: ${pxToRem(76)}; // Height can remain similar or adjust slightly
  background: #E8E8EA; // رنگ پس‌زمینه از CSS
  border-radius: ${pxToRem(10)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around; // کمی فضا بین عناصر
  padding: ${pxToRem(8)} ${pxToRem(5)};
  text-align: center;
  user-select: none; // جلوگیری از انتخاب متن هنگام کلیک سریع
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; // دکمه‌ها در دو طرف عدد
  width: 100%;
`;

export const QuantityButton = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  border: none;
  cursor: pointer;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  
  // Increased size for better tap target
  width: ${pxToRem(38)};
  height: ${pxToRem(38)};
  padding: ${pxToRem(8)}; // Adjusted padding

  svg {
    width: ${pxToRem(16)}; // Slightly larger icon
    height: ${pxToRem(16)}; // Slightly larger icon
    fill: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.textGrey};
    cursor: not-allowed;
    svg {
      fill: ${({ theme }) => theme.colors.textGrey};
    }
  }
  
  &:hover:not(:disabled) {
    background-color: rgba(0,0,0,0.05);
    border-radius: 50%;
  }
`;

export const QuantityNumberDisplay = styled.span`
  /* 1: width: 7px; height: 22px; left: calc(50% - 7px/2 + 100px); top: 30px; */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: ${pxToRem(18)};
  line-height: 1.2; /* ${pxToRem(22)}; */
  color: ${({ theme }) => theme.colors.textDark}; /* #1C1F23 */
  min-width: ${pxToRem(20)}; // برای جلوگیری از پرش عرض هنگام تغییر عدد
  text-align: center;
  margin: 0 ${pxToRem(2)}; // Adjusted margin if buttons are larger
`;

export const QuantityLabelText = styled.span`
  /* Quantity: width: 48px; height: 14px; left: calc(50% - 48px/2 + 120.5px); top: 62px; */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: ${pxToRem(12)};
  line-height: 1.2; /* or 14px */
  color: ${({ theme }) => theme.colors.textGrey}; /* #A7B1B9 */
  margin-top: ${pxToRem(4)};
`;

// آیکون‌های ساده +/- برای دکمه‌های تعداد
// These remain the same, their rendered size is controlled by the SVG props in QuantityButton
const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
);
const MinusIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M19 13H5v-2h14v2z"/></svg>
);

export { PlusIcon, MinusIcon };