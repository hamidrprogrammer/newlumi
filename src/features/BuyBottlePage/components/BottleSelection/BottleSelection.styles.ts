import styled from 'styled-components';

export const SectionContainer = styled.section`
  /* This component is now a layout component for its children */
  position: absolute;
  right:100px;
  top:400px; /* To contain absolutely positioned children wrappers */
`;

export const GraphiteWrapper = styled.div`
  position: absolute;
  top: 393px;
  left: 940px;
`;

export const GoldWrapper = styled.div`
  position: absolute;
  top: 509px;
  left: 940px;
`;
