import React, { useState } from 'react';
import * as S from './FrequencyOptionsSection.styles';
import { ProductVariation, Subscription } from '@/core/types/api/shop';
import BuyOptionSubDesign from '@/lib/shared/components/BuyOptionDesign/BuyOptionSubDesign';
import { useCartStore } from '@/features/cart/store/cartStore';

interface FrequencyOptionsSectionProps {
  product: ProductVariation | null;
  onSelect: (option: Subscription) => void;
  selectedId?: Subscription | null;
}

export const FrequencyOptionsSection: React.FC<FrequencyOptionsSectionProps> = ({ product, onSelect, selectedId }) => {
  // If no product is selected, this section can be empty or show a message.
   const { items: cartItems } = useCartStore(); // 2. دسترسی به آیتم‌های سبد خرید

  const handelOnSelect = (option: Subscription)=>{
    onSelect(option)
    // setOp(option)
  }
  console.log('===========selectedId=========================');
  console.log(selectedId);
  console.log('===========selectedId=========================');
  if (!product) {
    return (
        <S.SectionContainer>
            <p>Please select a product bundle to see subscription options.</p>
        </S.SectionContainer>
    );
  }

  return (
    <S.SectionContainer>
      {product.subscriptionPrices?.map(option => {
        console.log('=======cartItems=============================');
        
        console.log(cartItems);
        console.log('===========cartItems=========================');
          const isAlreadyInCart = cartItems.some(
          cartItem =>
            cartItem.id === product.id && // شناسه محصول یکسان باشد
            cartItem.subscriptionPrices[0]?.interval_days === option.interval_days // شناسه فرکانس یکسان باشد
        );
        return(
     
            <BuyOptionSubDesign
                id={option.interval_days??0}
                title={`${option.interval_days} Day Delivery`}
                price={option.gross_value_after_discount_string??""}
                shipmentRange1="1"
                shipmentRange2={option.number_of_discount_periods?.toString()}
                text=""
                disabled={isAlreadyInCart}
                onClick={() => handelOnSelect(option)}
                property1={option.interval_days === selectedId?.interval_days}
            />
      
      )})}
       {/* Option for one-time purchase if available */}
    </S.SectionContainer>
  );
};

export default React.memo(FrequencyOptionsSection);