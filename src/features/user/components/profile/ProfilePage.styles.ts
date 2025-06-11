import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  gap: 32px;
  padding: 40px;
  background-color: #F9FAFB; /* A very light grey inspired by Moda dashboard */
  min-height: 100vh;
  padding-top: 100px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const MainContent = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LoadingState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textGrey};
`;

export const ErrorState = styled(LoadingState)`
  color: ${({ theme }) => theme.colors.accentRed};
`;
