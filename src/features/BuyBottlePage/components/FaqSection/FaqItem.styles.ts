import styled from 'styled-components';

export const ItemWrapper = styled.div`
  margin-bottom: 10px; /* Space between FAQ items */
`;

export const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const QuestionText = styled.p`
  color: #60c9da;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap; /* From original text-wrapper-28 etc. */
  margin: 0;
  margin-bottom: 10px; /* Space before answer if open */
`;

export const ToggleIcon = styled.img`
  height: 13px;
  width: 22px;
`;

export const AnswerText = styled.p<{ $isOpen: boolean }>`
  color: #405f6c;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 20.8px;
  /* width: 783px; -> Width from parent */
  margin: 0;
  padding-left: 5px; /* Indent answer slightly */
  max-height: ${props => props.$isOpen ? '1000px' : '0'}; /* Simple expand/collapse */
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;
