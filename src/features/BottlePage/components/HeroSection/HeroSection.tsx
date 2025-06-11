import React from 'react';
import * as S from './HeroSection.styles';
import Hand from '../../../../assets/images/bottle/bottle-hand-gold-bottle-1.png';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/core/hooks/useIsMobile';

const HeroSection: React.FC = () => {
  const handleStartJourneyClick = () => {
    console.log('Start Your Journey clicked');
    // Add navigation or modal logic here
  };
  const navigate =useNavigate();
  
  const handleBuyBottleClick = () => {
    console.log('Buy Bottle clicked');
        navigate('/products-bottle/1')
    // Add navigation to shop or modal logic here
  };

  return (
    <S.HeroWrapper id="hero-section">
      <S.BackgroundImageContainer />
      <S.ContentContainer>
        <S.TextBlock data-aos="fade-right">
          <S.Title>LumiVitae<br/> Hydrogen 
          Water Technology</S.Title>
          <S.Subtitle>
            The Future of Water is here. Blending the wisdom of nature with pioneering advanced technology.
          </S.Subtitle>
          <S.ButtonGroup>
            <S.PrimaryButton onClick={handleStartJourneyClick}>
              Start your journey
            </S.PrimaryButton>
            <S.SecondaryButton onClick={handleBuyBottleClick}>
              Buy bottle
            </S.SecondaryButton>
          </S.ButtonGroup>
        </S.TextBlock>
        <S.ImageBlock data-aos="fade-left" data-aos-delay="200">
          <img src={Hand} alt="LumiVitae Bottle in Hand" />
        </S.ImageBlock>
      </S.ContentContainer>
    </S.HeroWrapper>
  );
};

export default HeroSection;
