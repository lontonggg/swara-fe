'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IoIosArrowDown, IoIosClose, IoIosMenu } from 'react-icons/io';
import { motion } from 'framer-motion';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [firstName, setFirstName] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedFirstName = Cookies.get('firstName');
    setFirstName(storedFirstName || null);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    router.push('/login')
    setFirstName(null);
    Cookies.remove('token');
    Cookies.remove('firstName');
    closeMenu();
  };

  return (
    <div>
      <div className='hidden lg:block'>
        <div className='fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-24 xl:px-32 shadow bg-white z-50 text-lg'>
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
            {firstName ? (
              <div
                className='relative group'
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <h1 className='flex items-center cursor-pointer'>
                  Hai, <span className='ml-2 text-primary'>{firstName}</span>!
                  <IoIosArrowDown
                    className={`ml-2 transition-transform duration-300 ${
                      dropdownOpen ? '-rotate-180' : ''
                    }`}
                  />
                </h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: dropdownOpen ? 1 : 0, scale: dropdownOpen ? 1 : 0.95, y: dropdownOpen ? 0 : -10 }}
                  transition={{ duration: 0.3 }}
                  className='absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden'
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className='block w-full px-4 py-2 text-left text-primary hover:bg-gray-100'
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </motion.div>
              </div>
            ) : (
              <Link href='/login'>
                <button className='font-semibold bg-primary text-sm py-2 px-4 xl:px-8 rounded-2xl text-white transition-opacity duration-300 hover:opacity-75'>
                  Masuk
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className='lg:hidden'>
        <div className='fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-8 shadow bg-white z-50'>
          <div className='flex items-center'>
            <Link href='/'>
              <Image src='/common/logo.png' width={150} height={150} alt='logo' />
            </Link>
          </div>
          <div className='flex items-center'>
            {isOpen ? (
              <IoIosClose className='text-3xl text-primary cursor-pointer' onClick={closeMenu} />
            ) : (
              <IoIosMenu className='text-3xl text-primary cursor-pointer' onClick={toggleMenu} />
            )}
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed top-20 left-0 right-0 bg-white z-50'
          >
            <div className='flex flex-col items-start m-10'>
              <Link href='/'>
                <h1 className={`text-left ${pathname === '/' ? 'text-primary' : ''} hover:text-primary/80 transition-colors duration-300 mb-4`}>Beranda</h1>
              </Link>
              <Link href='/angkat-isu'>
                <h1 className={`text-left ${pathname === '/angkat-isu' || pathname.startsWith('/kawal-isu') ? 'text-primary' : ''} hover:text-primary/80 transition-colors duration-300 mb-4`}>Angkat Isu</h1>
              </Link>
              <Link href='/cari-tau'>
                <h1 className={`text-left ${pathname.startsWith('/cari-tau') ? 'text-primary' : ''} hover:text-primary/80 transition-colors duration-300 mb-4`}>Cari Tau</h1>
              </Link>
              {firstName ? (
                <div className='relative'>
                  <h1 className='flex items-center cursor-pointer mb-4' onClick={toggleDropdown}>
                    Selamat datang, <span className='ml-2 text-primary'>{firstName}</span>!
                    <IoIosArrowDown className={`ml-2 transition-transform duration-300 ${dropdownOpen ? '-rotate-180' : ''}`} />
                  </h1>
                  {dropdownOpen && (
                    <button
                      className='text-left text-primary mb-4'
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  )}
                </div>
              ) : (
                <Link href='/login'>
                  <button className='font-semibold bg-primary text-sm py-2 px-4 xl:px-8 rounded-2xl text-white transition-opacity duration-300 hover:opacity-75'>
                    Masuk
                  </button>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
