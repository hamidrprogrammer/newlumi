/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* ───────────────────────────
   Breakpoints
   ─────────────────────────── */
// Using a primary mobile breakpoint, and a smaller one if needed for finer adjustments.
const BP_TABLET_LARGE = '1024px'; // For larger tablets or small desktops
const BP_TABLET_SMALL = '768px';  // Main breakpoint for tablet/mobile general layout
const BP_MOBILE = '576px';  // For specific fine-tuning on small mobile

/* ───────────────────────────
   Containers
   ─────────────────────────── */
const IntroContainer = styled.section`
  padding: 4rem 0; // Unified padding for mobile first approach
  background-color: #fff; //
  position: relative;
  overflow: hidden; //
  height: auto; // Let content dictate height on all screens by default

  @media (min-width: ${BP_TABLET_SMALL}) { // Small tablet and up
    padding: 5rem 0;
  }

  @media (min-width: ${BP_TABLET_LARGE}) { // Desktop and large tablets
    padding: 6rem 0; //
    height: 860px; //
  }
`;

const IntroContent = styled.div`
  max-width: 1200px; //
  margin: 0 auto; //
  padding: 0 1rem; // Mobile padding
  display: flex;
  flex-direction: column;
  gap: 2.5rem; // Mobile gap

  @media (min-width: ${BP_TABLET_SMALL}) {
    padding: 0 2rem; // Tablet padding
    gap: 3rem;
  }
  
  @media (min-width: ${BP_TABLET_LARGE}) {
     padding: 0 5%; //
     gap: 4rem; //
  }
`;

const IntroHeader = styled.div`
  display: flex;
  flex-direction: column; // Mobile: stack title and descriptions
  align-items: center;   // Mobile: center align
  text-align: center;    // Mobile: center text
  width: 100%; //
  gap: 1.5rem; // Gap between title and description block on mobile

  @media (min-width: ${BP_TABLET_SMALL}) {
    flex-direction: row; //
    align-items: flex-start; //
    text-align: left;
    gap: 2rem; // (original was on BP_MOBILE)
  }
`;

/* ───────────────────────────
   Typography
   ─────────────────────────── */
const IntroTitle = styled(motion.h2)`
  font-size: 2rem; // Mobile font size
  font-weight: 200; //
  flex: 1; //
  margin-bottom: 1rem; // (Adjusted for mobile flow)
  color: #002030; //
  position: relative;
  width: 100%; // Ensure it takes width for centering ::after

  &:after {
    content: ''; //
    position: absolute; //
    bottom: -8px; // (Adjusted)
    left: 50%; // Center on mobile
    transform: translateX(-50%); // Center on mobile
    width: 50px; // (Adjusted)
    height: 3px; //
  }
  
  @media (min-width: ${BP_MOBILE}) { // Small mobile adjustments if needed
      // font-size: 1.75rem; // This was in original BP_MOBILE
  }

  @media (min-width: ${BP_TABLET_SMALL}) {
    font-size: 2.25rem; // (original was 2rem at 768px)
    text-align: left;
    margin-bottom: 1.5rem; //
     &:after {
      left: 0; //
      transform: translateX(0); //
      width: 60px; //
    }
  }
  @media (min-width: ${BP_TABLET_LARGE}) {
    font-size: 2.5rem; //
  }
`;

const IntroDescriptionContainer = styled.div`
  flex: 1; //
  gap: 1.5rem; // Gap between two description paragraphs
  display: flex;
  flex-direction: column;
`;


const IntroDescription = styled(motion.p)`
  font-size: 0.9rem; // Mobile font size
  line-height: 1.8; //
  font-weight: 100; //
  color: #555; //
 
  // flex: 1; // Removed, as container handles flex

  @media (min-width: ${BP_MOBILE}) {
    // font-size: 1.2rem; // This was in original BP_MOBILE
  }

  @media (min-width: ${BP_TABLET_SMALL}) {
    font-size: 1.1rem; // (original was 1.4rem at 768px)
  }
  
  @media (min-width: ${BP_TABLET_LARGE}) {
    font-size: 1.2rem; //
  }
`;

/* ───────────────────────────
   Features (Commented out in original JSX, so styles might not be active)
   ─────────────────────────── */
const IntroFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr; // Mobile: single column
  gap: 2rem; // Mobile gap

  @media (min-width: ${BP_TABLET_SMALL}) { // Tablet and up
    grid-template-columns: repeat(2, 1fr); //
    gap: 3rem; //
  }
`;

const FeatureItem = styled(motion.div)`
  display: flex; //
  flex-direction: column; //
  text-align: center; // Center feature items on mobile

  @media (min-width: ${BP_TABLET_SMALL}) {
    text-align: left;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem; // Mobile font size
  font-weight: 600; //
  margin-bottom: 0.75rem; //
  color: #002030; //

  span {
    background: linear-gradient(45deg, #00e0ff, #00a0ff); //
    -webkit-background-clip: text; //
    -webkit-text-fill-color: transparent; //
    background-clip: text; //
  }
  
  @media (min-width: ${BP_MOBILE}) {
    // font-size: 1.35rem; // This was in original BP_MOBILE
  }

  @media (min-width: ${BP_TABLET_SMALL}) {
    font-size: 1.5rem; //
  }
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem; // Mobile font size
  line-height: 1.6; //
  color: #555; //

  @media (min-width: ${BP_MOBILE}) {
    // font-size: 0.95rem; // This was in original BP_MOBILE
  }
  @media (min-width: ${BP_TABLET_SMALL}) {
    font-size: 1rem; //
  }
`;

/* ───────────────────────────
   Background Decoration
   ─────────────────────────── */
const BackgroundGlow = styled.div`
  position: absolute; //
  top: 0; //
  left: 0; //
  width: 100%; //
  height: 100%; //
  background:
    radial-gradient(circle at 20% 30%, rgba(0, 224, 255, 0.03) 0%, rgba(0, 0, 0, 0) 60%), // Reduced opacity and spread for mobile
    radial-gradient(circle at 80% 70%, rgba(0, 160, 255, 0.03) 0%, rgba(0, 0, 0, 0) 60%); // Reduced opacity and spread for mobile
  z-index: 1; //
  opacity: 0.5; // General reduction for mobile

  @media (min-width: ${BP_TABLET_SMALL}) {
    opacity: 1; // Restore opacity for tablets/desktops
     background:
        radial-gradient(circle at 20% 30%, rgba(0, 224, 255, 0.05) 0%, rgba(0, 0, 0, 0) 50%), //
        radial-gradient(circle at 80% 70%, rgba(0, 160, 255, 0.05) 0%, rgba(0, 0, 0, 0) 50%); //
  }
`;

/* ───────────────────────────
   Component
   ─────────────────────────── */
interface IntroSectionProps {} //

const IntroSection: React.FC<IntroSectionProps> = () => { //
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 }); //
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 }); //

  const titleVariants = { //
    hidden: { opacity: 0, y: 30 }, //
    visible: { //
      opacity: 1, //
      y: 0, //
      transition: { duration: 0.6, ease: 'easeOut' }, //
    },
  };

  const descriptionVariants = { //
    hidden: { opacity: 0, y: 30 }, //
    visible: { //
      opacity: 1, //
      y: 0, //
      transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' }, //
    },
  };

  // Features data is commented out in the original file, so no need to map it
  // const features = [ ... ];

  return (
    <IntroContainer> {/* */}
      <BackgroundGlow /> {/* */}

      <IntroContent> {/* */}
        <IntroHeader ref={headerRef}> {/* */}
          <IntroTitle variants={titleVariants} initial="hidden" animate={headerInView ? 'visible' : 'hidden'}> {/* */}
            <>
              Two Innovations. <br />
               One Purpose.
            </>
          </IntroTitle>

          {/* Changed to IntroDescriptionContainer to manage spacing between paragraphs */}
          <IntroDescriptionContainer> {/* style was: flex: 1, gap: 20, display: 'flex', flexDirection: 'column' */}
                 <IntroTitle style={{  fontSize: '1.9rem'}}variants={titleVariants} initial="hidden" animate={headerInView ? 'visible' : 'hidden'}> {/* */}
            To Light You Up From Within.
          </IntroTitle>
            <IntroDescription
              variants={descriptionVariants}
              initial="hidden"
              animate={headerInView ? 'visible' : 'hidden'}
            >
             LumiVitaes Light-Backed Wellness is a revolution in vitality where ancient intelligence meets modern bio-science.
            </IntroDescription>

            <IntroDescription
              variants={descriptionVariants}
              initial="hidden"
              style={{marginLeft: '20px'}}
              animate={headerInView ? 'visible' : 'hidden'}
            >
             <span style={{ color: '#000'}}>•</span>
             Our hydrogen-powered bottle infuses your water with molecular light.
             <br/>
             <span style={{ color: '#000'}}>•</span>
              Our LVQ tablets deliver cellular-level nourishment through a fusion of longevity molecules, deep-sea minerals, and frequency. 
            </IntroDescription>
              <IntroDescription
              variants={descriptionVariants}
              initial="hidden"
              animate={headerInView ? 'visible' : 'hidden'}
            >
Together, they awaken your blueprint hydrating your body, supporting your nervous system, and turning stress into strength. This is hydration as healing. Supplementation as activation. This is the future of wellness.  Powered by light.
            </IntroDescription>
          </IntroDescriptionContainer>
        </IntroHeader>
        {/* Feature section is commented out in original, rendering as is */}
        <IntroFeatures ref={featuresRef}> {/* */}
          {/* {features.map((feature, i) => ( ... ))} */}
        </IntroFeatures>
      </IntroContent>
    </IntroContainer>
  );
};

export default IntroSection; //