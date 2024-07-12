'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const phrases = [
  <>
    <h1 className='text-black'><span className='text-primary'>SWA</span>RA-<span className='text-primary'>kan!</span></h1>
  </>,
  'Suarakan!'
];

export const MainPoster = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className='text-4xl md:text-5xl xl:text-6xl text-center font-bold text-primary'>Angkat Isu</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 md:pt-20'>
        <div className='hidden md:flex flex-col items-center justify-center p-20'>
          <Image src='/angkat-isu/main-poster.png' width={400} height={400} alt='main-poster'/>
        </div>
        <div className='flex flex-col items-center justify-center md:px-10 gap-6 pt-8 md:pt-0'>
          <h1 className='text-4xl font-bold text-center leading-normal'>
            Cari tau isu terkini dan bantu{' '}
            <div className='overflow-hidden h-10 relative'>
              <AnimatePresence mode='wait'>
                <motion.span
                  key={index}
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  exit={{ y: '-100%' }}
                  transition={{ duration: 0.5 }}
                  className='text-primary absolute left-0 right-0'
                  style={{ textAlign: 'center' }}
                >
                  {phrases[index]}
                </motion.span>
              </AnimatePresence>
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
