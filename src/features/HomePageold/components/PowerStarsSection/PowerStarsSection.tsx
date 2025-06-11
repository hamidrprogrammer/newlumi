import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import background from '../../../../assets/images/home/water-waves.png'; //
import SmartImage from '@/lib/shared/components/Besic/SmartImage/SmartImage';

// Placeholder image URL - replace with your actual image path
const HOMEPAGE_SEC4_BACKGROUND_URL = background; // Replace with your actual image

// Main container for the section
const ProductsContainer = styled(SmartImage)`
  position: relative; // Establishes a positioning context for absolute children
  width: 100%; // Takes full width of its parent
  height: 750px; // As per Figma, consider making this responsive (e.g., min-height or vh)
  background-color: #EEEEEE; // Fallback background color from Figma (Rectangle 1)
  background-image: url(${HOMEPAGE_SEC4_BACKGROUND_URL}); // From Figma (homepage_sec4 1)
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden; // Prevents content spill
  display: flex;
  flex-direction: column;
  justify-content: center; // Centers content vertically
  align-items: center; // Centers content horizontally
  padding: 2rem; // Provides some padding, adjust as needed

  // Ensure 'Outfit' font is loaded globally in your project (e.g., in index.html or a global CSS file)
  font-family: 'Outfit', sans-serif;

  @media (max-width: 768px) {
    height: auto; // Adjust height for smaller screens
    min-height: 600px;
    padding: 2rem 1rem;
  }
`;

// Wrapper for the textual content and buttons to help with positioning
const ContentWrapper = styled(motion.div)`
  position: relative; // Changed from absolute to allow easier centering and responsiveness
  display: flex;
  flex-direction: column;
  align-items: flex-end; // Center items horizontally
  text-align: center; // Ensure text within is centered
  width: 80%; // Take full width of padded parent on smaller screens
 @media (max-width: 768px) {
   align-items: center;
  }
  // The Figma 'top' values (e.g., 3227px, 3367px, 3493px) are absolute to a large page.
  // Here, we'll use margins for spacing within this self-contained section.
`;

// "The Power of the Stars"
const SectionTitle = styled(motion.h2)`
  width: 360px; // Figma: fixed width. Making it responsive.
  height: 120px; // Figma: fixed height. Let content define height.
  font-style: normal;
  font-weight: 300; // Light weight
  font-size: 50px;
  line-height: 1.2; // 120%
  text-align: left;
  color: #FFFFFF;
  margin-bottom: 20px; // Spacing below title

  @media (max-width: 768px) {
    font-size: 36px; // Smaller font for mobile
  }
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

// "Encoded in a Tablet..."
const SectionDescription = styled(motion.p)`
  width: 352px; // Figma: fixed width. Making it responsive.
  height: 96px; // Figma: fixed height. Let content define height.
  font-style: normal;
  font-weight: 400; // Regular weight
  font-size: 20px;
    text-align: left;

  line-height: 1.2; // 120%
  color: #FFFFFF;
  margin-bottom: 40px; // Spacing below description, before buttons
  max-width: 450px; // Constrain line length for readability

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

// Container for the buttons to manage their layout (e.g., side-by-side)
const ButtonsContainer = styled(motion.div)`
  display: flex;
  flex-direction: row; // Arrange buttons in a row
  justify-content: center; // Center buttons horizontally
  align-items: center;
  gap: 20px; // Space between buttons

  @media (max-width: 480px) {
    flex-direction: column; // Stack buttons on small screens
    gap: 15px;
    width: 100%; // Allow buttons to take full width if needed
  }
`;

// "Learn more" button (Frame 14)
const LearnMoreButton = styled(motion.button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 9px 20px 10px;
  // width: 133px; // Let content + padding define width
  height: 42px;
  background: #FFFFFF;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px; /* identical to box height */
  color: #1C1F23;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    width: 100%; // Full width on small screens if stacked
    max-width: 280px; // Max width for stacked buttons
  }
`;

// "Start subscription" button (Frame 15)
const SubscriptionButton = styled(motion.button)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 9px 20px 10px;
  // width: 181px; // Let content + padding define width
  height: 42px;
  background: rgba(255, 255, 255, 0.1); // Semi-transparent white
  border: 2px solid #3FFFF8; // Cyan border
  backdrop-filter: blur(10px); // Frosted glass effect
  border-radius: 200px;
  cursor: pointer;
  transition: all 0.3s ease;

  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px; /* identical to box height */
  color: #3FFFF8; // Cyan text

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(63, 255, 248, 0.2);
  }

  @media (max-width: 480px) {
    width: 100%; // Full width on small screens if stacked
    max-width: 280px; // Max width for stacked buttons
  }
`;


interface ProductsSectionProps {}

const ProductsSection: React.FC<ProductsSectionProps> = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust threshold as needed
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3, // Stagger animation of children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
  const buttonHoverTapProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  return (
    <ProductsContainer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <ContentWrapper>
        <SectionTitle variants={itemVariants}>
          The Power of the Stars
        </SectionTitle>
        <SectionDescription variants={itemVariants}>
          Encoded in a Tablet. Molecular hydrogen. Dead Sea magnesium. Longevity molecules. Drop. Dissolve. Awaken Vitality.
        </SectionDescription>
        <ButtonsContainer variants={itemVariants}>
          <LearnMoreButton {...buttonHoverTapProps}>
            Learn more
          </LearnMoreButton>
          <SubscriptionButton {...buttonHoverTapProps}>
            Start subscription
          </SubscriptionButton>
        </ButtonsContainer>
      </ContentWrapper>
    </ProductsContainer>
  );
};

export default ProductsSection;
