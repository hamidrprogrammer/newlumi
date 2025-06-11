// TabletPage/sections/CellularFusionExplainedSection/CellularFusionExplainedSection.styles.ts
import styled from 'styled-components';
import { media } from '../../../../core/theme/theme';
import homepage_sec1 from '@assets/images/products/image 43.png'; // image43Url
import homepage_sec45 from '@assets/images/products/image 45.png'; // image45Url
import tabletSmallUrl from '@assets/images/products/tablet598.png'; 

const image43Url = homepage_sec1;
const image45Url = homepage_sec45;

/* ─────────────────────────────── Section ─────────────────────────────── */

export const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 1400px; 
  background-color: ${({ theme }) => theme.colors.black};
  overflow: hidden; 

  display: flex;
  justify-content: center; 
  padding: 100px 0; 

  ${media.tablet} {
    min-height: auto; 
    padding: 80px 0;
  }

  @media (max-width: 768px) {
    max-height: auto; 
    padding: 300px 15px; // Add horizontal padding to section for mobile
  }
`;

/* ─────────────────────────────── Layout Wrappers ─────────────────────────────── */

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2; 

  display: flex; 
  width: 100%;
  max-width: 1200px; 
  padding: 0 20px; 

  ${media.tablet} {
    flex-direction: column; 
    align-items: center; 
    gap: 40px; 
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0; // Padding is on SectionContainer for mobile
    gap: 30px;
  }
`;

export const TextAndButtonColumn = styled.div`
  flex: 1; 
  max-width: 500px; 
  display: flex;
  flex-direction: column;
  gap: 30px; 

  ${media.tablet} {
    max-width: 600px; 
    align-items: center; 
    text-align: center; 
    order: 2; 
  }

  @media (max-width: 768px) {
    gap: 20px; 
    width: 100%; 
    align-items: center; 
    text-align: center;
    order: 2; // Text below images
  }
`;

export const ImageColumn = styled.div`
  flex: 1; 
  position: relative; 
  min-height: 600px; 
  margin-top: 200px; 


  ${media.tablet} {
    order: 1; 
    width: 100%; 
    min-height: auto; 
    margin-bottom: 0; 

    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    gap: 20px; 
  }

  @media (max-width: 768px) {
    min-height: auto;
    margin-bottom: 0;
   
     margin-top: 0px; 
    gap: 20px; // Consistent gap
    order: 1; // Images above text
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

/* ─────────────────────────────── Typography ─────────────────────────────── */

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.h2Size};
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
     font-size: 40px; 
  }
  @media (max-width: 768px) {
    font-size: 28px; // Adjusted (original was 26px, then 32px)
    line-height: 1.3;
  }
`;

export const Subtitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.h3Size};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
    font-size: 26px; 
  }
  @media (max-width: 768px) {
    font-size: 20px; // Adjusted
    line-height: 1.4;
  }
`;

export const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: 20px;
  line-height: 1.2; 
  color: ${({ theme }) => theme.colors.white};

  &.large-italic {
    font-weight: ${({ theme }) => theme.typography.fontWeightLight}; 
    font-size: 30px; 
    line-height: 1.2; 
    font-style: italic; 
  }

  @media (max-width: 768px) {
    font-size: 16px; // Adjusted
    line-height: 1.5; // Better readability for paragraph text

    &.large-italic {
      font-size: 22px; // Adjusted
      line-height: 1.4;
    }
  }
`;

/* ─────────────────────────────── Decorative Images ─────────────────────────────── */

export const BackgroundImage43 = styled.div`
  position: absolute;
  width: 754px;
  height: 550px;
  background-image: url(${image43Url});
  background-size: cover;
  background-repeat: no-repeat;

  top: -50px;
  right: -250px;
  transform: rotate(15deg);
  opacity: 0.3;
  z-index: 0; 

  ${media.tablet} {
    top: -30px;
    right: -350px; 
    width: 600px;
    height: 300px;
    opacity: 0.2;
  }

  @media (max-width: 768px) {
  width: 640px;
  height: 450px;
  }
`;

export const TabletImageTop = styled.div`
  position: absolute; 
  width: 100px;
  height: 169px;
  background-image: url(${tabletSmallUrl});
  background-size: contain;
  background-repeat: no-repeat;

  top: 10%;
  right: 30%; 

  ${media.tablet} {
    position: static; 
    margin-bottom: 0; 
    width: 80px;
    height: 135px;
  }

  @media (max-width: 768px) {
    position: static; // Ensure it's part of the flow
    width: 60px; // Adjusted size
    height: calc(60px * (169 / 100)); // Maintain aspect ratio
  }
`;

export const TabletImageBottom = styled(TabletImageTop)`
  top: 40%; 
  right: 20%; 

  ${media.tablet} {
    // Inherits static positioning 
  }
  @media (max-width: 768px) {
     // Inherits static positioning and sizing from TabletImageTop's mobile query
     // No need to repeat width/height if it's the same as TabletImageTop on mobile
  }
`;

export const Image45 = styled.div`
  position: absolute; 
  width: 300px;
  height: 376px;
  background-image: url(${image45Url});
  background-size: contain;
  background-repeat: no-repeat;

  bottom: 5%;
  right: 5%; 
  opacity: 0.8;

  ${media.tablet} {
    position: static; 
    width: 250px;
    height: 313px;
    margin-top: 0; 
  }

  @media (max-width: 768px) {
    position: static; // Ensure it's part of the flow
    width: 180px; // Adjusted size
    height: calc(180px * (376 / 300)); // Maintain aspect ratio
  }
`;