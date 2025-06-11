// BottlePage/components/ChromoColoursSection/ChromoColoursSection.styles.ts
import styled from 'styled-components';
import { media, Theme } from '../../../../core/theme/theme';
import decorativeBgUrl from '@assets/images/bottle/bottleImageUrl.png'; // Ensure this path is correct
import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';
// const bottleImageUrl = '@assets/images/bottle/bottle-hand-gold-bottle-1.png'; // This seems to be unused directly here

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 800px; // Use min-height for flexibility
  background-color: #0B0C07;
  color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl} 0; // Add vertical padding

  ${media.tabletDown} {
    min-height: auto;
    padding: ${({ theme }) => theme.spacing.xl} 0; // Keep consistent padding
  }
`;

export const DecorativeBackground = styled(SmartImage)`
  position: absolute;
  width: 50%;
  height: 100%;

  top: 0;
  transform: translateX(-50%);
 
  background-image: url(${decorativeBgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.8;

  z-index: 0;
  pointer-events: none;

  ${media.tabletDown} {
    display: none;
  }
`;

export const ContentGrid = styled.div`
  position: relative;
  z-index: 1;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.xl}; // Horizontal padding
  display: grid;
  grid-template-columns: 35% 1fr;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxl};
  flex-grow: 1;

  ${media.tabletDown} {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.lg};
    padding: 0 ${({ theme }) => theme.spacing.md}; // Adjusted mobile padding
  }
`;

export const BottleVisualContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;

  ${media.tabletDown} {
    order: 1;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    height: 350px; // Adjusted height for mobile visual
  }
`;

export const BottleImage = styled.img`
  max-width: 290px;
  height: auto;
  max-height: 750px;
  object-fit: contain;
  position: absolute; // Keep absolute if overflow effect is desired
  bottom: -150px;    // Adjust as needed

  ${media.tabletDown} {
    max-width: 160px; // Adjusted for smaller screens
    position: static;
    max-height: 100%;
  }
`;

export const TextContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  gap: ${({ theme }) => theme.spacing.lg};

  ${media.tabletDown} {
    order: 2;
    align-items: center;
  }
`;

export const Title = styled.h3`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: ${({ theme }) => theme.typography.h3Size};
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 370px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Paragraph = styled.p`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: ${({ theme }) => theme.typography.h4Size};
  line-height: 1.4;
  max-width: 375px;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const PaletteContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 365px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.lg}; /* Adjusted margin from auto */
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  ${media.tabletDown} {
    margin-top: ${({ theme }) => theme.spacing.lg};
    width: 90%;
    max-width: 320px;
    height: 50px;
  }
`;

export const ColorDot = styled.button<{ color: string; isActive: boolean }>`
  width: 28px; /* Visual size of the dot */
  height: 28px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  border: 3px solid ${({ theme, isActive }) => (isActive ? theme.colors.white : 'transparent')};
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  box-shadow: ${({ isActive }) => (isActive ? '0 0 10px rgba(255,255,255,0.7)' : 'none')};
  display: flex; /* For centering if an icon/pseudo-element is added */
  align-items: center;
  justify-content: center;
  padding: 0; /* Reset default button padding */

  /* Increase touch target size effectively */
  position: relative;
    &::before {
    content: '';
    position: absolute;
    left: -6px; /* (40 - 28) / 2 = 6 */
    top: -6px;
    right: -6px;
    bottom: -6px;
    border-radius: 50%;
    /* background-color: rgba(255,0,0,0.1); // For visualizing touch area */
  }


  &:hover {
    transform: scale(1.15); /* Slightly more hover effect */
    border-color: ${({ theme, isActive }) => (isActive ? theme.colors.white : theme.colors.accentCyan)};
  }

  ${media.tabletDown} {
    width: 24px; /* Adjust visual dot size for mobile if needed */
    height: 24px;
    border-width: 2px;
     &::before { /* Adjust pseudo-element for new size */
        left: -8px; /* (40 - 24) / 2 = 8 */
        top: -8px;
        right: -8px;
        bottom: -8px;
     }
  }
`;