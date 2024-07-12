import React, { useState } from 'react';
import { BsExclamationCircle } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrTask, GrUserPolice } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import { RiMentalHealthLine } from "react-icons/ri";
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong} from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Footer from '@/components/common/Footer';

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
              transition={{ duration: 0.3 }}
              className="ml-8"
            >
              <ol className="relative border-l-4 border-primary h-[650px]">
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-12 h-12 bg-primary rounded-full -left-6 ring-4 ring-white">
                    <FaPhoneAlt className="text-white" />
                  </span>
                  <div className="ml-8">
                    <h3 className="font-semibold text-gray-900">Menghubungi Orang Terpercaya</h3>
                    <p className="mt-2 leading-relaxed text-gray-700">
                      Pertama-tama, korban pelecehan seksual dapat terlebih dahulu menghubungi keluarga terdekat atau kerabat terpercaya guna memberitahukan kejadian tersebut. Mungkin bagi sebagian korban, terasa sulit untuk menceritakan kembali kejadian pelecehan seksual yang dialami dengan berbagai kondisi takut, cemas, trauma, dan lain-lain. Namun demikian, korban pelecehan seksual tetap memerlukan support dari orang terpercaya.
                    </p>
                  </div>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-12 h-12 bg-primary rounded-full -left-6 ring-4 ring-white">
                    <GrUserPolice className='text-white' />
                  </span>
                  <div className="ml-8">
                    <h3 className="font-semibold text-gray-900">Laporkan Tindakan Tersebut Ke Polisi</h3>
                    <p className="mt-2 leading-relaxed text-gray-700">
                      Korban dapat mendatangi kantor kepolisian terdekat di sekitar tempat tinggal, korban juga bisa membawa kerabat maupun keluarga yang sebelumnya telah mengetahui kronologi kejadian secara lengkap. Jika pelecehan seksual berupa tindakan fisik, korban wajib melaporkan kasus tersebut sesegera mungkin karena berkaitan dengan proses Visum et Repertum untuk alat bukti.
                    </p>
                  </div>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-12 h-12 bg-primary rounded-full -left-6 ring-4 ring-white">
                    <TbReportSearch className='text-white' />
                  </span>
                  <div className="ml-8">
                    <h3 className="font-semibold text-gray-900">Menunggu Hasil Penyelidikan</h3>
                    <p className="mt-2 leading-relaxed text-gray-700">
                      Proses ini membutuhkan kesabaran ekstra di dalamnya. Pasalnya, dalam praktiknya, dibutuhkan waktu kurang lebih selama 3 bulan untuk melanjutkan kejadian tersebut ke meja hijau dan memulai persidangan pertama hingga pelaku dijerat menggunakan pasal pelecehan seksual.
                    </p>
                  </div>
                </li>
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-12 h-12 bg-primary rounded-full -left-6 ring-4 ring-white">
                    <RiMentalHealthLine className="text-white" />
                  </span>
                  <div className="ml-8">
                    <h3 className="font-semibold text-gray-900">Hilangkan Rasa Trauma</h3>
                    <p className="mt-2 leading-relaxed text-gray-700">
                      Langkah lainnya yang tak kalah penting adalah menghilangkan atau mengatasi rasa trauma, takut, cemas pasca kejadian pelecehan seksual. Korban dapat mencari bantuan konseling ke psikolog atau dokter guna mengembalikan kondisi mental.
                    </p>
                  </div>
                </li>
              </ol>
            <div className={`flex items-center justify-center ${isVisible ? 'mt-36' : 'mt-0'} mb-8 transition-all duration-500`}>
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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='relative border-2 border-gray-300 rounded-3xl py-20 bg-primary bg-opacity-20 shadow-md mt-10 md:mt-0 overflow-hidden'
      >
        <Image src='/cari-tau/timbangan.png' width={300} height={300} alt='main-poster' className='absolute -left-20 top-0' />
        <Image src='/cari-tau/palu.png' width={150} height={150} alt='main-poster' className='absolute -right-5 bottom-0' />
        <h1 className='text-center text-3xl font-semibold leading-normal'>Membutuhkan bantuan lebih?<br />Bicara dengan ahli yuk!</h1>
        <Link href='/bantuan'>
          <div className='text-3xl flex items-center justify-center gap-2 font-semibold text-primary mt-8 text-center'>
            <p className='hover:underline'>Hubungi kami</p>
            <FaArrowRightLong />
          </div>
        </Link>
      </motion.div>
      <Footer />
    </div>
  );
}
