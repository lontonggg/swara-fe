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

export const DanaKeterlambatan: React.FC = () => {
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
            <h1 className='font-semibold text-2xl mb-4'>Dana Keterlambatan</h1>
            <AnimatePresence>
              {visibleSections.section1 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className='text-xl text-justify leading-relaxed'
                >
                  Mengenai jatuh tempo, besaran bunga pinjaman serta denda atas keterlambatan, hal tersebut biasanya telah diatur dalam perjanjian (dalam hal ini perjanjian pemberi pinjaman dengan penerima pinjaman).
                  <br /><br />
                  <span className='font-bold text-primary'>Perjanjian pelaksanaan layanan pinjam meminjam uang berbasis teknologi informasi meliputi:</span>
                  <ul className='list-disc ml-6 mt-2'>
                    <li>perjanjian antara penyelenggara dengan pemberi pinjaman; dan</li>
                    <li>perjanjian antara pemberi pinjaman dengan penerima pinjaman.</li>
                  </ul>
                  <br />
                  Perjanjian pemberian pinjaman melalui aplikasi online antara pemberi pinjaman dengan penerima pinjaman dituangkan dalam dokumen elektronik.
                  <br /><br />
                  <span className='font-bold text-primary'>Dokumen elektronik tersebut wajib paling sedikit memuat:</span>
                  <ul className='list-disc ml-6 mt-2'>
                    <li>nomor perjanjian;</li>
                    <li>tanggal perjanjian;</li>
                    <li>identitas para pihak;</li>
                    <li>ketentuan mengenai hak dan kewajiban para pihak;</li>
                    <li>jumlah pinjaman;</li>
                    <li>suku bunga pinjaman;</li>
                    <li>nilai angsuran;</li>
                    <li>jangka waktu;</li>
                    <li>objek jaminan (jika ada);</li>
                    <li>rincian biaya terkait;</li>
                    <li>ketentuan mengenai denda (jika ada); dan</li>
                    <li>mekanisme penyelesaian sengketa.</li>
                  </ul>
                  <br />
                  Jadi tindakan pihak kreditur (pemberi pinjaman) memberikan bunga serta memberlakukan denda atas utang yang sudah jatuh tempo tersebut harus berdasarkan perjanjian yang telah Anda sepakati sebelumnya.
                </motion.div>
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
