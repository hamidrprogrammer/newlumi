import styled from 'styled-components';
import { media, Theme } from '../../../../core/theme/theme';

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 2071px; // As per Figma
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.primaryDark} 0%, #000000 100%);
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  ${media.tabletDown} {
    min-height: auto;
    padding: ${({ theme }) => theme.spacing.xl} 0;
  }
`;

export const TopTextContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl}; // Space before bottles
  display: flex;
  justify-content: space-between; // For left and right aligned text
  align-items: flex-start; // Align items to the top of the container
  min-height: 120px; // Accommodate tallest text block

  ${media.tabletDown} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

export const MainTitle = styled.h2` // "Redefine your well being"
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular}; // 400 (Figma had 50px, no weight, assuming regular)
  font-size: ${({ theme }) => theme.typography.h2Size}; // 50px
  line-height: 1.2;
  max-width: 312px; // Figma width
  // Figma: left: calc(50% - 312px/2 - 299px); => approx 265px from left edge of 1440px
  // This will be naturally on the left due to justify-content: space-between on parent.

  ${media.tabletDown} {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const ActionSubtitle = styled.p` // "Order a bottle today..."
  font-weight: ${({ theme }) => theme.typography.fontWeightBold}; // 700
  font-size: ${({ theme }) => theme.typography.h4Size}; // 20px
  line-height: 1.2;
  max-width: 371px; // Figma width
  // Figma: left: calc(50% - 371px/2 + 200.5px); => approx 735px from left edge of 1440px
  // This will be naturally on the right.

  ${media.tabletDown} {
    max-width: 100%;
    font-size: 18px;
  }
`;

export const BottlesContainer = styled.div`
  display: flex;
  justify-content: center; // Center the pair of bottles
  align-items: flex-start; // Align tops of cards if heights differ slightly
  gap: ${({ theme }) => theme.spacing.xxl}; // Space between bottle cards
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.md}; // Some padding on smaller screens

  ${media.tabletDown} {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xl};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

export const SeparatorLine = styled.hr`
  width: 100%;
  max-width: 910px; // Figma width
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor}; // rgba(255, 255, 255, 0.2)
  margin: 0 auto ${({ theme }) => theme.spacing.xxl}; // Centered, with bottom margin

  ${media.tabletDown} {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    max-width: 90%;
  }
`;

export const FeaturesGrid = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(157px, 1fr)); // Responsive columns
  justify-content: center; // Center grid items if they don't fill width
  gap: ${({ theme }) => theme.spacing.lg}; // Gap between columns and rows
  
  // Figma shows two distinct columns for "details" positioned at 409px and 879px.
  // Let's use a simpler 2-column grid for desktop and single for mobile.
  // Or a multi-column auto-fit grid.
  
  // For a two-column explicit approach:
  // display: flex;
  // justify-content: center;
  // gap: 200px; // Approximate gap between the two columns (879 - (409+157))

  ${media.tabletDown} {
     padding: 0 ${({ theme }) => theme.spacing.md};
     gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const FeaturesColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Center FeatureSpecItems within the column
  // Each column in Figma is 157px wide. The items inside are centered.
  // If using display:grid on FeaturesGrid, this column isn't strictly needed
  // unless for specific column styling.
`;
