import styled from 'styled-components';

export const SectionWrapper = styled.section`
  width: 1440px; /* Fixed width from original .FA-qs .overlap-2 */
  height: 694px; /* Fixed height from original .FA-qs .overlap-2 */
  position: relative; /* Context for .BackgroundLayer */
  margin: 0 auto; /* Center if parent is wider */
`;

export const BackgroundLayer = styled.div`
  background-color: #eaf8f8;
  height: 100%;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1; /* Behind content */
`;

export const Content = styled.div`
  padding: 150px 265px; /* Approximate padding based on original top/left of elements */
  position: relative;
  z-index: 1;
`;

export const Title = styled.h2`
  color: var(--x-07-2c-3d);
  font-size: 40px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 52px;
  white-space: nowrap;
  margin: 0 0 40px 0; /* Space after title, before first FAQ */
`;
