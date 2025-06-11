/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { motion } from 'framer-motion';
import logoDefault from '@assets/images/shared/logo.svg';
import globe from '@assets/images/shared/globe.svg'
import profile from '@assets/images/shared/profile.svg';
import basket from '@assets/images/shared/basket.svg';
import MobileNavMenu from '../MobileNavMenu/MobileNavMenu';
import { useNavigate, useNavigation } from 'react-router-dom';
import { useCartStore } from '@/features/cart/store/cartStore';

// --- Global Styles (Optional - for font and body background if needed) ---
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Outfit', sans-serif; /* Ensure Outfit font is loaded */
  }
`;

// --- Styled Components (remain the same as before) ---
  const CartBadge = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: red;
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 5px;
  border-radius: 50%;
  line-height: 1;
`;
// Main Navigation Container
const NavWrapper = styled.nav`
  /* Original: position: absolute; width: 1440px; height: 60px; left: 0px; top: 0px; */
  width: 100%;
  height: 60px;
  background-color: #000; /* Assuming a background color for the nav, adjust if needed */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px; /* Horizontal padding */
  box-sizing: border-box;
  position: relative; /* For potential absolute positioning of dropdowns, etc. */
  overflow: hidden; /* Good practice if children animate from outside */

  @media (max-width: 1024px) {
    padding: 0 20px;
  }
`;

// Logo Placeholder
const LogoContainer = styled.div`
  /* Original: position: absolute; width: 170px; height: 21.46px; left: 30px; top: 19px; */
  width: 170px;
  height: 22px; // Approx
  display: flex;
  align-items: center;
  font-size: 20px; /* Placeholder style */
  font-weight: bold;
  color: #FFFFFF;
  cursor: pointer;
  &:before {
    content: 'LOGO'; /* Replace with your actual logo (SVG preferred) */
  }
`;

// Links Container (Group 1)
const NavLinks = styled.div`
  display: flex;
  gap: 30px; /* Adjust gap as needed to approximate Figma spacing */
  align-items: center;
  height: 100%;
  position: absolute;
  left: 35%;
  transform: translateX(-50%);
  
  @media (max-width: 768px) {
    /* Example: hide on mobile, to be replaced by a hamburger menu */
    /* display: none;  */
     gap: 15px;
  }
`;

// Navigation Link Item
const NavLinkItem = styled.a`
  font-family: Outfit;
  font-style: normal;

  font-size: 18px;
  line-height: 18px;
  color: #FFFFFF;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }
`;

// Action Icons Container
const ActionIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

// Base Icon Style
const IconBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #FFFFFF;
`;

// Globe Icon
const GlobeIcon = styled(IconBase)`
  width: 20px;
  height: 20px;
  border: 1.5px solid #FFFFFF;
  border-radius: 50%;
  box-sizing: border-box;
`;

// Profile Icon
const ProfileIcon = styled(IconBase)`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  div {
    background: #FFFFFF;
    height: 1.5px;
    width: 100%;
  }
`;

// Basket Icon
const BasketIcon = styled(IconBase)`
  width: 20px;
  height: 30px;
  background-image: url('${basket}'); 
  background-size: contain;
  background-position: center;
`;


// --- The React Component ---
const NavbarWeb: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once - while scrolling down
      offset: 50,     // Offset (in px) from the original trigger point
      delay: 100,     // Values from 0 to 3000, with step 50ms for global delay
    });
    // Optional: Refresh AOS when the component updates if content is dynamic
    // AOS.refresh(); 
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Menu clicked", event.currentTarget);
    setIsMenuOpen(!isMenuOpen);
    // Implement menu open/close logic
  };
const Logo = styled(motion.img)<React.ImgHTMLAttributes<HTMLImageElement>>`
  height: 21px;
  cursor: pointer;
`;
const navigate = useNavigate();
  const items = useCartStore((state) => state.items);

  return (
    <>
      <GlobalStyle />
      
      {/* You can add an animation to the whole NavWrapper if desired */}
      {/* e.g., data-aos="fade-down" */}
      <NavWrapper>
      
<Logo src={logoDefault} alt="Logo" onClick={() => navigate('/')} />

       

        <NavLinks data-aos="zoom-in" data-aos-delay="300">
          <NavLinkItem href="/bottle" data-aos="fade-down" data-aos-delay="400">Bottle</NavLinkItem>
          <NavLinkItem href="/tablete" data-aos="fade-down" data-aos-delay="500">Tablets</NavLinkItem>
          <NavLinkItem href="#" data-aos="fade-down" data-aos-delay="600">Vision</NavLinkItem>
          <NavLinkItem href="#" data-aos="fade-down" data-aos-delay="700">Science</NavLinkItem>
          <NavLinkItem href="#" data-aos="fade-down" data-aos-delay="800">Revolution</NavLinkItem>
        </NavLinks>

        <ActionIcons data-aos="fade-left" data-aos-delay="200">
                    <Logo src={globe} alt="globe" data-aos="zoom-in" data-aos-delay="1100" 
                    onClick={handleMenuClick}/>
                    <Logo src={profile} 
                    onClick={()=>{navigate('/account/profile')}}
                    alt="Profile" 
                    data-aos="zoom-in"
                     data-aos-delay="1100" />
 <div style={{ position: 'relative' }}>
          <Logo src={basket} title="Basket" data-aos="zoom-in" data-aos-delay="1100" onClick={() => navigate('/basket')}/>
          {items.length > 0 && <CartBadge>{items.length}</CartBadge>}
        </div>      
        </ActionIcons>
                    <MobileNavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      </NavWrapper>
    </>
  );
};

export default NavbarWeb;