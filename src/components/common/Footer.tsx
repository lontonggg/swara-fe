import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className='relative border-2 border-gray-300 rounded-3xl py-10 bg-white shadow-md flex flex-col items-center'>
      <div className='flex items-center justify-between w-full px-6 md:px-20 lg:px-24 xl:px-44'>
        <div className='flex items-center'>
          <Image src='/common/logo.png' width={200} height={200} alt='logo' />
        </div>
        <div className='flex space-x-2 items-center justify-center'>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/common/instagram.svg"
              width={50}
              height={50}
              alt="Instagram"
              className='hover:opacity-75 transition duration-300'
            />
          </Link>
          <Link href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/common/x.svg"
              width={55}
              height={55}
              alt="Twitter"
              className='hover:opacity-75 transition duration-300 ml-2'
            />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/common/linkedin.svg"
              width={60}
              height={60}
              alt="LinkedIn"
              className='hover:opacity-75 transition duration-300'
            />
          </Link>
        </div>
      </div>
      <div className='border-t-2 border-black my-6 w-3/4'></div>
      <p className='text-gray-500'>© 2024 SWARA. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
