import styled from 'styled-components';

export const PageWrapper = styled.div`
  background-color: #fbffff;
  display: flex; /* Original was flex, row, justify-center. Keep if needed. */
  flex-direction: column; /* Changed to column as Navbar/Footer are outside ContentContainer */
  align-items: center; /* Center ContentContainer if PageWrapper is full width */
  width: 100%;
`;

export const ContentContainer = styled.main` /* Changed div to main for semantics */
  background-color: #fbffff;
  /* height: 4915px; -> Let content determine height */
  min-height: 4915px; /* If a minimum is strictly needed */
  overflow: hidden; /* As per original, though might clip positioned items if not careful */
  position: relative;
  width: 1440px; /* Fixed width from original .div-2 */
`;

// Wrappers for positioning sections within ContentContainer
// These apply the absolute positioning that was previously on the section roots or their children

export const PageHeaderPositioner = styled.div`
  position: absolute;
  left: 148px;
  top: 131px;
  width: 416px; /* From original .text-wrapper-6 */
  z-index: 1; /* Ensure it's above other floated/absolute items if necessary */
`;

export const ProductInfoPromptsPositioner = styled.div`
  position: relative; /* Children are absolute */
  z-index: 1;
`;

export const BottleSelectionPositioner = styled.div`
  position: absolute; /* Children are absolute */
  z-index: 1;
  width:30%;
  top:400px;
  right:90px;
`;

export const ProductGalleryPositioner = styled.div`
  position: absolute;
  left: 0;
  top: 332px;
  width: 853px; /* From original .gallery */
  height: 800px; /* From original .gallery */
  z-index: 1;
`;

export const BundleOptionsPositioner = styled.div`
  position: relative; /* Children are absolute */
  z-index: 1;
`;

export const FrequencyOptionsPositioner = styled.div`
  position: relative; /* Children are absolute */
  z-index: 1;
`;

export const OrderReviewPositioner = styled.div`
  position: absolute;
  top: 1359px;
  left: 0; /* Relative to ContentContainer */
  width: 1440px; /* Matches its internal fixed width */
  z-index: 1;
`;

export const WhatsInTheBoxPositioner = styled.div`
  position: absolute;
  top: 2609px;
  /* left: 148px; -> Centering will be handled by the component's internal styles */
  width: 1152px; /* Max width of content within */
  left: 50%;
  transform: translateX(-50%); /* Center the block */
  z-index: 1;
`;
export const WhatsInTheBoxPositionerTwo = styled.div`
  position: absolute;
  top: 1209px;
  /* left: 148px; -> Centering will be handled by the component's internal styles */
  width: 1152px; /* Max width of content within */
  left: 50%;
  transform: translateX(-50%); /* Center the block */
  z-index: 1;
`;
export const FaqSectionPositioner = styled.div`
  position: absolute;
  top: 3361px;
  left: 0; /* Relative to ContentContainer */
  width: 1440px; /* Matches its internal fixed width */
  z-index: 1;
`;

// Position for Nav (though Nav itself might be fixed/sticky globally)
// If Nav is part of this page's absolute layout as per original .nav-instance
// export const NavPositioner = styled.div`
//   position: absolute !important;
//   left: 0 !important;
//   top: 0 !important;
//   width: 100%; /* Or specific width if needed */
//   z-index: 10; /* High z-index for nav */
// `;
