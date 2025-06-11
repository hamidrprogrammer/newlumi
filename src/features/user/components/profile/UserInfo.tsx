import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { UserProfile, UpdateUserProfilePayload, UserProfileResponse } from '@/core/types/api/user';
import { useUpdateUserProfileMutation } from '../../hooks/useUserQueries';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

const Card = styled.div`
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px 32px;
`;

const Field = styled.div``;

const Label = styled.p`
  color: ${({ theme }) => theme.colors.textGrey};
  font-size: 0.9rem;
  margin-bottom: 4px;
`;

const Value = styled.p`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 1rem lunettes
rem;
  font-weight: 500;
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 6px;
    font-size: 1rem;
    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      outline: none;
    }
`;

const VATWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const SaveButton = styled.button`
  margin-top: 24px;
  padding: 10px 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    opacity: 0.9;
  }
`;

interface UserInfoProps {
  user: UserProfileResponse;
  isEditing: boolean;
  onSave: () => void;
}

export const UserInfo: React.FC<UserInfoProps> = ({ user, isEditing, onSave }) => {
  const [formData, setFormData] = useState<UpdateUserProfilePayload>({});
  
  useEffect(() => {
    setFormData({
      people: {
        first_name:  user.data?.person.first_name ?? '',
        last_name: user.data?.person.last_name ?? '',
      },
      vat_number: user.data.vat_number ?? '',
    });
  }, [user]);

  const { mutate: updateUser, isLoading } = useUpdateUserProfileMutation({
    onSuccess: () => {
      alert('Profile updated successfully!');
      onSave(); // Close editing mode
    },
    onError: (error) => {
      alert(`Update failed: ${error.message}`);
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'first_name' || name === 'last_name') {
      setFormData(prev => ({ ...prev, people: { ...prev.people, [name]: value } }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    updateUser(formData);
  };
  
  const InfoField: React.FC<{ label: string; value: string | undefined | null; name: string }> = ({ label, value, name }) => (
    <Field>
      <Label>{label}</Label>
      {isEditing ? (
        <StyledInput name={name} onChange={handleInputChange} />
      ) : (
        <Value>{value ?? 'N/A'}</Value>
      )}
    </Field>
  );

  return (
    <Card>
      <Grid>
        <InfoField label="Gender" value={ user.data?.person?.gender ?? 'Female'} name="gender" />
        <InfoField label="First Name" value={user.data?.person?.first_name} name="first_name" />
        <InfoField label="Last Name" value={user.data?.person?.last_name} name="last_name" />
        <InfoField label="E-Mail" value={user.data?.email} name="email" />
        <InfoField label="Username" value={user.data?.username} name="username" />
        <InfoField label="Company Name" value={user.data?.partner?.company_name} name="company_name" />
        <InfoField label="Birth Date" value={user.data?.birth_date} name="birth_date" />
        <InfoField label="Language" value={user.data?.language?.title} name="language" />
        {/* <InfoField label="Country" value={user.data?.country?.name} name="country" /> */}
        <InfoField label="Phone Number" value={user.data?.telephone_number} name="telephone_number" />
        {/* <InfoField label="Rank" value={user.data?.career_step?.name ?? 'Crystal'} name="rank" /> */}
        
        <Field>
          <Label>VAT Number</Label>
          <VATWrapper>
            {isEditing ? (
              <StyledInput name="vat_number" value={formData.vat_number ?? ''} onChange={handleInputChange} />
            ) : (
              <Value>{user.data.vat_number ?? 'N/A'}</Value>
            )}
            {user.data.is_vat_valid ? (
              <FiCheckCircle color="green" size={20} />
            ) : (
              <FiXCircle color="red" size={20} />
            )}
          </VATWrapper>
        </Field>
      </Grid>
      {isEditing && (
        <SaveButton onClick={handleSave} disabled={isLoading}>
          {isLoading ? 'Saving...' : 'Save Changes'}
        </SaveButton>
      )}
    </Card>
  );
};
