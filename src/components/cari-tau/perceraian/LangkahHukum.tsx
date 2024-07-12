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
              <ol className="relative border-l-4 border-primary h-[600px]">
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-12 h-12 bg-primary rounded-full -left-6 ring-4 ring-white">
                    <FaPhoneAlt className="text-white" />
                  </span>
                  <div className="ml-8">
                    <h3 className="font-semibold text-gray-900">Tindakan Pengajuan Perceraian</h3>
                    <p className="mt-2 leading-relaxed text-gray-700">
                      Dalam hal pengajuan gugatan cerai, umat Islam dapat mengajukannya ke Pengadilan Agama, sedangkan yang beragama non-Islam diajukan ke Pengadilan Negeri.<br />
                      Biasanya, proses perceraian di tingkat pertama, baik di Pengadilan Negeri (PN) maupun Pengadilan Agama (PA), memakan waktu maksimal 6 bulan.
                    </p>
                  </div>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-12 h-12 bg-primary rounded-full -left-6 ring-4 ring-white">
                    <GrUserPolice className='text-white' />
                  </span>
                  <div className="ml-8">
                    <h3 className="font-semibold text-gray-900">Tindakan Pengajuan Perceraian di Pengadilan Negeri</h3>
                    <ol className='list-decimal ml-6 mt-2'>
                      <li>Pengajuan Gugatan: Penggugat mengajukan gugatan ke PN dengan ketentuan:
                        <ul className='list-disc ml-4'>
                          <li>Gugatan diajukan ke PN yang daerah hukumnya meliputi tempat kediaman tergugat.</li>
                          <li>Jika tempat kediaman tergugat tidak jelas atau tidak diketahui, atau tergugat tidak mempunyai tempat tinggal tetap, atau tergugat berada di luar negeri, gugatan diajukan di PN tempat kediaman penggugat.</li>
                        </ul>
                      </li>
                      <li>Upaya Damai: Hakim yang memeriksa gugatan perceraian berusaha mendamaikan kedua belah pihak.</li>
                      <li>Sidang Tertutup: Jika upaya perdamaian tidak berhasil, hakim akan melakukan pemeriksaan gugatan dalam sidang tertutup.</li>
                      <li>Pembacaan Putusan: Setelah pemeriksaan perkara berakhir, hakim membacakan putusan perceraian dalam sidang terbuka.</li>
                      <li>Pencatatan Perceraian: Perceraian dianggap sah beserta segala akibat-akibatnya terhitung sejak saat pendaftarannya pada daftar pencatatan kantor pencatatan oleh pegawai pencatat.</li>
                    </ol>
                  </div>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-12 h-12 bg-primary rounded-full -left-6 ring-4 ring-white">
                    <GrUserPolice className='text-white' />
                  </span>
                  <div className="ml-8">
                    <h3 className="font-semibold text-gray-900">Tindakan Pengajuan Perceraian di Pengadilan Agama</h3>
                    <h4 className='mt-2 font-bold'>Cerai Gugat (Diajukan oleh Istri atau Kuasanya)</h4>
                    <ol className='list-decimal ml-6 mt-2'>
                      <li>
                        Pengajuan Gugatan:
                        <ul className='list-disc ml-4'>
                          <li>Gugatan diajukan ke PA di daerah hukum yang meliputi tempat kediaman istri selaku penggugat, kecuali jika istri meninggalkan tempat kediaman bersama tanpa izin tergugat.</li>
                          <li>Jika istri tinggal di luar negeri, gugatan diajukan ke PA yang meliputi tempat kediaman suami.</li>
                          <li>Jika keduanya tinggal di luar negeri, gugatan diajukan ke PA di daerah tempat perkawinan dilangsungkan atau ke PA Jakarta Pusat.</li>
                        </ul>
                      </li>
                    </ol>
                    <h4 className='mt-2 font-bold'>Cerai Talak (Permohonan oleh Suami)</h4>
                    <ol className='list-decimal ml-6 mt-2'>
                      <li>
                        Pengajuan Permohonan:
                        <ul className='list-disc ml-4'>
                          <li>Permohonan diajukan ke PA tempat kediaman istri, kecuali jika istri meninggalkan tempat kediaman bersama tanpa izin pemohon.</li>
                          <li>Jika istri tinggal di luar negeri, permohonan diajukan ke PA yang meliputi tempat kediaman suami.</li>
                          <li>Jika keduanya tinggal di luar negeri, permohonan diajukan ke PA di daerah tempat perkawinan dilangsungkan atau ke PA Jakarta Pusat.</li>
                        </ul>
                      </li>
                    </ol>
                    <h4 className='mt-2 font-bold'>Proses Selanjutnya untuk Cerai Talak dan Cerai Gugat</h4>
                    <ol className='list-decimal ml-6 mt-2'>
                      <li>
                        Sidang Pertama:
                        <p className='ml-4'>Hakim berusaha mendamaikan kedua belah pihak. Kedua belah pihak harus hadir secara pribadi. Jika salah satu pihak tinggal di luar negeri dan tidak dapat hadir, ia dapat diwakili oleh kuasanya yang diberi kuasa khusus. Jika keduanya tinggal di luar negeri, penggugat harus hadir secara pribadi dalam sidang perdamaian.</p>
                      </li>
                      <li>
                        Keputusan Perceraian:
                        <p className='ml-4'>Jika kedua belah pihak tidak dapat didamaikan dan terdapat alasan yang cukup untuk perceraian, permohonan ikrar talak dikabulkan atau perceraian diputus dalam sidang terbuka. Untuk Cerai Talak, hakim menetapkan bahwa perkawinan putus sejak ikrar talak diucapkan.</p>
                      </li>
                      <li>
                        Pendaftaran dan Akta Cerai:
                        <p className='ml-4'>Penetapan dan putusan perceraian didaftarkan kepada pegawai pencatat. Panitera memberikan akta cerai kepada kedua pihak.</p>
                      </li>
                    </ol>
                  </div>
                </li>
              </ol>
              <div className={`flex items-center justify-center ${isVisible ? 'mt-[850px]' : 'mt-0'} mb-8 transition-all duration-500`}>
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
