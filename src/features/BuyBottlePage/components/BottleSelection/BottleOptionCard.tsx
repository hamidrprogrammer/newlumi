import React from 'react';
import * as S from './BottleOptionCard.styles';
import vectorIcon from '../../../../assets/images/buy/vector_1.svg';

interface BottleOptionCardProps {
  title: string;
  volume: string;
  price: string;
  initialQuantity: number;
  colorGradient: string;
  isSelected: boolean;
  onQuantityChange?: (quantity: number) => void;
}

export const BottleOptionCard = ({
  title,
  volume,
  price,
  initialQuantity,
  colorGradient,
  isSelected,
  onQuantityChange, // Not implemented, but prop is there
}: BottleOptionCardProps): JSX.Element => {
  return (
    <S.OptionWrapper $isSelected={isSelected}>
      <S.InfoContainer>
        <S.Title>{title}</S.Title>
        <S.DetailsRow>
          <S.Volume>{volume}</S.Volume>
          <S.Price>{price}</S.Price>
        </S.DetailsRow>
      </S.InfoContainer>
      <S.ColorPreview $gradient={colorGradient} />
      <S.QuantityControl>
        <S.QuantityInputContainer>
          <S.QuantityText>{initialQuantity}</S.QuantityText>
          <S.VectorIcon alt="Change quantity" src={vectorIcon} />
        </S.QuantityInputContainer>
        <S.QuantityLabel>Quantity</S.QuantityLabel>
      </S.QuantityControl>
    </S.OptionWrapper>
  );
};

export default React.memo(BottleOptionCard);
