// ge/features/user/components/addresses/AddressListPage.tsx
import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { useListContactGroupsQuery } from '@/features/contactGroups/hooks/useContactGroupQueries';
import { useGetUserProfileQuery, useChangeInvoiceContactGroupMutation } from '@/features/user/hooks/useUserQueries';
import { AddressCard } from './AddressCard';
import { AddressFormModal } from './AddressFormModal';
import { ContactGroup, ListContactGroupsParams } from '@/core/types/api/contactGroup';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: #FFFFFF;
  border-radius: 12px;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
`;

const CreateButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
`;

const AddressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;
`;

export const AddressListPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<ContactGroup | null>(null);

  const { data: userProfileData } = useGetUserProfileQuery();
  const currentInvoiceId = userProfileData?.data.invoice_contact_group_id;

  const listParams = useMemo((): ListContactGroupsParams => ({ isArchive: false, per_page: 50 }), []);
  const { data: addressesData, isLoading, isError } = useListContactGroupsQuery(listParams);

  const { mutate: setInvoiceAddress, isPending: isSettingInvoice } = useChangeInvoiceContactGroupMutation({
    onSuccess: () => alert('Default invoice address changed successfully!'),
    onError: (err) => alert(`Error: ${err.message}`),
  });

  const handleEdit = (address: ContactGroup) => {
        setIsModalOpen(true);
        console.log('===============handleEdit=====================');
        console.log(address);
        console.log('==========handleEdit==========================');
    setEditingAddress(address);

  };


  const handleCreateNew = () => {
    setEditingAddress(null);
    setIsModalOpen(true);
  };

  const handleSetAsInvoice = (id: number) => {
    if (id !== currentInvoiceId) {
      setInvoiceAddress({ invoice_contact_group_id: id });
    }
  };

  return (
    <PageContainer>
      <Header data-aos="fade-down">
        <Title>My Addresses</Title>
        <CreateButton onClick={handleCreateNew}>Add New Address</CreateButton>
      </Header>

      {isLoading && <p>Loading addresses...</p>}
      {isError && <p>Could not load addresses.</p>}
      {!isModalOpen&&(
      <AddressGrid>
        {addressesData?.data.map((address) => {
            console.log('==============address======================');
            console.log(address);
            console.log('==============address======================');
            return(
          <AddressCard
            key={address.id}
            address={address}
            isInvoiceDefault={address.id === currentInvoiceId}
            onEdit={() => handleEdit(address)}
            onSetAsInvoice={() => handleSetAsInvoice(address.id)}
            isSettingInvoice={isSettingInvoice && currentInvoiceId === address.id}
          />
        )})}
      </AddressGrid>
)}
      {isModalOpen && (
        <AddressFormModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialData={editingAddress}
        />
      )}
    </PageContainer>
  );
};