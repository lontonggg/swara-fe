'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/common/Navbar';
import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';
import { Ulasan } from '@/components/cari-tau/kekerasan-seksual/Ulasan';
import { JeratHukumPelaku } from '@/components/cari-tau/kekerasan-seksual/JeratHukumPelaku';
import { Pembuktian } from '@/components/cari-tau/kekerasan-seksual/Pembuktian';
import { LangkahHukum } from '@/components/cari-tau/kekerasan-seksual/LangkahHukum';

const Page: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('ulasan');

  const renderContent = () => {
    switch (activeTab) {
      case 'ulasan':
        return <Ulasan />;
      case 'jerat-hukum':
        return <JeratHukumPelaku />;
      case 'pembuktian':
        return <Pembuktian />;
      case 'langkah-hukum':
        return <LangkahHukum />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <div className='backgroundContainer'>
        <div className='flex flex-col mt-20 py-20 px-6 md:px-20 lg:px-24 xl:px-44'>
          <Link href='/cari-tau'>
            <div className='flex gap-2 items-center text-primary text-xl font-semibold'>
              <IoIosArrowBack className='text-2xl' />
              <h1 className='hover:underline'>Kembali</h1>
            </div>
          </Link>
          <div className='grid grid-cols-2 items-center justify-center mt-32'>
            <div className='hidden md:flex flex-col items-center justify-center p-10 -mt-32'>
              <Image src='/cari-tau/kekerasan-seksual/main.png' width={700} height={700} alt='main-poster' />
            </div>
            <div>
              <div className='border-2 border-gray-300 rounded-3xl py-8 px-16 bg-white shadow-md mt-10 md:mt-0'>
                <h1 className='text-2xl font-semibold text-center '>
                  <span className='bg-primary py-1 px-4 rounded-xl text-white leading-relaxed'>Pelecehan Seksual</span> bukan
                  hal sepele. Sadari, lawan dengan ber-<span className='text-primary'>SWA</span>RA dan mendukung korban
                </h1>
              </div>
            </div>
          </div>
          <div className='mt-10'>
            <ul className='flex gap-10 border-b-2 text-xl font-semibold'>
              <li className={`cursor-pointer ${activeTab === 'ulasan' ? 'border-primary border-b-4' : ''}`} onClick={() => setActiveTab('ulasan')}>
                Ulasan
              </li>
              <li className={`cursor-pointer ${activeTab === 'jerat-hukum' ? 'border-primary border-b-4' : ''}`} onClick={() => setActiveTab('jerat-hukum')}>
                Jerat Hukum Pelaku
              </li>
              <li className={`cursor-pointer ${activeTab === 'pembuktian' ? 'border-primary border-b-4' : ''}`} onClick={() => setActiveTab('pembuktian')}>
                Pembuktian
              </li>
              <li className={`cursor-pointer ${activeTab === 'langkah-hukum' ? 'border-primary border-b-4' : ''}`} onClick={() => setActiveTab('langkah-hukum')}>
                Langkah Hukum
              </li>
            </ul>
          </div>
          <div className='mt-10'>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
