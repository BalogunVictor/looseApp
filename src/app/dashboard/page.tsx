'use client';

import CautionIcon from '@/assets/Icons/CautionIcon';
import CheckIcon from '@/assets/Icons/CheckIcon';
import CloseIcon from '@/assets/Icons/CloseIcon';
import ShieldIcon from '@/assets/Icons/ShieldIcon';
import { Card } from '@/components/common/Card';
import { BodyText } from '@/components/common/Text';
import { Wrapper } from '@/components/common/Wrapper';
import { useFetchUsers } from '@/services/queries/users';
import { useAuthStore } from '@/store/store';
import React, { useMemo } from 'react';
import DashboardTable from './DashboardTable';
import DashboardSidebar from '@/components/DashboardSidebar';
import { DashboardPayload } from '@/types/user';
import { Modal } from '@/components/common/Modal';

function Dashboard() {
  const { token, user, modal, setModal } = useAuthStore();
  const { data } = useFetchUsers(token);

  const UserDetails = useMemo(() => {
    if (!data) return [];
    return data?.payload.data;
  }, [data]);

  const totalUsers = data?.payload.totalCount || 0;

  const totalListeners = UserDetails.filter(
    (user: DashboardPayload) => user.userType === 'listener'
  ).length;

  const totalVenters = UserDetails.filter(
    (user: DashboardPayload) => user.userType === 'venter'
  ).length;

  return (
    <div className="flex">
      <div className="w-full hidden md:block lg:w-64 flex-shrink-0 bg-[#6F3FD7]">
        <DashboardSidebar />
      </div>

      <Wrapper>
        <Modal
          header="User Info"
          isOpen={modal}
          onClose={() => setModal(false)}
          className="max-w-[1000px]"
        >
          <div className="flex flex-col gap-2 p-4">
            {user &&
              Object.entries(user).map(([key, value]) => (
                <div key={key} className="flex space-y-2 gap-4 justify-between">
                  <p className="font-bold">{key}</p>
                  <p className="text-gray-400">{`${value}`}</p>
                </div>
              ))}
          </div>
        </Modal>
        <h1 className="text-2xl font-semibold pt-8">Admin Dashboard</h1>
        <div className="w-full flex flex-row justify-between flex-wrap p-2 my-4 border-gray-200 border rounded-md">
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 py-2">
            <Card>
              <div className="flex flex-col p-2 gap-4">
                <div className="h-10 w-10 rounded-full bg-[#6935D3]/10 flex justify-center items-center">
                  <ShieldIcon />
                </div>
                <BodyText className="font-semibold px-2">
                  {totalUsers || 0}
                </BodyText>
                <p>Total Users</p>
              </div>
            </Card>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 py-2">
            <Card>
              <div className="flex flex-col p-2 gap-4">
                <div className="h-10 w-10 rounded-full bg-[#FFF4E5] flex justify-center items-center">
                  <CautionIcon />
                </div>
                <BodyText className="font-semibold px-2">
                  {totalListeners || 0}
                </BodyText>
                <p>Total listeners</p>
              </div>
            </Card>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 py-2">
            <Card>
              <div className="flex flex-col p-2 gap-4">
                <div className="h-10 w-10 rounded-full bg-[#D5FFE7] flex justify-center items-center">
                  <CheckIcon />
                </div>
                <BodyText className="font-semibold px-2">
                  {totalVenters || 0}
                </BodyText>
                <BodyText>Total Venters</BodyText>
              </div>
            </Card>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 py-2">
            <Card>
              <div className="flex flex-col p-2 gap-4">
                <div className="h-10 w-10 rounded-full bg-[#FFEBEA] flex justify-center items-center">
                  <CloseIcon />
                </div>
                <BodyText className="font-semibold px-2">
                  {totalListeners || 0} : {totalVenters || 0}
                </BodyText>
                <p>Listeners to Venters</p>
              </div>
            </Card>
          </div>
        </div>

        <div className="w-full border-gray-200 border rounded-md">
          <DashboardTable users={UserDetails || []} />
        </div>
      </Wrapper>
    </div>
  );
}

export default Dashboard;
