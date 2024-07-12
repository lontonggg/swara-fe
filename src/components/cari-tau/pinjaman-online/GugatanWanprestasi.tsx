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

export const GugatanWanprestasi: React.FC = () => {
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
            <h1 className='font-semibold text-2xl mb-4'>Gugatan Wanprestasi</h1>
            <AnimatePresence>
              {visibleSections.section1 && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className='text-xl text-justify leading-relaxed'
                >
                  Anda menyebutkan bahwa kreditur (pemberi pinjaman dari aplikasi) tersebut akan menggugat Anda berdasarkan Pasal 1238 dan Pasal 1365 Kitab Undang-Undang Hukum Perdata (“KUHPerdata”) jika tidak membayar utang. Perlu diketahui bahwa Pasal 1238 KUHPerdata mengatur mengenai wanprestasi sedangkan Pasal 1365 KUHPerdata mengatur mengenai perbuatan melawan hukum.
                  <br /><br />
                  <span className='font-bold text-primary'>Wanprestasi sebagaimana diatur dalam Pasal 1238 KUHPerdata yang isinya:</span>
                  <br />
                  Si berutang adalah lalai, apabila ia dengan surat perintah atau dengan sebuah akta sejenis itu telah dinyatakan lalai, atau demi perikatannya sendiri, lalai jika ia menerapkan, bahwa si berutang harus dianggap lalai dengan lewatnya waktu yang ditentukan.
                  <br /><br />
                  Sedangkan Pasal 1365 KUHPerdata mengatur mengenai perbuatan melawan hukum. Dalam hal seseorang melakukan suatu perbuatan melawan hukum, maka dia berkewajiban membayar ganti rugi akan perbuatannya tersebut, hal yang berbeda dengan tuntutan kerugian dalam wanprestasi, dalam tuntutan perbuatan melawan hukum tidak ada pengaturan yang jelas mengenai ganti kerugian tersebut, namun sebagaimana diatur dalam Pasal 1371 ayat (2) KUHPerdata tersirat pedoman yang isinya:
                  <br /><br />
                  Juga penggantian kerugian ini dinilai menurut kedudukan dan kemampuan kedua belah pihak, dan menurut keadaan.
                  <br /><br />
                  {`Jadi, tidak tepat jika Anda 'dilaporkan' karena perbuatan melawan hukum dalam Pasal 1365 KUHPerdata. Dasar hukum yang tepat adalah Pasal 1238 KUHPerdata tentang wanprestasi karena didasarkan atas adanya perjanjian Anda dengan pemberi pinjaman, dimana Anda dinyatakan lalai atas pembayaran utang yang harusnya Anda lunas. Oleh karena itu, Anda sebagai pihak yang wanprestasi berkewajiban memberikan penggantian biaya, rugi dan bunga berdasarkan Pasal 1239 KUHPerdata.`}
                  <br /><br />
                  Ulasan selengkapnya mengenai wanprestasi dan perbuatan melawan hukum dapat Anda simak dalam artikel Di Mana Pengaturan Kerugian Konsekuensial dalam Hukum Indonesia?.
                  <br /><br />
                  Pada dasarnya Anda sebagai pihak penerima pinjaman (debitur) berkewajiban untuk membayar utang sesuai dengan apa yang telah diperjanjikan. Jika Anda terlambat membayar utang dan sudah jatuh tempo, maka hal ini dapat dikenakan denda sesuai dengan apa yang telah diperjanjikan dan jika Anda masih tidak mempunyai itikad baik untuk membayar utang, kreditur berhak untuk menggugat Anda atas dasar wanprestasi (cidera janji).
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
