import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 10px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  gap: 12px 24px;
  align-items: center;
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    transform: translateY(-4px);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
    gap: 10px 0;
    padding: 16px;
  }
`;

export const FileInfo = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FileName = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const FileDate = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.greyDark};
  margin: 0;
`;

export const MetaInfo = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;

  @media (max-width: 600px) {
    gap: 8px 16px;
  }
`;

export const MetaItem = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;

  strong {
    font-weight: 700;
    margin-right: 6px;
  }
`;

export const DownloadButton = styled.a`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  justify-self: end;
  align-self: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.18);
  }

  @media (max-width: 600px) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    width: 100%;
    justify-self: stretch;
  }
`;
