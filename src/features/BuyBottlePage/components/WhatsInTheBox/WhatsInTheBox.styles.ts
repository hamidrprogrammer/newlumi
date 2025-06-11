import styled from 'styled-components';
import maskGroupImage from '../../../../assets/images/buy/mask_group.png';

export const SectionWrapper = styled.section`
  /* height: 602px; -> height determined by content */
  /* width: 1152px; -> width determined by content or parent constraints */
  position: relative; /* For absolute children if any, or for its own positioning */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content horizontally */
`;

export const Title = styled.h2`
  color: var(--x-07-2c-3d);
  font-size: 50px;
  font-weight: 300;
  /* left: 383px; -> centered by flex */
  letter-spacing: 0;
  line-height: 65px;
  text-align: center;
  white-space: nowrap;
  margin-top: 0; /* Original top: 0 for text-wrapper-24 within its parent */
  margin-bottom: 20px; /* Space between title and image, adjust as needed */
`;

export const BoxImage = styled.img.attrs({ src: maskGroupImage })`
  height: 449px;
  /* left: 0; -> centered by flex on SectionWrapper */
  width: 1144px;
  /* top: 85px; -> determined by margin/flow */
  display: block; /* To remove extra space if any */
  margin-bottom: 30px; /* Space between image and item descriptions */
`;

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-around; /* Distribute items */
  width: 100%; /* Take full width of its relative parent or a defined width */
  max-width: 1144px; /* Match image width for alignment */
`;

export const ItemDescription = styled.p`
  color: #a7b1b9;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 19.2px;
  text-align: center;
  margin: 0;
  /* width is determined by content or fixed if necessary */
  flex-basis: 30%; /* Example for three items */
`;

// If specific widths/positioning are needed for each item description,
// create separate styled components or pass props. For now, flex distribution.
