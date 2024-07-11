'use client'

import React from 'react';
import Image from 'next/image';

export const MainPoster = () => {
  return (
    <div>
      <h1 className='text-4xl md:text-5xl xl:text-6xl text-center font-bold text-primary'>Angkat Isu</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 md:pt-20'>
        <div className='hidden md:flex flex-col items-center justify-center p-20'>
          <Image src='/angkat-isu/main-poster.png' width={500} height={500} alt='main-poster'/>
        </div>
        <div className='flex flex-col items-center justify-center md:px-10 gap-6 pt-8 md:pt-0'>
          <h1 className='text-3xl font-bold text-center'>
            Cari tau isu terkini dan bantu{' '}
            <div className='overflow-hidden h-10 relative'>
              <span className='text-primary absolute left-0 right-0' style={{ textAlign: 'center' }}>
                <h1 className='text-black'><span className='text-primary'>SWA</span>RA-<span className='text-primary'>kan!</span></h1>
              </span>
            </div>
          </h1>
          <p className='md:text-lg font-medium text-center'>
            Bantu masyarakat dengan menyuarakan keadilan dan menegakkan hak inklusif untuk semua.
          </p>
        </div>
      </div>
    </div>
  );
};
