'use client'
import React from 'react';
import Image from 'next/image';

export const MainPoster = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center space-x-4">
        <div>
          <Image src="/beranda/beranda.png" width={300} height={300} alt="main-poster" className='hidden md:block'/>
        </div>
        <div className="flex flex-col">
          <div>
            <h1 className="text-9xl font-extrabold text-center md:text-left">
              <span className="text-primary">80</span>%
            </h1>
          </div>
          <div>
            <h1 className="font-semibold text-center md:text-left text-2xl">Masyarakat Indonesia</h1>
            <h1 className="text-primary font-bold text-center md:text-left text-4xl xl:text-5xl">Buta Hukum.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
