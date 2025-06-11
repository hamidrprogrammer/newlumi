// File: ge/new project/features/documents/components/DocumentListPage.tsx
'use client';

import React, { useState } from 'react';
import { useGetDocuments } from '../hooks/useDocumentQueries';
import { DocumentCard } from './DocumentCard';
import * as S from './DocumentListPage.styles';

// Assuming you have a Pagination component like in the old project
// import { Pagination } from '@/lib/shared/components/pagination'; 

export const DocumentListPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useGetDocuments({ page, limit: 10 });

  if (isLoading) {
    return <S.LoadingWrapper>Loading documents...</S.LoadingWrapper>;
  }

  if (isError) {
    return <S.ErrorMessage>Error: {error.message}</S.ErrorMessage>;
  }

  return (
    <S.Wrapper>
      {data?.data.map((doc) => (
        <DocumentCard key={doc.id} document={doc} />
      ))}
      {/* {data && data.totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={data.totalPages}
          onPageChange={setPage}
        />
      )} 
      */}
    </S.Wrapper>
  );
};