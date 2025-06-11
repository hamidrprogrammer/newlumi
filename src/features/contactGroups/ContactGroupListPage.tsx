import React, { useMemo } from 'react';
import { useListContactGroupsQuery } from './hooks/useContactGroupQueries';
import { ListContactGroupsParams } from '@/core/types/api/contactGroup';


export const ContactGroupListPage: React.FC = () => {
  const listParams = useMemo((): ListContactGroupsParams => ({
    page: 1,
    per_page: 12,
    'orderBy[id]': 'DESC',
    isArchive: false,
  }), []);

  const { data, isLoading, isError, error } = useListContactGroupsQuery(listParams);

  if (isLoading) {
    return <div>Loading contact groups...</div>;
  }

  if (isError) {
    return <div>Error loading contact groups: {error?.message}</div>;
  }

  if (!data || data.data.length === 0) {
    return <div>No contact groups found.</div>;
  }

  return (
    <div>
      <h2>Your Contact Groups</h2>
      <p>
        Displaying {data.meta?.from}-{data.meta?.to} of {data.meta?.total} contact groups.
      </p>
      <ul>
        {data.data.map(contact => (
          <li key={contact.id}>
            <strong>{contact.title}</strong> ({contact.full_name})
            {contact.address && (
              <p>
                {contact.address.address1}, {contact.address.city}, {contact.address.country?.name}
              </p>
            )}
          </li>
        ))}
      </ul>
      {/* Basic pagination example */}
      <div>
        <button disabled={!data.links?.prev}>Previous</button>
        <span> Page {data.meta?.current_page} of {data.meta?.last_page} </span>
        <button disabled={!data.links?.next}>Next</button>
      </div>
    </div>
  );
};