// BottlePage/components/BenefitsSection/BenefitsSection.styles.ts
// (Also applies to PioneeringTechSection.styles.ts if it's a copy)
import styled from 'styled-components';
import { FullWidthSection, SectionContent as BaseSectionContent } from '../common/PageSection';
// import sectionFourBg from '../../../../assets/images/bottle/section-four-bg.png';

export const SectionContainer = styled(FullWidthSection)`
  background-color: #072C3D;
  min-height: 1166px;
  padding-top: 150px;
  padding-bottom: 50px;
  @media (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 40px;
    min-height: auto;
  }
`;

export const SectionContent = styled(BaseSectionContent)`
  color: #ffffff;
  max-width: 1100px;
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 50px;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 60px;
  max-width: 643px;
   @media (max-width: 768px) {
    font-size: 18px;
    max-width: 100%;
    margin-bottom: 40px;
  }
`;

export const SliderWrapper = styled.div`
  margin-bottom: 30px; /* Reduced bottom margin for tighter layout with controls */
  position: relative;
`;

export const TextRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-top: 30px;
  }
`;

export const TextBlock = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  max-width: 323px;
  margin:0;
  span {
    font-weight: 600;
  }
   @media (max-width: 768px) {
    font-size: 18px;
    max-width: 90%;
  }
`;

export const SliderControls = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-top: 20px; /* Space above the controls */
  margin-bottom: 40px; /* Space below controls before TextRow */

  @media (max-width: 768px) {
    justify-content: center; /* Center controls on mobile */
    margin-bottom: 30px;
  }
`;

// New styled component for touch-friendly buttons
export const SliderControlButton = styled.button`
  background: transparent;
  border: none;
  padding: 12px; /* Increased padding for larger touch area */
  cursor: pointer;
  line-height: 0; /* Remove line-height if it affects alignment */

  img {
    width: 23px;
    height: 18px;
    opacity: 0.8;
    transition: opacity 0.3s ease;
    display: block; /* Prevents extra space under image */
  }

  &:hover img {
    opacity: 1;
  }

  &:active img { /* Optional: feedback on tap */
    opacity: 0.6;
  }
`;