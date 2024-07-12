import React, { useState } from 'react';
import { BsExclamationCircle } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrTask, GrUserPolice } from "react-icons/gr";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/common/Footer';
import { RiMentalHealthLine } from 'react-icons/ri';

export const LangkahHukum: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='flex flex-col gap-6 content-section'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='relative border-2 border-gray-300 rounded-3xl py-4 px-10 bg-white shadow-md mt-10 md:mt-0 text-xl'
      >
        <button onClick={toggleVisibility} className='absolute top-8 right-8 text-3xl'>
          {isVisible ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        <div className='flex items-start py-4'>
          <div className='flex items-center justify-center w-10 h-10 text-primary'>
            <GrTask className='text-2xl -mt-2' />
          </div>
          <div className='ml-4 leading-relaxed'>
            <h1 className='font-semibold mb-4 text-2xl'>Langkah Hukum</h1>
          </div>
        </div>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="ml-8"
            >
              <p className="mt-2 leading-relaxed text-gray-700">
                Menjawab pertanyaan Anda, apa solusi yang tepat atas permasalahan ini. Mengenai utang Anda yang sudah jatuh tempo tersebut, Anda memang harus bertanggung jawab, yaitu dengan mengusahakan penyelesaian utang tersebut. Cobalah hubungi bagian pihak pemberi pinjaman pada aplikasi tersebut, untuk membicarakan mengenai penyelesaian tunggakan tersebut.
              </p><br></br>
              <p className="mt-2 leading-relaxed text-gray-700">
                Ada baiknya Anda berupaya untuk meyakinkan pihak kreditur online untuk menempuh upaya-upaya secara administrasi terlebih dahulu untuk menyelesaikan kredit yang bermasalah sebelum melakukan gugatan ke pengadilan.
              </p><br></br>
              <p className="mt-2 leading-relaxed text-gray-700">
                Sebagaimana pernah dijelaskan dalam artikel Langkah-Langkah Penyelesaian Kredit Macet biasanya sebelum membawa perkara kredit (utang) yang bermasalah ke jalur hukum, dilakukan upaya-upaya secara administrasi terlebih dahulu. Drs. Muhamad Djumhana, S.H., dalam bukunya yang berjudul Hukum Perbankan di Indonesia (hal. 553–573), sebagaimana kami sarikan, mengatakan bahwa mengenai kredit bermasalah dapat dilakukan penyelesaian secara administrasi perkreditan, dan terhadap kredit yang sudah pada tahap kualitas macet maka penanganannya lebih ditekankan melalui beberapa upaya yang lebih bersifat pemakaian kelembagaan hukum (penyelesaian melalui jalur hukum).
              </p><br></br>
              <p className="mt-2 leading-relaxed text-gray-700">
                Menurut Djumhana, penyelesaian secara administrasi perkreditan antara lain sebagai berikut:
              </p><br></br>
              <ol className="relative border-l-4 border-primary h-[350px]">
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-12 h-12 bg-primary rounded-full -left-6 ring-4 ring-white">
                    <FaPhoneAlt className="text-white" />
                  </span>
                  <div className="ml-8">
                    <h3 className="font-semibold text-gray-900">Penjadwalan Kembali (Rescheduling)</h3>
                    <p className="mt-2 leading-relaxed text-gray-700">
                      Perubahan syarat kredit yang menyangkut jadwal pembayaran dan atau jangka waktu termasuk masa tenggang, baik meliputi perubahan besarnya angsuran maupun tidak;
                    </p>
                  </div>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-12 h-12 bg-primary rounded-full -left-6 ring-4 ring-white">
                    <GrUserPolice className='text-white' />
                  </span>
                  <div className="ml-8">
                    <h3 className="font-semibold text-gray-900">Persyaratan Kembali (Reconditioning)</h3>
                    <p className="mt-2 leading-relaxed text-gray-700">
                      Perubahan sebagian atau seluruh syarat-syarat kredit yang tidak terbatas pada perubahan jadwal pembayaran, jangka waktu, dan atau persyaratan lainnya sepanjang tidak menyangkut perubahan maksimum saldo kredit dan konversi seluruh atau sebagian dari pinjaman menjadi penyertaan bank;
                    </p>
                  </div>
                </li>
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-12 h-12 bg-primary rounded-full -left-6 ring-4 ring-white">
                    <RiMentalHealthLine className="text-white" />
                  </span>
                  <div className="ml-8">
                    <h3 className="font-semibold text-gray-900">Penataan Kembali (Restructuring)</h3>
                    <p className="mt-2 leading-relaxed text-gray-700">
                      Perubahan syarat-syarat kredit berupa penambahan dana bank; dan/atau konversi seluruh atau sebagian tunggakan bunga menjadi pokok kredit baru, dan/atau konversi seluruh atau sebagian dari kredit menjadi penyertaan dalam perusahaan.
                    </p>
                  </div>
                </li>
              </ol>
              <div className={`flex items-center justify-center ${isVisible ? 'mt-[200px]' : 'mt-0'} mb-8 transition-all duration-500`}>
                <div className='flex items-center gap-6'>
                  <BsExclamationCircle className='text-primary text-3xl' />
                  <p className='text-black font-semibold'>Seluruh data diambil dari hukumonline.com</p>
                  <BsExclamationCircle className='text-primary text-3xl' />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <div className='relative border-2 border-gray-300 rounded-3xl py-20 bg-primary bg-opacity-20 shadow-md mt-10 md:mt-0 overflow-hidden'>
        <Image src='/cari-tau/timbangan.png' width={300} height={300} alt='main-poster' className='absolute -left-20 top-0' />
        <Image src='/cari-tau/palu.png' width={150} height={150} alt='main-poster' className='absolute -right-5 bottom-0' />
        <h1 className='text-center text-3xl font-semibold leading-normal'>Membutuhkan bantuan lebih?<br />Bicara dengan ahli yuk!</h1>
        <Link href='/bantuan'>
          <div className='text-3xl flex items-center justify-center gap-2 font-semibold text-primary mt-8 text-center'>
            <p className='hover:underline'>Hubungi kami</p>
            <FaArrowRightLong />
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
