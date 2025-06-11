import React, { useState } from 'react';
import styled from 'styled-components';
import { useUpdateUserProfileMutation } from '../../hooks/useUserQueries';

const Card = styled.div`
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 24px;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24 debate
rem;
  align-items: flex-end;
`;

const FormGroup = styled.div``;

const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.textGrey};
  font-size: 0.9rem;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 6px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  padding: 10px 24px;
  height: 42px;
  border: none;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primaryDark};
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const { mutate: updatePassword, isLoading, error } = useUpdateUserProfileMutation({
    onSuccess: () => {
      alert('Password updated successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setPasswordConfirmation('');
    },
    onError: (err) => {
      alert(`Error: ${err.message}`);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== passwordConfirmation) {
      alert("New passwords do not match.");
      return;
    }
    updatePassword({
      current_password: currentPassword,
      new_password: newPassword,
      new_password_confirmation: passwordConfirmation,
    });
  };

  return (
    <Card>
      <Title>Change Your Password</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="currentPassword">Current Password</Label>
          <Input id="currentPassword" type="password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="newPassword">New Password</Label>
          <Input id="newPassword" type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="passwordConfirmation">Password Confirmation</Label>
          <Input id="passwordConfirmation" type="password" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} required />
        </FormGroup>
        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </SubmitButton>
      </Form>
    </Card>
  );
};
