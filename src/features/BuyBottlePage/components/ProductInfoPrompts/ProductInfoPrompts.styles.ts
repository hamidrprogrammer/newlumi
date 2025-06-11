import styled from 'styled-components';

export const PromptsContainer = styled.div`
  /* This container is relative for its children's absolute positioning */
  position: relative; 
`;

const BasePromptText = styled.p`
  color: var(--x-07-2c-3d);
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 36px;
  position: absolute;
  margin: 0;
`;

export const BottlePrompt = styled(BasePromptText)`
  left: 940px;
  top: 326px;
  width: 435px;
`;

export const LVQPrompt = styled(BasePromptText)`
  left: 940px;
  top: 326px;
  width: 431px;
`;

export const FrequencyPrompt = styled(BasePromptText)`
  /* color: transparent; -> Handled by spans */
  left: 940px;
  top: 800px;
  width: 431px;
`;

export const BoldSpan = styled.span`
  color: #072c3d; /* or var(--x-07-2c-3d) if consistently used */
  font-weight: 700;
`;

export const RegularSpan = styled.span`
  color: #072c3d; /* or var(--x-07-2c-3d) */
`;

export const FrequencyTextSpan = styled.span`
  color: #1c1f23;
`;

export const FrequencyBoldSpan = styled.span`
  color: #1c1f23;
  font-weight: 700;
`;
