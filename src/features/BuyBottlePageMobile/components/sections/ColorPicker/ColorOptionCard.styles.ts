// src/sections/ColorPicker/ColorOptionCard.styles.ts
import { pxToRem } from '@/core/theme/theme';
import styled, { css } from 'styled-components';

export const CardWrapper = styled.div<{ $isSelected: boolean }>`
  /* Graphite / Gold card styling */
  /* box-sizing: border-box; */ // این در GlobalStyles اعمال شده
  /* position: absolute; width: 335px; height: 96px; left: 20px; top: 698px; (برای Graphite) */
  /* top: 814px; (برای Gold) */
  
  width: 100%; // عرض کارت تمام عرض کانتینر والد خود را می‌گیرد
  height: ${pxToRem(96)}; // ارتفاع کارت
  border: ${pxToRem(2)} solid ${({ theme, $isSelected }) => $isSelected ? theme.colors.accent : theme.colors.primary};
  border-radius: ${pxToRem(10)};
  background-color: ${({ theme }) => theme.colors.backgroundPage};
  padding: ${pxToRem(12)} ${pxToRem(15)}; // پدینگ داخلی بر اساس موقعیت عناصر داخلی در CSS
  
  display: grid; // استفاده از گرید برای چیدمان داخلی کارت
  grid-template-columns: 1fr auto auto; // نام و جزئیات | نمونه رنگ | انتخابگر تعداد
  grid-template-rows: auto 1fr; // ردیف برای نام، ردیف برای جزئیات
  grid-template-areas:
    "name swatch quantity"
    "details swatch quantity";
  gap: ${pxToRem(4)} ${pxToRem(12)}; // فاصله بین سطرها و ستون‌ها
  align-items: center; // هم‌ترازی عمودی آیتم‌ها در گرید
  
  cursor: pointer;
  transition: border-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-${pxToRem(2)}); // کمی بالا رفتن در هاور
    box-shadow: 0 ${pxToRem(6)} ${pxToRem(15)} rgba(0, 0, 0, 0.08);
  }

  ${({ $isSelected, theme }) =>
    $isSelected &&
    css`
      box-shadow: 0 0 0 ${pxToRem(2)} ${theme.colors.accent}, 0 ${pxToRem(4)} ${pxToRem(12)} rgba(96, 201, 218, 0.3);
      border-color: ${theme.colors.accent}; // برای اطمینان از رنگ بوردر در حالت انتخاب شده
    `}
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; // برای توزیع بهتر فضا
  height: 100%;
`;

export const ColorName = styled.h3`
  /* Graphite Sand: width: 132px; height: 24px; left: calc(50% - 132px/2 - 81.5px); top: 20px; */
  /* Desert Gold: width: 110px; height: 24px; left: calc(50% - 110px/2 - 92.5px); top: 20px; */
  grid-area: name; // تخصیص به ناحیه name در گرید
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium}; // font-weight: 600
  font-size: ${pxToRem(20)};
  line-height: 1.2; // 120% or 24px
  color: ${({ theme }) => theme.colors.textDark}; // #1C1F23
  margin-bottom: ${pxToRem(4)}; // کمی فاصله از جزئیات
  white-space: nowrap; // جلوگیری از شکستن نام رنگ
`;

export const DetailsRow = styled.div`
  grid-area: details; // تخصیص به ناحیه details در گرید
  display: flex;
  justify-content: space-between; // حجم و قیمت در دو طرف
  align-items: center;
  width: 100%; // برای اینکه space-between درست کار کند
`;

export const DetailText = styled.p`
  /* 320ml: width: 51px; height: 22px; left: calc(50% - 51px/2 - 122px); top: 54px; */
  /* €498.00: width: 72px; height: 22px; left: calc(50% - 72px/2 - 40.5px); top: 54px; text-align: right; */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular}; // font-weight: 400
  font-size: ${pxToRem(18)};
  line-height: 1.2; // 120% or 22px
  color: ${({ theme }) => theme.colors.textGrey}; // #A7B1B9

  &.price { // استایل خاص برای قیمت اگر نیاز باشد (مثلاً text-align)
    text-align: right;
    min-width: ${pxToRem(72)}; // برای حفظ چیدمان
  }
  &.volume {
    min-width: ${pxToRem(51)}; // برای حفظ چیدمان
  }
`;

export const ColorSwatch = styled.div<{ $colorStyle: string }>`
  /* Rectangle 38 (Graphite): background: linear-gradient(...); border-radius: 100px; */
  /* Rectangle 38 (Gold): background: linear-gradient(...); border-radius: 100px; */
  /* width: 56px; height: 56px; left: 182px; top: 20px; (موقعیت در کارت) */
  grid-area: swatch; // تخصیص به ناحیه swatch در گرید
  width: ${pxToRem(56)};
  height: ${pxToRem(56)};
  border-radius: 50%; // دایره کامل
  background: ${({ $colorStyle }) => $colorStyle}; // اعمال گرادیانت یا رنگ از پراپ
  align-self: center; // وسط‌چین کردن عمودی در ناحیه گرید
  justify-self: center; // وسط‌چین کردن افقی در ناحیه گرید
  box-shadow: 0 ${pxToRem(2)} ${pxToRem(4)} rgba(0,0,0,0.1); // سایه ملایم برای برجستگی
`;

export const QuantitySelectorContainer = styled.div`
  grid-area: quantity; // تخصیص به ناحیه quantity در گرید
  align-self: center; // وسط‌چین کردن عمودی در ناحیه گرید
  justify-self: flex-end; // چسباندن به سمت راست ناحیه گرید
`;