import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import backmobifo from '@assets/images/shared/backmobifo.png'
// --- Styled Components ---
import logoDefault from '@assets/images/logo.svg';
import { motion } from 'framer-motion';
// Main Footer Container
const FooterWrapper = styled.footer`
  /* Footer */
  width: 100%;
  height: 501px;
  background-repeat: no-repeat;
  background-size: cover;
  padding:8px;
  align-items: center;
  display: flex;
  flex-direction: column;
  
  left: 0px; /* As per CSS, might be managed by parent in real app */
  top: 4499px; /* As per CSS, might be managed by parent in real app */
  overflow: hidden; /* To contain elements like the background image */
  font-family: 'Outfit', sans-serif; /* Added font-family */
   background-image: url(${backmobifo});
`;

// Background Image (Placeholder styling for visibility)
// The CSS for "image 12 1" is complex and suggests a large, transformed background image.
// The "Mask group" seems to be an implicit container for this.
const BackgroundImage = styled.div`
  /* image 12 1 */
  position: absolute;
  width: 1192px; /* This is much larger than the 375px footer */
  height: 711px;
  top: 1px;


`;


// Social Icons Container
const SocialIconsContainer = styled.div`
  /* social */
  width: 158px;
  height: 32px;
  left: calc(50% - 158px / 2 + 0.5px);
  bottom: 78px; /* Corresponds to top: calc(100% - 78px - 32px) = approx 591px on a 701px height */
  display: flex;
  justify-content: space-around; /* For even spacing of icons if more are added */
  align-items: center;
  z-index: 1;
`;

// Placeholder for Social Icons (ri:facebook-fill, ic:baseline-tiktok, etc.)
// The individual icon styles from the CSS (like left percentages) would apply if they were individually positioned
// instead of being flex items in a container. The CSS seems to imply both a container and individual absolute positions.
// For simplicity and responsiveness within the social container, flexbox is used here.
// If pixel-perfect adherence to the individual `left` percentages for icons is needed, each icon would need to be `position: absolute`
// relative to `FooterWrapper` or a common `position: relative` parent for icons.
// The original CSS seems to have `top: 591px` for all icons, which is `701px - 32px - 78px = 591px`.
// This matches `bottom: 78px` for the container if the container is aligned to its content height.

const IconPlaceholder = styled.div<{ iconColor?: string }>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Simulating the 'Vector' background for icons */
  &::before {
    content: '';
    display: block;
    width: 70%; /* Adjust as needed to match vector sizes */
    height: 70%; /* Adjust as needed to match vector sizes */
    background: ${(props) => props.iconColor || '#FFFFFF'};
  }
`;

// Text Links
interface TextElementProps {
  left: string;
  right: string;
  top: string;
  bottom: string;
  opacity?: number;
  fontSize?: string;
  fontWeight?: number;
  textAlign?: string;
}

const TextElement = styled.p<TextElementProps>`
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || '16px'};
  line-height: ${(props) => (props.fontSize === '14px' ? '18px' : '20px')};
  color: #ffffff;
  opacity: ${(props) => props.opacity || 1};
  margin: 0; /* Reset default margin */
  z-index: 1;
  text-align: ${(props) => props.textAlign || 'left'};
`;

// Logo Container & Placeholders
const LogoContainer = styled.div`
  /* logo */
  width: 334px; /* Given by CSS, seems too wide if left: 20px is also applied on 375px screen. Will stick to CSS. */
  /* The CSS for individual vectors is complex and forms a graphical logo. */
  /* This is a simplified placeholder. */
  height: 42.17px;
  left: 20px;
  top: calc(50% - 42.17px / 2 + 48.58px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;

  z-index: 1;
`;

const LegalLinksText = styled(TextElement)`
  /* Imprint | Privacy Policy | Shipping | Returns | Terms of Service | Warranty */
  /* width: 277px; This will be implicitly handled by left/right or text content */
  left: calc(50% - 277px / 2);
  /* top: 74.32%; From CSS, directly used */
  /* bottom: 19.97%; From CSS, directly used */
  line-height: 140%; /* or 20px */
  white-space: pre-wrap; /* To allow for line breaks if any, or use flex for multiple links */
  text-align: center;
`;

// Language and Region Selectors
const LanguageRegionGroup = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  color: #ffffff;
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

const LanguageText = styled.span`
  /* English / United States */
  /* Positioning for these is provided per group in the main component */
  text-align: right; /* As per CSS for English and United States */
`;

const DropdownArrow = styled.div`
  /* Vector 1 / Vector 2 */
  width: 5px;
  height: 2.5px;
  border: 1px solid #ffffff;
  border-top: none; /* Creates a downward arrow shape */
  margin-left: 6px; /* Spacing between text and arrow */
`;

const Logo = styled(motion.img)<React.ImgHTMLAttributes<HTMLImageElement>>`
  height: 21px;
  cursor: pointer;
`;
// --- Mobile Footer Component ---
const MobileFooter: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
      offset: 50, // Offset (in px) from the original trigger point
      delay: 100, // Values from 0 to 3000, with step 50ms
    });
  }, []);

  return (
    <FooterWrapper>
      {/* Background elements as per CSS structure. Rectangle 9 and 10 are covered by FooterWrapper's background. */}
      {/* Mask group is implicit. */}

      {/* Text Links */}
      {/* Column 1 Titles (Opacity 0.5) */}
      <TextElement left="5.33%" right="83.47%" top="4.28%" bottom="92.87%" opacity={0.5} fontWeight={400} data-aos="fade-up">Bottle</TextElement>
      <TextElement left="5.33%" right="80.27%" top="18.54%" bottom="78.6%" opacity={0.5} fontWeight={400} data-aos="fade-up" data-aos-delay="50">Science</TextElement>

      {/* Column 1 Links */}
      <TextElement left="5.33%" right="60.8%" top="9.27%" bottom="87.87%" fontWeight={500} data-aos="fade-up" data-aos-delay="100">Explore the Bottle</TextElement>
      <TextElement left="5.33%" right="56%" top="23.11%" bottom="74.04%" fontWeight={500} data-aos="fade-up" data-aos-delay="150">Molecular Hydrogen</TextElement>
      <TextElement left="5.33%" right="70.13%" top="27.67%" bottom="69.47%" fontWeight={500} data-aos="fade-up" data-aos-delay="200">Supplements</TextElement>
      <TextElement left="5.33%" right="83.47%" top="32.24%" bottom="64.91%" fontWeight={500} data-aos="fade-up" data-aos-delay="250">Bottle</TextElement>
      <TextElement left="5.33%" right="82.4%" top="36.8%" bottom="60.34%" fontWeight={500} data-aos="fade-up" data-aos-delay="300">Water</TextElement>

      {/* Column 2 Titles (Opacity 0.5) */}
      <TextElement left="53.07%" right="33.33%" top="4.28%" bottom="92.87%" opacity={0.5} fontWeight={400} data-aos="fade-up">Tablets</TextElement>
      <TextElement left="53.07%" right="27.47%" top="18.54%" bottom="78.6%" opacity={0.5} fontWeight={400} data-aos="fade-up" data-aos-delay="50">LumiVitae</TextElement>

      {/* Column 2 Links */}
      <TextElement left="53.07%" right="6.4%" top="9.27%" bottom="87.87%" fontWeight={500} data-aos="fade-up" data-aos-delay="100">Explore LVQ+ Tablets</TextElement>
      <TextElement left="53.07%" right="14.67%" top="23.11%" bottom="74.04%" fontWeight={500} data-aos="fade-up" data-aos-delay="150">About LumiVitae</TextElement>
      <TextElement left="53.07%" right="12.53%" top="27.67%" bottom="69.47%" fontWeight={500} data-aos="fade-up" data-aos-delay="200">Become a Partner</TextElement>
      <TextElement left="53.07%" right="23.47%" top="32.24%" bottom="64.91%" fontWeight={500} data-aos="fade-up" data-aos-delay="250">Help & FAQs</TextElement>

      {/* Logo Placeholder */}
      <LogoContainer data-aos="zoom-in" data-aos-delay="400">
               <Logo src={logoDefault} alt="Logo" />

        {/* Placeholder for multiple vector parts of the logo */}
      </LogoContainer>

      {/* Legal Links */}
      <LegalLinksText
        left="calc(50% - 277px / 2 - 0.5px)" /* CSS: calc(50% - 277px/2) */
        right="calc(50% - 277px / 2 + 0.5px)" /* Ensuring width is 277px implicitly by balancing left/right from center */
        top="74.32%"
        bottom="19.97%"
        fontSize="14px"
        fontWeight={400}
        textAlign="center"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        Imprint | Privacy Policy | Shipping | Returns | Terms of Service | Warranty
      </LegalLinksText>


      {/* Social Icons */}
      {/* The CSS positions individual icons absolutely based on percentages of the parent.
          The "social" container is centered.
          ri:facebook-fill: left: 29.07%; right: 62.4%; top: 591px;
          ic:baseline-tiktok: left: 40.27%; right: 51.2%; top: 591px;
          mdi:instagram: left: 51.47%; right: 40%; top: 591px;
          mdi:youtube: left: 62.67%; right: 28.8%; top: 591px;
          These percentages seem to be relative to the 'social' container (158px width), not the main footer (375px).
          Let's use the SocialIconsContainer with flex for easier management.
          If exact percentages are needed, each icon would be its own styled component with absolute positioning.
      */}
      <SocialIconsContainer data-aos="fade-up" data-aos-delay="600">
        {/* Placeholder for ri:facebook-fill */}
        <IconPlaceholder title="Facebook" />
        {/* Placeholder for ic:baseline-tiktok */}
        <IconPlaceholder title="TikTok" />
        {/* Placeholder for mdi:instagram */}
        <IconPlaceholder title="Instagram" />
        {/* Placeholder for mdi:youtube */}
        <IconPlaceholder title="YouTube" />
      </SocialIconsContainer>


      {/* Copyright */}
      <TextElement
        left="5.33%"
        right="56.27%"
        top="93.15%"
        bottom="4.28%"
        fontSize="14px"
        fontWeight={400}
        textAlign="center" /* As per CSS, though left/right might make it align left */
        data-aos="fade-up"
        data-aos-delay="700"
      >
        © 2025 LumiVitae, Lda
      </TextElement>

      {/* Language Selector: Group 16 + English + Vector 1 */}
      {/* CSS: Group 16: width: 59px; height: 18px; left: 296px; top: 653px; */}
      {/* CSS: English: left: 78.93%; right: 9.33%; top: 93.15%; bottom: 4.28%; text-align: right; */}
      {/* CSS: Vector 1: width: 5px; height: 2.5px; left: 350px; top: 662px; border: 1px solid #FFFFFF; */}
      {/* Combining these into one logical group. The top: 93.15% for text is consistent with copyright. */}
      <LanguageRegionGroup
        style={{ left: '296px', top: '653px' }} // Group 16 position
        data-aos="fade-up"
        data-aos-delay="750"
      >
        <LanguageText>English</LanguageText>
        <DropdownArrow />
      </LanguageRegionGroup>


      {/* Region Selector: Group 17 + United States + Vector 2 */}
      {/* CSS: Group 17: width: 99px; height: 18px; left: 180px; top: 653px; */}
      {/* CSS: United States: left: 48%; right: 29.6%; top: 93.15%; bottom: 4.28%; text-align: right; */}
      {/* CSS: Vector 2: width: 5px; height: 2.5px; left: 274px; top: 662px; border: 1px solid #FFFFFF; */}
      <LanguageRegionGroup
        style={{ left: '180px', top: '653px' }} // Group 17 position
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <LanguageText>United States</LanguageText>
        <DropdownArrow />
      </LanguageRegionGroup>

    </FooterWrapper>
  );
};

export default MobileFooter;