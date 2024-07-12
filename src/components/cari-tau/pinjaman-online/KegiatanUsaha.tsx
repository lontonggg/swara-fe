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

export const KegiatanUsaha: React.FC = () => {
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
            <h1 className='font-semibold text-2xl mb-4'>Kegiatan Usaha</h1>
            <AnimatePresence>
              {visibleSections.section1 && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className='text-xl text-justify leading-relaxed'
                >
                  Penyelenggara menyediakan, mengelola, dan mengoperasikan layanan pinjam meminjam uang berbasis teknologi informasi dari pihak pemberi pinjaman kepada pihak penerima pinjaman yang sumber dananya berasal dari pihak pemberi pinjaman.
                  <br /><br></br>
                  <span className='font-bold text-primary'>Yang dimaksud dengan:</span>
                  <ol className='list-decimal ml-6 mt-2'>
                    <li>
                      <span className='font-bold text-primary'>pemberi pinjaman</span> adalah orang, badan hukum, dan/atau badan usaha yang mempunyai piutang karena perjanjian layanan pinjam meminjam uang berbasis teknologi informasi.
                    </li>
                    <li>
                      <span className='font-bold text-primary'>penerima pinjaman</span> adalah orang dan/atau badan hukum yang mempunyai utang karena perjanjian layanan pinjam meminjam uang berbasis teknologi informasi.
                    </li>
                  </ol>
                  <br />
                  {`Penyelenggara dapat bekerja sama dengan penyelenggara layanan jasa keuangan berbasis teknologi informasi sesuai dengan ketentuan peraturan perundang-undangan. Kemudian perlu diingat, dalam melakukan usahanya, penyelenggara wajib mengajukan pendaftaran dan perizinan kepada Otoritas Jasa Keuangan ("OJK").`}
                  <br /><br></br>
                  Keunggulan utama dari layanan pinjam meminjam uang berbasis teknologi informasi antara lain tersedianya dokumen perjanjian dalam bentuk elektronik secara online untuk keperluan para pihak, tersedianya kuasa hukum untuk mempermudah transaksi secara online, penilaian risiko terhadap para pihak secara online, pengiriman informasi tagihan (collection) secara online, penyediaan informasi status pinjaman kepada para pihak secara online, dan penyediaan escrow account dan virtual account di perbankan kepada para pihak, sehingga seluruh pelaksanaan pembayaran dana berlangsung dalam sistem perbankan.
                  <br /><br></br>
                  Ulasan selengkapnya dapat Anda simak dalam artikel Dasar Hukum Layanan Pinjam Meminjam Uang Berbasis Teknologi Informasi.
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
