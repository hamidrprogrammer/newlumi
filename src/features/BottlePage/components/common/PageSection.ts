// BottlePage/components/common/PageSection.ts
import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';
import styled from 'styled-components';

export const FullWidthSection = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #000; /* Default background */
`;

export const SectionContent = styled.div`
  max-width: 1440px; /* یا عرض مورد نظر شما برای محتوا */
  margin: 0 auto;
  padding: 60px 20px; /* Padding عمومی برای بخش‌ها */
  position: relative;
  z-index: 2;

  @media (max-width: 1440px) { // This seems like a desktop-specific breakpoint, not tabletDown
    // padding: 40px 15px; // Consider if this should be under a mobile breakpoint instead
  }
  @media (max-width: 768px) { /* Add specific mobile padding */
    padding: 40px 15px;
  }
`;

export const SectionBackgroundImage = styled(SmartImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${({ imageUrl }) => (imageUrl ? `url(${imageUrl})` : 'none')};
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

// دکمه های پایه ای که در چندین بخش استفاده می شوند
export const BaseButton = styled.button`
  font-size: 18px;
  font-weight: 400;
  padding: 10px 20px;
  border-radius: 200px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  border: 2px solid transparent;
  line-height: normal;
  min-height: 44px; /* Base min-height for desktop */

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 18px; /* Adjusted padding for better height */
    min-height: 48px;   /* Ensured min-height for mobile, increased slightly */
  }
`;

export const PrimaryButton = styled(BaseButton)`
  color: #1c1f23;
  background-color: #ffffff;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const SecondaryButton = styled(BaseButton)`
  color: #3ffff8;
  background-color: #ffffff1a; /* rgba(255, 255, 255, 0.1) */
  border-color: #3ffff8;
  backdrop-filter: blur(20px) brightness(100%);
  -webkit-backdrop-filter: blur(20px) brightness(100%);

  &:hover {
    background-color: #ffffff33; /* rgba(255, 255, 255, 0.2) */
  }
`;