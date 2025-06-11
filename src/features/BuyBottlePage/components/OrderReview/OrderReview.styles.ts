import styled from 'styled-components';
import checkoutShopImage from '../../../../assets/images/buy/checkout_shop_1.png';
import lineImage from '../../../../assets/images/buy/line_1.svg';

export const SectionWrapper = styled.section`
  background-color: #eaf9f9;
  height: 600px;
  width: 1440px; /* Fixed width from original .overlap */
  position: relative; /* Context for absolute children */
  margin: 0 auto; /* Center if parent is wider */
`;

export const AddToBagButton = styled.button`
  align-items: center;
  background-color: #60c9da;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  padding: 9px 20px 10px;
  position: absolute;
  left: 970px;
  top: 228px;
  width: 322px;
  border: none;
  cursor: pointer;

  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal; /* original: margin-top: -1.00px; */
`;

export const CheckoutNowButton = styled.button`
  align-items: center;
  background-color: #072c3d;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  padding: 9px 20px 10px;
  position: absolute;
  left: 970px;
  top: 290px;
  width: 322px;
  border: none;
  cursor: pointer;

  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
`;

export const ImageSection = styled.div`
  height: 288px;
  left: 96px;
  position: absolute;
  top: 312px;
  width: 453px;
`;

export const CheckoutShopImage = styled.img.attrs({ src: checkoutShopImage })`
  height: 288px;
  left: 19px; /* Relative to ImageSection if nested, or adjust if ImageSection is just a wrapper */
  position: absolute;
  top: 0;
  width: 434px;
`;

export const ImageShadow = styled.div`
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  height: 30px;
  left: 0; /* Relative to ImageSection */
  opacity: 0.3;
  position: absolute;
  top: 257px;
  width: 453px; /* Matches ImageSection width */
`;

export const OrderTitle = styled.div`
  color: var(--x-07-2c-3d);
  font-size: 50px;
  font-weight: 300;
  left: 148px;
  letter-spacing: 0;
  line-height: 65px;
  position: absolute;
  top: 100px;
  width: 368px;
`;

const OrderDetailText = styled.div`
  color: var(--x-07-2c-3d);
  position: absolute;
  left: 618px;
  width: 322px;
  letter-spacing: 0;
`;

export const ItemName = styled(OrderDetailText)`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  top: 110px;
`;

export const ItemQuantity = styled(OrderDetailText)`
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  top: 144px;
`;

export const ItemPrice = styled(OrderDetailText)`
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  top: 176px;
`;

export const SeparatorLine = styled.img.attrs({src: lineImage})`
  height: 1px;
  left: 618px;
  object-fit: cover;
  position: absolute;
  top: 228px;
  width: 322px;
`;

export const TabletName = styled(OrderDetailText)`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  top: 259px;
`;

export const TabletPrice = styled(OrderDetailText)`
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  top: 293px;
`;

export const TabletPackInfo = styled(OrderDetailText)`
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  top: 325px;
`;

export const PurchaseTypeInfo = styled(OrderDetailText)`
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  top: 357px;
`;
