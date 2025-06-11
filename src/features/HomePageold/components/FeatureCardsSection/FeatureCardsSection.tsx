/* eslint-disable @typescript-eslint/no-unused-vars */
/* File: src/components/FeatureCardsSection.tsx */

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* ----------  Local assets  ---------- */
import imageCardOne   from '../../../../assets/images/home/imagecardOne.png'; //
import imageCardTwo   from '../../../../assets/images/home/imagecardtwo.png'; //
import imageCardThree from '../../../../assets/images/home/imagecardtree.png'; //
import imageCardFour  from '../../../../assets/images/home/imageFure.png'; //

/* -------------------------------------------------------------------------- */
/* STYLES                                     */
/* -------------------------------------------------------------------------- */

const Section = styled.section`
  padding: 2.5rem 0; // Adjusted padding for mobile
  background: #fff; //
  position: relative;
  overflow: hidden; //

  @media (min-width: 769px) { // Tablet and up
    padding: 3rem 0; //
  }
`;

const Wrapper = styled.div`
  max-width: 1500px; //
  margin: 0 auto; //
  padding: 0 1rem; // Mobile padding

  @media (min-width: 769px) { // Tablet and up
     padding: 0 2rem;
  }
  @media (min-width: 1025px) { // Desktop (matches original max-width for grid changes)
     padding: 0 5%; //
  }
`;

const Grid = styled.div`
  display: grid;
  // Mobile: Single column layout
  grid-template-columns: 1fr; // (Original mobile 768px)
  grid-template-areas: // (Original mobile 768px)
    'big1'
    'small1'
    'small2'
    'big2';
  gap: 1rem; // (Original mobile 768px)

  /* ---------- Tablet (≤1024px and > 768px) ---------- */
  @media (min-width: 769px) and (max-width: 1024px) { //
    grid-template-columns: repeat(2, 1fr); //
    grid-template-areas: //
      'big1   small1'
      'small2 big2';
    gap: 1.5rem; //
  }
  
  /* ---------- Desktop (> 1024px) ---------- */
  @media (min-width: 1025px) { //
    grid-template-columns: repeat(7, 1fr); //
    grid-template-areas: //
      'big1 big1 big1 small1'
      'small2 big2 big2 big2';
    gap: 1.5rem; //
  }
`;

interface CardProps {
  $area: string;
  $big?: boolean;
}

const Card = styled(motion.div)<CardProps>`
  grid-area: ${({ $area }) => $area}; //
  position: relative; //
  overflow: hidden; //
  border-radius: 6px; //
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); //
  background-size: cover; //
  transition: box-shadow 0.3s ease; //
  
  // Mobile styles (was originally in @media (max-width: 768px))
  height: 400px; // Fixed height for mobile for consistency, can be auto with min-height (Original was auto, min-height: 280px)
  grid-column: span 1; // Ensure it spans 1 column in the mobile grid

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12); //
  }

  @media (min-width: 769px) and (max-width: 1024px) { // Tablet
    height: 450px; // Adjust height for tablet view
    ${({ $big }) => // Apply original logic for column span on tablet
    $big
      ? 'grid-column: span 1;' // Big cards take full width of their new grid area cell
      : 'grid-column: span 1;'} // Small cards also take full width
      // The grid-template-areas for tablet already define their relative sizes.
      // This ensures they don't try to span multiple columns within their assigned area.
  }
  
  @media (min-width: 1025px) { // Desktop
    height: 600px; //
    ${({ $big }) => //
    $big
      ? 'grid-column: span 4;' //
      : 'grid-column: span 3;'} //
        background-position: center; // Changed from bottom for better general fit

  }
`;

// Content inside cards is commented out in the original JSX.
// If it were to be enabled, styles would be:
const Overlay = styled.div`
  position: absolute; //
  inset: 0; //
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.35) 100%); //
  z-index: 1; //
`;

const Content = styled.div`
  position: absolute; //
  inset: 0; //
  z-index: 2; //
  display: flex; //
  flex-direction: column; //
  justify-content: flex-end; //
  padding: 1.25rem; // Adjusted padding for mobile
  color: #fff; //

  @media (min-width: 769px) {
    padding: 1.75rem; //
  }
`;

const Title = styled.h3`
  font-size: 1.1rem; // Adjusted for mobile (original 1.25rem for 768px)
  font-weight: 700; //
  margin: 0 0 0.35rem; //

  @media (min-width: 769px) {
    font-size: 1.5rem; //
  }
`;

const Desc = styled.p`
  font-size: 0.8rem; // Adjusted for mobile (original 0.85rem for 768px)
  line-height: 1.5; //
  margin: 0 0 1rem; //

  @media (min-width: 769px) {
    font-size: 0.9rem; //
  }
`;

const Btn = styled(motion.button)`
  align-self: flex-start; //
  background: transparent; //
  color: #fff; //
  border: 1.5px solid #fff; // Slightly thinner border for mobile
  border-radius: 24px; //
  padding: 0.4rem 1.2rem; // Adjusted for mobile (original 0.4rem 1.1rem for 768px)
  font-weight: 600; //
  font-size: 0.75rem; // Adjusted for mobile (original 0.8rem for 768px)
  cursor: pointer; //

  @media (min-width: 769px) {
    border-width: 2px; //
    padding: 0.5rem 1.4rem; //
    font-size: initial; // Let it inherit or use default
  }
`;

/* -------------------------------------------------------------------------- */
/* COMPONENT                                   */
/* -------------------------------------------------------------------------- */

const FeatureCardsSection: React.FC = () => { //
  /* reveal on scroll once */
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 }); //

  /* framer variants */
  const container = { /* ... same as original ... */ }; //
  const card = { /* ... same as original ... */ }; //
  // const btnVariants = { /* Renamed from 'btn' to avoid conflict if uncommented */ }; //

  /* datasource */
  const cards = [ //
    { id: 1, area: 'big1', title: 'Vision', desc: 'Turning water into wellness, kindness, culture, vision in light.', img: imageCardOne, btn: 'Our Mission', big: true },
    { id: 2, area: 'small1', title: 'Revolution', desc: 'Join the movement to light up the world—empowering health, wealth, and purpose.', img: imageCardTwo, btn: 'Become a Partner', big: false },
    { id: 3, area: 'small2', title: 'Science', desc: 'Harness the power of molecular hydrogen to support energy, immunity, and vitality.', img: imageCardThree, btn: 'Explore the Science', big: false },
    { id: 4, area: 'big2', title: 'Community', desc: 'Be part of a vibrant, supportive community transforming daily wellness journeys.', img: imageCardFour, btn: 'Join the Community', big: true },
  ];

  return (
    <Section> {/* */}
      <Wrapper> {/* */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <Grid> {/* */}
            {cards.map(({ id, area, title, desc, img, btn: cta, big }) => (
              <Card
                key={id}
                $area={area}
                $big={big}
                style={{ backgroundImage: `url(${img.src || img})` }} // Added .src for Next.js static image imports
                variants={card}
              >
                {/* Desktop+Mobile overlay content (Original was commented out) */}
                {/* If this content is desired, it will now use the responsive styles above
                <Overlay />
                <Content>
                  <Title>{title}</Title>
                  <Desc>{desc}</Desc>
                  <Btn variants={btnVariants} whileHover="hover" whileTap="tap">
                    {cta}
                  </Btn>
                </Content>
                */}
              </Card>
            ))}
          </Grid>
        </motion.div>
      </Wrapper>
    </Section>
  );
};

export default FeatureCardsSection; //