import { pxToRem } from '@/core/theme/theme';
import styled, { css } from 'styled-components';

export const SectionContainer = styled.section`
  position: absolute;
  top: 860px;
  right: -30px;
  width:500px;
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* 3 equal-width columns */
  gap: 20px; /* optional: space between columns */
`;

export const OptionWrapper = styled.div<{ $isSelected: boolean; $left: string; $opacity?: number }>`
 margin-top:50px;
 opacity:1;
  width: 100%; // عرض کارت تمام عرض کانتینر والد خود را می‌گیرد
  height: ${pxToRem(96)}; // ارتفاع کارت
  padding: ${pxToRem(12)} ${pxToRem(15)}; // پدینگ داخلی بر اساس موقعیت عناصر داخلی در CSS
  
  display: grid; // استفاده از گرید برای چیدمان داخلی کارت

  gap: ${pxToRem(4)} ${pxToRem(12)}; // فاصله بین سطرها و ستون‌ها
  align-items: center; // هم‌ترازی عمودی آیتم‌ها در گرید
  

  &:hover {
    transform: translateY(-${pxToRem(2)}); // کمی بالا رفتن در هاور
    box-shadow: 0 ${pxToRem(6)} ${pxToRem(15)} rgba(0, 0, 0, 0.08);
  }

  ${props =>
    props.$isSelected  && // Example variant
    css`
    `}
`;
