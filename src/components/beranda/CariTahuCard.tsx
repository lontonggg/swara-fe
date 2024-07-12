import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const CariTahuCard = () => {
  return (
    <Link href='/cari-tau'>
      <div className='absolute left-0 right-0 top-24 bg-white rounded-3xl shadow-lg p-6 w-60 mx-auto pb-44 z-10 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2'>
        <div className='flex justify-center mb-4'>
          <Image src='/cari-tau/cari-tau.png' width={300} height={150} alt='Cari Tau' className='rounded-xl border-2 border-gray-300 px-6 ' />
        </div>
        <h2 className='text-primary text-center text-2xl font-semibold mb-2'>Cari Tau</h2>
        <p className='text-black text-justify text-xs'>
          Pelajari hak-hak Anda dan bagaimana melaporkan pelaku dengan bantuan informasi kami.
        </p>
      </div>
    </Link>
  );
}