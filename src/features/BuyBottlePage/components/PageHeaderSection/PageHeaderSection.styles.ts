import styled from 'styled-components';

export const HeaderText = styled.h1`
  color: var(--x-07-2c-3d);
  font-size: 50px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 50px; /* Original was 50px, for "Place your LumiVitae order", which fits one line */
  /* width: 416px; -> width will be determined by parent or content */
  margin: 0; /* Reset default margin */
`;
