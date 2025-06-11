import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { RiFacebookFill } from 'react-icons/ri';
import { FaTiktok } from 'react-icons/fa'; // ic:baseline-tiktok can be replaced by FaTiktok or similar
// import { MdiInstagram, MdiYoutube } from './CustomIcons'; // Using custom wrappers for MDI if needed for specific vector styling
import footer_bkganim from "@assets/images/shared/footer_bkganim 1.png"
// --- Global Styles (Optional - if you need to set body/html styles) ---
import { motion } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Outfit', sans-serif; // Ensure Outfit font is loaded
  }
  * {
    box-sizing: border-box;
  }
`;

// --- Styled Components ---

const FooterWrapper = styled.footer`
  position: relative; // Changed from absolute for better page flow, can be absolute if needed in a specific parent
  width: 100%;
  height: 860px;
  margin: 0 auto; // Center if max-width is applied
  overflow: hidden; // Prevents content from spilling outside defined height if any issues
  bottom: 0; // If position is absolute, this sticks it to the bottom
  left: 0; // If position is absolute
  background: #072C3D;
  
  @media (max-width: 1440px) {
    height: auto; // Adjust height for smaller screens
    padding-bottom: 20px; // Ensure content has space
  }
`;

const BackgroundImage1 = styled.div`
  position: absolute;
  width: 100%; // Make it responsive to wrapper

  height: 859px;
  left: 0; // Centered with the parent
  top: 0px;
  background: url('${footer_bkganim}') ;
  background-size: cover; // Cover the area

  @media (max-width: 768px) {
    display: none; // Optionally hide complex backgrounds on small screens
  }
`;



const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 0 2.08%; // Corresponds to left: 2.08% for some elements
  display:flex;
  @media (max-width: 1440px) {
    padding: 0 20px; // Fixed padding for smaller than 1440px
  }
`;



const NavLinksContainer = styled.div`
  position: absolute;
  top: 3.49%; // Approx. for titles
  left: 0;
  right: 0;
  display: flex;
  gap: 1.5%; // Spacing between columns, adjust as needed
  padding: 0 2%; // General padding

  @media (max-width: 1024px) {
    top: 60px; // Below logo if stacked
    flex-wrap: wrap; // Allow columns to wrap
    justify-content: space-around;
    position: relative; // Change from absolute
    padding-top: 180px; // Space for logo
  }

  @media (max-width: 768px) {
    flex-direction: column; // Stack columns vertically
    align-items: center; // Center columns
    padding-top: 120px; // Adjusted space for logo
    gap: 20px;
  }
`;

interface NavColumnProps {
  titleLeft?: string; // For Figma's specific positioning
  titleWidth?: string;
}

const NavColumn = styled.div<NavColumnProps>`
  display: flex;
  flex-direction: column;
  font-family: 'Outfit', sans-serif;
  color: #FFFFFF;
  // The CSS uses absolute left/right for each text block.
  // We'll group them into columns for better responsive structure.
  // Specific positioning of items within column will be handled by NavLinkText.
  // Example: A column might have width: 15% of container;
  // For fixed positioning like Figma:
  // position: absolute; left: X%; width: Y%;
  text-align: left;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    width: 100%;
  }
`;

const NavTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  opacity: 0.5;
  margin-bottom: 20px; // Spacing from title to links (was originally fixed top/bottom)

  // Example for "Bottle" title from CSS:
  // position: absolute; left: 2.08%; right: 95%; top: 3.49%; bottom: 94.19%;
  // This kind of absolute positioning for each title is hard to maintain responsively.
  // A flex column approach is generally better.

  @media (max-width: 768px) {
    font-size: 18px; // Slightly larger for tap targets
    margin-bottom: 10px;
  }
`;

const NavLinkText = styled.a`
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  text-decoration: none;
  margin-bottom: 15.5px; // Approx from Figma (e.g., 10.93% - 7.56% ~ 3.37% of 860px)

  // Example for "Explore the Bottle":
  // position: absolute; left: 2.08%; right: 89.1%; top: 7.56%; bottom: 90.12%;
  // This implies a specific bounding box. We use margin for flow.

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 10px;
  }
`;

const SocialIconsWrapper = styled.div`
  position: absolute;
  width: 158px;
  height: 32px;
  left: calc(50% - 158px/2 - 1px);
  bottom: 90px; // Increased spacing from bottom bar
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    bottom: 120px; // Adjust based on footer bar height
  }
  @media (max-width: 768px) {
    position: relative; // Make it part of the flow
    bottom: auto;
    margin: 30px auto; // Center it and add space
    width: 200px; // Wider for easier tapping
    justify-content: space-around;
  }
`;

const SocialIconLink = styled.a`
  color: #FFFFFF;
  font-size: 32px; // Icon size
  display: flex;
  align-items: center;
  justify-content: center;

  // The Figma CSS has complex left/right/top for each icon and a separate "Vector" child.
  // react-icons handles the SVG and its color directly.
  // Example: ri:facebook-fill styling
  // position: absolute; height: 32px; left: 44.44%; right: 53.33%; top: 798px;
  // This indicates precise placement on the 1440px canvas. Flexbox is more maintainable.

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const FooterBottomBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 30px;
  height: 18px; // Line height
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.08%; // 30px / 1440px approx
  font-family: 'Outfit', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #FFFFFF;

  @media (max-width: 1024px) {
    padding: 0 20px;
    bottom: 20px;
  }

  @media (max-width: 768px) {
    position: relative; // Allow it to flow
    flex-direction: column;
    align-items: center;
    text-align: center;
    bottom: auto; // Remove absolute positioning
    padding: 20px;
    gap: 15px; // Space between stacked items
    font-size: 12px;
  }
`;

const LegalLinks = styled.div`
  // CSS: left: 2.08%; right: 67.15%; top: 93.84%; bottom: 4.07%;
  // This defines a wide area. We'll let content size it.
  a {
    color: #FFFFFF;
    text-decoration: none;
    margin-right: 5px; // Adjust spacing
    &:not(:last-child):after {
      content: '|';
      margin-left: 5px;
      margin-right: 2px;
    }
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    order: 3; // Change order for mobile if needed
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    a {
      margin: 2px 5px;
      &:not(:last-child):after {
        content: '|'; // Keep separators
      }
    }
  }
`;

const CopyrightText = styled.div`
  // CSS: left: 72.78%; right: 17.22%;
  text-align: right; // Default, will be adjusted by flex justify-content

  @media (max-width: 768px) {
    order: 1; // E.g., show copyright first on mobile
    text-align: center;
  }
`;

const RegionSelection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; // Space between language and country
  text-align: right;

  @media (max-width: 768px) {
    order: 2; // E.g., region info second
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;

const RegionText = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

// For Vector 1 and Vector 2 (small decorative borders)
// These are tiny and their Figma positioning is very specific.
// Might be arrows for dropdowns not fully implemented.
// Hiding them for now as their utility is unclear without interaction.
// If they are simple borders, they could be pseudo-elements on RegionText.
/*
const SmallVector = styled.div`
  width: 5px;
  height: 2.5px;
  border: 1px solid #FFFFFF;
  position: absolute; 
  // Vector 1: left: 1405px; top: 816px; (Difficult to place precisely without context)
  // Vector 2: left: 1316px; top: 816px;
`;
*/

// --- Navigation Data ---
interface NavItem {
  text: string;
  href: string;
}

interface FooterNavColumn {
  title: string;
  titleOriginalCss?: { left: string; right: string; top: string; bottom: string }; // For reference
  items: NavItem[];
  itemOriginalCss?: { left: string; right: string; top: string; bottom: string }[]; // For reference
}

const navData: FooterNavColumn[] = [
  {
    title: "Bottle",
    // titleOriginalCss: { left: "2.08%", right: "95%", top: "3.49%", bottom: "94.19%" },
    items: [
      { text: "Explore the Bottle", href: "#explore-bottle" },
      // itemOriginalCss: { left: "2.08%", right: "89.1%", top: "7.56%", bottom: "90.12%" }
    ],
  },
  {
    title: "Tablets",
    // titleOriginalCss: { left: "18.4%", right: "78.06%", top: "3.49%", bottom: "94.19%" },
    items: [
      { text: "Explore LVQ+ Tablets", href: "#explore-tablets" },
      // itemOriginalCss: { left: "18.4%", right: "71.04%", top: "7.56%", bottom: "90.12%" }
    ],
  },
  {
    title: "Science",
    // titleOriginalCss: { left: "34.72%", right: "61.53%", top: "3.49%", bottom: "94.19%" },
    items: [
      { text: "Molecular Hydrogen", href: "#hydrogen" },
      { text: "Supplements", href: "#supplements" },
      { text: "Bottle", href: "#science-bottle" },
      { text: "Water", href: "#water" },
    ],
  },
  {
    title: "LumiVitae",
    // titleOriginalCss: { left: "51.04%", right: "43.89%", top: "3.49%", bottom: "94.19%" },
    items: [
      { text: "About LumiVitae", href: "#about" },
      { text: "Become a Partner", href: "#partner" },
      { text: "Help & FAQs", href: "#faq" },
    ],
  },
];


const Footer: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <FooterWrapper>
        <BackgroundImage1 />
        {/* <BackgroundImage2 /> */}
        <ContentContainer>
          {/* <LogoContainer>               <Logo src={logoDefault} alt="Logo" />
</LogoContainer> */}

          <NavLinksContainer>
            {navData.map((column) => (
              <NavColumn key={column.title}>
                <NavTitle>{column.title.toUpperCase()}</NavTitle>
                {column.items.map((item) => (
                  <NavLinkText key={item.text} href={item.href}>
                    {item.text}
                  </NavLinkText>
                ))}
              </NavColumn>
            ))}
          </NavLinksContainer>

          <SocialIconsWrapper>
            <SocialIconLink href="#facebook" aria-label="Facebook">
              <RiFacebookFill />
            </SocialIconLink>
            <SocialIconLink href="#tiktok" aria-label="TikTok">
              <FaTiktok /> {/* Using FontAwesome's TikTok icon */}
            </SocialIconLink>
            <SocialIconLink href="#instagram" aria-label="Instagram">
              <MdiInstagram />
            </SocialIconLink>
            <SocialIconLink href="#youtube" aria-label="YouTube">
              <MdiYoutube />
            </SocialIconLink>
          </SocialIconsWrapper>

          <FooterBottomBar>
            <LegalLinks>
              <a href="#imprint">Imprint</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#shipping">Shipping</a>
              <a href="#returns">Returns</a>
              <a href="#terms">Terms of Service</a>
              <a href="#warranty">Warranty</a>
            </LegalLinks>
            <CopyrightText>© {new Date().getFullYear()} LumiVitae, Lda</CopyrightText>
            <RegionSelection>
              <RegionText>United States</RegionText>
              <RegionText>English</RegionText>
              {/* Vector1 and Vector2 could be part of a dropdown implementation here */}
            </RegionSelection>
          </FooterBottomBar>
        </ContentContainer>
      </FooterWrapper>
    </>
  );
};

export default Footer;

// --- Custom Icons (if direct mdi from react-icons is not styled as needed) ---
// The "Vector" child elements in your CSS with "background: #FFFFFF" suggest the icon itself should be white.
// react-icons typically takes a `color` prop or inherits it.
// If you need more complex SVG structures for icons as implied by "Vector" in CSS,
// you would define them as separate components. For simplicity, react-icons are used.

// Example of how you might wrap react-icons if specific styling from "Vector" was critical,
// though usually not necessary.
const MdiInstagram: React.FC = () => (
  <svg viewBox="0 0 24 24" width="32px" height="32px" fill="currentColor">
    {/* Path for mdi:instagram. Replace with actual path if needed. This is a placeholder.*/}
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8A3.6 3.6 0 0 0 20 16.4V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z" />
  </svg>
);

const MdiYoutube: React.FC = () => (
  <svg viewBox="0 0 24 24" width="32px" height="32px" fill="currentColor">
    {/* Path for mdi:youtube. Replace with actual path. Placeholder. */}
    <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-.79.07-1.69.1-2.62.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33.22 2.65.28.79.07 1.69.1 2.62.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z" />
  </svg>
);