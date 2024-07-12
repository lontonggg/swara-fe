'use client';

import React from 'react';
import { Navbar } from '@/components/common/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Footer from '@/components/common/Footer';

export default function Page() {
  return (
    <div className='backgroundContainer'>
      <Navbar />
      <div className='flex flex-col gap-10 mt-20 py-20 px-6 md:px-20 lg:px-24 xl:px-44'>
        <h1 className='text-4xl md:text-5xl xl:text-6xl text-center font-bold text-primary'>Cari Tau</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 px-20'>
          <div className='flex flex-col items-center justify-center md:px-10 gap-6 pt-8 md:pt-0'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-5xl font-semibold leading-normal'>Jangan Biarkan Ketidakadilan</h1>
              <div className='ml-32 bg-primary rounded-3xl p-6 w-fit'>
                <h1 className='text-5xl text-white font-semibold'>Berlanjut!</h1>
              </div>
            </div>
          </div>
          <div className='hidden md:flex flex-col items-center justify-center p-4'>
            <Image src='/cari-tau/cari-tau.png' width={500} height={500} alt='main-poster'/>
          </div>
        </div>
        <div className='flex justify-end'>
          <Image src='/cari-tau/arrow.png' width={400} height={400} alt='main-poster' className='-mt-44'/>
          <div className='text-xl w-1/2 h-fit border-2 border-gray-300 rounded-3xl py-8 px-16 bg-white shadow-md -mt-10'>
            Pelajari hak-hak Anda dan bagaimana melaporkan 
            pelaku dengan bantuan informasi kami
          </div>
        </div>
        <div className='mt-24'>
          <h1 className='text-center text-5xl font-semibold'>
            <span className='bg-primary py-1 px-4 rounded-3xl text-white leading-relaxed'>Cari tau</span> bagaimana tindak <br /> hukum masalahmu
          </h1>
          <p className='text-center text-2xl mt-10 font-medium'>Pilih jenis masalah dibawah ini</p>
        </div>
        <div className='grid grid-cols-1 gap-10 lg:grid-cols-3 mt-10'>
          <div className='flex justify-center items-center card-container'>
            <div className='card'>
              <div className='card-front card-content overflow-hidden p-6'>
                <Image src='/cari-tau/card-background.png' layout='fill' objectFit='cover' alt='background' className='card-background rounded-2xl'/>
                <Image src='/cari-tau/penjelasan.png' width={175} height={175} alt='main-poster' className='absolute -right-8 top-5 rotate-[35deg] z-20'/>
                <div className='flex flex-col items-center justify-center relative z-10 bg-white bg-opacity-35 rounded-2xl w-full h-full'>
                  <Image src='/cari-tau/kekerasan-seksual.png' width={200} height={200} alt='main-poster'/>
                  <h1 className='text-white text-2xl font-semibold text-center'>Kekerasan Seksual</h1>
                </div>
              </div>
              <div className='flex justify-center items-center card-back card-content p-4'>
                <Image src='/cari-tau/card-background.png' layout='fill' objectFit='cover' alt='background' className='card-background rounded-2xl'/>
                <div className='flex flex-col items-center justify-center relative z-10 bg-white rounded-2xl w-full h-full'>
                  <h1 className='text-black text-lg font-medium p-4 text-center text-balance'>Kekerasan seksual adalah segala tindakan yang merendahkan, menghina, melecehkan, dan/atau menyerang tubuh serta fungsi...</h1>
                  <Link href='/cari-tau/kekerasan-seksual'>
                    <div className='flex items-center font-semibold text-primary mt-2'>
                      <p className='hover:underline'>Pelajari lebih lanjut</p>
                      <FaArrowRight />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center card-container'>
            <div className='card'>
              <div className='card-front card-content overflow-hidden p-6'>
                <Image src='/cari-tau/card-background.png' layout='fill' objectFit='cover' alt='background' className='card-background rounded-2xl'/>
                <Image src='/cari-tau/penjelasan.png' width={175} height={175} alt='main-poster' className='absolute -right-8 top-5 rotate-[35deg] z-20'/>
                <div className='flex flex-col items-center justify-center relative z-10 bg-white bg-opacity-35 rounded-2xl w-full h-full'>
                  <Image src='/cari-tau/perceraian.png' width={200} height={200} alt='main-poster'/>
                  <h1 className='text-white text-2xl font-semibold text-center'>Perceraian</h1>
                </div> 
              </div>
              <div className='flex justify-center items-center card-back card-content p-4'>
                <Image src='/cari-tau/card-background.png' layout='fill' objectFit='cover' alt='background' className='card-background rounded-2xl'/>
                <div className='flex flex-col items-center justify-center relative z-10 bg-white rounded-2xl w-full h-full'>
                  <h1 className='text-black text-lg font-medium p-4 text-center text-balance'>Dikutip dari Portal Jurnal Peneliti.net perceraian menurut perspektif Islam apabila telah diucapkan talak dari suami. Artinya bahwa...</h1>
                  <Link href='/cari-tau/perceraian'>
                    <div className='flex items-center font-semibold text-primary mt-2'>
                      <p className='hover:underline'>Pelajari lebih lanjut</p>
                      <FaArrowRight />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center card-container'>
            <div className='card'>
              <div className='card-front card-content overflow-hidden p-6'>
                <Image src='/cari-tau/card-background.png' layout='fill' objectFit='cover' alt='background' className='card-background rounded-2xl'/>
                <Image src='/cari-tau/penjelasan.png' width={175} height={175} alt='main-poster' className='absolute -right-8 top-5 rotate-[35deg] z-20'/>
                <div className='flex flex-col items-center justify-center relative z-10 bg-white bg-opacity-35 rounded-2xl w-full h-full'>
                  <Image src='/cari-tau/pinjaman-online.png' width={300} height={300} alt='main-poster'/>
                  <h1 className='text-white text-2xl font-semibold text-center'>Pinjaman Online</h1>
                </div>
              </div>
              <div className='flex justify-center items-center card-back card-content p-4'>
                <Image src='/cari-tau/card-background.png' layout='fill' objectFit='cover' alt='background' className='card-background rounded-2xl'/>
                <div className='flex flex-col items-center justify-center relative z-10 bg-white rounded-2xl w-full h-full'>
                  <h1 className='text-black text-lg font-medium p-4 text-center text-balance'>Layanan pinjam meminjam uang berbasis teknologi informasi adalah penyelenggaraan layanan jasa keuangan untuk...</h1>
                  <Link href='/cari-tau/pinjaman-online'>
                    <div className='flex items-center font-semibold text-primary mt-2'>
                      <p className='hover:underline'>Pelajari lebih lanjut</p>
                      <FaArrowRight />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-20'>
          <Footer />
        </div>
      </div>
    </div>
  );
}
