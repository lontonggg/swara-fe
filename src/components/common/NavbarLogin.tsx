'use client'

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export const NavbarLogin = () => {
  return (
    <div className='fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-8 xl:px-32 shadow-lg bg-white z-50'>
      <div className='flex items-center'>
        <Link href='/'>
          <Image src='/common/logo.png' width={150} height={150} alt='logo'/>
        </Link>
      </div>
      <div className='flex gap-10'>
        <Link href="/login">
          <button className='font-semibold bg-primary text-sm py-2 px-4 xl:px-8 rounded-2xl text-white transition-opacity duration-300 hover:opacity-75'>
            Masuk
          </button>
        </Link>
      </div>
    </div>
  );
}
