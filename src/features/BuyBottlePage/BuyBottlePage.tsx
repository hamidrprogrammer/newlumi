// src/pages/BuyBottlePage/BuyBottlePage.tsx
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useGetProductVariationsQuery } from '@/features/shop/hooks/useProductQueries';
import { useCartStore } from '@/features/cart/store/cartStore';
import { OrderState } from '@/core/types';
import { NavbarProduct } from '@/lib/shared/layouts/NavbarWeb/NavbarProduct';
import Footer from '@/lib/shared/layouts/FooterWeb/FooterWeb';
import { PageHeaderSection } from './components/PageHeaderSection/PageHeaderSection';
import { MemoizedProductInfoPromptsBottle, MemoizedProductInfoPromptsTablet } from './components/ProductInfoPrompts/ProductInfoPrompts';
import { BottleSelection } from './components/BottleSelection/BottleSelection';
import { ProductGallery } from './components/ProductGallery/ProductGallery';
import { BundleOptionsSection } from './components/BundleOptionsSection/BundleOptionsSection';
import { FrequencyOptionsSection } from './components/FrequencyOptionsSection/FrequencyOptionsSection';
import { OrderReview } from './components/OrderReview/OrderReview';
import { WhatsInTheBox } from './components/WhatsInTheBox/WhatsInTheBox';
import { FaqSection } from './components/FaqSection/FaqSection';
import * as S from './BuyBottlePage.styles';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductVariation, Subscription } from '@/core/types/api/shop';
import { useSettingsStore } from '../settings/stores/settingsStore';
import ColorPicker from '../BuyBottlePageMobile/components/sections/ColorPicker/ColorPicker';

export const BuyBottlePage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Redirect if the product ID is invalid
  useEffect(() => {
    if (!id || !["1", "10", "12"].includes(id)) {
      navigate('/products-bottle/1');
    }
  }, [id, navigate]);
  const selectedCountryId = useSettingsStore((state) => state.selectedCountryId);

  const params = useMemo(() => ({
    countryId: selectedCountryId?.toString() || '56' // Use global ID or fallback
  }), [selectedCountryId]);
  const { data, isLoading, isError, error } = useGetProductVariationsQuery(id ?? "1", params);
  const addItemSub = useCartStore((state) => state.addItemSub);

  const [currentOrder, setCurrentOrder] = useState<OrderState>({
    selectedBottle: undefined,
    selectedBundle: undefined,
    selectedFrequency: undefined,
  });
  
  const [selectedProduct, setSelectedProduct] = useState<ProductVariation | null>(null);
  const [selectedSubscription, setSelectedSubscription] = useState<Subscription | null>(null);

  const handleOrderUpdate = useCallback((orderPart: Partial<OrderState>) => {
    setCurrentOrder((prev) => ({
      ...prev,
      ...orderPart,
    }));
  }, []);

  const handleProductSelect = useCallback((option: ProductVariation) => {
    setSelectedProduct(option);
    // When a new product bundle is selected, reset the frequency
    setSelectedSubscription(null); 
  }, []);

  const handleFrequencySelect = useCallback((option: Subscription) => {
    setSelectedSubscription(option);
  

  }, []);
const memoizedProduct = useMemo(() => selectedProduct, [selectedProduct]);

  const handleAddToBag = () => {
    if (!selectedProduct&&!selectedSubscription) {
      alert("Please select a product bundle.");
      return;
    }
console.log('=============selectedSubscription=======================');
console.log(selectedSubscription);
console.log('============selectedSubscription========================');
if(selectedSubscription&&selectedProduct){
    // Create a product object to add to the cart
    const itemToAdd = {
        ...selectedProduct,
        quantity: "1", // Default to 1, can be changed later
        subscriptionPrices: [selectedSubscription] // Attach selected subscription
    };

    addItemSub(itemToAdd);
    setSelectedProduct(null);
    setSelectedSubscription(null);
}


  };
  useEffect(() => {
    console.log('============selectedProduct========================');
    console.log(selectedProduct);
    console.log('=============selectedProduct=======================');
  }, [selectedSubscription])

  if (!id) return <></>; 

  return (
    <>
      <NavbarProduct />
      <S.PageWrapper>
        <S.ContentContainer>
          <S.PageHeaderPositioner>
            <PageHeaderSection title="Place your LumiVitae order" />
          </S.PageHeaderPositioner>
          
          <S.ProductInfoPromptsPositioner>
            {id === "1" ? <MemoizedProductInfoPromptsBottle /> : <MemoizedProductInfoPromptsTablet />}
          </S.ProductInfoPromptsPositioner>

          {isLoading && <p>Loading products…</p>}
          {isError && <p>Error loading products: {error?.message}</p>}

          <S.ProductGalleryPositioner>
            <ProductGallery data={data} />
          </S.ProductGalleryPositioner>

          {id === "1" ? (
            <S.BottleSelectionPositioner>
               <ColorPicker data={data} onOrderUpdate={handleOrderUpdate} />
            </S.BottleSelectionPositioner>
          ) : (
            <>
              <S.BundleOptionsPositioner>
                <BundleOptionsSection data={data} onSelect={handleProductSelect} selectedId={selectedProduct?.id} />
              </S.BundleOptionsPositioner>
              
              <S.FrequencyOptionsPositioner>
                <FrequencyOptionsSection product={memoizedProduct} onSelect={handleFrequencySelect} selectedId={selectedSubscription} />
              </S.FrequencyOptionsPositioner>
            </>
          )}
         {id === "10" ? (
          <S.OrderReviewPositioner>
            <OrderReview
              currentOrder={selectedProduct}
              onAddToBag={handleAddToBag}
            />
          </S.OrderReviewPositioner>
         ):null}
               
       
            {id === "10" ? (
          <S.WhatsInTheBoxPositioner>
            <WhatsInTheBox />
          </S.WhatsInTheBoxPositioner>
           ):   <S.WhatsInTheBoxPositionerTwo>
            <WhatsInTheBox />
          </S.WhatsInTheBoxPositionerTwo>}
          <S.FaqSectionPositioner>
            <FaqSection />
          </S.FaqSectionPositioner>
        </S.ContentContainer>
      </S.PageWrapper>
      <Footer />
    </>
  );
};