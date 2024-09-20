import LogoutIcon from '@/assets/Icons/LogoutIcon';
import Image from 'next/image';
import Link from 'next/link';
import { looseAppLogoInvert } from '@/assets/images';
import LinkList from './LinkList';

function DashboardSidebar() {
  return (
    <div className="w-full h-full flex flex-col py-4">
      <div className="flex justify-center">
        <Link href="/">
          <Image alt="logo" width={100} height={100} src={looseAppLogoInvert} />
        </Link>
      </div>

      <div className="flex-1 p-4 w-full">
        <LinkList />
      </div>

      <Link className="flex justify-center" href="/admin">
        <div className="p-2">
          <div className="flex items-center text-white gap-2">
            <p>Log Out</p>
            <LogoutIcon />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default DashboardSidebar;
