import React from 'react';
import styled from 'styled-components';
import { useNewsletterStore } from '@/features/newsletter/stores/newsletterStore';
import { useAuthStore } from '@/features/auth/stores/authStore';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const ActionButton = styled.button`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  color: ${({ theme }) => theme.colors.textGrey};
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  &.edit {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

interface ProfileHeaderProps {
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ isEditing, setIsEditing }) => {
  // Logic for unsubscribe and deactivate would be here
  const { user, logout } = useAuthStore();
  const { subscribe } = useNewsletterStore();

  const handleUnsubscribe = () => {
    if (user?.email) {
      // This is a placeholder for a proper unsubscribe API call
      alert(`A request to unsubscribe ${user.email} has been sent.`);
    }
  };

  const handleDeactivate = () => {
    if (window.confirm('Are you sure you want to deactivate your account? This action cannot be undone.')) {
      // Placeholder for deactivation logic
      alert('Deactivation request sent.');
      logout();
    }
  };

  return (
    <HeaderWrapper>
      <Title>Profile</Title>
      <ActionsContainer>
        <ActionButton onClick={handleDeactivate}>Deactivate Account</ActionButton>
        <ActionButton onClick={handleUnsubscribe}>Unsubscribe Newsletter</ActionButton>
        <ActionButton className="edit" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </ActionButton>
      </ActionsContainer>
    </HeaderWrapper>
  );
};
