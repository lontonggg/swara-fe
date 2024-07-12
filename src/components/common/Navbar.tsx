'use client';

import { useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IoIosArrowDown } from 'react-icons/io';

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const handleLogout = () => {
    
  };

  return (
    <div>
      <div className='fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-8 lg:px-24 xl:px-32 shadow bg-white z-50 text-lg'>
        <div className='flex items-center justify-center'>
          <Link href='/'>
            <Image src='/common/logo.png' width={150} height={150} alt='logo' />
          </Link>
        </div>
        <div className='flex gap-10 items-center'>
          <Link href='/'>
            <h1 className={`text-left ${pathname === '/' ? 'text-primary' : ''} hover:text-primary/80 transition-colors duration-300`}>Beranda</h1>
          </Link>
          <Link href='/angkat-isu'>
            <h1 className={`text-left ${pathname === '/angkat-isu' || pathname.startsWith('/kawal-isu') ? 'text-primary' : ''} hover:text-primary/80 transition-colors duration-300`}>Angkat Isu</h1>
          </Link>
          <Link href='/cari-tau'>
            <h1 className={`text-left ${pathname.startsWith('/cari-tau') ? 'text-primary' : ''} hover:text-primary/80 transition-colors duration-300`}>Cari Tau</h1>
          </Link>
          <Link href='/bantuan'>
            <h1 className={`text-left ${pathname === '/bantuan' ? 'text-primary' : ''} hover:text-primary/80 transition-colors duration-300`}>Bantuan</h1>
           </Link>
            <div
              className='relative'
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <h1 className='flex items-center cursor-pointer'>
                Hai, <span className='ml-2 text-primary'>User</span>!
                <IoIosArrowDown
                  className={`ml-2 transition-transform duration-300 ${
                    dropdownOpen ? '-rotate-180' : ''
                  }`}
                />
              </h1>
              {dropdownOpen && (
                <div
                  className='absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden'
                >
                  <button
                    className='block w-full px-4 py-2 text-left text-primary hover:bg-gray-100'
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
        </div>
      </div>
    </div>
  );
}
