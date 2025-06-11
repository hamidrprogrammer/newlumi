// File: ge/new project/app/profile/store-credit/page.tsx

import { StoreCreditListPage } from '@/features/storeCredit/components/StoreCreditListPage';
import { ProfileHeader } from '@/features/user/components/profile/ProfileHeader';

export default function UserStoreCreditPage() {
  return (
    <div>
      <ProfileHeader title="Store Credit" />
      <StoreCreditListPage />
    </div>
  );
}