'use client';

import React, { useState } from 'react';
import { AiFillFileText, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FaQuestion } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { BsListCheck } from 'react-icons/bs';
import { LuClipboardList } from 'react-icons/lu';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/common/Footer';

interface VisibleSectionsState {
  section1: boolean;
  section2: boolean;
  section3: boolean;
  section4: boolean;
}

export const Ulasan: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<VisibleSectionsState>({
    section1: true,
    section2: true,
    section3: true,
    section4: true,
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
            <h1 className='font-semibold text-2xl mb-4'>Definisi Kekerasan Seksual</h1>
            <AnimatePresence>
              {visibleSections.section1 && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className='text-xl text-justify leading-relaxed'
                >
                  <span className='text-primary'>Kekerasan seksual</span> adalah segala tindakan yang merendahkan,
                  menghina, melecehkan, dan/atau menyerang tubuh serta fungsi reproduksi seseorang, akibat
                  ketidaksetaraan relasi kuasa dan/atau gender, yang mengakibatkan atau dapat mengakibatkan
                  penderitaan psikologis dan/atau fisik, termasuk gangguan kesehatan reproduksi seseorang dan
                  hilangnya kesempatan untuk mendapatkan pendidikan yang aman dan optimal.
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
        className='relative border-2 border-gray-300 rounded-3xl py-4 px-10 bg-white shadow-md mt-10 md:mt-0'
      >
        <button onClick={() => toggleSectionVisibility('section2')} className='absolute top-8 right-8 text-3xl'>
          {visibleSections.section2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        <div className='flex items-start py-4'>
          <div className='flex items-center justify-center w-10 h-10'>
            <FaQuestion className='text-2xl text-primary -mt-2' />
          </div>
          <div className='ml-4'>
            <h1 className='font-semibold text-2xl mb-4'>Apa itu ketidaksetaraan relasi kuasa dan/atau gender?</h1>
            <AnimatePresence>
              {visibleSections.section2 && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className='text-xl text-justify leading-relaxed'
                >
                  {`Menurut Komnas Perempuan (2017), "ketidaksetaraan relasi kuasa dan/atau gender" adalah suatu kondisi di mana pelaku menyalahgunakan sumber daya pengetahuan, ekonomi, dan/atau penerimaan masyarakat atau status sosialnya untuk mengendalikan korban.`}
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
        className='relative border-2 border-gray-300 rounded-3xl py-4 px-10 bg-white shadow-md mt-10 md:mt-0'
      >
        <button onClick={() => toggleSectionVisibility('section3')} className='absolute top-8 right-8 text-3xl'>
          {visibleSections.section3 ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        <div className='flex items-start py-4'>
          <div className='flex items-center justify-center w-10 h-10'>
            <BsListCheck className='text-2xl text-primary -mt-2' />
          </div>
          <div className='ml-4'>
            <h1 className='font-semibold text-2xl mb-4'>Jenis - Jenis Kekerasan Seksual</h1>
            <AnimatePresence>
              {visibleSections.section3 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className='text-xl text-justify leading-relaxed'
                >
                  <p>Bersumber dari Komnas Perempuan, setidaknya terdapat 15 bentuk kekerasan seksual, antara lain:</p>
                  <ol className='list-[lower-alpha] list-inside ml-4'>
                    <li>Perkosaan</li>
                    <li>Intimidasi seksual termasuk ancaman atau percobaan perkosaan</li>
                    <li>Pelecehan seksual</li>
                    <li>Eksploitasi seksual</li>
                    <li>Perdagangan perempuan untuk tujuan seksual</li>
                    <li>Prostitusi paksa</li>
                    <li>Perbudakan seksual</li>
                    <li>Pemaksaan perkawinan, termasuk cerai gantung</li>
                    <li>Pemaksaan kehamilan</li>
                    <li>Pemaksaan aborsi</li>
                    <li>Pemaksaan kontrasepsi dan sterilisasi</li>
                    <li>Penyiksaan seksual</li>
                    <li>Penghukuman tidak manusiawi dan bernuansa seksual</li>
                    <li>Praktik tradisi bernuansa seksual yang membahayakan atau mendiskriminasi perempuan</li>
                    <li>Kontrol seksual, termasuk lewat aturan diskriminatif beralasan moralitas dan agama</li>
                  </ol>
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
        className='relative border-2 border-gray-300 rounded-3xl py-4 px-10 bg-white shadow-md mt-10 md:mt-0'
      >
        <button onClick={() => toggleSectionVisibility('section4')} className='absolute top-8 right-8 text-3xl'>
          {visibleSections.section4 ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        <div className='flex items-start py-4'>
          <div className='flex items-center justify-center w-10 h-10'>
            <LuClipboardList className='text-2xl text-primary -mt-2' />
          </div>
          <div className='ml-4'>
            <h1 className='font-semibold text-2xl mb-4'>Contoh Kekerasan Seksual</h1>
            <AnimatePresence>
              {visibleSections.section4 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className='text-xl text-justify leading-relaxed'
                >
                  <p>Selain pemerkosaan, tindakan-tindakan berikut termasuk kekerasan seksual:</p>
                  <ul className='list-disc list-inside ml-6 text-justify'>
                    <li>Berperilaku atau mengutarakan ujaran yang mendiskriminasi atau melecehkan penampilan fisik, tubuh, atau identitas gender orang lain (misalnya: lelucon seksis, siulan, dan memandang bagian tubuh orang lain).</li>
                    <li>Menyentuh, mengusap, meraba, memegang, dan/atau menggosokkan bagian tubuh pada area pribadi seseorang.</li>
                    <li>Mengirimkan lelucon, foto, video, audio, atau materi lainnya yang bernuansa seksual tanpa persetujuan penerimanya dan/atau meskipun penerima materi sudah menegur pelaku.</li>
                    <li>Menguntit, mengambil, dan menyebarkan informasi pribadi termasuk gambar seseorang tanpa persetujuan orang tersebut.</li>
                    <li>Memberi hukuman atau perintah yang bernuansa seksual kepada orang lain (seperti saat penerimaan siswa atau mahasiswa baru, saat pembelajaran di kelas atau kuliah jarak jauh, dalam pergaulan sehari-hari, dan sebagainya).</li>
                    <li>Mengintip orang yang sedang berpakaian.</li>
                    <li>Membuka pakaian seseorang tanpa izin orang tersebut.</li>
                    <li>Membujuk, menjanjikan, menawarkan sesuatu, atau mengancam seseorang untuk melakukan transaksi atau kegiatan seksual yang sudah tidak disetujui oleh orang tersebut.</li>
                    <li>Pemaksaan orang untuk melakukan aktivitas seksual atau melakukan percobaan pemerkosaan.</li>
                    <li>Melakukan perbuatan lainnya yang merendahkan, menghina, melecehkan, dan/atau menyerang tubuh serta fungsi reproduksi seseorang, karena ketimpangan relasi kuasa dan/atau gender, yang berakibat atau dapat berakibat penderitaan psikologis dan/atau fisik termasuk gangguan kesehatan reproduksi seseorang dan hilangnya kesempatan untuk mendapatkan pendidikan yang aman dan optimal.</li>
                  </ul>
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
        className='border-2 border-gray-300 rounded-3xl py-10 px-10 bg-white shadow-md mt-10 md:mt-0'
      >
        <h1 className='text-center text-2xl font-medium leading-relaxed'>Kata kunci yang menjadi indikator suatu <span className='text-primary'>kekerasan</span> adalah <span className='text-primary'>paksaan</span>. Kegiatan apa pun yang mengandung paksaan adalah <span className='text-primary'>kekerasan</span>.</h1>
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

