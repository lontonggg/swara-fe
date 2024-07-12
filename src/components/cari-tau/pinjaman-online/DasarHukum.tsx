'use client';

import React, { useState } from 'react';
import { AiFillFileText, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/common/Footer';

interface VisibleSectionsState {
  section1: boolean;
}

export const DasarHukum: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<VisibleSectionsState>({
    section1: true,
  });

  const toggleSectionVisibility = (section: keyof VisibleSectionsState) => {
    setVisibleSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex flex-col gap-6 content-section'
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='relative border-2 border-gray-300 rounded-3xl py-4 px-10 bg-white shadow-md mt-10 md:mt-0'
      >
        <button onClick={() => toggleSectionVisibility('section1')} className='absolute top-8 right-8 text-3xl'>
          {visibleSections.section1 ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        <div className='flex items-start py-4'>
          <div className='flex items-center justify-center w-10 h-10'>
            <AiFillFileText className='text-2xl text-primary -mt-2' />
          </div>
          <div className='ml-4'>
            <h1 className='font-semibold text-2xl mb-4'>Dasar Hukum</h1>
            <AnimatePresence>
              {visibleSections.section1 && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className='text-xl text-justify leading-relaxed'
                >
                  {`Mengacu pada aturan mengenai layanan pinjam uang berbasis aplikasi atau elektronik yang terdapat dalam Peraturan Otoritas Jasa Keuangan Nomor 77/POJK.01/2016 Tahun 2016 tentang Layanan Pinjam Meminjam Uang Berbasis Teknologi Informasi ("POJK 77/2016").`}
                  <br /><br></br>
                  Layanan pinjam meminjam uang berbasis teknologi informasi adalah penyelenggaraan layanan jasa keuangan untuk mempertemukan pemberi pinjaman dengan penerima pinjaman dalam rangka melakukan perjanjian pinjam meminjam dalam mata uang rupiah secara langsung melalui sistem elektronik dengan menggunakan jaringan internet.
                  <br /><br></br>{'Sementara menurut Pasal 3 ayat (1) huruf d Peraturan Bank Indonesia Nomor 19/12/PBI/2017 Tahun 2017 tentang Penyelenggaraan Teknologi Finansial ("PBI 19/2017"), salah satu kategori penyelenggaraan teknologi finansial adalah pinjaman, pembiayaan, dan penyediaan modal. Contoh penyelenggaraan teknologi finansial pada kategori pinjaman (lending), pembiayaan (financing atau funding), dan penyediaan modal (capital raising) antara lain layanan pinjam meminjam uang berbasis teknologi informasi (peer-to-peer lending) serta pembiayaan atau penggalangan dana berbasis teknologi informasi (crowd-funding).'}
                  <br /><br></br>
                  Penyelenggara berbentuk badan hukum perseroan terbatas wajib memiliki modal disetor paling sedikit Rp 1 miliar pada saat pendaftaran. Sedangkan untuk penyelenggara berbentuk badan hukum koperasi wajib memiliki modal sendiri paling sedikit Rp 1 miliar pada saat pendaftaran.
                  <br /><br></br>
                  Kemudian, Penyelenggara berbentuk perseroan dan koperasi wajib memiliki modal disetor atau modal sendiri paling sedikit Rp 2,5 miliar pada saat mengajukan permohonan perizinan.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='relative border-2 border-gray-300 rounded-3xl py-20 bg-primary bg-opacity-20 shadow-md mt-10 md:mt-0 overflow-hidden'
      >
        <Image src='/cari-tau/timbangan.png' width={300} height={300} alt='main-poster' className='absolute -left-20 top-0'/>
        <Image src='/cari-tau/palu.png' width={150} height={150} alt='main-poster' className='absolute -right-5 bottom-0'/>
        <h1 className='text-center text-3xl font-semibold leading-normal'>Membutuhkan bantuan lebih?<br />Bicara dengan ahli yuk!</h1>
        <Link href='/bantuan'>
          <div className='text-3xl flex items-center justify-center gap-2 font-semibold text-primary mt-8 text-center'>
            <p className='hover:underline'>Hubungi kami</p>
            <FaArrowRightLong />
          </div>
        </Link>
      </motion.div>
      <Footer />
    </motion.div>
  );
};
