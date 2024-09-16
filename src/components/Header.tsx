'use client';

import { looseAppLogo } from '@/assets/images';
import {
  Bars2Icon,
  Bars4Icon,
  BriefcaseIcon,
  HomeModernIcon,
  ScaleIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './common/Button';

export const Links = [
  { link: 'Help', href: '/help', icon: BriefcaseIcon },
  { link: 'Download', href: '/Download', icon: ScaleIcon },
  { link: 'Recomendations', href: '/reconmendations', icon: HomeModernIcon },
];

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [sidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="max-w-screen-2xl rounded-b-xl bg-white mx-auto">
      <nav className="flex items-center justify-between p-4">
        <Link href="/">
          <Image alt="logo" width={100} height={100} src={looseAppLogo} />
        </Link>
        <span className="lg:hidden" onClick={() => console.log('clicked')}>
          <Bars4Icon />
        </span>

        <div className="lg:flex items-center space-x-4 max-lg:hidden text-brown-700">
          {Links.map((link) => (
            <Link key={link.link} href={link.href}>
              <span className="transition-all duration-500 ease-in-out mt-1">
                {link.link}
              </span>
            </Link>
          ))}
          <div className="border-l h-8 border-gray-300 mx-8"></div>
        </div>

        {/* Button section with flex */}
        <div className="flex items-center space-x-4 text-blue-600">
          <Bars2Icon
            onClick={toggleSidebar}
            className="flex sm:hidden w-6 h-6 text-brown-700"
          />
          <Link href="/">
            <Button rounded className="hidden md:flex">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Sidebar for Small Screens */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar}
          />
        )}
        <div
          className={classNames(
            'fixed right-0 top-0 h-full w-2/3 bg-brown-100 p-4 transition-transform duration-300 transform z-50',
            {
              'translate-x-full': !sidebarOpen,
              'translate-x-0': sidebarOpen,
            }
          )}
        >
          <div className="w-full grid">
            <span
              className="text-black pb-4 right-0 focus:outline-none text-right"
              onClick={toggleSidebar}
            >
              <XMarkIcon className="h-6 w-6" />
            </span>
          </div>

          <div className="flex flex-col gap-2 h-3/4">
            <Link href={'/'}>
              <Button>Get Help ?</Button>
            </Link>
            <ul>
              {Links.map((link) => (
                <li
                  key={link.link}
                  className="group relative px-2 py-3 hover:text-white hover:bg-brown-500/80 rounded mt-2"
                >
                  <Link
                    href={link.href}
                    className="flex items-center md:ml-4 lg:ml-6"
                  >
                    <link.icon className="h-5 w-5" />
                    <p className="mx-4">{link.link}</p>
                  </Link>
                  <span className="absolute left-0 top-0 h-full w-1 rounded-tr-lg rounded-br-lg bg-brown-700 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
