import styled from 'styled-components';
import galleryBackgroundImage from '../../../../assets/images/buy/image.png'; // Assuming image.png was renamed
import group6Icon from '../../../../assets/images/buy/group_6.png';
import group7Icon from '../../../../assets/images/buy/group_7.png';


export const GalleryWrapper = styled.div`
   background-image: url(${galleryBackgroundImage});
  background-size: 100% 100%;
  height: 800px; /* from original .gallery */
  /* width: 853px; -> width is handled by parent S.GalleryWrapper in BuyBottlePage.styles.ts */
  position: relative; /* For positioning internal elements like arrows and dots */
`;

export const PrevArrow = styled.img.attrs({ src: group7Icon })` /* group7 was on the left */
  height: 18px;
  width: 23px;
  position: absolute;
  top: 391px;
  left: 30px;
  cursor: pointer;
`;

export const NextArrow = styled.img.attrs({ src: group6Icon })` /* group6 was on the right */
  height: 18px;
  width: 23px;
  position: absolute;
  top: 391px;
  right: 30px; /* Original had left: 800px on a 853px wide container */
  cursor: pointer;
`;

export const DotsContainer = styled.div`
  height: 10px;
  position: absolute;
  bottom: 30px; /* Original was top: 760px on an 800px container */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px; /* Spacing between dots */
`;

export const Dot = styled.div<{ $active?: boolean }>`
  background-color: ${props => props.$active ? '#60C9DA' : '#1c1f23'}; // Example active color
  border-radius: 5px;
  height: 10px;
  width: 10px;
  cursor: pointer;
`;
