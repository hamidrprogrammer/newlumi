import { pxToRem } from '@/core/theme/theme';
import styled, { css } from 'styled-components';

export const SectionContainer = styled.section`
  position: absolute;
  top:360px;
  right:70px; 
`;

export const OptionWrapper = styled.div<{ $isSelected: boolean; $left: string; $opacity?: number }>`
 margin-top:15px;
 opacity:1;
   /* Graphite / Gold card styling */
  /* box-sizing: border-box; */ // این در GlobalStyles اعمال شده
  /* position: absolute; width: 335px; height: 96px; left: 20px; top: 698px; (برای Graphite) */
  /* top: 814px; (برای Gold) */
  
  width: 95%; // عرض کارت تمام عرض کانتینر والد خود را می‌گیرد
  height: ${pxToRem(96)}; // ارتفاع کارت
  border: ${pxToRem(2)} solid ${({ theme, $isSelected }) => $isSelected ? theme.colors.accent : theme.colors.primary};
  border-radius: ${pxToRem(10)};
  background-color: ${({ theme }) => theme.colors.backgroundPage};
  padding: ${pxToRem(12)} ${pxToRem(15)}; // پدینگ داخلی بر اساس موقعیت عناصر داخلی در CSS
  
  display: grid; // استفاده از گرید برای چیدمان داخلی کارت

  gap: ${pxToRem(4)} ${pxToRem(12)}; // فاصله بین سطرها و ستون‌ها
  align-items: center; // هم‌ترازی عمودی آیتم‌ها در گرید
  
  cursor: pointer;
  transition: border-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  border: 2px solid ${({ theme }) => theme.colors.greyLight};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-${pxToRem(2)}); // کمی بالا رفتن در هاور
    box-shadow: 0 ${pxToRem(6)} ${pxToRem(15)} rgba(0, 0, 0, 0.08);
  }
  background-color:rgb(255, 255, 255);;

  ${props =>
    props.$isSelected  && // Example variant
    css`
    border-color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.cardBackground};
    `}
`;
