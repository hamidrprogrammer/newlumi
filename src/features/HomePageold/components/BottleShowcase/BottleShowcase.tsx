/* eslint-disable @typescript-eslint/no-empty-object-type */
/** eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bubbles from '../../../../assets/images/home/bubbles-bg.png'; //
import battel from '../../../../assets/images/home/battel.png'; //
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/core/hooks/useIsMobile';

/* ───────────────────────────
   Breakpoints
   ─────────────────────────── */
const BP_TABLET_LARGE = '1024px';
const BP_TABLET_SMALL = '768px';  // Main breakpoint for tablet/mobile general layout (original BP_TABLET was 992px)
const BP_MOBILE = '576px';   // ریسپانسیو موبایل خالص

/* ───────────────────────────
   Containers
   ─────────────────────────── */
const BottleContainer = styled.section`
  background-color: #000000; //
  position: relative;
  
  overflow: hidden; //
  color: white; //
  height: auto; // Mobile first: height auto
  padding: 3rem 0; // Padding for mobile

  @media (min-width: ${BP_TABLET_SMALL}) {
    padding: 4rem 0;
  }

  @media (min-width: ${BP_TABLET_LARGE}) { // Desktop and large tablets
    height: 780px; //
    padding: 0; // Reset padding if height is fixed
  }
`;

const BottleContentBack = styled.div`
  max-width: 100%;
  height: 100%; // Takes height from parent BottleContainer
  display: flex;
  

  // No specific height or padding changes needed here for mobile as parent handles it
  // @media (max-width: ${BP_TABLET_SMALL}) { // original BP_TABLET
  //   height: auto; //
  //   padding: 4rem 0 3rem; //
  // }
`;

const BottleContent = styled.div`
  max-width: 1200px; //
  margin: 0 auto; //
  padding: 0 1rem; // Mobile padding
  display: flex;
  flex-direction: column; // Mobile: Stack info and image
  align-items: center; // Mobile: Center items
  justify-content: center; // Mobile: Center content vertically if space allows
  gap: 2.5rem; // Mobile gap (original BP_TABLET)

  @media (min-width: ${BP_TABLET_SMALL}) { // Tablet and up
    flex-direction: row; //
    align-items: center; //
    justify-content: space-between; //
    padding: 0 2rem; // Tablet padding
    gap: 3rem;
  }
  @media (min-width: ${BP_TABLET_LARGE}) {
      padding: 0 5%; //
  }
`;

/* ───────────────────────────
   Info
   ─────────────────────────── */
const BottleInfo = styled.div`
  flex: 1; //
  max-width: 100%; // Mobile: full width
  text-align: center; // Mobile: center text (original BP_TABLET)

  @media (min-width: ${BP_TABLET_SMALL}) {
    max-width: 500px; //
    text-align: left; // Align text to left on larger screens
  }
`;

/* ───────────────────────────
   Typography
   ─────────────────────────── */
const BottleTitle = styled(motion.h2)`
  font-size: 1.8rem; // Mobile font size
  margin-bottom: 1rem; //
  color: #3ffff8; //
  line-height: 1.3;

  span { //
    background: linear-gradient(45deg, #00e0ff, #00a0ff); //
    -webkit-background-clip: text; //
    -webkit-text-fill-color: transparent; //
    background-clip: text; //
  }

  @media (max-width: ${BP_MOBILE}) { // Fine-tuning for very small screens
    font-size: 1.7rem; // (original was 1.75rem)
  }

  @media (min-width: ${BP_TABLET_SMALL}) {
    font-size: 2.2rem; // (original was 2rem at 768px)
    margin-bottom: 1.5rem; //
  }
  @media (min-width: ${BP_TABLET_LARGE}) {
    font-size: 2.5rem; //
  }
`;

const BottleDescription = styled(motion.p)`
  font-size: 0.95rem; // Mobile font size (original BP_MOBILE)
  line-height: 1.6; //
  margin-bottom: 1.5rem; //
  opacity: 0.9; //

  @media (min-width: ${BP_TABLET_SMALL}) {
    font-size: 1rem; // (original 768px)
    margin-bottom: 2rem; //
  }
  @media (min-width: ${BP_TABLET_LARGE}) {
    font-size: 1.1rem; //
  }
`;

/* ───────────────────────────
   Features / Buttons
   ─────────────────────────── */
const BottleFeatures = styled(motion.ul)`
  list-style: none; //
  padding: 0; //
  margin-bottom: 2rem; // Adjusted for mobile (original 2.5rem)

   @media (min-width: ${BP_TABLET_SMALL}) {
    margin-bottom: 2.5rem; //
   }
`;

const FeatureButton = styled.div`
  display: flex;
  flex-direction: column; // Mobile: Stack buttons
  align-items: stretch; // Mobile: Stretch buttons to full width of container
  gap: 1rem; // Mobile: Gap between buttons (original BP_MOBILE)

  @media (min-width: ${BP_MOBILE}) { // On slightly larger mobile screens, allow them to be side-by-side if they fit
    flex-direction: row; //
    align-items: center; //
    justify-content: center; // Center buttons if row
  }
  @media (min-width: ${BP_TABLET_SMALL}) {
    justify-content: flex-start; // Align to start for desktop
  }
`;

const SharedButtonStyles = `
  color: #1C1F23; //
  border: none; //
  padding: 0.7rem 1.5rem; // Adjusted padding for mobile
  font-size: 0.9rem; // Adjusted font size for mobile
  font-weight: 500; // (Original was 200, 500 is more standard for buttons)
  border-radius: 30px; //
  cursor: pointer; //
  box-shadow: 0 4px 15px rgba(0, 224, 255, 0.3); //
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); //
  width: 100%; // Mobile: Full width for stacked buttons

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 224, 255, 0.5); //
  }
  
  @media (min-width: ${BP_MOBILE}) { // For side-by-side buttons on larger mobile
      width: auto; // Allow natural width
      min-width: 150px; // Ensure good tap target
  }

  @media (min-width: ${BP_TABLET_SMALL}) {
    padding: 0.8rem 2rem; //
    font-size: 1rem; //
    font-weight: 200; //
  }
`;

const BottleButton = styled(motion.button)`
  ${SharedButtonStyles}
  background: linear-gradient(45deg, rgb(255, 255, 255), rgb(255, 255, 255)); //
  color: #1C1F23; //
`;

const BottleButtonTwo = styled(motion.button)`
  ${SharedButtonStyles}
  color: #3FFFF8; //
    z-index:1000;

  background: transparent; //
  border: 1px solid #3FFFF8; //
  // margin-left: 0; // Mobile: No margin when stacked

  @media (min-width: ${BP_MOBILE}) { // When side by side on larger mobile
    margin-left: 1rem; //
  }
`;

/* ───────────────────────────
   Image
   ─────────────────────────── */
const BottleImageWrapper = styled.div`
  flex: 1; //
  // height: auto; // Mobile: auto height (original BP_TABLET)
  display: flex;
  justify-content: center;
      align-items: flex-end;

  position: relative;
  width: 80%; // Control width on mobile to prevent image from being too large
  max-width: 350px; // Max width for image on mobile

  @media (min-width: ${BP_TABLET_SMALL}) {
    width: auto; // (original BP_TABLET)
    max-width: none;
    // height: 860px; // (This was for desktop on main container, wrapper should be flexible)
  }
   @media (min-width: ${BP_TABLET_LARGE}) { // Desktop
     height: 780px; //
   }
`;

const BottleImage = styled(motion.img)`
  max-height: 45vh; // Mobile: max height relative to viewport (original 55vh for BP_MOBILE)
  width: auto; // Maintain aspect ratio
  max-width: 100%; // Ensure it doesn't overflow its wrapper

  @media (min-width: ${BP_TABLET_SMALL}) {
    max-height: 60vh; //
  }
  
  @media (min-width: ${BP_TABLET_LARGE}) { // Desktop
    max-height: 700px; //
  }
`;

/* ───────────────────────────
   Background Decoration
   ─────────────────────────── */
const BackgroundBubbles = styled.div`
  position: absolute; //
  top: 0; //
  left: 0; //
  width: 100%; //
  height: 100%; //
  background-image: url('${bubbles}'); //
  background-size: cover; //
  opacity: 0.05; // Reduced for mobile (original BP_MOBILE)
  z-index: 1; //

  @media (min-width: ${BP_TABLET_SMALL}) {
    opacity: 0.1; //
  }
`;

/* ───────────────────────────
   Component
   ─────────────────────────── */
interface BottleShowcaseProps {} //

const BottleShowcase: React.FC<BottleShowcaseProps> = () => { //
  const [infoRef, infoInView] = useInView({ triggerOnce: true, threshold: 0.2 }); //
  const [imageRef, imageInView] = useInView({ triggerOnce: true, threshold: 0.2 }); //

  const titleVariants = { /* ... same as original ... */ //
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };
  const descriptionVariants = { /* ... same as original ... */ //
     hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' },
    },
  };
  const featureListVariants = { /* ... same as original ... */ //
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };
  const buttonVariants = { /* ... same as original ... */ //
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.6, ease: 'easeOut' },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    tap: { scale: 0.95 },
  };
  const imageVariants = { /* ... same as original ... */ //
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

    const navigate =useNavigate();
    const  ismobile = useIsMobile(); 
  
  const handleBuyBottleClick = () => {
    console.log('Buy Bottle clicked');
    navigate('/products-bottle/1')

    // Add navigation to shop or modal logic here
  };
  return (
    <BottleContainer> {/* */}
      <BackgroundBubbles /> {/* */}
      <BottleContentBack> {/* */}
        <BottleContent> {/* */}
          <BottleInfo ref={infoRef}> {/* */}
            <BottleTitle
              variants={titleVariants}
              initial="hidden"
              animate={infoInView ? 'visible' : 'hidden'}
            >
              LumiVitae <br />
              Hydrogen Water Technology
            </BottleTitle>

            <BottleDescription
              variants={descriptionVariants}
              initial="hidden"
              animate={infoInView ? 'visible' : 'hidden'}
            >
              The Future of Water is Intelligent.<br/>
              Infused with frequency, gravity, and <br/>pure molecular hydrogen to harmonize <br/>your cells and ignite the light within.
            </BottleDescription>

            <BottleFeatures //
              variants={featureListVariants} //
              initial="hidden" //
              animate={infoInView ? 'visible' : 'hidden'} //
            >
              {/* Feature items placeholder */}
            </BottleFeatures>

            <FeatureButton> {/* */}
              <BottleButton
                variants={buttonVariants}
                initial="hidden"
                animate={infoInView ? 'visible' : 'hidden'}
                whileHover="hover"
                whileTap="tap"
              >
                Learn more
              </BottleButton>

              <BottleButtonTwo
                variants={buttonVariants}
                initial="hidden"
                animate={infoInView ? 'visible' : 'hidden'}
                whileHover="hover"
                whileTap="tap"
                onClick={()=>{handleBuyBottleClick()}}
              >
                Buy bottle
              </BottleButtonTwo>
            </FeatureButton>
          </BottleInfo>

          <BottleImageWrapper ref={imageRef}> {/* */}
            <BottleImage
              src={battel} //
              alt="LumiVitae Hydrogen Water Bottle" //
              variants={imageVariants} //
              initial="hidden" //
              animate={imageInView ? 'visible' : 'hidden'} //
              whileHover={{ y: -10, transition: { duration: 0.3 } }} //
            />
          </BottleImageWrapper>
        </BottleContent>
      </BottleContentBack>
    </BottleContainer>
  );
};

export default BottleShowcase; //