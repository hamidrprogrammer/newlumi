/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
// gmni/core/hooks/usePriceCalculations.ts

import { useMemo } from 'react';
import { useAuthStore } from '@/features/auth/stores/authStore'; // استور کاربر برای اطلاعاتی مثل کشور و نوع کاربر
import { useSettingsStore } from '@/features/settings/stores/settingsStore'; // استور تنظیمات برای قوانین ارسال و مالیات
import { useCouponStore } from '@/features/coupons/stores';
import { CartItem, useCartStore } from '@/features/cart/store/cartStore';
import { createListKey } from '../utils/createListKey';
import { useGetConfigDataQuery } from '@/features/settings/hooks/useSettingsQueries';
import { useGetUserProfileQuery } from '@/features/user/hooks/useUserQueries';
import { ProductVariation } from '../types/api/shop';

/**
 * یک ابزار ساده برای فرمت کردن قیمت‌ها
 */
const intlCurrency = (value: number, currencyCode: string = 'EUR') => {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: currencyCode }).format(value);
};

interface PriceCalculationsProps {
  walletBalance?: number;
  deliveryContactGroupId?: 56;
  landmark?: any; // این متغیر از کد قدیمی شما آمده، نوع دقیق آن مشخص نیست
}

/**
 * هوک جامع برای محاسبه تمام قیمت‌های مربوط به سبد خرید
 * این هوک از استورهای Zustand برای دریافت داده‌ها استفاده می‌کند
 */
export const usePriceCalculations = ({ walletBalance = 0, deliveryContactGroupId, landmark }: PriceCalculationsProps) => {
  const selectedCountryId = useSettingsStore(state => state.selectedCountryId);

  // ۱. خواندن داده‌ها از Store های مختلف
  const { items } = useCartStore();
const { data: userProfileResponse, isLoading: isUserLoading } = useGetUserProfileQuery();
  const user = userProfileResponse?.data;//   const { appliedCoupon } = useCouponStore();
//   const coupon = appliedCoupon.details;
 const { data: configResponse, isLoading: isConfigLoading } = useGetConfigDataQuery(
    { countryId: String(selectedCountryId) },
    { enabled: !!selectedCountryId || !!items} // Only run the query if countryId is not null
  );

  // برای دسترسی به کانفیگ، ما به countryId نیاز داریم.
  // این ID یا از کاربر لاگین کرده یا از آدرس تحویل گرفته می‌شود.
  const countryId = deliveryContactGroupId


    const config = configResponse?.data;

  // ۲. بازنویسی محاسبات با استفاده از Memoization برای بهینه‌سازی
  const calculations = useMemo(() => {
    if (isUserLoading || isConfigLoading || !config || !items) {
      return {
        totalPrice: { number: 0, string: intlCurrency(0, 'EUR') },
        shippingPrice: { number: 0, string: intlCurrency(0, 'EUR') },
        totalPayment: { number: 0, string: intlCurrency(0, 'EUR') },
        totalNetPrice: { number: 0, string: intlCurrency(0, 'EUR') },
        couponPrice: { number: 0, string: intlCurrency(0, 'EUR') },
        totalVat: { number: 0, string: intlCurrency(0, 'EUR') },
        qv: 0,
      };
    }
    
    const iso3 = items[0]?.sale_price?.iso3 ?? 'EUR';
const getPrice = (item: CartItem) => {
  if (item.subscription) {
    const sub = item.subscriptionPrices?.find(
      (i: any) => i.interval_days == item.subscription
    );
    return {
      gross: sub?.gross_value_after_discount ?? 0,
      net: sub?.value_after_discount ?? 0
    };
  } else {
    console.log('==============item?.sale_price?.value_after_discoun======================');
    console.log(item?.sale_price?.value_after_discount+"");
    console.log('=============item?.sale_price?.value_after_discoun=======================');
    return {
      gross: item?.sale_price?.gross_value_after_discount ?? 0,
      net: item?.sale_price?.value_after_discount ?? 0
    };
  }
};
    // --- محاسبه قیمت‌های پایه ---
    const baseItems = items.filter(item => item.type !== 'Promotional Article' && item.type !== 'Coupon Item');
     const totalTransportation = baseItems
    .reduce((prev, next) => prev +  parseInt(next.quantity)* next.transportation?.gross_value, 0)
    console.log('====================================');
    console.log(baseItems);
    console.log('====================================');
const totalGrossPrice = baseItems.reduce((acc, item) => acc + getPrice(item).gross * parseInt(item.quantity), 0);

   const totalNetPrice = baseItems.reduce((acc, item) => acc + getPrice(item).net * parseInt(item.quantity), 0);

    console.log('===============totalNetPrice=====================');
    console.log(totalNetPrice);
    console.log('==============totalNetPrice======================');
    const qv = baseItems.reduce((acc, item) => {
        // این منطق MLM باید با ساختار جدید ProductVariation تطبیق داده شود
        // فعلا یک محاسبه نمونه قرار می‌دهیم
        const mlmDetails = (item as any).productVariationMlmDetails?.find((m: any) => m.country_id === user?.country?.id);
        return mlmDetails ? acc + mlmDetails.qv : acc;
    }, 0);


    // --- محاسبه هزینه ارسال (پیچیده‌ترین بخش) ---
const getShippingPrice = () => {
  if (items.some(item => item.is_wallet_coin_product)) {
    return 0;
  }

  if (!config ) {
    return 6;
  }

  const partnerTransportation = config.transportation_rule;
  const countryId =56;
  const hasShippingService = config.countries_has_shipping_service?.includes(countryId) ?? false;
 
  const partnerCost = partnerTransportation?.partner_cost ?? 0;
  const minAmount = partnerTransportation?.min_partner_amount ?? 0;

  const shippingPrice = totalGrossPrice > minAmount ? totalTransportation : partnerCost;
   console.log('===============partnerTransportation=====================');
   console.log(shippingPrice);
   console.log('===============partnerTransportation=====================');
  if (hasShippingService) {
    if (landmark === 'standard') return 8;
    if (landmark) return 18;
  }

  return shippingPrice;
};
   
    const getShippingPriceWithVat = () => {
    if (config) {
      const vatValue = config.default_vat
   
      const shipping = getShippingPrice()
      return shipping * (1 + vatValue / 100)
    } else {
      return 6
    }
  }
 const shippingPrice = getShippingPriceWithVat();

    // --- محاسبه تخفیف کوپن ---
    const couponProductsPrice = items
      .filter(item => item.type === 'Coupon Item')
      .reduce((acc, item) => acc + (item.sale_price?.gross_value_after_discount ?? 0) * parseInt(item.quantity), 0);

    let couponDiscount = 0;
    // if (coupon) {
    //   if (coupon.type === 'fixed_amount') {
    //     couponDiscount = coupon.amount ?? 0;
    //   } else if (coupon.type === 'percentage') {
    //     couponDiscount = (totalGrossPrice * (coupon.percentage_discount ?? 0)) / 100;
    //   }
    // }
    // کوپن نباید روی آیتم‌های کوپنی دیگر اعمال شود
    const finalCouponDiscount = Math.max(0, couponDiscount - couponProductsPrice);
    
    // --- محاسبه قیمت نهایی ---
    const totalPayment = totalGrossPrice + shippingPrice - finalCouponDiscount - (walletBalance / 100);

    const totalVat = totalPayment - (totalNetPrice + (shippingPrice / (1 + (config?.default_vat ?? 0) / 100)));

    return {
      totalPrice: { number: totalGrossPrice, string: intlCurrency(totalGrossPrice, iso3) },
      shippingPrice: { number: shippingPrice, string: intlCurrency(shippingPrice, iso3) },
      totalPayment: { number: Math.max(0, totalPayment), string: intlCurrency(Math.max(0, totalPayment), iso3) },
      totalNetPrice: { number: totalNetPrice, string: intlCurrency(totalNetPrice, iso3) },
      couponPrice: { number: finalCouponDiscount, string: intlCurrency(finalCouponDiscount, iso3) },
      totalVat: { number: totalVat, string: intlCurrency(totalVat, iso3) },
      qv,
    };
  }, [items, user, config, walletBalance,]);

  return calculations;
};