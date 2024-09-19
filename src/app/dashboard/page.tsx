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

function Dashboard() {
  const { token } = useAuthStore();
  const { data } = useFetchUsers(token);
  console.log(data);

  const UserDetails = useMemo(() => {
    if (!data) return [];
    return data?.payload.data;
  }, [data]);

  const totalUsers = data?.payload.totalCount || 0;

  return (
    <div className="flex">
      <div className="w-full hidden md:block lg:w-64 flex-shrink-0 bg-brown-700">
        <DashboardSidebar />
      </div>

      <Wrapper>
        <h1 className="text-2xl font-semibold pt-8">Admin Dashboard</h1>
        <div className="w-full flex flex-row justify-between flex-wrap p-2 my-4 border-gray-200 border rounded-md">
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 py-2">
            <Card>
              <div className="flex flex-col p-2 gap-4">
                <div className="h-10 w-10 rounded-full bg-[#6935D3]/10 flex justify-center items-center">
                  <ShieldIcon />
                </div>
                <BodyText className="font-semibold px-2">{totalUsers}</BodyText>
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
                <BodyText className="font-semibold px-2">10</BodyText>
                <p>Total listners</p>
              </div>
            </Card>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 py-2">
            <Card>
              <div className="flex flex-col p-2 gap-4">
                <div className="h-10 w-10 rounded-full bg-[#D5FFE7] flex justify-center items-center">
                  <CheckIcon />
                </div>
                <BodyText className="font-semibold px-2">10</BodyText>
                <BodyText>Total Venter</BodyText>
              </div>
            </Card>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 py-2">
            <Card>
              <div className="flex flex-col p-2 gap-4">
                <div className="h-10 w-10 rounded-full bg-[#FFEBEA] flex justify-center items-center">
                  <CloseIcon />
                </div>
                <BodyText className="font-semibold px-2">10</BodyText>
                <p>Total Failed</p>
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
