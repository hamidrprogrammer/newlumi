import styled from 'styled-components';
import { media, Theme } from '../../../../core/theme/theme';
import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';

export const SectionWrapper = styled.section<{ textSide?: 'left' | 'right' }>`
  position: relative;
  width: 100%;
  height: 800px;
  background-color: ${({ theme }) => theme.colors.greyMedium}; // Fallback DEDEDE or EEEEEE
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  overflow: hidden;

  ${media.tabletDown} {
    height: auto;
    min-height: 700px;
    padding: ${({ theme }) => theme.spacing.xxl} 0;
    flex-direction: column-reverse; // Visuals often go on top on mobile
     ${({ textSide }) => textSide === 'right' && `
      flex-direction: column; // If text is on right, visual is on top
    `}
  }
`;

export const BackgroundImage = styled(SmartImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
`;

export const ContentGrid = styled.div<{ textSide?: 'left' | 'right' }>`
  position: relative;
  z-index: 2;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: grid;
  grid-template-columns: 1fr 1fr; // Default 2 equal columns
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxl};

  ${({ textSide }) => textSide === 'right' && `
    grid-template-areas: "visual text";
    & > :first-child { grid-area: text; }
    & > :last-child { grid-area: visual; }
  `}
  
  ${media.tabletDown} {
    grid-template-columns: 1fr; // Stack them
    gap: ${({ theme }) => theme.spacing.xl};
    padding: 0 ${({ theme }) => theme.spacing.md};
    grid-template-areas: none !important; // Reset areas
     & > :first-child { grid-area: auto !important; } // Reset areas
    & > :last-child { grid-area: auto !important; } // Reset areas
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Default for left-aligned text

  ${media.tabletDown} {
    align-items: center;
    text-align: center;
    order: 2; // Text below visual on mobile by default
  }
`;

export const CategoryText = styled.h4<{ color?: string }>`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular}; // 400
  font-size: ${({ theme }) => theme.typography.h3Size}; // 30px
  line-height: 1.2;
  color: ${({ color, theme }) => color || theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const HeadlineText = styled.h2`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold}; // 700
  // Figma shows varied sizes, typically large, 50px used in other sections.
  // For these sections: "Sunlight, captured..." (20px/bold), "Restore balance..." (20px/bold), "Power up..." (20px/bold)
  // This is smaller than section titles. Let's use h3Size (30px) as a base for headline, or h4 for description titles
  font-size: 20px; // From Figma specific sizes for these headlines
  line-height: 1.2; // or 24px
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const DescriptionText = styled.p`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular}; // 400 or 700 for LumiVitae description
  font-size: ${({ theme }) => theme.typography.bodySize}; // 16px
  line-height: 1.5; // or 19px
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const VisualContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; // For layering internal elements

  ${media.tabletDown} {
    order: 1; // Visual on top on mobile
    width: 100%;
    max-width: 400px; // Limit size on mobile
    margin: 0 auto; // Center it
  }
`;

// For the "Sun Lid" type visual
export const SunLidImage = styled(SmartImage)`
  width: 100%;
  max-width: 490px; // Based on Figma Bottle_Page-Lid_sun 1 width
  height: auto;

  ${media.tabletDown} {
    max-width: 300px;
  }
`;

// For the "Animated Lid" type visual (Recovery, Energy)
export const AnimatedLidWrapper = styled.div`
  position: relative;
  width: 382px; // Ellipse 55 width
  height: 380px; // Ellipse 55 height
  display: flex;
  justify-content: center;
  align-items: center;

  // Base Ellipse (Mask / Background)
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #D9D9D9; // Ellipse 55 background
    border-radius: 50%;
    z-index: 1;
  }

  ${media.tabletDown} {
    width: 280px;
    height: 280px;
  }
`;

export const LidImage = styled(SmartImage)`
  position: relative; // Changed from absolute to allow natural sizing within bounds
  z-index: 2;
  width: 100%; // Top_View 1 width 701px, height 701px but masked by 382px Ellipse
  max-width: 550px; // Scaled down to fit, original is larger than mask
  height: auto;
  object-fit: contain; // Ensure it fits, might need to adjust based on actual image aspect ratio

   ${media.tabletDown} {
    max-width: 400px;
  }
`;

export const HaloImage = styled(SmartImage)`
  position: absolute;
  z-index: 3;
  width: 110%; // Halo is usually larger than the lid
  height: auto;
  max-width: 652px; // Figma width
  mix-blend-mode: screen;
  pointer-events: none;

  ${media.tabletDown} {
    max-width: 450px;
  }
`;

export const AnimationAsset = styled(SmartImage)`
  position: absolute;
  z-index: 4;
  width: 212px; // anim_pink/blue width
  height: 212px;
  border-radius: 5px; // As per Figma
  // Centered on top of the lid/ellipse
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${media.tabletDown} {
    width: 150px;
    height: 150px;
  }
`;
