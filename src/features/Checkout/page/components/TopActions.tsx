// src/components/TopActions.tsx

import React from 'react';
import styled from 'styled-components';

const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textGrey};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

// In a real app, you would use an icon library like react-icons
const IconPlaceholder = styled.span`
  font-size: 1.2em;
`;

export const TopActions: React.FC = () => {
  return (
    <ActionsContainer>
      <ActionButton>
        <IconPlaceholder>🔗</IconPlaceholder> Direct Share
      </ActionButton>
      <ActionButton>
        <IconPlaceholder>🗑️</IconPlaceholder> Discard Cart
      </ActionButton>
    </ActionsContainer>
  );
};