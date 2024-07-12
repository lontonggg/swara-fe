'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/common/Navbar';
import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';
import { DasarHukum } from '@/components/cari-tau/pinjaman-online/DasarHukum';
import { KegiatanUsaha } from '@/components/cari-tau/pinjaman-online/KegiatanUsaha';
import { DanaKeterlambatan } from '@/components/cari-tau/pinjaman-online/DanaKeterlambatan';
import { GugatanWanprestasi } from '@/components/cari-tau/pinjaman-online/GugatanWanprestasi';
import { LangkahHukum } from '@/components/cari-tau/pinjaman-online/LangkahHukum';


const Page: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dasar-hukum');

  const renderContent = () => {
    switch (activeTab) {
      case 'dasar-hukum':
        return <DasarHukum />;
      case 'kegiatan-usaha':
        return <KegiatanUsaha />;
      case 'dana-keterlambatan':
        return <DanaKeterlambatan />;
      case 'gugatan-wanprestasi':
        return <GugatanWanprestasi />;
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
          <div>
            <div className='hidden md:flex flex-col items-center justify-center p-10 -mt-32'>
              <Image src='/cari-tau/pinjaman-online/main.png' width={400} height={400} alt='main-poster' />
            </div>
          </div>
          <div className='border-2 border-gray-300 rounded-3xl py-8 px-16 bg-white shadow-md mt-10 md:mt-0'>
            <h1 className='text-2xl font-semibold text-center '>
                Pinjaman online terlihat mudah, tapi penuh risiko.  <span className='bg-primary py-1 px-4 rounded-xl text-white leading-relaxed'>Cari Tau</span> tindakan antisipasinya!
            </h1>
          </div>
          </div>
          <div className='mt-10'>
            <ul className='flex gap-10 border-b-2 text-xl font-semibold'>
              <li className={`cursor-pointer ${activeTab === 'dasar-hukum' ? 'border-primary border-b-4' : ''}`} onClick={() => setActiveTab('dasar-hukum')}>
                Dasar Hukum
              </li>
              <li className={`cursor-pointer ${activeTab === 'kegiatan-usaha' ? 'border-primary border-b-4' : ''}`} onClick={() => setActiveTab('kegiatan-usaha')}>
                Kegiatan Usaha
              </li>
              <li className={`cursor-pointer ${activeTab === 'dana-keterlambatan' ? 'border-primary border-b-4' : ''}`} onClick={() => setActiveTab('dana-keterlambatan')}>
                Dana Keterlambatan
              </li>
              <li className={`cursor-pointer ${activeTab === 'gugatan-wanprestasi' ? 'border-primary border-b-4' : ''}`} onClick={() => setActiveTab('gugatan-wanprestasi')}>
                Gugatan Wanprestasi
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
